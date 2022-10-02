import express from 'express';
// import bodyParser from 'body-parser';
import router from './router';
import path from 'path';
import { RequestHandler } from 'express-serve-static-core';

const port = process.env.EXPRESS_PORT || 3333;
const app = express();

app.use(express.urlencoded({ extended: true }) as RequestHandler);
app.use(express.json() as RequestHandler);
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use('/', router);

app.listen(port, () => {
  console.log(`Listening at port http://localhost:${port}`);
});
