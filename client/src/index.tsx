import React from 'react';
import {
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import ReactDOM, { createRoot } from 'react-dom/client';
import './assets/scss/main.scss';
// import App from './App';
import SpotifyLogin from './components/SpotifyLogin';
import SpotifyCallback from './components/SpotifyCallback';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SpotifyLogin />,
  },
  {
    path: '/auth/spotify/callback',
    element: <SpotifyCallback />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
