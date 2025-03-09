import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import Loader from ".";

describe("Loader Component", () => {
  it("should render the Loader component", () => {
    render(<Loader />);

    const loaderElement = screen.getByTestId("loader");

    expect(loaderElement).toBeInTheDocument();
  });
});
