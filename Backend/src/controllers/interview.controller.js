const pdfParse = require('pdf-parse')
const {generateInterviewReport,generateResumePdf} = require('../services/ai.service.js')
const interviewReportModel = require('../config/models/interviewReport.model.js')


/**
 *  @description controller to genrate interview report on the basis of user description and job description
 */

async function generateInterviewReportController (req,res) {
    try {
        const resumeContant = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
        const { selfDescription , jobDescription} = req.body

        const generateInterviewReportByAI = await generateInterviewReport({
            resume: resumeContant.text,
            selfDescription: selfDescription,
            jobDescription: jobDescription
        })
        
        // Generate title from job description (first 50 chars or extract job title)
        const title = jobDescription.split('\n')[0].substring(0, 100) || 'Interview Report'
        
        const interviewReport = await interviewReportModel.create({
             user: req.user._id,
             title: title,
             resume: resumeContant.text,
            selfDescription,
            jobDescription,
            ...generateInterviewReportByAI

        })
          res.status(201).json({
            message: "Interview report generated successfully",
            interviewReport: interviewReport,
            aiReport: generateInterviewReportByAI
          })
    } catch(error) {
        console.error('Error generating interview report:', error)

        const status = error?.status;

        if (status === 429) {
            return res.status(429).json({
                message: "AI service quota exceeded. Please try again in a minute.",
            })
        }

        if (status === 503) {
            return res.status(503).json({
                message: "AI service is temporarily overloaded. Please try again shortly.",
            })
        }

        res.status(500).json({
            message: "Error generating interview report",
            error: error.message
        })
    }
}


/**
 *  @description controller to get interview report  by its ID
 */

async function getInterviewByIdController(req, res) {
  try {
    const { interviewId } = req.params;

    const interviewReport = await interviewReportModel.findOne({ _id: interviewId, user: req.user._id });
    if (!interviewReport) {
      return res.status(404).json({ message: "Interview report not found" });
    }

    res.status(200).json({ 
      message: "Interview report retrieved successfully",
      interviewReport: interviewReport
    });
  } catch(error) {
    console.error('Error retrieving interview report:', error);
    res.status(500).json({
      message: "Error retrieving interview report",
      error: error.message
    });
  }
}


/**
 * @description controller to get all interview reports of a loged in user
 */

async function getAllInterviewsController(req, res) {
  try {
    const interviewReports = await interviewReportModel.find({ user: req.user._id }).sort({ createdAt: -1 }).select('-resume -selfDescription -jobDescription -__v -technicalQuestion -behaviorQuestion -skillGaps -preparationPlan'); 

    res.status(200).json({
      message: "Interview reports fetched successfully",
      interviewReports: interviewReports
    });
  } catch(error) {
    console.error('Error fetching interview reports:', error);
    res.status(500).json({
      message: "Error fetching interview reports",
      error: error.message
    });
  }
}

/**
 * @description controller to generate resume pdf from user description,job description and resume content
 */

async function generateResumePdfController(req, res) {
 const {interviewReportId} = req.params
 const interviewReport = await interviewReportModel.findById(interviewReportId)

 if(!interviewReport){
  return res.status(404).json({
    message:"Interview Report not found"
  })
 }
 const {resume,jobDescription,selfDescription} = interviewReport
 const pdfBuffer = await generateResumePdf({resume,jobDescription,selfDescription})
 res.set({
  "Content-Type":"application/pdf",
  "Content-Desposition": `attachment; filename=resume_${interviewReportId}.pdf`
 })
 res.send(pdfBuffer)
}

module.exports = {
     generateInterviewReportController,
     getInterviewByIdController,
      getAllInterviewsController,
      generateResumePdfController
}
