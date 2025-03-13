import { useState } from "react";
import { screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

import { renderWithTheme } from "../../utils/unit-test-container";

import WrapHomeSearch from ".";

const mockNavigate = vi.fn();

function useGetAnimeListSearchMock() {
  const [searchValue, setSearchValue] = useState("");

  return {
    handleSearch: setSearchValue,
    valueSearch: searchValue
  };
}

describe("WrapHomeSearch Component", () => {
  vi.mock("react-router", async () => {
    const actual = await vi.importActual("react-router");

    return {
      ...actual,
      useNavigate: () => mockNavigate
    };
  });

  beforeEach(() => {
    mockNavigate.mockClear();

    vi.mock("../../hooks/useAnime", () => ({
      useGetAnimeListSearch: useGetAnimeListSearchMock
    }));
  });

  it("Snapshot Button Disabled", () => {
    const component = renderWithTheme(<WrapHomeSearch />);

    expect(component).toMatchSnapshot();
  });

  it("Snapshot Button Enabled", () => {
    const component = renderWithTheme(<WrapHomeSearch />);

    const searchInput = screen.getByPlaceholderText("search");
    fireEvent.change(searchInput, { target: { value: "Search" } });

    expect(component).toMatchSnapshot();
  });

  it("render component initial and handle search 1 character", () => {
    renderWithTheme(<WrapHomeSearch />);

    expect(screen.getByText("Anime")).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText("search");
    const clearButton = screen.getByText("clear");

    expect(searchInput).toHaveValue("");
    expect(clearButton).toBeDisabled();

    fireEvent.change(searchInput, { target: { value: "A" } });
    expect(mockNavigate).toHaveBeenCalledWith("/search?q=A");
    expect(searchInput).toHaveValue("A");
    expect(clearButton).toBeEnabled();
  });

  it("render component handle search >=2 character", () => {
    renderWithTheme(<WrapHomeSearch />);

    const searchInput = screen.getByPlaceholderText("search");
    const clearButton = screen.getByText("clear");

    fireEvent.change(searchInput, { target: { value: "Anime" } });
    expect(searchInput).toHaveValue("Anime");
    expect(clearButton).toBeEnabled();
  });

  it("render component handle clear input", () => {
    renderWithTheme(<WrapHomeSearch />);

    const searchInput = screen.getByPlaceholderText("search");
    const clearButton = screen.getByText("clear");

    fireEvent.change(searchInput, { target: { value: "Test" } });
    expect(searchInput).toHaveValue("Test");
    expect(clearButton).toBeEnabled();

    fireEvent.change(searchInput, { target: { value: "" } });
    expect(mockNavigate).toHaveBeenCalledWith("/");
    expect(searchInput).toHaveValue("");
    expect(clearButton).toBeDisabled();
  });

  it("render component handle clear input from button", () => {
    renderWithTheme(<WrapHomeSearch />);

    const searchInput = screen.getByPlaceholderText("search");
    const clearButton = screen.getByText("clear");

    fireEvent.change(searchInput, { target: { value: "Test" } });
    expect(searchInput).toHaveValue("Test");
    expect(clearButton).toBeEnabled();

    fireEvent.click(clearButton);
    expect(mockNavigate).toHaveBeenCalledWith("/");
    expect(searchInput).toHaveValue("");
    expect(clearButton).toBeDisabled();
  });
});
