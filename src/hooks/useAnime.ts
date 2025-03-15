import { useEffect } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

import apiAnime from "@api/api-anime";
import storeSearchAnime from "@stores/storeSearchAnime";

const queryKey = {
  getAnimeList: ["getAnimeList"],
  getAnimeListSearch: (q: string) => ["getAnimeListSearch", [q]],
  getAnimeDetail: (malId: string) => ["getAnimeDetail", [malId]]
};

export const useGetAnimeList = () => {
  const query = useInfiniteQuery({
    queryKey: queryKey.getAnimeList,
    queryFn: ({ pageParam }) =>
      apiAnime.getAnimeList({ page: pageParam as number, limit: 25 }),
    initialPageParam: 1,
    getNextPageParam: (res) =>
      res.pagination.has_next_page ? res.pagination.current_page + 1 : undefined
  });

  return query;
};

let timeOutSearchAnime: NodeJS.Timeout | undefined;

export const useGetAnimeListSearch = () => {
  const search = storeSearchAnime((state) => state.search);
  const setSearch = storeSearchAnime((state) => state.setSearch);

  const [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get("q") ?? "";

  const handleSearch = (value: string) => {
    clearTimeout(timeOutSearchAnime);
    setSearchParams({
      q: value
    });
    timeOutSearchAnime = setTimeout(() => {
      setSearch(value);
    }, 1000);
  };

  useEffect(() => {
    handleSearch(searchParams.get("q") ?? "");
  }, []);

  const query = useQuery({
    queryKey: queryKey.getAnimeListSearch(search),
    queryFn: () =>
      apiAnime.getAnimeList({
        page: 1,
        limit: 25,
        q: search
      }),
    enabled: !!search
  });

  return { ...query, handleSearch, valueSearch: value };
};

export const useGetAnimeDetail = (malId: string) => {
  const query = useQuery({
    queryKey: queryKey.getAnimeDetail(malId),
    queryFn: () => apiAnime.getAnimeDetail(malId)
  });

  return query;
};
