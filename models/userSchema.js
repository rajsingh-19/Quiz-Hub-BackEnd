const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema =  new Schema ({
    userName: { type: String, required: true },
    email_id: { type: String, required: true },
    password: { type: String, required: true }
});

const user = mongoose.model("user", userSchema)
module.exports = user;