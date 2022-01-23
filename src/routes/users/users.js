const express = require("express")
const router = express.Router();

//auth middleware comes in

const userController = require("../../controllers/users/users")

router.get("/:id", userController.getUser);
router.get("/", userController.getUsers);

module.exports = router;