import useStore from "../store/store";
import MovieCard from "./MovieCard";

function Favorites() {
  const favorites = useStore((state) => state.favorites);

  if (favorites.length === 0) {
    return (
      <p className="max-w-sm rounded-lg border border-dashed border-neutral-800 bg-neutral-800/30 px-4 py-8 text-center text-sm text-neutral-500">
        찜한 영화가 없습니다.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {favorites.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Favorites;
