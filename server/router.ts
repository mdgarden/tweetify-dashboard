import express, { Router } from 'express';
import path from 'path';

// import routes from './routes';
// import { HttpMethod } from "../utils/methods";

// type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

const router = Router();

// router.use(auth)

// function catchError(handler: Async<Handler>): Handler {
//   return (...args) => handler(...args).catch(args[2]);
// }

router.use(express.static('public'));

// router.get('*', (req, res, next) => {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });
router.all('*', (_, res) => res.status(404).end());

export default router;
