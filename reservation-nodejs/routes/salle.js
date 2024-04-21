import express from "express";
import { getSalleDispo, addOnce, getOnce } from "../controllers/salle.js";

const router = express.Router();

router
  .route("/")
  .get(getSalleDispo);
  
 router 
  .route("/create").post(
    addOnce
  );

export default router;
