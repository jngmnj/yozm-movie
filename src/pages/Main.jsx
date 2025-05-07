import Inner from "@components/common/Inner";
import MainBanner from "@components/main/MainBanner";
import MovieList from "@components/movie/MovieList";
import { fetchPopularMovies } from "@store/middleware/fetchMovieDetail";
import { options } from "@utils/getMovies";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  // const query = useCallback(()=> getPopularMovies(options), []);
  // const { data, error, loading } = useFetch({ query });

  const dispatch = useDispatch();
  const { popularMovies, loading, error } = useSelector(
    (state) => state.movies
  );
  useEffect(()=> {
    dispatch(fetchPopularMovies(1, options));
  }, [dispatch])

  if (!popularMovies) return null;

  const nonAdultMovies = popularMovies.filter((movie) => !movie.adult);
  
  const mainBannerDatas = nonAdultMovies
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 10);

  const popularMovieDatas = nonAdultMovies
    .sort((a, b) => b.popularity - a.popularity)
    .slice(10, 16);

  return (
    <>
      {/* main banner: 추후 개봉예정으로 변경 */}
      <MainBanner data={mainBannerDatas} />
      <Inner className="px-4">
        {/* movieList */}
        <MovieList title={"인기순"} movies={popularMovieDatas} />
        {/* <MovieList title={"별점순"} movies={topRatedMovies} />
        <MovieList title={"현재상영중인 영화"} movies={nowPlayingMovies} />
        <MovieList title={"개봉예정 영화"} movies={upcomingMovies} /> */}
      </Inner>
    </>
  );
};

export default Main;
