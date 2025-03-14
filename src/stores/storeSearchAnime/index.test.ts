import { describe, it, expect } from "vitest";

import storeSearchAnime from ".";

describe("storeSearchAnime Zustand Store", () => {
  it("initial state", () => {
    const search = storeSearchAnime.getState().search;
    expect(search).toBe("");
  });

  it("should update search value", () => {
    storeSearchAnime.getState().setSearch("Search");
    expect(storeSearchAnime.getState().search).toBe("Search");
  });
});
