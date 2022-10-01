import axios from "axios";

const client = axios.create({
  baseURL: "/api",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

client.interceptors.response.use(
  (response) => response,
  (error) => error.response
);

export default client;
