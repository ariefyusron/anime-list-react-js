import {
  ParamsGetAnimeList,
  ResponseGetAnimeList
} from "@interface-type/api-anime";
import { ResponseGetAnimeDetail } from "@interface-type/api-anime-detail";

import { apiAnime } from ".";

const listApi = {
  getAnimeList: (params: ParamsGetAnimeList): Promise<ResponseGetAnimeList> => {
    const queryString = new URLSearchParams(Object.entries(params));
    return apiAnime.get(`anime?${queryString.toString()}`);
  },
  getAnimeDetail: (malId: string): Promise<ResponseGetAnimeDetail> =>
    apiAnime.get(`anime/${malId}/full`)
};

export default listApi;
