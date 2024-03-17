const categoryService = require("../services/categoryService");

const categoryController = {
    getQuizData: (req, res, next) => {
        categoryService
        .getCategory()
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((error) => {
            res.status(404).json({
                message: "Data not found"
            })
        }) 
    }
}

module.exports = categoryController;
