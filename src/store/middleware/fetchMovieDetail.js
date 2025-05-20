import { createAsyncThunk } from '@reduxjs/toolkit';

import { POPUPLAR_MOVIES_URL, TMDB_BASE_URL } from '@constants/index';

export const fetchMovieDetail = createAsyncThunk(
  'movieDetail/fetchMovieDetail',
  async ({ id, options }) => {
    const MOVIE_DETAIL_URL = `${TMDB_BASE_URL}/movie/${id}?language=ko-KR`;
    const response = await fetch(MOVIE_DETAIL_URL, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    return result;
  },
);

export const fetchPopularMovies = createAsyncThunk(
  'popularMovies/fetchPopularMovies',
  async ({ page = 1, options }) => {
    const response = await fetch(
      `${POPUPLAR_MOVIES_URL}?language=ko-KR&page=${page}`,
      options,
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    return result.results;
  },
);
