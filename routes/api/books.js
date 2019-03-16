const router = require("express").Router();
const bookControls = require("../../controllers/bookControl");

router.route("/")
    .get(bookControls.findAll)
    .post(bookControls.newBook);

router.route("/:id")
    .get(bookControls.findById)
    .delete(bookControls.deleteBook);

module.exports = router;