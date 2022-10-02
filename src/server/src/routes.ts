import { RequestHandler } from 'express';
// import { HttpMethod } from './utils/methods';
import spotifyLoginHandler from './handlers/spotifyLogin';
import spotifyCallbackHandler from './handlers/spotifyCallback';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

type GeneralHandler = RequestHandler<any, any, any, any, any>;

type RouteConfig = {
  method: HttpMethod;
  path: string;
  handler: Async<GeneralHandler>;
  authType: 'GUEST' | 'AUTH' | 'BOTH';
};

const routes: RouteConfig[] = [
  {
    method: 'GET',
    path: '/auth/login',
    handler: spotifyLoginHandler,
    authType: 'GUEST',
  },
  {
    method: 'GET',
    path: '/auth/callback',
    handler: spotifyCallbackHandler,
    authType: 'GUEST',
  },
];

export default routes;
