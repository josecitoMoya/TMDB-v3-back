const Sequelize = require("sequelize");
const db = require("../db/index");

class Favorites extends Sequelize.Model {}

Favorites.init(
  {
    tmdb_id: {
      type: Sequelize.INTEGER,
    },
    tmdb_name: {
      type: Sequelize.STRING,
    },
  },
  { sequelize: db, modelName: "favorites" }
);

module.exports = Favorites;
