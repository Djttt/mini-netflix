import { NavLink, useNavigate } from "react-router-dom";
import MovieDropdown from "./navigation/MovieDropdown";
import TVDropdown from "./navigation/TVDropdown";
import SearchBar from "./Searchbar";
import { searchTMDB } from "../api/searchTMDB";

export default function Navbar() {

  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out bg-black bg-opacity-90">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <NavLink to="/" className="text-2xl font-bold text-red-600">
              MINI-FLIX
            </NavLink>
            {/* Primary Nav */}
            <div className="hidden md:flex items-baseline space-x-4">
              <NavLink
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </NavLink>
            </div>

            <div className="hidden md:flex items-baseline space-x-4 group relative">
               <MovieDropdown />
            </div>


            <div className="hidden md:flex items-baseline space-x-4">
              <TVDropdown />
            </div>

            <div className="hidden md:flex items-baseline space-x-4">
              <NavLink
                to="/people"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                People
              </NavLink>
            </div>

          </div>
          {/* Right side icons */}
          <div className="flex items-center">
            <SearchBar onSearch={(q) => {
              navigate(`/search?q=${q}`)
            }}/>
            <p className="text-white">User</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
