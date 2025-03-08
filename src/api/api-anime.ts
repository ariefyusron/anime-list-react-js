import { apiAnime } from ".";

interface ParamsGetAnimeList {
  page?: number;
  limit?: number;
  q?: string;
}

const listApi = {
  getAnimeList: (params: ParamsGetAnimeList) =>
    apiAnime.get(
      `anime?page=${params.page}&limit=${params.limit}&q=${params.q}`
    )
};

export default listApi;
