import express from "express";
import { body } from "express-validator";


import { signin, signup } from "../controllers/user.js";

const router = express.Router();

router
  .route("/signin")
  .post(
    signin
  );

router.route("/signup").post(
  body("username").isLength({ min: 5 }),
  body("password").isLength({ min: 8 }),

  signup
  
  );



export default router;
