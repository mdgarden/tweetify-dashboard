import axios from 'axios';
import { RequestHandler } from 'express';
import { SpotifyCallbackRequest } from '../../types/spotify';
import { CLIENT_ID, CLIENT_SECRET, REDIRCET_URI } from '../../utils/consts';

type Handler = Async<RequestHandler<null, null, null, SpotifyCallbackRequest>>;

const handler: Handler = async (req, res) => {
  const authClient = axios.create({
    baseURL: 'https://accounts.spotify.com/api',
    headers: {
      Authorization:
        'Basic ' +
        Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    withCredentials: true,
  });

  authClient.interceptors.response.use(
    response => response,
    error => error.response
  );

  const code = req.query.code;
  const params = {
    code: code,
    redirect_uri: REDIRCET_URI,
    grant_type: 'authorization_code',
  };
  const response = await authClient.post('/token', { params });
  if (response.status === 200) {
    res.redirect('/');
  }
};

export default handler;
