import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

import themes from "../themes";

const renderWithTheme = (ui: ReactNode) => {
  return render(<ThemeProvider theme={themes}>{ui}</ThemeProvider>);
};

export { renderWithTheme };
