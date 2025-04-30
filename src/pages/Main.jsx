import MovieCard from "@components/movie/MovieCard";
import data from "@data/movieListData.json";
import { useState } from "react";

const Main = () => {
  const [movies, setMovies] = useState(data.results);

  return (
    <>
      {/* movieList */}
      <div className="">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Main;