import { RequestHandler } from 'express';
// import { HttpMethod } from './utils/methods';
import loginHandler from './handlers/login';

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
    path: '/login',
    handler: loginHandler,
    authType: 'GUEST',
  },
];
