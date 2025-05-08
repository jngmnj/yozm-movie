import Inner from "@components/common/Inner";
import LoadingSpinner from "@components/common/LoadingSpinner";
import MovieList from "@components/movie/MovieList";
import { TMDB_BASE_URL } from "@constants/index";
import { options } from "@utils/getMovies";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const result = await fetch(
            `${TMDB_BASE_URL}/search/movie?query=${query}`,
            options
          );
          if (!result.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await result.json();
          setSearchData(data.results);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [searchParams, query]);

  const filteredMovies = searchData.filter((movie) => !movie.adult);
  return (
    <Inner className="px-4">
      {/* movieList */}
      {loading && <LoadingSpinner />}
      {!loading && filteredMovies.length === 0 && (
        <div className="text-center text-gray-500">검색 결과가 없습니다.</div>
      )}
      {!loading && filteredMovies.length > 0 && (
        <MovieList title={"검색결과"} movies={filteredMovies} />
      )}
    </Inner>
  );
};

export default Search;
