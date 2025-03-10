import { screen, fireEvent, within } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { InfiniteData } from "@tanstack/react-query";

import { ResponseGetAnimeList } from "../../types/api-anime";
import { renderWithTheme } from "../../utils/unit-test-container";

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
vi.mock("react-router", () => ({
  useNavigate: () => mockNavigate
}));

describe("ContentList Component", () => {
  it("should render the ContentList component isLoading", () => {
    renderWithTheme(
      <ContentList
        isLoading
        data={data as unknown as InfiniteData<ResponseGetAnimeList>}
      />
    );

    expect(screen.getByTestId("component-loader")).toBeInTheDocument();
  });

  it("should render the ContentList component render list data", () => {
    renderWithTheme(
      <ContentList
        isLoading={false}
        data={data as unknown as InfiniteData<ResponseGetAnimeList>}
      />
    );

    //item first
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
