import { screen, fireEvent, within } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { InfiniteData } from "@tanstack/react-query";

import { ResponseGetAnimeList } from "@interface-type/api-anime";
import { renderWithTheme } from "@utils/unit-test-container";

import ContentList from ".";

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

const mockNavigate = vi.fn();

describe("ContentList Component", () => {
  vi.mock("react-router", () => ({
    useNavigate: () => mockNavigate
  }));

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("should render the ContentList component isLoading", () => {
    const component = renderWithTheme(
      <ContentList
        isLoading
        data={data as unknown as InfiniteData<ResponseGetAnimeList>}
      />
    );

    expect(screen.getByTestId("component-loader")).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });

  it("should render the ContentList component render first data", () => {
    renderWithTheme(
      <ContentList
        isLoading={false}
        data={data as unknown as InfiniteData<ResponseGetAnimeList>}
      />
    );

    const cardImageElement = screen.getByTestId("1");
    const childElement = within(cardImageElement);
    const imageElement = childElement.getByAltText("image-anime");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "link.url");

    expect(childElement.getByText("Title")).toBeInTheDocument();

    expect(cardImageElement).toMatchSnapshot();

    fireEvent.mouseEnter(cardImageElement);
    expect(childElement.getByText("TV")).toBeInTheDocument();
    expect(childElement.getByText("10 episodes")).toBeInTheDocument();
    expect(childElement.getByText("Action - Comedy")).toBeInTheDocument();

    fireEvent.click(cardImageElement);
    expect(mockNavigate).toHaveBeenCalledWith("/detail/1");
    expect(cardImageElement).toMatchSnapshot();
  });

  it("should render the ContentList component render second data", () => {
    renderWithTheme(
      <ContentList
        isLoading={false}
        data={data as unknown as InfiniteData<ResponseGetAnimeList>}
      />
    );

    const cardImageElement = screen.getByTestId("2");
    const childElement = within(cardImageElement);
    const imageElement = childElement.getByAltText("image-anime");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "link2.url");

    expect(childElement.getByText("Title2")).toBeInTheDocument();

    expect(cardImageElement).toMatchSnapshot();

    fireEvent.mouseEnter(cardImageElement);
    expect(childElement.getByText("Movie")).toBeInTheDocument();
    expect(childElement.getByText("11 min")).toBeInTheDocument();
    expect(childElement.getByText("Horor - Comedy")).toBeInTheDocument();

    fireEvent.click(cardImageElement);
    expect(mockNavigate).toHaveBeenCalledWith("/detail/2");
    expect(cardImageElement).toMatchSnapshot();
  });

  it("should render the ContentList component render list data", () => {
    const component = renderWithTheme(
      <ContentList
        isLoading={false}
        data={data as unknown as InfiniteData<ResponseGetAnimeList>}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
