import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Buffer } from 'buffer';
import qs from 'qs';

const SpotifyCallback = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    (async () => {
      const params = qs.stringify({
        code: code,
        redirect_uri: process.env.REACT_APP_SPOTIFY_REDIRECT_URI,
        grant_type: 'authorization_code',
      });

      const response = await axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        data: params,
        headers: {
          Authorization:
            'Basic ' +
            Buffer.from(
              process.env.REACT_APP_SPOTIFY_CLIENT_ID +
                ':' +
                process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
            ).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      if (response.status === 200) {
        console.log(response.data);
      }
    })();
  }, [code]);

  return (
    <>
      <div className="callback">Callback</div>
      <div>{code}</div>
    </>
  );
};

export default SpotifyCallback;
