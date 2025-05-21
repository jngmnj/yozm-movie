import { useCallback } from 'react';

import { useSearchParams } from 'react-router';

import { getMovies, options } from '@api/getMovies';
import Inner from '@components/common/Inner';
import MovieList from '@components/movie/MovieList';
import { SEARCH_MOVIES_URL } from '@constants/index';
import { useFetch } from '@hooks/useFetch';

const Search = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const url = `${SEARCH_MOVIES_URL}${searchQuery}`;

  const query = useCallback(() => getMovies(url, options), [url]);
  const { data, loading } = useFetch({ query });

  return (
    <Inner className="px-4">
      {loading && <div>Loading...</div>}
      {!loading && data && <MovieList movies={data.results} />}
    </Inner>
  );
};

export default Search;
