const { GoogleGenAI } = require("@google/genai")
const { z } = require("zod")
const { zodToJsonSchema } = require("zod-to-json-schema")


const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY
})


async function retryRequest(fn, retries = 3, delay = 2000) {
    let lastError
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            console.log(`AI Request Attempt ${attempt}/${retries}`)
            const result = await fn()
            return result
        } catch (error) {
            lastError = error
            console.log(`Attempt ${attempt} failed:`, error.message)
            if (attempt < retries) {
                await new Promise(resolve => setTimeout(resolve, delay))
            }
        }
    }
    throw new Error(`Request failed after ${retries} attempts: ${lastError.message}`)
}


const interviewReportSchema = z.object({
    matchScore: z.number().describe("Score between 0 and 100 showing candidate match"),
    technicalQuestions: z.array(
        z.object({
            question: z.string().describe("Technical interview question"),
            intention: z.string().describe("Reason interviewer asks this question"),
            answer: z.string().describe("How candidate should answer")
        })
    ).max(5),
    behavioralQuestions: z.array(
        z.object({
            question: z.string().describe("Behavioral interview question"),
            intention: z.string().describe("Purpose behind question"),
            answer: z.string().describe("Best answer approach")
        })
    ).max(5),
    skillGaps: z.array(
        z.object({
            skill: z.string().describe("Missing skill"),
            severity: z.enum(["low", "medium", "high"])
        })
    ),
    preparationPlan: z.array(
        z.object({
            day: z.number().describe("Day number from 1 to 7"),
            focus: z.string(),
            tasks: z.array(z.string())
        })
    ).length(7),
    title: z.string()
})


async function generateInterviewReport({ resume, selfDescription, jobDescription }) {

    const prompt = `
Generate an interview report.

Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}

Rules:
- Maximum 5 technical questions
- Maximum 5 behavioral questions
- Exactly 7 days preparation plan
- Day numbers must be 1-7
- Give practical interview preparation advice
- Focus on job requirements

Return only JSON.
`

    const response = await retryRequest(() =>
        ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: zodToJsonSchema(interviewReportSchema)
            }
        })
    )

    try {
        return JSON.parse(response.text)
    } catch (error) {
        console.log("JSON Parse Error:", error.message)
        throw new Error("AI returned invalid JSON")
    }
}


async function generatePdfFromHtml(htmlContent) {

    let browser

    try {

        let puppeteer

        if (process.env.VERCEL) {

            /*
             * Both Puppeteer-core and Chromium are ESM.
             * This project uses CommonJS,
             * so both packages are loaded using dynamic import().
             */
            const puppeteerModule = await import("puppeteer-core")
            const chromiumModule = await import("@sparticuz/chromium")

            puppeteer = puppeteerModule.default
            const chromium = chromiumModule.default

            browser = await puppeteer.launch({
                args: chromium.args,
                defaultViewport: chromium.defaultViewport,
                executablePath: await chromium.executablePath(),
                headless: true
            })

        } else {

            // Local dev: use full puppeteer, which ships its own Chrome build
            puppeteer = require("puppeteer")

            browser = await puppeteer.launch({
                headless: true,
                executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined
            })

        }

        const page = await browser.newPage()

        await page.setContent(htmlContent, {
            waitUntil: "networkidle0",
            timeout: 30000
        })

        await page.addStyleTag({
            content: `
                @page { size: A4; margin: 10mm; }
                body { font-family: Arial, sans-serif; font-size: 11px; line-height: 1.3; color: #222; }
                h1 { font-size: 22px; margin: 5px 0; }
                h2 { font-size: 14px; margin: 8px 0; }
                p { margin: 3px 0; }
                ul { padding-left: 15px; }
                li { margin-bottom: 2px; }
                section { page-break-inside: avoid; }
            `
        })

        const pdfBuffer = await page.pdf({
            format: "A4",
            printBackground: true,
            margin: { top: "10mm", bottom: "10mm", left: "12mm", right: "12mm" }
        })

        return pdfBuffer

    } catch (error) {
        console.log("PDF Error:", error.message)
        throw new Error("PDF generation failed")
    } finally {
        if (browser) {
            await browser.close()
        }
    }
}


async function generateResumePdf({ resume, selfDescription, jobDescription }) {

    const resumePdfSchema = z.object({ html: z.string() })

    const prompt = `
Create a professional ATS friendly ONE PAGE resume.

Resume:
${resume}

Description:
${selfDescription}

Job:
${jobDescription}

STRICT RULES:
- Must fit on ONE A4 page
- Never create second page
- Use only: Summary, Skills, Experience / Projects, Education
- Use bullet points
- No tables
- No images
- No icons
- ATS friendly
- Human written style
- Font size 10-12px
- Compact spacing

Return:
{"html":"resume html"}
`

    const response = await retryRequest(() =>
        ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: zodToJsonSchema(resumePdfSchema)
            }
        })
    )

    let jsonContent

    try {
        jsonContent = JSON.parse(response.text)
    } catch (error) {
        console.log("Resume JSON Error:", error.message)
        throw new Error("Invalid resume response")
    }

    const pdfBuffer = await generatePdfFromHtml(jsonContent.html)

    return pdfBuffer
}


module.exports = {
    generateInterviewReport,
    generateResumePdf
}