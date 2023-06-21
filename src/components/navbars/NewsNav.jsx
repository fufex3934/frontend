import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const transitionStyles = {
  entering: 'opacity-0',
  entered: 'opacity-100',
  exiting: 'opacity-100',
  exited: 'opacity-0',
};

const NewsNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="bg-[#329898] fixed top-0 z-50 left-0 right-0 transition: all 300ms ease-in-out shadow-md">
        {/* Desktop Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Home Icon */}
            <Link
              to="/"
              className="flex items-center cursor-pointer text-white hover:bg-[#329898] hover:text-white px-3 py-2 rounded-md"
            >
              <AiFillHome className="h-6 w-6 mr-2" />
              <span>Home</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-4 md:ml-10 flex items-center space-x-4">
                <Link
                  to="/harari-news"
                  className="text-white hover:bg-[#329898] hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Harari News
                </Link>
                <Link
                  to="/national-news"
                  className="text-white hover:bg-[#329898] hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  National News
                </Link>
                <Link
                  to="/africa-news"
                  className="text-white hover:bg-[#329898] hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Africa News
                </Link>
                <Link
                  to="/international-news"
                  className="text-white hover:bg-[#329898] hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  International News
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-[#329898] fixed top-0 z-50 left-0 right-0 transition: all 300ms ease-in-out shadow-lg h-24">
        {/* Mobile Menu */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 mt-9">
            {/* Mobile Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center cursor-pointer text-white hover:text-orange-500">
                <AiFillHome className="h-6 w-6 mr-2" />
                <span className="text-lg font-medium">Home</span>
              </Link>
            </div>

            {/* Mobile Menu Icon */}
            <div className="flex items-center">
              <button
                type="button"
                className="text-white hover:text-orange-500 focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <AiOutlineMenu className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Links */}
          <Transition in={isMobileMenuOpen} timeout={300}>
            {(state) => (
              <div className={`mt-4 z-50 shadow-xl py-6 bg-[#3bb5b5] ${transitionStyles[state]}`}>
                <Link
                  to="/harari-news"
                  className="block text-white hover:bg-[#329898] hover:text-white px-4 py-2 rounded-md text-lg font-medium"
                >
                  Harari News
                </Link>
                <Link
                  to="/national-news"
                  className="block text-white hover:bg-[#329898] hover:text-white px-4 py-2 rounded-md text-lg font-medium"
                >
                  National News
                </Link>
                <Link
                  to="/africa-news"
                  className="block text-white hover:bg-[#329898] hover:text-white px-4 py-2 rounded-md text-lg font-medium"
                >
                  Africa News
                </Link>
                <Link
                  to="/international-news"
                  className="block text-white hover:bg-[#329898] hover:text-white px-4 py-2 rounded-md text-lg font-medium"
                >
                  International News
                </Link>
              </div>
            )}
          </Transition>
        </div>
      </div>
    </>
  );
};

export default NewsNav;
