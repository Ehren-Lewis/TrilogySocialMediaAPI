const router = require("express").router(); 
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought
} = require("../../controllers/thoughtsController")


router.route("/").get(getThoughts).post(createThought);
router.route("/:postId").get(getSingleThought).put(updateThought).delete(deleteThought)

module.exports = router;
