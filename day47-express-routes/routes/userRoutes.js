const express = require("express");
const router = express.Router();
const {registerUser} = require("../controller/userController");

router.post("/auth/register", registerUser);

module.exports = router;
