import Achat from "../models/salle.js";
import Reservation from "../models/reservation.js";
import User from "../models/user.js";

export function addreservation(req, res) {
    Salle.findById(req.params.idSalle)
      .then((salle) => {
        if (!salle) {
          return res.status(404).json({ error: "La salle n'existe pas" });
        }
  
        User.findById(req.params.idUser)
          .then((user) => {
            if (!user) {
              return res.status(404).json({ error: "L'utilisateur n'existe pas" });
            }
  
            Reservation.create({
              idUser: req.params.idUser,
              idSalle: req.params.idSalle,
              startTime: req.body.startTime,
              endTime: req.body.endTime
            })
            .then((reservation) => {
              res.status(201).json({ message: 'Réservation ajoutée avec succès', reservation });
            })
            .catch((err) => {
              res.status(500).json({ error: err });
            });
          })
          .catch((err) => {
            res.status(500).json({ error: err });
          });
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }


  export function getReservationByUser(req, res) {
    Reservation.find({idUser : req.params.idUser })
      .then((docs) => {
        let list = [];
        for (let i = 0; i < docs.length; i++) {
          list.push({
            id: docs[i]._id,
            idSalle: docs[i].idSalle,
            startTime: docs[i].startTime,
            endTime: docs[i].endTime

          });
        }
        res.status(200).json(list);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }

  export function deleteOnce(req, res) {
    Reservation
    .findOneAndRemove({ "idUser": req.params.idUser , "idSalle" : req.params.idSalle })
    .then(doc => {
        res.status(200).json(doc);
    })
    .catch(err => {
        res.status(500).json({ error: err });
    });
}


export function putOnce(req, res) {
  let newRes = {};
 
  
    newRes = {
      idUser: req.params.idUser,
      idSalle: req.body.idSalle,
      startTime: req.body.startTime,
      endtime: req.body.endtime,

    }
  
  Reservation.findById(req.params.idRes)
    .then((doc1) => {
      if (!doc1) {
        return res.status(404).json({ error: "La reservation n'existe pas" });
      }
      
      Reservation.find({"idUser":req.params.idUser})
        .then((doc2) => {
          if (!doc2) {
            return res.status(404).json({ error: "L'utilisateur n'existe pas" });
          }

          Reservation.findByIdAndUpdate(req.params.idRes, newRes)
           .then((doc3) => {
            res.status(200).json(doc3);
          })
  
        })
        .catch((err) => {
          res.status(500).json({ error: err });
        });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
}
