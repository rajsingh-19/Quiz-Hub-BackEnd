const express = require("express");
const router = express.Router();

const loginHandler = require("../controller/loginController");
const singupHandler = require("../controller/singupController");

router.route("/register")
    .post(singupHandler);

router.route("/login")
    .post(loginHandler);



module.exports = router;
