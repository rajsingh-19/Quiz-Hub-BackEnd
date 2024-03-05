const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.status(200).json("The Server is established");
});

app.listen(process.env.PORT || PORT, () => {
    console.log("Server Started");
})