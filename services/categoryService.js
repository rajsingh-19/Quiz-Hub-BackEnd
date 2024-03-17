const quizzes = require("../models/quizSchema");

const categoryService = {
    getCategory: (req, res, next) => {
        return quizzes.find({});
    }
}

module.exports = categoryService;
