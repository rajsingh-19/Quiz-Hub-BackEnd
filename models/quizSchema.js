const mongoose = require("mongoose")
//          for defining purpose of schema of quizzes
const Schema = mongoose.Schema;

//          schema for options
const optionSchema = new Schema({
    option: { type: String, required: true },
    isCorrect: { type: Boolean, required: true }
});
//          schema for question, options array and the properties of question
const subQuizSchema = new Schema({
    difficulty: { type: String, required: true },
    question: { type: String, required: true },
    options: [optionSchema]
}) 
//          schema for the whole quiz card which will be display on the browser
const quizSchema = new Schema({
    category: { type: String, required: true },
    subject: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    quiz: [subQuizSchema],
});

const quizzes = mongoose.model("quizzes", quizSchema);

module.exports = quizzes;
