import { screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

import { renderWithTheme } from "../../utils/unit-test-container";

import DetailPage from ".";

const data = {
  data: {
    title: "Title",
    type: "Type",
    episodes: 12,
    status: "Status",
    aired: { string: "Aired" },
    broadcast: { string: "Broadcast" },
    producers: [{ name: "Producers" }, { name: "Producers2" }],
    licensors: [{ name: "Licensors" }, { name: "Licensors2" }],
    studios: [{ name: "Studios" }, { name: "Studios2" }],
    source: "Source",
    genres: [{ name: "Genres" }, { name: "Genres2" }],
    themes: [{ name: "Themes" }, { name: "Themes2" }],
    demographics: [{ name: "Demographics" }, { name: "Demographics2" }],
    duration: "Duration",
    rating: "Rating",
    score: 12,
    rank: 12,
    popularity: 12,
    members: 12,
    favorites: 12,
    images: {
      webp: {
        large_image_url: "image_url.large"
      }
    },
    synopsis: "ini panjang"
  }
};

let mockAnimeDetail = {
  data,
  isLoading: false
};

const mockNavigate = vi.fn();

describe("Detail Page", () => {
  vi.mock("react-router", async () => {
    const actual = await vi.importActual("react-router");

    return {
      ...actual,
      useNavigate: vi.fn(() => mockNavigate)
    };
  });

  beforeEach(() => {
    vi.mock("../../hooks/useAnime", () => ({
      useGetAnimeDetail: vi.fn(() => mockAnimeDetail)
    }));

    mockNavigate.mockClear();
  });

  it("render the Detail Page Loading Snapshot", () => {
    mockAnimeDetail = {
      data,
      isLoading: true
    };
    const component = renderWithTheme(<DetailPage />);

    expect(component).toMatchSnapshot();
  });

  it("render the Detail Page With Data Snapshot", () => {
    mockAnimeDetail = {
      data,
      isLoading: false
    };
    const component = renderWithTheme(<DetailPage />);

    expect(component).toMatchSnapshot();
  });

  it("should render the Detail Page Loading", () => {
    mockAnimeDetail = {
      data,
      isLoading: true
    };

    renderWithTheme(<DetailPage />);

    const buttonBack = screen.getByText("Back");
    expect(buttonBack).toBeInTheDocument();
    fireEvent.click(buttonBack);
    expect(mockNavigate).toHaveBeenCalledWith(-1);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.getByTestId("component-loader")).toBeInTheDocument();
  });

  it("should render the Detail Page With Data", () => {
    mockAnimeDetail = {
      data,
      isLoading: false
    };

    renderWithTheme(<DetailPage />);

    expect(screen.getByText("Title")).toBeInTheDocument();

    const imageElement = screen.getByAltText("image-detail");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "image_url.large");

    expect(screen.getByText("Informasi")).toBeInTheDocument();
    expect(screen.getByText("Type: Type")).toBeInTheDocument();
    expect(screen.getByText("Episodes: 12")).toBeInTheDocument();
    expect(screen.getByText("Status: Status")).toBeInTheDocument();
    expect(screen.getByText("Aired: Aired")).toBeInTheDocument();
    expect(screen.getByText("Broadcast: Broadcast")).toBeInTheDocument();
    expect(
      screen.getByText("Producers: Producers, Producers2")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Licensors: Licensors, Licensors2")
    ).toBeInTheDocument();
    expect(screen.getByText("Studios: Studios, Studios2")).toBeInTheDocument();
    expect(screen.getByText("Source: Source")).toBeInTheDocument();
    expect(screen.getByText("Genres: Genres, Genres2")).toBeInTheDocument();
    expect(screen.getByText("Themes: Themes, Themes2")).toBeInTheDocument();
    expect(
      screen.getByText("Demographics: Demographics, Demographics2")
    ).toBeInTheDocument();
    expect(screen.getByText("Duration: Duration")).toBeInTheDocument();
    expect(screen.getByText("Rating: Rating")).toBeInTheDocument();

    expect(screen.getByText("Statistic")).toBeInTheDocument();
    expect(screen.getByText("Score: 12")).toBeInTheDocument();
    expect(screen.getByText("Ranked: 12")).toBeInTheDocument();
    expect(screen.getByText("Popularity: 12")).toBeInTheDocument();
    expect(screen.getByText("Members: 12")).toBeInTheDocument();
    expect(screen.getByText("Favorites: 12")).toBeInTheDocument();

    expect(screen.getByText("Synopsis")).toBeInTheDocument();
    expect(screen.getByText("ini panjang")).toBeInTheDocument();
  });
});
