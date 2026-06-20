import { create } from "zustand";
import { searchMovies } from "../api/tmdbApi";

const useStore = create((set, get) => ({
    query: "",
    movies: [],
    favorites: [],

    setQuery: (query) => set({ query }),

    fetchMovies: async () => {
        const { query } = get();
    
        try {
            const results = await searchMovies(query);
            set({ movies: results });
        } catch (e) {
            console.error(e);
        } 
    },

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
