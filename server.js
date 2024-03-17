require("dotenv").config();
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const config = require("./dbConfig/config");

const quizRouter = require("./routes/quiz.router");
const quizImportRouter = require("./routes/quizimport.router");
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

app.use("/api/quiz", quizRouter);
app.use("/api/categoryQuiz", categoryRouter);
app.use("/api/createQuiz", quizImportRouter);
app.use("/api/auth", authRouter);
app.use(routeNotFound);


mongoose.connection.once("open", () => {
    console.log("Connected to DB");
    app.listen(process.env.PORT || PORT, () => {
        console.log("Server Started");
    });
});

