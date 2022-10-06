import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Buffer } from 'buffer';
import { response } from 'express';
import qs from 'qs';

const SpotifyCallback = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const client = axios.create({
    baseURL: 'hhttps://accounts.spotify.com/api/token',
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

  useEffect(() => {
    (async () => {
      const response = await axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        params: qs.stringify({
          code: code,
          redirect_uri: process.env.REACT_APP_SPOTIFY_REDIRECT_URI,
          grant_type: 'authorization_code',
        }),
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
      if (response.data.accessCode === 200) {
        console.log(response.data.accessCode);
      }
    })();
  }, []);
  return (
    <>
      <div className="callback">Callback</div>
      <div>{code}</div>
    </>
  );
};

export default SpotifyCallback;
