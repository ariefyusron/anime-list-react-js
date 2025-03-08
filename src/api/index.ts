import axios from "axios";

const apiAnime = axios.create({
  baseURL: import.meta.env.VITE_HOST_BE
});

apiAnime.interceptors.response.use((res) => res.data);

export { apiAnime };
