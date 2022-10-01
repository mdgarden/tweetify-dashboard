import { RequestHandler } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { CLIENT_ID, REDIRCET_URI } from '../../../utils/consts';

type Handler = Async<RequestHandler<null>>;

const handler: Handler = async (req, res) => {
  const scope =
    'user-read-email user-read-private user-read-playback-state user-top-read';
  const state = uuidv4();

  const auth_query_parameters = new URLSearchParams({
    response_type: 'code',
    client_id: CLIENT_ID!,
    scope: scope,
    redirect_uri: REDIRCET_URI!,
    state: state,
  });

  res.redirect(
    'https://accounts.spotify.com/authorize/?' +
      auth_query_parameters.toString()
  );
};

export default handler;
