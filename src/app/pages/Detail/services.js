import axios from "axios";

export const REQUEST_POKE = "https://pokeapi.co/api/v2/pokemon/";

export function getPoke(id) {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(`${REQUEST_POKE}${id}`);
}
