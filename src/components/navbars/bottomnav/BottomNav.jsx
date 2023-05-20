import React, { useState, useEffect } from 'react';
import Language from './Language';
import '../../styles/navbar.css';

const BottomNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const hideHeight = 100; // Height at which you want to hide the navbar

      if (scrollPosition > hideHeight) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? '' : 'hidden'} lg:block`}>
      <div className="bg-white/100   p-4">
        <ul className="flex items-center">
          {!isOpen && (
            <div className="mr-2">
              <a href="#">
                <img
                  className="h-12 md:h-12 w-12 md:w-12 rounded-full lg:hidden"
                  src="./harar.png"
                  alt="Logo"
                />
              </a>
            </div>
          )}

          {!isOpen && (
            <a href="#">
              <h1 className="text-[#083344] md:ml-2 font-bold flex-grow 
               whitespace-wrap md:text-lg md:uppercase  lg:hidden">
                Harar Government Communication Affairs Office
              </h1>
            </a>
          )}

          <div className="hidden lg:block">
            <ul className="flex items-center space-x-2">
            <li className="group z-10 relative dropdown   text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif ">
            <a  className="inline-flex w-full justify-center gap-x-0  bg-white px-3 py-2 text-sm text-[#1e293b] " id="menu-button" aria-expanded="true" aria-haspopup="true">
              Home
              <svg className="-mr-1 h-4 w-4 mt-1  text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </a>
        <div className="group-hover:block dropdown-menu absolute hidden h-auto">
        
        <ul className="top-0 w-48 bg-white  px-6 py-8 shadow  ">
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
        </ul>
        </div>
            </li>
            <li className="group z-10 relative dropdown   text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif ">
              <a  className="inline-flex w-full justify-center gap-x-0  bg-white px-3 py-2 text-sm text-[#1e293b]" id="menu-button" aria-expanded="true" aria-haspopup="true">
                About
                <svg className="-mr-1 h-4 w-4 mt-1  text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </a>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul className="top-0 w-48 bg-white  px-6 py-8 shadow  ">
                    <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
                    <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
                    <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
                    <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
                    <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
                </ul>
              </div>
            </li>
    <li className="group z-10 relative dropdown   text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif ">
      <a className="inline-flex w-full justify-center gap-x-0  bg-white px-3 py-2 text-sm text-[#1e293b]" id="menu-button" aria-expanded="true" aria-haspopup="true">
        Economic
        <svg className="-mr-1 h-4 w-4 mt-1  text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </a>
        <div className="group-hover:block dropdown-menu absolute hidden h-auto">
        
        <ul className="top-0 w-48 bg-white  px-6 py-8 shadow  ">
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
        </ul>
        </div>
    </li>
    <li className="group z-10 relative dropdown   text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif ">
      <a className="inline-flex w-full justify-center gap-x-0  bg-white px-3 py-2 text-sm text-[#1e293b]" id="menu-button" aria-expanded="true" aria-haspopup="true">Timely
        <svg className="-mr-1 h-4 w-4 mt-1  text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </a>
        <div className="group-hover:block dropdown-menu absolute hidden h-auto">
          <ul className="top-0 w-48 bg-white  px-6 py-8 shadow  ">
              <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
              <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
              <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
              <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
              <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
          </ul>
        </div>
    </li>
    <li className="group z-10 relative dropdown   text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif ">
      <a className="inline-flex w-full justify-center gap-x-0  bg-white px-3 py-2 text-sm text-[#1e293b]" id="menu-button" aria-expanded="true" aria-haspopup="true">
        Politics
        <svg className="-mr-1 h-4 w-4 mt-1  text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </a>
        <div className="group-hover:block dropdown-menu absolute hidden h-auto">
        <ul className="top-0 w-48 bg-white  px-6 py-8 shadow  ">
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
        </ul>
        </div>
    </li>
    <li className="group z-10 relative dropdown   text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif ">
      <a className="inline-flex w-full justify-center gap-x-0  bg-white px-3 py-2 text-sm text-[#1e293b]" id="menu-button" aria-expanded="true" aria-haspopup="true">
        Social
        <svg className="-mr-1 h-4 w-4 mt-1  text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </a>
        <div className="group-hover:block dropdown-menu absolute hidden h-auto"> 
        <ul className="top-0 w-48 bg-white  px-6 py-8 shadow  ">
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
        </ul>
        </div>
    </li>
    <li className="group z-10 relative dropdown   text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif ">
      <a className="inline-flex w-full justify-center gap-x-0  bg-white px-3 py-2 text-sm text-[#1e293b] " id="menu-button" aria-expanded="true" aria-haspopup="true">
        Tourism
        <svg className="-mr-1 h-4 w-4 mt-1  text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </a>
        <div className="group-hover:block dropdown-menu absolute hidden h-auto">
        <ul className="top-0 w-48 bg-white  px-6 py-8 shadow ">
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
        </ul>
        </div>
    </li>
    <li className="group z-10 relative dropdown   text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif ">
      <a  className="inline-flex w-full justify-center gap-x-0  bg-white px-3 py-2 text-sm text-[#1e293b]" id="menu-button" aria-expanded="true" aria-haspopup="true">
        Videos
        <svg className="-mr-1 h-4 w-4 mt-1  text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </a>
        <div className="group-hover:block dropdown-menu absolute hidden h-auto">
        <ul className="top-0 w-48 bg-white  px-6 py-8 shadow  ">
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
        </ul>
        </div>
    </li>
    <li className=''>
      <Language/>
    </li>
    <li className="text-gray-600 hover:text-orange-600 cursor-pointer relative left-[10px] font-serif">
      <button className="bg-transparent hover:bg-orange-700 text-blue-500 text-sm font-semibold hover:text-white p-2 border border-blue-700 
      rounded-0 overflow-hidden whitespace-nowrap transition-colors duration-300 ease-in-out">
        Report an Issue
      </button>
    </li>
            </ul>
          </div>

          <div className="block lg:hidden items-center ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400 ${
                isOpen ? 'rotate-180' : ''
              }`}
            >
              <svg
                className={`fill-current h-4 w-4 ${isOpen ? 'hidden' : 'block'}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-4 w-4 ${isOpen ? 'block' : 'hidden'}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>

          {isOpen && (
            <div className="fixed top-0 left-0 w-30% h-screen bg-black text-white">
              <div className="flex justify-end p-4">
                <button
                  className="text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    className="fill-current h-4 w-4"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.707 10l3.536-3.536a1 1 0 10-1.414-1.414L9.293 8 5.757 4.464a1 1 0 10-1.414 1.414L7.586 10l-3.536 3.536a1 1 0 001.414 1.414L9.293 12l3.536 3.536a1 1 0 001.414-1.414L10.707 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col items-start h-full p-4 w-full  md:w-80">
  <ul className="space-y-4  ">
  <li className="group z-10 relative dropdown   text-white hover:mb-56 hover:text-orange-600 cursor-pointer text-md font-serif ">
  <a  className="inline-flex w-full justify-center gap-x-0   px-3 py-2 text-sm " id="menu-button" aria-expanded="true" aria-haspopup="true">
      Home
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg>
    </a>
        <div className="group-hover:block dropdown-menu absolute hidden h-auto">
        
        <ul className="top-0 w-40 bg-black px-6 py-8 shadow  ">
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
        </ul>
        </div>
    </li>
    <li className="group z-10 relative dropdown   text-white hover:mb-56 hover:text-orange-600 cursor-pointer text-md font-serif ">
      <a  className="inline-flex w-full justify-center gap-x-0   px-3 py-2 text-sm " id="menu-button" aria-expanded="true" aria-haspopup="true">
        About
        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </a>
        <div className="group-hover:block dropdown-menu absolute hidden h-auto">
        
        <ul className="top-0 w-40 bg-black px-6 py-8 shadow  ">
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
        </ul>
        </div>
    </li>
    <li className="group z-10 relative dropdown   text-white hover:mb-56 hover:text-orange-600 cursor-pointer text-md font-serif ">
  <a  className="inline-flex w-full justify-center gap-x-0   px-3 py-2 text-sm " id="menu-button" aria-expanded="true" aria-haspopup="true">
      Timely
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg>
    </a>
        <div className="group-hover:block dropdown-menu absolute hidden h-auto">
        
        <ul className="top-0 w-40 bg-black px-6 py-8 shadow  ">
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
        </ul>
        </div>
    </li>
    <li className="group z-10 relative dropdown   text-white hover:mb-56 hover:text-orange-600 cursor-pointer text-md font-serif ">
  <a  className="inline-flex w-full justify-center gap-x-0   px-3 py-2 text-sm " id="menu-button" aria-expanded="true" aria-haspopup="true">
      Politics
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg>
    </a>
        <div className="group-hover:block dropdown-menu absolute hidden h-auto">
        
        <ul className="top-0 w-40 bg-black px-6 py-8 shadow  ">
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
        </ul>
        </div>
    </li>
    <li className="group z-10 relative dropdown   text-white hover:mb-56 hover:text-orange-600 cursor-pointer text-md font-serif ">
      <a  className="inline-flex w-full justify-center gap-x-0   px-3 py-2 text-sm " id="menu-button" aria-expanded="true" aria-haspopup="true">Social
        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </a>
        <div className="group-hover:block dropdown-menu absolute hidden h-auto">
        <ul className="top-0 w-40 bg-black px-6 py-8 shadow  ">
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
        </ul>
        </div>
    </li>
    <li className="group z-10 relative dropdown   text-white hover:mb-56 hover:text-orange-600 cursor-pointer text-md font-serif ">
      <a className="inline-flex w-full justify-center gap-x-0   px-3 py-2 text-sm " id="menu-button" aria-expanded="true" aria-haspopup="true">Economic
        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </a>
        <div className="group-hover:block dropdown-menu absolute hidden h-auto">
        <ul className="top-0 w-40 bg-black px-6 py-8 shadow  ">
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
        </ul>
        </div>
    </li>
    <li className="group z-10 relative dropdown   text-white hover:mb-56 hover:text-orange-600 cursor-pointer text-md font-serif ">
      <a className="inline-flex w-full justify-center gap-x-0   px-3 py-2 text-sm " id="menu-button" aria-expanded="true" aria-haspopup="true">
        Tourism
        <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </a>
        <div className="group-hover:block dropdown-menu absolute hidden h-auto">
        <ul className="top-0 w-40 bg-black px-6 py-8 shadow  ">
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-white text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
        </ul>
        </div>
    </li>
    <li>
      <Language/>
    </li>
    <li className="text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif">
    <button className="bg-transparent hover:bg-orange-700 text-white font-semibold hover:text-white py-1 px-1 border border-blue-700 rounded overflow-hidden whitespace-nowrap transition-colors duration-300 ease-in-out">
      Report an Issue
    </button>
  </li>
  </ul>
</div>
</div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default BottomNavbar;