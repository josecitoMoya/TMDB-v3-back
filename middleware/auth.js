const { validateToken } = require("../config/tokens");

function validateAuth(req, res, next) {
  const token = req.cookies.tokenTMDB;
  if (!token) res.send("usuario no logueado");

  const { user } = validateToken(token);

  if (!user) res.send("usuario no logueado");

  req.user = user;

  // next();
}

module.exports = { validateAuth };
