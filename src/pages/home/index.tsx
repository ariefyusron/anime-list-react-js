import { useGetAnimeList } from "../../hooks/useAnime";
import CardImage from "../../components/card-image";
import InfiniteScroll from "../../components/infinite-scroll";
import Loader from "../../components/loader";

import { Topbar, Title, Content } from "./styles";

const Home = () => {
  const { data, fetchNextPage, isLoading, isFetchingNextPage, hasNextPage } =
    useGetAnimeList();

  console.log("hasNextPage", hasNextPage);
  console.log("isFetchingNextPage", isFetchingNextPage);

  return (
    <>
      <Topbar>
        <Title>Anime</Title>
      </Topbar>

      {isLoading ? (
        <Loader
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px"
          }}
        />
      ) : (
        <Content>
          {data?.pages.map((itemPage) =>
            itemPage.data.map((item) => (
              <CardImage key={item.mal_id} data={item} />
            ))
          )}
        </Content>
      )}

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
