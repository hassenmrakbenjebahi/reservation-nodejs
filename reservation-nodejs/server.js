import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

import { notFoundError, errorHandler } from './middlewares/error-handler.js';

import userRoutes from './routes/user.js';
import salleRoutes from './routes/salle.js';
import reservationRoutes from './routes/reservation.js';

const app = express();
const port = process.env.PORT || 9090;
const databaseName = 'reservationDB';
const db_url = process.env.DB_URL || `mongodb://localhost:27017`;

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose
  .connect(`${db_url}/${databaseName}`)
  .then(() => {
    console.log(`Connected to ${databaseName}`);
  })
  .catch(err => {
    console.log(err);
  });

  app.use(morgan('dev'));
  app.use(express.json());

app.use('/user', userRoutes);
app.use('/salle', salleRoutes);
app.use('/reservation', reservationRoutes);

app.use(notFoundError);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});