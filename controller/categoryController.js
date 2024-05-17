const categoryService = require("../services/categoryService");

//          category function for fetching all the data
const categoryController = {
    //      defining the route with succces and error condition (will go to the category service if the req is succesful)
    getQuizData: (req, res, next) => {
        categoryService
        .getCategory()
        .then((response) => {
            res.status(200).json(response);
        })
        //      catching the error with http status code
        .catch((error) => {
            res.status(404).json({
                message: "Data not found"
            })
        }) 
    }
}

module.exports = categoryController;
