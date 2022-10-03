const { Users, Thoughts, Rea } = require("../models");

module.exports = {
    async getThoughts(req, res) {
        const allThoughts = await Thoughts.find({});
        res.send(allThoughts);
    },
    async getSingleThought(req, res) {
        const singleThought = await Thoughts.findById(req.params.thoughtId);
        res.send(singleThought)
    },
    async createThought(req, res) {

        const newThought = await Thoughts.create({
            thoughtText: req.body.thoughtText,
            username: req.body.username
        })

        const currentUser = await Users.findById(req.body.userId)

        currentUser.thoughts.push(newThought._id);
        currentUser.save();
        res.send(newThought);
        // const currentUser = await Users.findById(req.userId);
        // Thoughts.create({
        //     thoughtText: "Please work",
            
        // })
// PUSH TO THE ARRAY FOR REACTIONS
    },
    async updateThought(req, res) {

    const thoughtToUpdate = await Thoughts.findByIdAndUpdate(req.params.thoughtId, req.body, {new: true});

    res.send(thoughtToUpdate);

    },
    async deleteThought(req, res) {
                
        const deletedThought = await Thoughts.deleteOne({ _id: req.params.thoughtId});
        res.send(deletedThought)
    },

    async addReaction(req, res) {

        const toAddReaction = await Thoughts.findOne({_id: req.params.thoughtId});

        // toAddReaction.reactions.push(req.params.reactionId);

        console.log(req.body);

        toAddReaction.reactions.push(req.body);

        await toAddReaction.save();

        res.send(toAddReaction);

    },
    async deleteReaction(req, res) {

        const toRemoveReaction = await Thoughts.findOne({_id: req.params.thoughtId});

        toRemoveReaction.reactions.pull(req.params.reactionId);

        toRemoveReaction.save();

        res.json("success")
        
    }

}