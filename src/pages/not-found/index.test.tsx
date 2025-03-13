import { screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { renderWithTheme } from "../../utils/unit-test-container";

import NotFound from ".";

describe("NotFound Page", () => {
  it("render page", () => {
    const component = renderWithTheme(<NotFound />);

    const element = screen.getByText("404 | Not Found");

    expect(element).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });
});
