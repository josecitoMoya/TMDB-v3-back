const express = require("express");
const router = express.Router();
const search = require("../controllers/searchControllers");

router.get("/getMovies/", search.getMovies);
router.get("/getTvShows/", search.getTvShows);

module.exports = router;
