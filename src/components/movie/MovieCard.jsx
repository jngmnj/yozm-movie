
const MovieCard = ({ movie }) => {
  console.log(movie)
  const baseUrl = "https://image.tmdb.org/t/p/w500"; 
  return (
    <div>
      <div className="movie-card">
        <img src={`${baseUrl}${movie.poster_path}`} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}

export default MovieCard