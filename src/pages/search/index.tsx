import { InfiniteData } from "@tanstack/react-query";

import { useGetAnimeListSearch } from "@hooks/useAnime";
import ContentList from "@components/content-list";
import { ResponseGetAnimeList } from "@interface-type/api-anime";

import { Container } from "./styles";

const Search = () => {
  const { data, isFetching: isLoading, valueSearch } = useGetAnimeListSearch();

  return (
    <>
      {isLoading || (data?.data ?? []).length > 1 ? (
        <ContentList
          isLoading={isLoading}
          data={{ pages: [data] } as InfiniteData<ResponseGetAnimeList>}
        />
      ) : (
        <Container>
          <div>"{valueSearch}" tidak ditemukan</div>
        </Container>
      )}
    </>
  );
};

export default Search;
