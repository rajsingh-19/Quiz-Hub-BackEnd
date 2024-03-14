const quizService = require("../services/quizService");

const quizController = {
    getQuizData: (req, res, next) => {
        quizService
        .getQuiz()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((error) => {
            res.status(501).json({
                message: "Something went wrong"
            })
        })
    },
    postQuizData: (req, res, next) => {
        quizService
        .createQuiz(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(501).json({
                message: "Something went wrong, Can't Create Data"
            })
        })
    },
    updateQuizData: (req, res, next) => {
        quizService
        .updateQuiz(req.body)
        .then((response) => {
            res.status(201).json(response)
        })
        .catch((error) => {
            res.status(501).json({
                message: "Something went wrong, Can't modify the data object"
            })
        })
    },
    updateQuizDataById: (req, res, next) => {
        quizService
        .updateQuizById(req.body)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(501).json({
                message: "Something went wrong, Can't update the data"
            })
        })
    },
    deleteQuizDataById: (req, res, next) => {
        quizService
        .deleteQuizById(req.body._id)
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((error) => {
            res.status(501).json({
                message: "Something went wrong"
            })
        })
    }
}

module.exports = quizController;
