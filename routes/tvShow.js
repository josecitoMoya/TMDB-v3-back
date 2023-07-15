const express = require("express");
const router = express.Router();
const tvShow = require("../controllers/tvShowControllers");

router.get("all-tv-shows", tvShow.getAllTvShows);
router.get("/tv-show/", tvShow.getTvShow);
router.get("/tv-show-credits/", tvShow.getTvShowsCredits);
router.get("/popular-tv-shows", tvShow.getPopularTvShows);
router.get("/top-rated-tv-shows", tvShow.getTopRatedTvShows);
router.get("/up-coming-tv-shows", tvShow.getDiscoverTvShows);

module.exports = router;
