import { validationResult } from "express-validator";

import Salle from "../models/salle.js";

export function getSalleDispo(req, res) {
  Salle.find({disponibility : 1 })
    .then((docs) => {
      let list = [];
      for (let i = 0; i < docs.length; i++) {
        list.push({
          id: docs[i]._id,
          capacity: docs[i].capacity,
          equipement: docs[i].equipement
        });
      }
      res.status(200).json(list);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}

export function addOnce(req, res) {
 
    Salle.create({
      capacity: req.body.capacity,
      equipement: req.body.equipement,
      disponibility: 1,
    })
      .then((newsalle) => {
        res.status(200).json(newsalle);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  
}

export function getOnce(req, res) {
  Salle.findById(req.params.id)
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}


