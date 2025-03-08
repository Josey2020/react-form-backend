const mongoose = require("mongoose");

const connectToMongoDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_DB_URL)
      console.log("Connected to mongoDB")
    } catch (error) {
        console.log("Error connecting to MongoDB")
    }
}

module.exports = connectToMongoDB