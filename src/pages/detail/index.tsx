import { useParams } from "react-router";

import { useGetAnimeDetail } from "../../hooks/useAnime";

const Detail = () => {
  const { malId } = useParams<{ malId: string }>();
  const { data, isLoading } = useGetAnimeDetail(String(malId));

  console.log(data);
  console.log(isLoading);

  return <div>Detail</div>;
};

export default Detail;
