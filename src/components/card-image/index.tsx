import { useState, memo } from "react";
import { useNavigate } from "react-router";

import { ResponseGetAnimeList } from "@interface-type/api-anime";
import { animeType } from "@constants/enum";

import {
  Container,
  Image,
  WrapContent,
  Title,
  TypeText,
  WrapType,
  TextDuration,
  TextGenre
} from "./styles";

interface CardImageProps {
  data: ResponseGetAnimeList["data"][0];
  "data-testid": string;
}

const CardImage = ({ data, "data-testid": dataTestId }: CardImageProps) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  const getTextDuration = () => {
    const type = data.type.toLocaleLowerCase();
    if (
      type === animeType.tv ||
      type === animeType.ova ||
      type === animeType.special ||
      type === animeType.ona
    ) {
      return `${data.episodes ?? "-"} episodes`;
    } else if (
      type === animeType.movie ||
      type === animeType.music ||
      type === animeType.cm ||
      type === animeType.pv ||
      type.replace(" ", "_") === animeType.tvSpecial
    ) {
      return `${data.duration ?? "-"}`;
    }

    return "";
  };

  return (
    <Container
      data-testid={dataTestId}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => {
        navigate(`/detail/${data.mal_id}`);
      }}
    >
      <Image src={data.images.webp.image_url} alt="image-anime" />
      <WrapContent>
        <Title
          style={
            isHover
              ? { textOverflow: "unset", WebkitLineClamp: "unset" }
              : undefined
          }
        >
          {data.title}
        </Title>
        {isHover && (
          <>
            <WrapType>
              <TypeText>{data.type}</TypeText>
              <TextDuration>{getTextDuration()}</TextDuration>
            </WrapType>

            <TextGenre>
              {data.genres.map((item) => item.name).join(" - ")}
            </TextGenre>
          </>
        )}
      </WrapContent>
    </Container>
  );
};

export default memo(CardImage);
