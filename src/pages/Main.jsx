import Inner from "@components/common/Inner";
import MainBanner from "@components/main/MainBanner";
import MovieList from "@components/movie/MovieList";
import { useFetch } from "@hooks/useFetch";
import { getPopularMovies, options } from '../utils/getMovies';

const Main = () => {
  const { data, error, loading } = useFetch({ options, query: getPopularMovies });

  if (!data) return null;

  const nonAdultMovies = data.results.filter((movie) => !movie.adult);
  
  const mainBannerDatas = nonAdultMovies
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 10);

  const popularMovies = nonAdultMovies
    .sort((a, b) => b.popularity - a.popularity)
    .slice(10, 16);

  return (
    <>
      {/* main banner: 추후 개봉예정으로 변경 */}
      <MainBanner data={mainBannerDatas} />
      <Inner className="px-4">
        {/* movieList */}
        <MovieList title={"인기순"} movies={popularMovies} />
        {/* <MovieList title={"별점순"} movies={topRatedMovies} />
        <MovieList title={"현재상영중인 영화"} movies={nowPlayingMovies} />
        <MovieList title={"개봉예정 영화"} movies={upcomingMovies} /> */}
      </Inner>
    </>
  );
};

export default Main;
