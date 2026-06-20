import { useState } from "react";
import useStore from "./store/store";
import MovieCard from "./components/MovieCard";
import Favorites from "./components/Favorites"

function App() {
  const [input, setInput] = useState("");
  const { movies, setQuery, fetchMovies } = useStore();

  const handleSearch = async () => {
    setQuery(input);
    await fetchMovies();
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        영화 검색
      </h1>

      <div className="flex gap-2 max-w-2xl mb-12">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="영화 제목을 입력하세요."
          className="flex-1 bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-sm placeholder:text-neutral-500 focus:outline-none focus:border-neutral-50"
        />

        <button
          onClick={handleSearch}
          className="bg-red-600 px-4 rounded-lg py-2"
        >
          검색
        </button>
      </div>

      <h2 className="text-lg font-medium text-neutral-400 mb-6">
        찜한 영화
      </h2>
      <div className="mb-6">
        <Favorites />
      </div>

      <h2 className="text-lg font-medium text-neutral-400 mb-6">
        검색 결과
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
