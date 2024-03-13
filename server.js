const express = require("express");
const cors = require("cors");
const app = express(); 
app.use(cors());
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("The Server is established");
});

app.listen(process.env.PORT || PORT, () => {
    console.log("Server Started");
})