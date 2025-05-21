import MovieCard from '@components/movie/MovieCard';

const MovieList = ({ className = '', movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className={`grid grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
      {/* 추후 Swiper */}
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} hasTitle={true} />
      ))}
    </div>
  );
};

export default MovieList;
