const express = require("express");
const router = express.Router();
const users = require("./users");
const movies = require("./movies");
const favorites = require("./favorite");
const search = require("./search");
const tvShow = require("./tvShow");

router.use("/users", users);
router.use("/movies", movies);
router.use("/favorites", favorites);
router.use("/search", search);
router.use("/tv-show", tvShow);

module.exports = router;
