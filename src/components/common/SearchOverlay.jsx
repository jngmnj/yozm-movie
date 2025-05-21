import { useEffect, useState } from 'react';

import { IoSearch } from 'react-icons/io5';
import { RiCloseLargeLine } from 'react-icons/ri';
import { useNavigate } from 'react-router';

import { options } from '@api/getMovies';
import Inner from '@components/common/Inner';
import LoadingSpinner from '@components/common/LoadingSpinner';
import MovieCard from '@components/movie/MovieCard';
import { TMDB_BASE_URL } from '@constants/index';
import { useDebounce } from '@hooks/useDebounce';

const SearchOverlay = ({ handleClick }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const searchParams = useDebounce(searchQuery, 500);

  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      setSearchData([]);
      return;
    }
    navigate(`/search?query=${searchQuery}`);
  };

  useEffect(() => {
    if (searchParams.trim() === '') {
      setSearchData([]);
      return;
    }
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetch(
          `${TMDB_BASE_URL}/search/movie?query=${searchParams}`,
          options,
        );
        if (!result.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await result.json();
        const nonAdultMovies = data.results.filter((movie) => !movie.adult);
        setSearchData(nonAdultMovies);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [searchParams]);
  return (
    <div className={`fixed top-0 left-0 right-0 bg-white p-4`}>
      <Inner>
        <h2 className="text-2xl font-bold">검색</h2>
        <form
          className="mt-4 mb-4 border border-gray-300 rounded-lg relative"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="w-full px-4 py-2 focus:outline-none rounded-lg focus:ring-green-400"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="py-2 text-green-400 hover:text-green-500 absolute right-4 top-1/2 -translate-y-1/2">
            <IoSearch />
          </div>
        </form>
        {/* search results */}
        {loading && <LoadingSpinner height="h-20" />}
        {error && (
          <p className="mt-4 text-center text-red-500">
            Error: {error.message}
          </p>
        )}
        {!loading && searchData.length > 0 && (
          <div className="h-[calc(100vh-140px)] overflow-y-auto">
            <div className="grid grid-cols-4 lg:grid-cols-8 gap-4">
              {searchData.map((movie) => (
                <MovieCard key={movie.id} movie={movie} hasTitle={false} />
              ))}
            </div>
          </div>
        )}
        <button
          onClick={handleClick}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <RiCloseLargeLine />
        </button>
      </Inner>
    </div>
  );
};

export default SearchOverlay;
