interface ImageSet {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

interface Trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: {
    image_url: string;
    small_image_url: string;
    medium_image_url: string;
    large_image_url: string;
    maximum_image_url: string;
  };
}

interface Title {
  type: string;
  title: string;
}

interface Aired {
  from: string;
  to: string;
  prop: {
    from: { day: number; month: number; year: number };
    to: { day: number; month: number; year: number };
  };
  string: string;
}

interface Producer {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Genre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface RelationEntry {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Relation {
  relation: string;
  entry: RelationEntry[];
}

interface Theme {
  openings: string[];
  endings: string[];
}

interface ExternalLink {
  name: string;
  url: string;
}

interface StreamingService {
  name: string;
  url: string;
}

interface AnimeData {
  mal_id: number;
  url: string;
  images: {
    jpg: ImageSet;
    webp: ImageSet;
  };
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: Producer[];
  licensors: Producer[];
  studios: Producer[];
  genres: Genre[];
  explicit_genres: Genre[];
  themes: Genre[];
  demographics: Genre[];
  relations: Relation[];
  theme: Theme;
  external: ExternalLink[];
  streaming: StreamingService[];
}

export interface ResponseGetAnimeDetail {
  data: AnimeData;
}
