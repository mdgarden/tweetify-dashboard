import { RequestHandler } from 'express';
import { v4 as uuidv4 } from 'uuid';

type Handler = Async<RequestHandler<null>>;

const handler: Handler = async (req, res) => {
  const access_token = 'sample';
  res.json({ access_token: access_token });
};

export default handler;
