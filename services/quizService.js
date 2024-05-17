const quizzes = require("../models/quizSchema");

const quizService = {
//          return the quizzes after authentication
    getQuiz: (req, res, next) => {
        return quizzes.find({});
    },
//          for creating the quiz from the backend
    createQuiz: (requestBody) => {
        const { category, subject, image, description, quiz } = requestBody;
        const newQuizQuestion = new quizzes({
            category,
            subject,
            image,
            description,
            quiz
        });
        return newQuizQuestion.save();
    }
}

module.exports = quizService;
