const quizController = require("../controller/quizController");

const quiz = {
    quizRoutes : (app) => {
        app.get("/quiz", quizController.getQuizData);
        app.post("/createQuiz", quizController.postQuizData);
        app.put("/updateQuiz", quizController.updateQuizData);
        app.patch("/updateQuiz", quizController.updateQuizDataById);
        app.delete("/deleteQuiz", quizController.deleteQuizDataById);
    }
}

module.exports = quiz;
