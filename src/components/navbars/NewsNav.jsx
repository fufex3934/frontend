import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const NewsNav = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="bg-white fixed top-0 z-50 left-0 right-0 transition: all 300ms ease-in-out shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Home Icon */}
            <Link to="/" className="flex items-center cursor-pointer text-slate-700 hover:bg-[#84cc39]  hover:text-white px-3 py-2 rounded-md">
              <AiFillHome className=" h-6 w-6 mr-2" />
              <span >Home</span>
            </Link>

            {/* Navigation */}
            <div className="hidden md:block">
              <div className="ml-4 md:ml-10 flex items-center space-x-4">
                <Link
                  to='/harari-news'
                  className="text-slate-600 hover:bg-[#84cc39] hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Harari News
                </Link>
                <Link
                  to="/national-news"
                  className="text-slate-600 hover:bg-[#84cc39] hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  National News
                </Link>
                <Link
                  to="/africa-news"
                  className="text-slate-600 hover:bg-[#84cc39] hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Africa News
                </Link>
                <Link
                  to="/international-news"
                  className="text-slate-600 hover:bg-[#84cc39] hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  International News
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-white fixed top-16 z-50 left-0 right-0 transition: all 300ms ease-in-out shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-1">
              <a
                href="/harari"
                className="text-slate-600 hover:bg-[#84cc39] hover:text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                Harari News
              </a>
              <a
                href="/national"
                className="text-slate-600 hover:bg-[#84cc39] hover:text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                National News
              </a>
              <a
                href="/africa"
                className="text-slate-600 hover:bg-[#84cc39] hover:text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                Africa News
              </a>
              <a
                href="/international"
                className="text-slate-600 hover:bg-[#84cc39] hover:text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                International News
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsNav
