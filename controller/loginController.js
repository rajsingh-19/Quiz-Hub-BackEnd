//          For encrypting the password
const CryptoJS = require("crypto-js");
//          For authentication and authorisation
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

//          Login Function
const loginHandler = async (req, res) => {
    try {
//          Finding the user in database and if not present then showing the error
        const user = await User.findOne({ email_id: req.body.email_id });
        !user && res.status(401).json({ message: "Incorrect Email Id" });
//          Decrypting the password of user
        const decodedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8);
//          Checking the password if the password created at the first time singup and login password are same or not
        decodedPassword !== req.body.password && res.status(401).json({ message: "Incorrect Password"});
//          If everything is right then token is generated
        const { password, ...rest } = user._doc;
        const accessToken = jwt.sign( {user: user.userName}, process.env.ACCESS_TOKEN )

        res.json({...rest, accessToken});
    } catch (error) {
        console.log(error);
    }
}

module.exports = loginHandler;
