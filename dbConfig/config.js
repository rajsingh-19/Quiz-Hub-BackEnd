const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Configuration of dot env file for database
dotenv.config();

const dbConnect = {
    connect: async ()  => {
        try {
            await mongoose.connect(process.env.DATABASE_URI);
            console.log("Database Conneted");
        } catch (error) {
            console.log("Error", error);
        }
    }
}

module.exports = dbConnect;
