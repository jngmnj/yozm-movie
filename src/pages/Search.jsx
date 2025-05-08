import Inner from "@components/common/Inner";
import MovieList from "@components/movie/MovieList";
import { SEARCH_MOVIES_URL } from "@constants/index";
import { useFetch } from "@hooks/useFetch";
import { getMovies, options } from "@utils/getMovies";
import { useCallback } from "react";
import { useSearchParams } from "react-router";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");

  const url = `${SEARCH_MOVIES_URL}${searchQuery}`;

  const query = useCallback(() => getMovies(url, options), [url]);
  const { data, loading } = useFetch({ query });

  return (
    <Inner className="px-4">
      {loading && <div>Loading...</div>}
      {!loading && data && <MovieList title={null} movies={data.results} />}
    </Inner>
  );
};

export default Search;
