require("dotenv").config();
const express = require("express");
const config = require("./dbConfig/config");
const mongoose = require("mongoose");
const quiz = require("./routes/quiz.router");
const cors = require("cors");

const PORT = 3500;

const app = express(); 
app.use(cors());
config.connect();

app.use(express.json());
quiz.quizRoutes(app);

app.get("/", (req, res) => {
    res.status(200).json("Express");
});

app.get("/quiz");
app.post("/createQuiz");
app.put("/updateQuiz");
app.patch("/updateQuiz");
app.delete("/deleteQuiz");

mongoose.connection.once("open", () => {
    console.log("Connected to DB");
    app.listen(process.env.PORT || PORT, () => {
        console.log("Server Started");
    });
});

