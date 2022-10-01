import axios from 'axios';

const SpotifyLogin = () => {
  const authURL = `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&scpoe=user-read-private user-read-email&redirct_uri='http://localhost:3333/callback'`;

  return (
    <>
      <a href="/auth/login" className="btn-spotify">
        Login with Spotify
      </a>
    </>
  );
};

export default SpotifyLogin;
