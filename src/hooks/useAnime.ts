import { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

import apiAnime from "../api/api-anime";

const queryKey = {
  getAnimeList: ["getAnimeList"],
  getAnimeListSearch: (q: string) => ["getAnimeListSearch", [q]]
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

let timeOutSearchAnime: number | undefined;

export const useGetAnimeListSearch = () => {
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearch(searchParams.get("q") ?? "");
  }, []);

  const handleSearch = (value: string) => {
    clearTimeout(timeOutSearchAnime);
    setSearchParams({
      q: value
    });
    timeOutSearchAnime = setTimeout(() => {
      setSearch(value);
    }, 1000);
  };

  const query = useInfiniteQuery({
    queryKey: queryKey.getAnimeListSearch(search),
    queryFn: ({ pageParam }) =>
      apiAnime.getAnimeList({
        page: pageParam as number,
        limit: 25,
        q: search
      }),
    initialPageParam: 1,
    getNextPageParam: (res) =>
      res.pagination.has_next_page
        ? res.pagination.current_page + 1
        : undefined,
    enabled: !!search
  });

  return { ...query, handleSearch, valueSearch: searchParams.get("q") ?? "" };
};
