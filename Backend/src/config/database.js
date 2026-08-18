const mongoose = require("mongoose")

let isConnected = false

async function connectToDB() {

    if (isConnected) {
        return
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 30000
        })
        isConnected = true
        console.log("Connected to Database")
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = connectToDB