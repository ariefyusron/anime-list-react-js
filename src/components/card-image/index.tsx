import { useState } from "react";

import { ResponseGetAnimeList } from "../../types/api-anime";
import { animeType } from "../../constants/enum";

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
}

const CardImage = ({ data }: CardImageProps) => {
  const [isHover, setIsHover] = useState(false);

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
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
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

export default CardImage;
