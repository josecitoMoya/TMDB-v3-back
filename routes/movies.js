const express = require("express");
const router = express.Router();
const movie = require("../controllers/movieControllers");

router.get("/all-movies", movie.getAllMovies);
router.get("/single-movie/", movie.getSingleMovie);
router.get("/movie-credits/", movie.getMovieCredits);
router.get("/popular-movies", movie.getPopularMovies);
router.get("/top-rated-movies", movie.getTopRatedMovies);
router.get("/up-coming-movies", movie.getUpComingMovies);

module.exports = router;
