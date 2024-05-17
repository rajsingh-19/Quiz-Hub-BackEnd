const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//          defining the schema for creating the users
const userSchema =  new Schema (
    {
        userName: { type: String, required: true },
        email_id: { type: String, required: true, uniquie: true },
        password: { type: String, required: true }
    }
);

const User = mongoose.model("User", userSchema)
module.exports = User;
