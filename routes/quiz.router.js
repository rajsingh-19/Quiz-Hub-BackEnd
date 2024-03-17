const express = require("express");
const quizRouter = express.Router();
const quizController = require("../controller/quizController");
const verifyuser = require("../middleware/verifyuser");

quizRouter.route("/")
    .get(verifyuser, quizController.getQuizData)

module.exports = quizRouter;
