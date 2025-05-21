import { useCallback } from 'react';

import { getMovies, options } from '@api/getMovies';
import Inner from '@components/common/Inner';
import MainBanner from '@components/main/MainBanner';
import MovieList from '@components/movie/MovieList';
import { POPUPLAR_MOVIES_URL } from '@constants/index';
import { useFetch } from '@hooks/useFetch';

const Main = () => {
  const URL = `${POPUPLAR_MOVIES_URL}?language=ko-KR&page=1`;
  const query = useCallback(() => getMovies(URL, options), []);
  const { data, error, loading } = useFetch({ query });

  if (!data) return null;

  const nonAdultMovies = data.results.filter((movie) => !movie.adult);

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
        <div className="mb-15 last:mb-0">
          <h3 className="mb-6 font-semibold text-xl">인기순</h3>
          <MovieList movies={popularMovieDatas} />
        </div>
        {/* <MovieList title={"별점순"} movies={topRatedMovies} />
        <MovieList title={"현재상영중인 영화"} movies={nowPlayingMovies} />
        <MovieList title={"개봉예정 영화"} movies={upcomingMovies} /> */}
      </Inner>
    </>
  );
};

export default Main;
