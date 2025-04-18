import { InfiniteData } from "@tanstack/react-query";

import Loader from "@components/loader";
import CardImage from "@components/card-image";
import { ResponseGetAnimeList } from "@interface-type/api-anime";

import { Content } from "./styles";

interface ContentListProps {
  data?: InfiniteData<ResponseGetAnimeList>;
  isLoading: boolean;
}

const ContentList = ({ isLoading, data }: ContentListProps) => (
  <>
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
        {data?.pages?.map((itemPage) =>
          itemPage?.data?.map((item) => (
            <CardImage
              data-testid={String(item.mal_id)}
              key={item?.mal_id}
              data={item}
            />
          ))
        )}
      </Content>
    )}
  </>
);

export default ContentList;
