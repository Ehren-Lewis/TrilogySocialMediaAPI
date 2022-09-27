const { Schema, model } = require("mongoose");
const Thoughts = require("./Thoughts");
const emailRegEx  = "/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/"

const validateEmail = (email) => {
    return emailRegEx.test(email)
}

const userSchema = new Schema(
    {
        username: { type: String, 
            unique: true,
            required: true,
        trim: true },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [validateEmail, "Please enter valid email"]
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: "Thought"
        }],
        // refer: { type: Schema.Types.ObjectId, ref: "userSchema"}

        friends: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        } ]
    }
);


module.exports = userSchema