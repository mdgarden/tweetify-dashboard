import { AxiosPromise } from "axios";
import client from "./http";
import { spotifyLoginResponse } from "../types/spotify";

type Response = AxiosPromise<spotifyLoginResponse>;

export function fetchLogin(id: string): Response {
  return client.get(`/temp/url/${id}`);
}
