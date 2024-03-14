const quizzes = require("../models/quizSchema");

const quizService = {
    getQuiz: (req, res, next) => {
        return quizzes.find({});
    },
    createQuiz: (requestBody) => {
        const { category, subject, difficulty, question, options, option, isCorrect } = requestBody;
        const newQuizQuestion = new quizzes({
            category,
            subject,
            difficulty,
            question,
            options,
            option,
            isCorrect
        });
        return newQuizQuestion.save();
    },
    updateQuiz: (requestBody) => {
        const { _id, category, subject, difficulty, question, options, option, isCorrect } = requestBody;
        return quizzes.findByIdAndUpdate(_id,
            {$set: {category: category, subject: subject, difficulty: difficulty, question: question, options: options, option: option, isCorrect:isCorrect }},
        { new: true });
    },
    updateQuizById: (requestBody) => {
        const { _id, category, subject, difficulty, question, options, option, isCorrect } = requestBody;
        return quizzes.findByIdAndUpdate(_id,
            {$set: {category: category, subject: subject, difficulty: difficulty, question: question, options: options, option: option, isCorrect:isCorrect }},
        { new: true });
    },
    deleteQuizById: (requestBody) => {
        const { _id } = requestBody;
        return quizzes.findByIdAndDelete(requestBody);
    }
}

module.exports = quizService;
