import React from 'react';

const SpotifyLogin = () => {
  const scope =
    'user-read-email user-read-private user-read-playback-state user-top-read';
  const authURL = `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&scpoe=${scope}&redirect_uri=http://localhost:3000/auth/spotify/callback`;

  return (
    <>
      <a href={authURL} className="btn-spotify">
        Login with Spotify
      </a>
    </>
  );
};

export default SpotifyLogin;
