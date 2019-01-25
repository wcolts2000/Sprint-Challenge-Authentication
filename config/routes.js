const express = require("express");
const bcrypt = require("bcryptjs");
const axios = require("axios");
const db = require("../database/dbConfig");

const { authenticate, generateToken } = require("../auth/authenticate");

module.exports = server => {
  server.post("/api/register", register);
  server.post("/api/login", login);
  server.get("/api/jokes", authenticate, getJokes);
};

// const router = express.Router();

function register(req, res, next) {
  // implement user registration
  // router.post("/", (req, res) => {});
  const user = req.body;
  user.password = bcrypt.hashSync(user.password, 14);
  if (user.username && user.password) {
    db("users")
      .insert(user)
      .then(userId => {
        const token = generateToken(req.body);
        res.status(201).json({ message: `welcome ${user.username}`, token });
      })
      .catch(err => {
        if (err.errno === 19) {
          res
            .status(400)
            .json({ message: "username taken, please try another" });
        } else {
          next(err);
        }
      });
  }
}

function login(req, res) {
  // implement user login
  const userCreds = req.body;
  db("users")
    .where({ username: userCreds.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(userCreds.password, user.password)) {
        const token = generateToken(user);
        res.json({ message: `welcome ${user.username}`, token });
      } else {
        res.status(401).json({ message: "You shall not pass!" });
      }
    })
    .catch(err => res.status(500).json({ message: "You shall not pass!" }));
}

function getJokes(req, res) {
  const token = req.headers.authorization;
  const requestOptions = {
    headers: { accept: "application/json", authorization: token }
  };

  axios
    .get("https://icanhazdadjoke.com/search", requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: "Error Fetching Jokes", error: err });
    });
}
