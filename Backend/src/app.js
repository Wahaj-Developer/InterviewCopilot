const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const connectToDB = require("./config/database")

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: [
        process.env.FRONTEND_URL,
        "http://localhost:5173"
    ],
    credentials: true
}))

/**
 * On serverless (Vercel), a cold start can start handling a request before
 * mongoose has actually finished connecting. This makes every request wait
 * on the (cached) connection first, instead of racing it and sometimes
 * hitting a "buffering timed out" / connection error on login, register, etc.
 */
app.use(async (req, res, next) => {
    try {
        await connectToDB()
        next()
    } catch (err) {
        next(err)
    }
})

/* require all the routes here */
const authRouter = require("./routes/auth.routes")
const interviewRouter = require("./routes/interview.routes")

/* using all the routes here */
app.use("/api/auth", authRouter)
app.use("/api/interview", interviewRouter)

/**
 * Central error handler. Express 5 forwards rejected promises from async
 * route handlers here automatically, so this is what actually catches
 * things like the pdf-parse crash, bad multer uploads, Mongo errors, etc.
 * Without this, an unhandled error just becomes a raw 500 with a stack trace.
 */
app.use((err, req, res, next) => {
    console.error(err)

    if (err.name === "MulterError") {
        return res.status(400).json({
            message: err.code === "LIMIT_FILE_SIZE"
                ? "Resume file is too large. Please upload a PDF under 3MB."
                : "File upload failed. Please try again."
        })
    }

    res.status(err.status || 500).json({
        message: err.message || "Something went wrong. Please try again."
    })
})

module.exports = app