const mongoose = require("mongoose");
const express = require("express");
const db = require("./config/connection");
const routes = require('./routes')
const { User, Thoughts } = require("./models")
const PORT = 3001
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


db.once('open', () => {
    console.log(db);

    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });