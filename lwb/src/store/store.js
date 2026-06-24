import { create } from "zustand";

const useStore = create((set, get) => ({
    query: "",
    favorites: [],

    setQuery: (query) => set({ query }),

    toggleFavorite: (movie) => {
        const { favorites } = get();
        const exist = favorites.find((m) => m.id === movie.id);

        if (exist) {
            set({ favorites: favorites.filter((m) => m.id !== movie.id) });
        } else {
            set({ favorites: [...favorites, movie] });
        }
    },
}))

export default useStore;
