import Inner from "@components/common/Inner";
import MovieCard from "@components/movie/MovieCard";
import data from "@data/movieListData.json";
import { useState } from "react";

const Main = () => {
  const [movies, setMovies] = useState(data.results);

  return (
    <Inner>
      {/* movieList */}
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 p-4"> 
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </Inner>
  );
};

export default Main;