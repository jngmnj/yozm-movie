import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  
  return (
    <Link to={`/details/${movie.id}`} className="">
      <div className="rounded-sm overflow-hidden aspect-[4/6] mb-2 md:mb-4">
        <img src={`${baseUrl}${movie.poster_path}`} alt={movie.title} className="w-full h-full object-cover" />
      </div>
      <div className="font-semibold line-clamp-1">{movie.title}</div>
      <p className="text-xs md:text-sm">{movie.release_date}</p>
    </Link>
  );
};

export default MovieCard;
