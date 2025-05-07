import { configureStore } from "@reduxjs/toolkit";
import { movieDetailReducer } from "@store/slice/movieDetailSlice";
import { moviesReducer } from "@store/slice/moviesSlice";

export const store = configureStore({
  reducer: {
    movieDetail: movieDetailReducer,
    movies: moviesReducer,
  },
});
