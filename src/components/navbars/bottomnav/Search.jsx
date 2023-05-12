import React from 'react';

const Search = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-white font-bold text-xl">My Website</span>
          </div>

          {/* Search Icon */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 17l5-5m0 0l-5-5m5 5H4"
              />
            </svg>
            {/* Add your search functionality here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Search;
