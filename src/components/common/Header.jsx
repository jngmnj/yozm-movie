import Inner from "@components/common/Inner";
import Fade from "@components/modal/Fade";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { RiCloseLargeLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const handleClick = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const handleSideClick = () => {
    setIsSideMenuOpen((prev) => !prev);
  };

  return (
    <header className="px-4 lg:p-4 pb-0 fixed top-0 left-0 right-0 z-10 bg-white">
      <Inner className="flex items-center justify-between h-16">
        <Link to="/">
          <h1 className="text-2xl font-bold">
            요즘{" "}
            <span className="text-green-400 text-3xl font-black">movie</span>
          </h1>
        </Link>
        <div className="items-center gap-4 flex">
          <button
            onClick={handleClick}
            className="text-2xl flex items-center text-gray-300 after:block after:border-r-1 after:h-4 after:border-gray-300 after:ml-4 cursor-pointer"
          >
            <IoSearch />
          </button>
          <div className="items-center gap-4 hidden md:flex">
            <Link
              to="/login"
              className="px-4 py-2 rounded-xl bg-green-400 hover:bg-green-500 transition text-white font-bold"
            >
              로그인
            </Link>
            <Link
              to="/join"
              className="px-2 py-2 rounded-xl bg-transparent hover:text-green-400 transition"
            >
              회원가입
            </Link>
          </div>
          <button
            onClick={handleSideClick}
            className="text-xl text-gray-500 cursor-pointer p-2 md:hidden"
          >
            <CiMenuBurger />
          </button>
        </div>
      </Inner>
      {isSearchOpen && (
        <>
          <Fade isOpen={isSearchOpen} handleClick={handleClick} />
          <div className={`fixed top-0 left-0 right-0 bg-white p-4`}>
            <h2 className="text-2xl font-bold">검색</h2>
            <form className="mt-4 border border-gray-300 rounded-lg relative">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                className="w-full px-4 py-2  focus:outline-none rounded-lg focus:ring-green-400"
              />
              <button
                type="submit"
                className="px-4 py-2 text-green-400 hover:text-green-500 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
              >
                <IoSearch />
              </button>
            </form>
            <button
              onClick={handleClick}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <RiCloseLargeLine />
            </button>
          </div>
        </>
      )}
      {/* sideMenu */}
      <div>
        <Fade isOpen={isSideMenuOpen} handleClick={handleSideClick} />
        <div
          className={`fixed right-0 bg-white p-4 transition-allduration-300 ease-in-out w-full h-screen overflow-y-auto transition-all ${
            isSideMenuOpen ? "top-0" : "-top-full"
          }`}
        >
          <div className="flex items-center gap-4 mt-4">
            <Link
              to="/login"
              className="px-4 py-2 rounded-xl bg-green-400 hover:bg-green-500 transition text-white font-bold"
            >
              로그인
            </Link>
            <Link
              to="/join"
              className="px-2 py-2 rounded-xl bg-transparent hover:text-green-400 transition"
            >
              회원가입
            </Link>
          </div>
          <button onClick={handleSideClick}>
            <RiCloseLargeLine />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
