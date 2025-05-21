import { useCallback, useState } from 'react';

import { FaStar } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';

import Inner from '@components/common/Inner';
import LoadingSpinner from '@components/common/LoadingSpinner';
import Modal from '@components/modal/Modal';
import { useFetch } from '@hooks/useFetch';

import { getMovies, options } from '../api/getMovies';
import { IMG_BASE_URL, TMDB_BASE_URL } from '../constants/index';

const MovieDetail = () => {
  const { id } = useParams();

  const [myComment, setMyComment] = useState('');
  const [myStar, setMyStar] = useState(0);

  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [preRate, setPreRate] = useState(0);

  const MOVIE_DETAIL_URL = `${TMDB_BASE_URL}/movie/${id}?language=ko-KR`;
  const query = useCallback(
    () => getMovies(MOVIE_DETAIL_URL, options),
    [MOVIE_DETAIL_URL],
  );
  const { data: movie, loading } = useFetch({ query });

  const handleMouseUp = (e) => {
    const x = e.clientX;
  };

  return (
    <div>
      {/* 로딩중 */}
      {loading && <LoadingSpinner />}
      {/* 상단 영화 간략정보 */}
      {!loading && movie && (
        <>
          <div className="relative h-120">
            <div className="h-full overflow-hidden mb-8 absolute inset-0">
              <img
                src={`${IMG_BASE_URL}${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="w-full h-full bg-linear-to-b from-gray-50 from-30% via-gray-400 via-50% to-gray-700 to-90% mix-blend-multiply"></div>
            </div>
            <Inner>
              <div className="text-white absolute bottom-8 px-4">
                <h1 className="text-2xl font-bold mb-3">{movie.title}</h1>
                <p className="text-sm">{movie.release_date}</p>
                <div className="flex items-center gap-4 mt-2">
                  <p className="text-sm">{movie.runtime}분</p>
                  <p className="text-sm">
                    {movie.genres && movie.genres.map((g) => g.name).join('·')}
                  </p>
                </div>
              </div>
            </Inner>
          </div>
          {/* 하단 영화 상세정보 */}
          <Inner className="p-4">
            <div className="flex flex-col items-center md:items-start md:flex-row gap-4">
              <div className="order-2 md:order-1 rounded-sm w-1/2 md:max-w-3xs overflow-hidden aspect-[4/6] mb-2 md:mb-4">
                <img
                  src={`${IMG_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-full object-cover mx-auto"
                />
              </div>
              <div className="order-1 md:order-2 flex flex-col gap-2 md:w-2/3">
                {/* 평점 */}
                <div className="flex items-center gap-2">
                  {/* 별점 */}
                  <div className="flex items-center gap-2">
                    {/* 별점: 평가점수에 따라 */}
                    <div className="relative">
                      <div
                        className={` ${
                          myStar > 0 ? 'text-yellow-400' : 'text-gray-200'
                        } 
                        flex shirink-0 text-4xl h-full absolute inset-0 overflow-hidden
                        `}
                        style={{
                          minWidth: `${myStar * 10}%`,
                          width: `${preRate * 10}%`,
                        }}
                      >
                        {Array.from({ length: 5 }, (_, i) => (
                          <FaStar
                            key={i}
                            className={`shrink-0 ${
                              myStar > i ? 'text-yellow-400' : 'text-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="flex text-4xl text-gray-200">
                        {Array.from({ length: 5 }, (_, i) => (
                          <FaStar key={i} className={`shrink-0`} />
                        ))}
                      </div>
                      <button
                        className="border inset-0 w-full border-red-200 rounded-full h-full absolute"
                        onMouseUp={(e) => handleMouseUp(e)}
                      ></button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">
                      {(movie.vote_average / 2).toPrecision(2)}
                    </span>
                    <span className="text-sm text-gray-400">/ 5</span>
                    <span className="text-xs text-gray-400">
                      ({movie.vote_count}명 참여)
                    </span>
                  </div>
                </div>
                {/* 기능: 찜 / 코멘트작성 / 보는중  */}
                <div className="flex items-center gap-2 mb-4">
                  <button className="px-4 py-2 rounded-xl bg-green-400 hover:bg-green-500 transition text-white font-bold">
                    보고싶어요
                  </button>
                  <button className="px-4 py-2 rounded-xl bg-gray-300 hover:bg-gray-400 transition text-white font-bold">
                    코멘트
                  </button>
                  <button className="px-4 py-2 rounded-xl bg-gray-300 hover:bg-gray-400 transition text-white font-bold">
                    보는중
                  </button>
                </div>
                {/* 내가 쓴 코멘트: 있으면 */}
                {myComment && (
                  <div className="">
                    <h2 className="text-lg font-bold mb-3">내가 쓴 코멘트</h2>
                    <div className="border border-gray-300 rounded-md p-4 mb-6">
                      <div className="">
                        <p className="text-sm whitespace-pre-wrap">
                          {myComment}
                        </p>
                      </div>
                      <div className="flex items-center justify-end gap-2 mt-2">
                        <button
                          className="text-sm text-gray-500 hover:text-gray-600 transition cursor-pointer"
                          onClick={() => setIsCommentModalOpen((prev) => !prev)}
                        >
                          수정
                        </button>
                        <button className="text-sm text-gray-500 hover:text-gray-600 transition cursor-pointer">
                          삭제
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {isCommentModalOpen && (
                  <Modal
                    isOpen={isCommentModalOpen}
                    handleClick={() => setIsCommentModalOpen((prev) => !prev)}
                    modalTitle="코멘트 작성"
                  >
                    <div className="flex flex-col gap-2">
                      <textarea
                        className="w-full h-24 p-2 border border-gray-300 rounded-md resize-none"
                        placeholder="코멘트를 작성하세요."
                      >
                        {myComment}
                      </textarea>
                      <button className="px-4 py-2 rounded-xl bg-green-400 hover:bg-green-500 transition text-white font-bold">
                        코멘트 등록
                      </button>
                    </div>
                  </Modal>
                )}
                {/* 영화 줄거리 */}
                <p className="text-lg">{movie.tagline}</p>
                <p className="whitespace-pre-line">{movie.overview}</p>
              </div>
            </div>
          </Inner>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
