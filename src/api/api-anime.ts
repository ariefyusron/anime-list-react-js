import { apiAnime } from ".";
import { ParamsGetAnimeList, ResponseGetAnimeList } from "../types/api-anime";

const listApi = {
  getAnimeList: (params: ParamsGetAnimeList): Promise<ResponseGetAnimeList> => {
    const queryString = new URLSearchParams(Object.entries(params));
    return apiAnime.get(`anime?${queryString.toString()}`);
  }
};

export default listApi;
