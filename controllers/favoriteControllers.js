const { Favorites, Users } = require("../models/index");

const addFavorite = async (req, res) => {
  const { email, tmdb_id, tmdb_name } = req.body;

  Users.findOne({ where: { email } }).then((data) => {
    const userId = data.dataValues.id;

    Favorites.findOne({ where: { tmdb_id, userId } }).then((data) => {
      if (data) return console.log("Si encontre la pelicula");

      Favorites.create({ tmdb_id, tmdb_name }).then((favs) => {
        favs.setUser(userId);
        res.send(favs);
      });
    });
  });
};

const allFavorites = async (req, res) => {
  const email = req.query.email;

  console.log("SOY EMAIL!!!!", email);

  Users.findOne({ where: { email } })
    .then((data) => {
      const userId = data.dataValues.id;

      Favorites.findAll({ where: { userId: userId } }).then((favs) =>
        res.send(favs)
      );
    })
    .catch((err) => res.send(err));
};

const deleteFavorite = async (req, res) => {
  const { email, tmdb_id, tmdb_name } = req.body;

  Users.findOne({ where: { email } })
    .then((data) => {
      const userId = data.dataValues.id;

      Favorites.destroy({ where: { tmdb_id, userId } }).then((favs) =>
        res.status(201).send("deleted")
      );
    })
    .catch((err) => res.send(err));
};

module.exports = { addFavorite, deleteFavorite, allFavorites };
