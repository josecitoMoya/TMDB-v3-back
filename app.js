if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const PORT = process.env.PORT || 3001;
const model = require("./models/index");

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const routes = require("./routes/index");
const db = require("./db/index");

//Constantes
const app = express();

//Midleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
app.use(morgan("tiny"));

//Routes
app.use("/api", routes);

//Server
db.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Servidor corriendo en ${PORT}`));
});
