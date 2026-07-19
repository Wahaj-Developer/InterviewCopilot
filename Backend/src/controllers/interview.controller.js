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
