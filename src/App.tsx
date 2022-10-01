import React from 'react';
import Header from './components/Header';
import SpotifyLogin from './components/SpotifyLogin';
import { TwitterLogin } from './components/TwitterLogin';

function App() {
  return (
    <div className="App">
      <Header />
      <TwitterLogin />
      <SpotifyLogin />
    </div>
  );
}

export default App;
