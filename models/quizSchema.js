const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const optionSchema = new Schema({
    option: { type: String, required: true },
    isCorrect: { type: Boolean, required: true }
});

const quizSchema = new Schema({
    category: { type: String, required: true },
    subject: { type: String, required: true },
    difficulty: { type: String, required: true },
    question: { type: String, required: true },
    options: [optionSchema] 
});

const quizzes = mongoose.model("quizzes", quizSchema);

module.exports = quizzes;
