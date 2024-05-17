const express = require("express");
const router = express.Router();
//             login and signup route for users 
const loginHandler = require("../controller/loginController");
const singupHandler = require("../controller/singupController");

//              signup route
router.route("/register")
    .post(singupHandler);

//              Login route
router.route("/login")
    .post(loginHandler);



module.exports = router;
