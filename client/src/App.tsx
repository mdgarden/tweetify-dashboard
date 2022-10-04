import React from 'react';
import { Route, Routes, createBrowserRouter } from 'react-router-dom';
import SpotifyLogin from './components/SpotifyLogin';
import SpotifyCallback from './components/SpotifyCallback';

function App() {
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
}

export default App;
