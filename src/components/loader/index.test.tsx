import { screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { renderWithTheme } from "../../utils/unit-test-container";

import Loader from ".";

describe("Loader Component", () => {
  it("should render the Loader component", () => {
    const component = renderWithTheme(<Loader />);

    const loaderElement = screen.getByTestId("component-loader");

    expect(loaderElement).toBeInTheDocument();
    expect(component).toMatchSnapshot();
  });
});
