const express = require("express");
const categoryRouter = express.Router();
const categoryController = require('../controller/categoryController');

//          routes for Quiz Category which will display on the Home page
categoryRouter.route("/")
    .get(categoryController.getQuizData);


module.exports = categoryRouter;
