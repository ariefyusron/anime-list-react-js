export interface ParamsGetAnimeList {
  page?: number;
  limit?: number;
  q?: string;
}

interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

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

interface Broadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

interface Data {
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
  broadcast: Broadcast;
  producers: Producer[];
  licensors: Producer[];
  studios: Producer[];
  genres: Genre[];
  explicit_genres: Genre[];
  themes: Genre[];
  demographics: Genre[];
}

export interface ResponseGetAnimeList {
  pagination: Pagination;
  data: Data[];
}
