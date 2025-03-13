import { screen, fireEvent, within } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

import { renderWithTheme } from "../../utils/unit-test-container";

import HomePage from ".";

const data = {
  pages: [
    {
      data: [
        {
          mal_id: 1,
          images: {
            webp: {
              image_url: "link.url"
            }
          },
          title: "Title",
          genres: [
            {
              name: "Action"
            },
            {
              name: "Comedy"
            }
          ],
          duration: "10 min",
          episodes: 10,
          type: "TV"
        },
        {
          mal_id: 2,
          images: {
            webp: {
              image_url: "link2.url"
            }
          },
          title: "Title2",
          genres: [
            {
              name: "Horor"
            },
            {
              name: "Comedy"
            }
          ],
          duration: "11 min",
          episodes: 11,
          type: "Movie"
        }
      ]
    }
  ]
};

let mockAnimeList = {
  isLoading: false,
  data,
  hasNextPage: false
};

const mockNavigate = vi.fn();

describe("HomePage Component", () => {
  vi.mock("react-router", () => ({
    useNavigate: () => mockNavigate
  }));

  beforeEach(() => {
    vi.mock("../../hooks/useAnime", () => ({
      useGetAnimeList: vi.fn(() => mockAnimeList)
    }));

    mockNavigate.mockClear();
  });

  it("render isLoading Snapshot", () => {
    mockAnimeList = {
      isLoading: true,
      data,
      hasNextPage: false
    };

    const component = renderWithTheme(<HomePage />);

    expect(component).toMatchSnapshot();
  });

  it("render hasNextPage false Snapshot", () => {
    mockAnimeList = {
      isLoading: false,
      data,
      hasNextPage: false
    };

    const component = renderWithTheme(<HomePage />);

    expect(component).toMatchSnapshot();
  });

  it("should render the HomePage component isLoading", () => {
    mockAnimeList = {
      isLoading: true,
      data,
      hasNextPage: false
    };

    renderWithTheme(<HomePage />);

    expect(screen.getByTestId("component-loader")).toBeInTheDocument();
  });

  it("should render the HomePage component hasNextPage", () => {
    mockAnimeList = {
      isLoading: false,
      data,
      hasNextPage: false
    };

    renderWithTheme(<HomePage />);

    // item first
    const cardImageElementFirst = screen.getByTestId("1");
    const childElementFirst = within(cardImageElementFirst);
    const imageElementFirst = childElementFirst.getByAltText("image-anime");
    expect(imageElementFirst).toBeInTheDocument();
    expect(imageElementFirst).toHaveAttribute("src", "link.url");

    expect(childElementFirst.getByText("Title")).toBeInTheDocument();

    fireEvent.mouseEnter(cardImageElementFirst);
    expect(childElementFirst.getByText("TV")).toBeInTheDocument();
    expect(childElementFirst.getByText("10 episodes")).toBeInTheDocument();
    expect(childElementFirst.getByText("Action - Comedy")).toBeInTheDocument();

    fireEvent.click(cardImageElementFirst);
    expect(mockNavigate).toHaveBeenCalledWith("/detail/1");
    mockNavigate.mockClear();

    //item secondary
    const cardImageElementSecond = screen.getByTestId("2");
    const childElementSecond = within(cardImageElementSecond);
    const imageElementSecond = childElementSecond.getByAltText("image-anime");
    expect(imageElementSecond).toBeInTheDocument();
    expect(imageElementSecond).toHaveAttribute("src", "link2.url");

    expect(childElementSecond.getByText("Title2")).toBeInTheDocument();

    fireEvent.mouseEnter(cardImageElementSecond);
    expect(childElementSecond.getByText("Movie")).toBeInTheDocument();
    expect(childElementSecond.getByText("11 min")).toBeInTheDocument();
    expect(childElementSecond.getByText("Horor - Comedy")).toBeInTheDocument();

    fireEvent.click(cardImageElementSecond);
    expect(mockNavigate).toHaveBeenCalledWith("/detail/2");
    mockNavigate.mockClear();
  });
});
