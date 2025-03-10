import { useParams, useNavigate } from "react-router";

import { useGetAnimeDetail } from "../../hooks/useAnime";
import Loader from "../../components/loader";

import {
  Topbar,
  Title,
  ButtonBack,
  Content,
  Image,
  WrapImage,
  Text
} from "./styles";

const Detail = () => {
  const { malId } = useParams<{ malId: string }>();
  const navigate = useNavigate();

  const { data, isLoading } = useGetAnimeDetail(String(malId));

  const informationData = {
    Type: data?.data.type,
    Episodes: data?.data.episodes,
    Status: data?.data.status,
    Aired: data?.data.aired.string,
    Broadcast: data?.data.broadcast.string,
    Producers: data?.data.producers.map((item) => item.name).join(", "),
    Licensors: data?.data.licensors.map((item) => item.name).join(", "),
    Studios: data?.data.studios.map((item) => item.name).join(", "),
    Source: data?.data.source,
    Genres: data?.data.genres.map((item) => item.name).join(", "),
    Themes: data?.data.themes.map((item) => item.name).join(", "),
    Demographics: data?.data.demographics.map((item) => item.name).join(", "),
    Duration: data?.data.duration,
    Rating: data?.data.rating
  };

  const statisticData = {
    Score: data?.data.score,
    Ranked: data?.data.rank,
    Popularity: data?.data.popularity,
    Members: data?.data.members,
    Favorites: data?.data.favorites
  };

  return (
    <>
      <Topbar>
        <ButtonBack onClick={() => navigate(-1)}>Back</ButtonBack>
        <Title>{isLoading ? "Loading..." : data?.data.title}</Title>
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
          <WrapImage>
            <Image
              alt="image-detail"
              src={data?.data.images.webp.large_image_url}
            />

            <Text>{data?.data.title_japanese}</Text>
            <Text style={{ marginTop: "8px", borderBottom: "1px solid #fff" }}>
              Informasi
            </Text>
            {Object.keys(informationData).map((item) => (
              <Text key={item} style={{ marginTop: "4px" }}>
                {`${item}: ${informationData[item as keyof typeof informationData]}`}
              </Text>
            ))}
          </WrapImage>

          <WrapImage style={{ flex: 1 }}>
            <div>
              <Text
                style={{ marginTop: "8px", borderBottom: "1px solid #fff" }}
              >
                Statistic
              </Text>
              {Object.keys(statisticData).map((item) => (
                <Text key={item} style={{ marginTop: "4px" }}>
                  {`${item}: ${statisticData[item as keyof typeof statisticData]}`}
                </Text>
              ))}
            </div>
            <div>
              <Text
                style={{
                  marginTop: "8px",
                  borderBottom: "1px solid #fff",
                  marginBottom: "4px"
                }}
              >
                Synopsis
              </Text>
              <Text>{data?.data.synopsis}</Text>
            </div>
          </WrapImage>
        </Content>
      )}
    </>
  );
};

export default Detail;
