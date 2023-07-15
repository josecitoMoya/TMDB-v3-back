const express = require("express");
const user = require("../controllers/userControllers");
const router = express.Router();

router.post("/singup", user.newUser);
router.post("/login", user.loginUser);
router.post("/logout", user.logOut);

router.get("/persistence", user.persistence);

module.exports = router;
