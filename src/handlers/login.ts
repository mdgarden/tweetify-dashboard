import { RequestHandler } from 'express';
import Client from '../../api/http';
import { spotifyLoginRequest, spotifyLoginResponse } from '../../types/spotify';

type Handler = Async<
  RequestHandler<null, spotifyLoginRequest, spotifyLoginResponse>
>;

const handler: Handler = async (req, res) => {
  const spotifyAuthCallback = ``;

  // const response = await Client.create().login()
  return;
};

export default handler;
