import { lazy } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "styled-components";

import themes from "./themes";
import { Container } from "./styles";

const WrapHomeSearch = lazy(() => import("./components/wrap-home-search"));

const HomePage = lazy(() => import("./pages/home"));
const SearchPage = lazy(() => import("./pages/search"));
const DetailPage = lazy(() => import("./pages/detail"));

const NotFoundPage = lazy(() => import("./pages/not-found"));

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themes}>
        <Container>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<WrapHomeSearch />}>
                <Route index element={<HomePage />} />
                <Route path="search" element={<SearchPage />} />
              </Route>

              <Route path="detail/:malId" element={<DetailPage />} />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
