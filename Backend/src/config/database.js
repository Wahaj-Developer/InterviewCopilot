const mongoose = require("mongoose")

let isConnected = false

async function connectToDB() {

    if (isConnected && mongoose.connection.readyState === 1) {
        return
    }

    try {

        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 30000
        })

        isConnected = true

        console.log("Connected to Database")

    } catch (err) {

        isConnected = false

        console.log("Database connection failed:", err)

        throw err
    }
}

module.exports = connectToDB
