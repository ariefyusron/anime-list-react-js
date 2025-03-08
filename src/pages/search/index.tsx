import { InfiniteData } from "@tanstack/react-query";

import { useGetAnimeListSearch } from "../../hooks/useAnime";
import ContentList from "../../components/content-list";
import { ResponseGetAnimeList } from "../../types/api-anime";

const Search = () => {
  const { data, isFetching: isLoading } = useGetAnimeListSearch();

  return (
    <>
      <ContentList
        isLoading={isLoading}
        data={{ pages: [data] } as InfiniteData<ResponseGetAnimeList>}
      />
    </>
  );
};

export default Search;
