require("dotenv").config();
const dotenv = require("dotenv");
//          for connection with express 
const express = require("express");
//           for cross browser compatibility
const cors = require("cors");

//          Connection with ORM and Database
const mongoose = require("mongoose");
const config = require("./dbConfig/config");

//          Routes for quizzes, quizzes with auth and users 
const quizRouter = require("./routes/quiz.router");
// const quizImportRouter = require("./routes/quizimport.router");
const authRouter = require("./routes/userAuth.router");
const categoryRouter = require("./routes/categoriesQuiz.router");
const routeNotFound = require("./middleware/routeNotFound");

dotenv.config();
config.connect();

const PORT = 3100;
const app = express(); 

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hello! from Express");
});

//          routes and routes with middleware
app.use("/quiz", quizRouter);
app.use("/categoryQuiz", categoryRouter);
// app.use("/api/createQuiz", quizImportRouter);
app.use("/auth", authRouter);
app.use(routeNotFound);

//          Database connection with Server
mongoose.connection.once("open", () => {
    console.log("Connected to DB");
    app.listen(process.env.PORT || PORT, () => {
        console.log("Server Started");
    });
});

