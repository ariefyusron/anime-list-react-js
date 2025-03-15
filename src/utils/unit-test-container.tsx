import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import themes from "@themes";

const queryClient = new QueryClient();

const renderWithTheme = (ui: ReactNode) => {
  return render(
    <ThemeProvider theme={themes}>
      <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
    </ThemeProvider>
  );
};

export { renderWithTheme };
