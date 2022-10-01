import React from 'react';
import Header from './src/components/Header';
import SpotifyLogin from './src/components/SpotifyLogin';
import { TwitterLogin } from './src/components/TwitterLogin';

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
