

const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
};

export const getMovies = async (url, options) => {
  // const response = await fetch(`${url}?langquage=ko-KR&page=1`, options);
  console.log("ttestet")
  const response = await fetch(
    `${url}`,
    options
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const result = await response.json();
  console.log("getMovies", result);
  return result;
};
