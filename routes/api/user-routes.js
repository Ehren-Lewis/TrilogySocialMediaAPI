const router = require("express").router();

const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
} = require("../../controllers/userController")




module.exports = router;
