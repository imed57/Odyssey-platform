import * as express from 'express';
import { Application } from 'express';
import * as bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import userRouter from './routes/users';
import ticketRouter from './routes/tickets';
import loansRouter from './routes/loans'

import * as dotenv from 'dotenv';
dotenv.config();

var cors = require('cors');


createConnection().then((connection) => {
  const app: Application = express();
  app.use(cors());

  app.use(bodyParser.json());

  app.use('/users', userRouter);
  app.use('/tickets', ticketRouter);
  app.use('/loans', loansRouter);



  const PORT = process.env.PORT;

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});

