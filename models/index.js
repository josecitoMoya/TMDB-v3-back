const Favorites = require("./Favorites");
const Users = require("./Users");

Favorites.belongsTo(Users, { as: "user" });

module.exports = { Users, Favorites };
