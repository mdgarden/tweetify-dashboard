import express from 'express';
import bodyParser from 'body-parser';
import router from './src/router';

const port = process.env.EXPRESS_PORT || 3333;
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
