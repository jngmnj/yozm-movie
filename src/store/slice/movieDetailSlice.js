import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieDetail } from "@store/middleware/fetchMovieDetail";

const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState: {
    movie: {},
    myComment: null,
    myStar: null,
    loading: false,
    error: null,
  },
  reducers: {
    setMyComment: (state, action) => {
      state.myComment = action.payload;
    },
    setMyStar: (state, action) => {
      state.myStar = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovieDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.movie = action.payload;
      })
      .addCase(fetchMovieDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setMyComment,
  setMyStar,
  setLoading,
  setError,
} = movieDetailSlice.actions;
export const movieDetailReducer = movieDetailSlice.reducer;