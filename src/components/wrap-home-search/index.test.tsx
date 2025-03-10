import { useState } from "react";
import { screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";

import { renderWithTheme } from "../../utils/unit-test-container";

import WrapHomeSearch from ".";

const mockNavigate = vi.fn();
vi.mock("react-router", async () => {
  const actual =
    await vi.importActual<typeof import("react-router")>("react-router");

  return {
    ...actual,
    useNavigate: vi.fn(() => mockNavigate),
    useSearchParams: vi.fn(() => [new URLSearchParams(), vi.fn()])
  };
});

const mockHandleSearch = vi.fn();
function useGetAnimeListSearchMock() {
  const [searchValue, setSearchValue] = useState("");

  return {
    handleSearch: (val: string) => {
      setSearchValue(val); // Update state di dalam mock
      mockHandleSearch(val);
    },
    valueSearch: searchValue
  };
}

vi.mock("../../hooks/useAnime", () => ({
  useGetAnimeListSearch: useGetAnimeListSearchMock
}));

describe("WrapHomeSearch Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the WrapHomeSearch component initial and handle search 1 character", async () => {
    renderWithTheme(<WrapHomeSearch />);

    expect(screen.getByText("Anime")).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText("search");
    const clearButton = screen.getByText("clear");

    expect(searchInput).toHaveValue("");
    expect(clearButton).toBeDisabled();

    fireEvent.change(searchInput, { target: { value: "A" } });
    expect(mockHandleSearch).toHaveBeenCalledWith("A");
    expect(mockNavigate).toHaveBeenCalledWith("/search?q=A");
    expect(searchInput).toHaveValue("A");
    expect(clearButton).toBeEnabled();
  });

  it("should render the WrapHomeSearch component handle search >=2 character", async () => {
    renderWithTheme(<WrapHomeSearch />);

    const searchInput = screen.getByPlaceholderText("search");
    const clearButton = screen.getByText("clear");

    fireEvent.change(searchInput, { target: { value: "Anime" } });
    expect(mockHandleSearch).toHaveBeenCalledWith("Anime");
    expect(searchInput).toHaveValue("Anime");
    expect(clearButton).toBeEnabled();
  });

  it("should render the WrapHomeSearch component handle clear input", async () => {
    renderWithTheme(<WrapHomeSearch />);

    const searchInput = screen.getByPlaceholderText("search");
    const clearButton = screen.getByText("clear");

    fireEvent.change(searchInput, { target: { value: "Test" } });
    expect(mockHandleSearch).toHaveBeenCalledWith("Test");
    expect(clearButton).toBeEnabled();

    fireEvent.change(searchInput, { target: { value: "" } });
    expect(mockHandleSearch).toHaveBeenCalledWith("");
    expect(mockNavigate).toHaveBeenCalledWith("/");
    expect(searchInput).toHaveValue("");
    expect(clearButton).toBeDisabled();
  });

  it("should render the WrapHomeSearch component handle clear input from button", async () => {
    renderWithTheme(<WrapHomeSearch />);

    const searchInput = screen.getByPlaceholderText("search");
    const clearButton = screen.getByText("clear");

    fireEvent.change(searchInput, { target: { value: "Test" } });
    expect(mockHandleSearch).toHaveBeenCalledWith("Test");
    expect(clearButton).toBeEnabled();

    fireEvent.click(clearButton);
    expect(mockHandleSearch).toHaveBeenCalledWith("");
    expect(mockNavigate).toHaveBeenCalledWith("/");
    expect(searchInput).toHaveValue("");
    expect(clearButton).toBeDisabled();
  });
});
