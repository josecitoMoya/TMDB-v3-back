const Sequelize = require("sequelize");
const db = require("../db/index");
const bcrypt = require("bcrypt");

class Users extends Sequelize.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }

  validatePassword(password) {
    return bcrypt
      .hash(password, this.salt)
      .then((hash) => hash === this.password);
  }
}

Users.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salt: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "users",
  }
);

Users.beforeCreate((user) => {
  const salt = bcrypt.genSaltSync();

  user.salt = salt;

  return user.hash(user.password, salt).then((hash) => {
    user.password = hash;
  });
});

module.exports = Users;
