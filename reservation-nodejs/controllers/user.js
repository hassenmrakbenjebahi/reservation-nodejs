import User from "../models/user.js";
import { validationResult } from "express-validator";

export function signin(req, res) {
  User.findOne({ username: req.body.username, password: req.body.password })
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function signup(req, res) {
  if (!validationResult(req).isEmpty()) {
    res.status(400).json({ errors: validationResult(req).array() });
  } else {
  User.create({
    username: req.body.username,
    password: req.body.password,
  })
    .then((newUser) => {
      res.status(200).json({
        username: newUser.username,
        password: newUser.password,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
  }
}

