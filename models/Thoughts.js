const { Schema, model, Types } = require("mongoose");

const getCreation = (time) =>  time.toLocaleString();

const reactionSchema = new Schema(
    {
    reactionID: {
        type: Types.ObjectId,
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
    createdAt: {
        type: Date, 
        default: Date.now,
        get: getCreation},
})


const ThoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date, 
            default: Date.now,
            get: getCreation
        },

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

ThoughtsSchema.virtual("reactionCount").get( function() {
    return this.reactions.count
})

const Thoughts = model("Thoughts", ThoughtsSchema)

// Thoughts.create({
//     // userId: "633398b647601a9d8ae6b4a7"
// })

module.exports = Thoughts;

// useNewUrlParser: true 
