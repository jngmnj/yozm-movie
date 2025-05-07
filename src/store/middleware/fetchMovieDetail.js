import { POPUPLAR_MOVIES_URL, TMDB_BASE_URL } from "@constants/index";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovieDetail = createAsyncThunk(
  "movieDetail/fetchMovieDetail",
  async (id, options) => {
    const MOVIE_DETAIL_URL = `${TMDB_BASE_URL}/movie/${id}?language=ko-KR&append_to_response=videos,credits`;
    const response = await fetch(MOVIE_DETAIL_URL, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result;
  }
);

export const fetchPopularMovies = createAsyncThunk(
  "popularMovies/fetchPopularMovies",
  async (page = 1, options) => {
      const response = await fetch(
        `${POPUPLAR_MOVIES_URL}?langquage=ko-KR&page=${page}`,
        options
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      return result.results;
  }
);