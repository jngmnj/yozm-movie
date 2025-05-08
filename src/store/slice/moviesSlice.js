import { createSlice } from "@reduxjs/toolkit";
import { fetchPopularMovies } from "@store/middleware/fetchMovieDetail";

const moviesSlice = createSlice({
  name: "movieDetail",
  initialState: {
    popularMovies: [],
    loading: false,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.popularMovies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

  },
});

export const {
  setLoading,
  setError,
} = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;