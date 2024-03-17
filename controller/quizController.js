const quizService = require("../services/quizService");

const quizController = {
    getQuizData: (req, res, next) => {
        quizService
        .getQuiz()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((error) => {
            res.status(404).json({
                message: "Data not found"
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
    }
}

module.exports = quizController;
