function MovieCard({ movie }) {
    return (
      <div className="group cursor-pointer">
        <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-neutral-800 ring-1 ring-white/5 transition-all duration-300 group-hover:ring-white/20">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-neutral-500 text-sm">
              포스터 없음
            </div>
          )}
        </div>
  
        <div className="mt-2 px-0.5">
          <h3 className="text-sm font-semibold text-neutral-100 truncate">
            {movie.title}
          </h3>
          <p className="text-xs text-amber-400 mt-0.5">
            ★ {movie.vote_average?.toFixed(1) ?? "—"}
          </p>
        </div>
      </div>
    );
  }
  
  export default MovieCard;
