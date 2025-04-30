import React from 'react'

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">Movie App</h1>
        <nav className="mt-2">
            <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="/movies" className="hover:text-gray-400">Movies</a></li>
            <li><a href="/about" className="hover:text-gray-400">About</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header