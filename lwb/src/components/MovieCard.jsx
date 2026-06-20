function MovieCard({ movie }) {
    return (
        <div className="">
            {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  className=""
                />
            ) : (
                <div className="">
                    포스터 없음
                </div>
            )}

            <div className="">
                <h3 className="">
                    {movie.title}
                </h3>
                <p className="">
                    평점: {movie.vote_average?.toFixed(1)}
                </p>
            </div>
        </div>
    );
}

export default MovieCard;
