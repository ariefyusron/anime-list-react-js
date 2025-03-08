import axios from "axios";

export const apiAnime = axios.create({
  baseURL: import.meta.env.VITE_HOST_BE
});
