import express from 'express';

import { addreservation , getReservationByUser ,deleteOnce , putOnce } from '../controllers/reservation.js';
  
const router = express.Router();

router
  .route('/:idUser/:idSalle')
  .post(addreservation)
  .delete(deleteOnce);

  router
  .route('/:idUser/:idRes')
  .put(putOnce);
  

  router
  .route('/:idUser')
  .get(getReservationByUser);
export default router;