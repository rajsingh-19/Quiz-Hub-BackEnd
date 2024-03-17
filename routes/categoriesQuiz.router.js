const express = require("express");
const categoryRouter = express.Router();
const categoryController = require('../controller/categoryController');

categoryRouter.route("/")
    .get(categoryController.getQuizData);


module.exports = categoryRouter;
