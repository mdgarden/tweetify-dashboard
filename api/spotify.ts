import { AxiosPromise } from 'axios';
import client from './http';
import { SpotifyLoginResponse } from '../types/spotify';

type Response = AxiosPromise<SpotifyLoginResponse>;

export function fetchLogin(id: string): Response {
  return client.get(`/temp/url/${id}`);
}
