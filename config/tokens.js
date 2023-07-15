const jwt = require("jsonwebtoken");

const SECRET = "BAZINGA";

const generateToken = (payload) => {
  const token = jwt.sign(
    {
      user: payload,
    },
    SECRET,
    { expiresIn: "2h" }
  );
  return token;
};

const validateToken = (token) => {
  return jwt.verify(token, SECRET);
};

module.exports = { generateToken, validateToken };
