import { Outlet, useNavigate } from "react-router";

import { useGetAnimeListSearch } from "@hooks/useAnime";

import { Topbar, Title, Input, Button } from "./styles";

const WrapHomeSearch = () => {
  const navigate = useNavigate();

  const { handleSearch, valueSearch } = useGetAnimeListSearch();

  return (
    <>
      <Topbar>
        <Title>Anime</Title>
        <div>
          <Input
            placeholder="search"
            value={valueSearch}
            onChange={(res) => {
              const value = res.target.value;
              handleSearch(value);

              if (value.length === 1) {
                navigate(`/search?q=${value}`);
              } else if (value.length < 1) {
                navigate(`/`);
              }
            }}
          />
          <Button
            disabled={!valueSearch}
            onClick={() => {
              handleSearch("");
              navigate(`/`);
            }}
          >
            clear
          </Button>
        </div>
      </Topbar>

      <Outlet />
    </>
  );
};

export default WrapHomeSearch;
