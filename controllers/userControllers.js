const { generateToken } = require("../config/tokens");
const { validateAuth } = require("../middleware/auth");
const { Users } = require("../models/index");
const express = require("express");

const newUser = async (req, res) => {
  try {
    const newUser = await Users.findOne({
      where: { email: req.body.email },
    }).then((user) => {
      if (user) {
        return res.send("email registrado con otro usuario");
      }
    });

    Users.create(req.body).then(
      res.send("Usuario creado correctamente", newUser)
    );
  } catch {
    (err) => res.send(err);
  }
};

const loginUser = async (req, res) => {
  let { email, password } = req.body;

  try {
    const loguinUser = await Users.findOne({
      where: { email },
    }).then((user) => {
      if (!user) return res.status(401).send("User not found");

      user.validatePassword(password).then((result) => {
        if (!result) return res.status(401).send("Wrong password");

        const payload = {
          user: user.name,
          lastname: user.lastname,
          email: user.email,
        };

        const token = generateToken(payload);

        res.cookie("tokenTMDB", token);

        res.status(200).send(payload);
      });
    });
  } catch {
    res.send("error");
  }
};

const persistence = async (req, res) => {
  try {
    validateAuth(req);
    res.send(req.user);
  } catch (err) {
    console.error("error en persistencia", err);
  }
};

const logOut = async (req, res) => {
  try {
    res.clearCookie("tokenTMDB");
    res.status(204).send("sesion cerrada correctamente");
  } catch (err) {
    console.error("Error en logOut", err);
  }
};

module.exports = { newUser, loginUser, persistence, logOut };
