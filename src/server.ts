import express from 'express';
import querystring from 'express';
import router from './router';

type RequestParams = {
  response_type: 'code';
  client_id: 'CLIENT_ID';
  scope: String;
  redirect_uri: String;
};

const client_id = 'CLIENT_ID';
const redirect_uri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);
app.use();

const port = 3333;

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

app.get('/login', function (req, res) {
  const scope = 'user-read-private user-read-email';

  // res.redirect(
  //   'https://accounts.spotify.com/authorize?' +
  //     querystring.stringify<RequestParams>({
  //       response_type: 'code',
  //       client_id: client_id,
  //       scope: scope,
  //       redirect_uri: redirect_uri,
  //     })
  // );
});
