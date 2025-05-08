import { POPUPLAR_MOVIES_URL } from "@constants/index";


const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

export const getPopularMovies = async (options) => {
  const response = await fetch(
    `${POPUPLAR_MOVIES_URL}?langquage=ko-KR&page=1`,
    options
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const result = await response.json();
  return result;
};
