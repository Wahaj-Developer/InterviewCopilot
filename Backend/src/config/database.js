const mongoose = require("mongoose")

let connectionPromise = null

async function connectToDB() {

    if (mongoose.connection.readyState === 1) {
        return mongoose.connection
    }

    if (!connectionPromise) {
        connectionPromise = mongoose
            .connect(process.env.MONGO_URI, {
                serverSelectionTimeoutMS: 10000
            })
            .then(() => {
                console.log("Connected to Database")
                return mongoose.connection
            })
            .catch((err) => {
                console.log("Database connection failed:", err)
                connectionPromise = null
                throw err
            })
    }

    return connectionPromise
}

module.exports = connectToDB