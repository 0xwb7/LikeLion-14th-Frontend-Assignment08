import { create } from "zustand";
import { searchMovies } from "../api/tmdbApi";

const useStore = create((set, get) => ({
    query: "",
    movies: [],

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
}))

export default useStore;
