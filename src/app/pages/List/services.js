import axios from "axios";

export const REQUEST_POKE = process.env.REACT_APP_API;

export function getPokes(page) {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(`${REQUEST_POKE}?limit=${page}`);
}
