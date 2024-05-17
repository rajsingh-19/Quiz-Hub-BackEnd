const quizzes = require("../models/quizSchema");

const categoryService = {
    //      It will return the data to the home page for displaying all the quizzes
    getCategory: (req, res, next) => {
        return quizzes.find({});
    }
}

module.exports = categoryService;
