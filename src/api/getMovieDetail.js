import { TMDB_BASE_URL } from '@constants/index';

export const getMovieDetail = async (movieId, options) => {
  const MOVIE_DETAIL_URL = `${TMDB_BASE_URL}/movie/${movieId}?language=ko-KR&append_to_response=videos,credits`;
  const response = await fetch(MOVIE_DETAIL_URL, options);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const result = await response.json();
  return result;
};
