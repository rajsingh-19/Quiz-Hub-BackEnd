const mongoose = require("mongoose");
const dotenv = require("dotenv");

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
