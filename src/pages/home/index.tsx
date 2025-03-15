import { useGetAnimeList } from "@hooks/useAnime";
import InfiniteScroll from "@components/infinite-scroll";
import Loader from "@components/loader";
import ContentList from "@components/content-list";

const Home = () => {
  const { data, fetchNextPage, isLoading, isFetchingNextPage, hasNextPage } =
    useGetAnimeList();

  return (
    <>
      <ContentList isLoading={isLoading} data={data} />

      {hasNextPage && (
        <Loader
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "50px 0"
          }}
        />
      )}

      {hasNextPage && !isFetchingNextPage && (
        <InfiniteScroll
          loadMore={() => {
            fetchNextPage();
          }}
        />
      )}
    </>
  );
};

export default Home;
