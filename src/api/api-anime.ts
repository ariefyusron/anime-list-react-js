import { apiAnime } from ".";
import { ParamsGetAnimeList, ResponseGetAnimeList } from "../types/api-anime";
import { ResponseGetAnimeDetail } from "../types/api-anime-detail";

const listApi = {
  getAnimeList: (params: ParamsGetAnimeList): Promise<ResponseGetAnimeList> => {
    const queryString = new URLSearchParams(Object.entries(params));
    return apiAnime.get(`anime?${queryString.toString()}`);
  },
  getAnimeDetail: (malId: string): Promise<ResponseGetAnimeDetail> =>
    apiAnime.get(`anime/${malId}/full`)
};

export default listApi;
