const { Schema, model, Types } = require("mongoose");
const validateLength = (str) => str < 280 && str > 1 ? true: false
const validateReactionLength = (str) => str < 280;
const reactionSchema = new Schema({
    reactionID: {
        type: Schema.Types.ObjectId,
        default: new Types.ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        validate: [validateReactionLength, "Reaction must be less than 280 characters"]
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {type: Date, default: Date.now},
    get: getCreation,   
})

const getCreation = (time) =>  time.toLocaleString();

const Thoughts = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            validate: [validateLength, "The string must be between one and 280 characters"]
        },
        createdAt: {type: Date, default: Date.now},
        get: getCreation,
        username : {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    }
)

module.exports = Thoughts;

// useNewUrlParser: true 
