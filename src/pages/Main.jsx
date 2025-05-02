import Inner from "@components/common/Inner";
import MainBanner from "@components/main/MainBanner";
import MovieList from "@components/movie/MovieList";
import data from "@data/movieListData.json";
import { useState } from "react";

const Main = () => {
  const [movies, setMovies] = useState(data.results);

  if (!movies) return null;
  const today = new Date();

  const mainBannerDatas = movies
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 10);

  const popularMovies = movies
    .sort((a, b) => b.popularity - a.popularity)
    .slice(10, 16);

  const topRatedMovies = movies
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, 6);

  const sortedMovies = movies.sort(
    (a, b) => new Date(a.release_date) - new Date(b.release_date)
  );

  const upcomingMovies = sortedMovies
    .filter((movie) => movie.status === "upComing??")
    .slice(0, 6);

  const nowPlayingMovies = sortedMovies
    .filter((movie) => new Date(movie.release_date) <= today)
    .slice(0, 6);

  return (
    <>
      {/* main banner: 추후 개봉예정으로 변경 */}
      <MainBanner data={mainBannerDatas} />
      <Inner className="px-4">
        {/* movieList */}
        <MovieList title={"인기순"} movies={popularMovies} />
        <MovieList title={"별점순"} movies={topRatedMovies} />
        <MovieList title={"현재상영중인 영화"} movies={nowPlayingMovies} />
        <MovieList title={"개봉예정 영화"} movies={upcomingMovies} />
      </Inner>
    </>
  );
};

export default Main;
