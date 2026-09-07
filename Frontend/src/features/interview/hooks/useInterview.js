import {
    getAllInterviewReports,
    generateInterviewReport,
    getInterviewReportById,
    generateResumePdf,
    deleteInterviewReport
} from "../services/interview.api"

import {
    useContext,
    useEffect
} from "react"

import {
    InterviewContext
} from "../interview.context"

import {
    useParams
} from "react-router"


export const useInterview = () => {

    const context = useContext(InterviewContext)

    const { interviewId } = useParams()

    if (!context) {
        throw new Error(
            "useInterview must be used within an InterviewProvider"
        )
    }

    const {
        loading,
        setLoading,
        report,
        setReport,
        reports,
        setReports
    } = context


    const generateReport = async ({
        jobDescription,
        selfDescription,
        resumeFile
    }) => {

        setLoading(true)

        try {

            const response = await generateInterviewReport({
                jobDescription,
                selfDescription,
                resumeFile
            })

            setReport(
                response.interviewReport
            )

            return {
                success: true,
                interviewReport: response.interviewReport
            }

        } catch (error) {

            console.log(error)

            return {
                success: false,
                message:
                    error.response?.data?.message ||
                    "Something went wrong while generating the report. Please try again."
            }

        } finally {

            setLoading(false)

        }
    }


    const getReportById = async (interviewId) => {

        setLoading(true)

        try {

            const response = await getInterviewReportById(
                interviewId
            )

            setReport(
                response.interviewReport
            )

            return response.interviewReport

        } catch (error) {

            console.log(error)

            return null

        } finally {

            setLoading(false)

        }
    }


    const getReports = async () => {

        setLoading(true)

        try {

            const response = await getAllInterviewReports()

            setReports(
                response.interviewReports
            )

            return response.interviewReports

        } catch (error) {

            console.log(error)

            return null

        } finally {

            setLoading(false)

        }
    }


    const deleteReport = async (interviewId) => {

        setLoading(true)

        let response = null

        try {

            response = await deleteInterviewReport(
                interviewId
            )

            setReports((currentReports) =>
                currentReports.filter(
                    (report) =>
                        report._id !== interviewId
                )
            )

        } catch (error) {

            console.log(error)

        } finally {

            setLoading(false)

        }

        return response
    }


    const getResumePdf = async (
        interviewReportId
    ) => {

        setLoading(true)

        let response = null

        try {

            response = await generateResumePdf({
                interviewReportId
            })

            const url =
                window.URL.createObjectURL(
                    new Blob(
                        [response],
                        {
                            type: "application/pdf"
                        }
                    )
                )

            const link =
                document.createElement("a")

            link.href = url

            link.setAttribute(
                "download",
                `resume_${interviewReportId}.pdf`
            )

            document.body.appendChild(link)

            link.click()

        } catch (error) {

            console.log(error)

        } finally {

            setLoading(false)

        }
    }


    useEffect(() => {

        if (interviewId) {

            getReportById(
                interviewId
            )

        } else {

            getReports()

        }

    }, [interviewId])


    return {
        loading,
        report,
        reports,
        generateReport,
        getReportById,
        getReports,
        deleteReport,
        getResumePdf
    }

}