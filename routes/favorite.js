const express = require("express");
const favorites = require("../controllers/favoriteControllers");
const router = express.Router();

router.post("/add-favorite", favorites.addFavorite);
router.post("/delete-favorite/", favorites.deleteFavorite);

router.get("/favorite-movies/", favorites.allFavorites);

module.exports = router;
