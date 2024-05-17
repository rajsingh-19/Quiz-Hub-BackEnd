//          For encrypting the password
const CryptoJS = require('crypto-js');
const User = require("../models/userSchema");

//          Signup Function
const singupHandler = async (req, res) => {
    try {
//          Creating the user in the database as per the defined schema
        const newUser = new User({
            userName: req.body.userName,
            email_id: req.body.email_id,
//          Encrypting the password with crypto-js
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString()
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating a User" });
    }
}

module.exports = singupHandler;
