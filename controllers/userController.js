const { Users, Thoughts} = require("../models");

module.exports = {

    // works
    async getUsers(req, res) {
        const allUsers = await Users.find({});
        res.send(allUsers);
    },

    // works
    async getSingleUser(req, res) {
        // console.log(req);
        const currentUser = await Users.findById(req.params.userId).populate("thoughts").populate("friends");
        res.send(currentUser)
    },

    // works
    async createUser(req, res) {
// PUSH TO THE ARRAY OF FRIENDSs
        const newUser = await Users.create({
            username: req.body.username,
            email: req.body.email
        });

        res.send(newUser);

    },

    // works
    async updateUser(req, res) {

        let currentUser = await Users.findByIdAndUpdate(req.params.userId, req.body, {new: true});

        res.send(currentUser);

  
    },


    // works
    async deleteUser(req, res) {
       
        
        const deletedUser = await Users.deleteOne({ _id: req.params.userId});

        res.send(deletedUser)
    },

    async newFriend(req, res) {
        // console.log(req);

        const toAddFriendTo = await Users.findOne({ _id: req.params.userId});
        toAddFriendTo.friends.push(req.params.friendId);

    // currentUser.friends.push(sam._id);

        toAddFriendTo.save();

        res.send(toAddFriendTo);
    },

    async deleteFriend(req, res) {
        const toRemoveFriendFrom = await Users.findOne({ _id: req.params.userId});

        toRemoveFriendFrom.friends.pull(req.params.friendId);

        toRemoveFriendFrom.save();

        res.sendStatus(200);

    }
}
