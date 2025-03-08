import { useGetAnimeListSearch } from "../../hooks/useAnime";

const Search = () => {
  const {
    data,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
    handleSearch,
    valueSearch
  } = useGetAnimeListSearch();

  console.log("isFetchingNextPage", isFetchingNextPage);
  console.log("isLoading", isLoading);
  console.log("data", data);

  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        placeholder="search"
        value={valueSearch}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <button onClick={() => fetchNextPage()}>Load More</button>
    </div>
  );
};

export default Search;
