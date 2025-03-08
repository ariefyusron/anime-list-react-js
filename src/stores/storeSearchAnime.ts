import { create } from "zustand";

interface StoreSearchAnime {
  search: string;
  setSearch: (value: string) => void;
}

const storeSearchAnime = create<StoreSearchAnime>((set) => ({
  search: "",
  setSearch: (value: string) => set({ search: value })
}));

export default storeSearchAnime;
