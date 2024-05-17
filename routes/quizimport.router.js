const express = require("express");
const router = express.Router();
const quizController = require("../controller/quizController");

router.route('/')
    // .post(quizController.postQuizData);

module.exports = router;