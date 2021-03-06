const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: String,
        email: String,
        password: String,
        role: String
    }
);

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;