const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Sequelize } = require('sequelize');


const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
  };

  app.use(cors(corsOptions));

  // parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});



//la route de base
app.get("/", (req, res) => {
    res.json({ message: "Welcome to angular 10  crud app." });
  });











// définir le port, écouter les demandes
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});