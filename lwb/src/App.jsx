import { useState } from "react";
import useStore from "./store/store";
import MovieCard from "./components/MovieCard";

function App() {
  const [input, setInput] = useState("");
  const { movies, setQuery, fetchMovies } = useStore();

  const handleSearch = async () => {
    setQuery(input);
    await fetchMovies();
  };

  return (
    <div className="">
      <h1 className="">
        영화 검색
      </h1>

      <div className="">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="영화 제목을 입력하세요."
          className=""
        />

        <button
          onClick={handleSearch}
          className=""
        >
          검색
        </button>
      </div>

      <h2 className="">
        검색 결과
      </h2>
      
      <div className="">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
