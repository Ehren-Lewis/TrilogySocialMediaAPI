const { Schema, model, Types } = require("mongoose");

const reactionSchema = new Schema({
    reactionID: {
        type: Schema.Types.ObjectId,
        default: new Types.ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
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
            minLength: 1,
            maxLength: 280
        },
        createdAt: {type: Date, default: Date.now},
        get: getCreation,
        username : {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
)

Thoughts.virtual("reactionCount").get( function() {
    return this.reactions.count
})

module.exports = Thoughts;

// useNewUrlParser: true 
