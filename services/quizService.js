const quizzes = require("../models/quizSchema");

const quizService = {
    getQuiz: (req, res, next) => {
        return quizzes.find({});
    },
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
