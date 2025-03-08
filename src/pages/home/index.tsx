import { useGetAnimeList } from "../../hooks/useAnime";

const Home = () => {
  const { data, fetchNextPage, isLoading, isFetchingNextPage } =
    useGetAnimeList();

  console.log("isFetchingNextPage", isFetchingNextPage);
  console.log("isLoading", isLoading);
  console.log("data", data);

  return (
    <div>
      <div>Home</div>
      <button onClick={() => fetchNextPage()}>Load more</button>
    </div>
  );
};

export default Home;
