import { screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

import { ResponseGetAnimeList } from "@interface-type/api-anime";
import { renderWithTheme } from "@utils/unit-test-container";

import CardImage from ".";

const data = {
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
  episodes: 10
} as ResponseGetAnimeList["data"][0];

const mockNavigate = vi.fn();

describe("CardImage Component", () => {
  vi.mock("react-router", () => ({
    useNavigate: () => mockNavigate
  }));

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("should render the CardImage component type TV", () => {
    const component = renderWithTheme(
      <CardImage
        data-testid="component-card-image-container"
        data={{ ...data, type: "TV" }}
      />
    );

    const imageElement = screen.getByAltText("image-anime");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "link.url");

    const titleElement = screen.getByText("Title");
    expect(titleElement).toBeInTheDocument();

    expect(component).toMatchSnapshot();

    const containerElement = screen.getByTestId(
      "component-card-image-container"
    );
    fireEvent.mouseEnter(containerElement);
    expect(screen.getByText("TV")).toBeInTheDocument();
    expect(screen.getByText("10 episodes")).toBeInTheDocument();
    expect(screen.getByText("Action - Comedy")).toBeInTheDocument();

    expect(component).toMatchSnapshot();

    fireEvent.click(containerElement);
    expect(mockNavigate).toHaveBeenCalledWith("/detail/1");
  });

  it("should render the CardImage component type OVA", () => {
    renderWithTheme(
      <CardImage
        data-testid="component-card-image-container"
        data={{ ...data, type: "OVA" }}
      />
    );

    const containerElement = screen.getByTestId(
      "component-card-image-container"
    );
    fireEvent.mouseEnter(containerElement);
    expect(screen.getByText("OVA")).toBeInTheDocument();
    expect(screen.getByText("10 episodes")).toBeInTheDocument();
  });

  it("should render the CardImage component type Special", () => {
    renderWithTheme(
      <CardImage
        data-testid="component-card-image-container"
        data={{ ...data, type: "Special" }}
      />
    );

    const containerElement = screen.getByTestId(
      "component-card-image-container"
    );
    fireEvent.mouseEnter(containerElement);
    expect(screen.getByText("Special")).toBeInTheDocument();
    expect(screen.getByText("10 episodes")).toBeInTheDocument();
  });

  it("should render the CardImage component type Ona", () => {
    renderWithTheme(
      <CardImage
        data-testid="component-card-image-container"
        data={{ ...data, type: "Ona" }}
      />
    );

    const containerElement = screen.getByTestId(
      "component-card-image-container"
    );
    fireEvent.mouseEnter(containerElement);
    expect(screen.getByText("Ona")).toBeInTheDocument();
    expect(screen.getByText("10 episodes")).toBeInTheDocument();
  });

  it("should render the CardImage component type Movie", () => {
    renderWithTheme(
      <CardImage
        data-testid="component-card-image-container"
        data={{ ...data, type: "Movie" }}
      />
    );

    const containerElement = screen.getByTestId(
      "component-card-image-container"
    );
    fireEvent.mouseEnter(containerElement);
    expect(screen.getByText("Movie")).toBeInTheDocument();
    expect(screen.getByText("10 min")).toBeInTheDocument();
  });

  it("should render the CardImage component type Music", () => {
    renderWithTheme(
      <CardImage
        data-testid="component-card-image-container"
        data={{ ...data, type: "Music" }}
      />
    );

    const containerElement = screen.getByTestId(
      "component-card-image-container"
    );
    fireEvent.mouseEnter(containerElement);
    expect(screen.getByText("Music")).toBeInTheDocument();
    expect(screen.getByText("10 min")).toBeInTheDocument();
  });

  it("should render the CardImage component type CM", () => {
    renderWithTheme(
      <CardImage
        data-testid="component-card-image-container"
        data={{ ...data, type: "CM" }}
      />
    );

    const containerElement = screen.getByTestId(
      "component-card-image-container"
    );
    fireEvent.mouseEnter(containerElement);
    expect(screen.getByText("CM")).toBeInTheDocument();
    expect(screen.getByText("10 min")).toBeInTheDocument();
  });

  it("should render the CardImage component type PV", () => {
    renderWithTheme(
      <CardImage
        data-testid="component-card-image-container"
        data={{ ...data, type: "PV" }}
      />
    );

    const containerElement = screen.getByTestId(
      "component-card-image-container"
    );
    fireEvent.mouseEnter(containerElement);
    expect(screen.getByText("PV")).toBeInTheDocument();
    expect(screen.getByText("10 min")).toBeInTheDocument();
  });

  it("should render the CardImage component type TV Special", () => {
    renderWithTheme(
      <CardImage
        data-testid="component-card-image-container"
        data={{ ...data, type: "TV Special" }}
      />
    );

    const containerElement = screen.getByTestId(
      "component-card-image-container"
    );
    fireEvent.mouseEnter(containerElement);
    expect(screen.getByText("TV Special")).toBeInTheDocument();
    expect(screen.getByText("10 min")).toBeInTheDocument();
  });
});
