import MovieCard from "@components/movie/MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="mb-15 last:mb-0">
      {title && <h3 className="mb-6 font-semibold text-xl">{title}</h3>}
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-4">
        {/* 추후 Swiper */}
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} hasTitle={true} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
