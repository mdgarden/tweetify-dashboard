import { RequestHandler } from 'express';
import Client from '../../../api/http';
import {
  spotifyLoginRequest,
  spotifyLoginResponse,
} from '../../../types/spotify';
import { v4 as uuidv4 } from 'uuid';

type Handler = Async<
  RequestHandler<null, spotifyLoginRequest, spotifyLoginResponse>
>;

const handler: Handler = async (req, res) => {
  const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
  const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
  const redirect_uri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
  const scope =
    'user-read-email user-read-private user-read-playback-state user-top-read';
  const state = uuidv4();

  const auth_query_parameters = new URLSearchParams({
    response_type: 'code',
    client_id: client_id!,
    scope: scope,
    redirect_uri: redirect_uri!,
    state: state,
  });

  res.redirect(
    'https://accounts.spotify.com/authorize/?' +
      auth_query_parameters.toString()
  );
};

export default handler;
