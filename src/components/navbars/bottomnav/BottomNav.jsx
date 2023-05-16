import React, { useState,useEffect } from 'react';
import Language from './Language';
import '../../styles/navbar.css';

const BottomNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={showNavbar ? '' : ' navbar'}>
      <div className="bg-white/100 h-24 p-4">
      <ul className=" flex items-center">
      <div className="mr-2">
  <a href="#">
  <img className="h-12 w-12 rounded-full" src="./harar.png" alt="Logo" />
  </a>
</div>


<a href="#">
<h1 className='text-gray-500 font-bold flex-grow mr-3'>HGCAOffice</h1>
</a>
    
<div className="block lg:hidden  items-center ml-auto">
  <button
    onClick={() => setIsOpen(!isOpen)}
    className={`flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400 ${isOpen ? 'rotate-180' : ''}`}
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

  
     <div
        className={`w-full block lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0 ${isOpen ? "block" : "hidden"}`}
     >
      <li className="group z-10  relative dropdown  text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif ">
  <a  className="inline-flex  w-full justify-center gap-x-0  bg-white px-1 py-2 text-sm " id="menu-button" aria-expanded="true" aria-haspopup="true">
      Home
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg>
    </a>
        <div className="group-hover:block dropdown-menu absolute hidden h-auto ">
        
        <ul className="top-0 w-48  bg-white  px-6 py-8 shadow  ">
            <li className="py-1"><a className="block text-gray-900  text-base  hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
        </ul>
        </div>
    </li>

    <li className="group z-10 relative dropdown   text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif ">
  <a  className="inline-flex w-full justify-center gap-x-0  bg-white px-3 py-2 text-sm " id="menu-button" aria-expanded="true" aria-haspopup="true">
      About
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
    <li className="group z-10  relative dropdown   text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif ">
  <a  className="inline-flex w-full justify-center gap-x-0  bg-white px-3 py-2 text-sm " id="menu-button" aria-expanded="true" aria-haspopup="true">
      Timely
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
  <a  className="inline-flex w-full justify-center gap-x-0   bg-white px-3 py-2 text-sm " id="menu-button" aria-expanded="true" aria-haspopup="true">
      Politics
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
    <li className="group z-10 relative dropdown  text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif ">
  <a  className="inline-flex w-full justify-center gap-x-0   bg-white px-3 py-2 text-sm " id="menu-button" aria-expanded="true" aria-haspopup="true">
      Economic
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
  <a  className="inline-flex w-full justify-center gap-x-0   bg-white px-3 py-2 text-sm " id="menu-button" aria-expanded="true" aria-haspopup="true">
      Tourism
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
  <a  className="inline-flex w-full justify-center gap-x-0   bg-white px-3 py-2 text-sm " id="menu-button" aria-expanded="true" aria-haspopup="true">
      Social
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg>
    </a>
        <div className="group-hover:block dropdown-menu absolute hidden h-auto">
        
        <ul className="top-0 w-48 bg-white  px-6 py-8 shadow  ">
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a>
            
            </li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
            <li className="py-1"><a className="block text-gray-900  text-base hover:bg-orange-600 hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Item1</a></li>
        </ul>
        </div>
    </li>
    <li className='mr-5 '>  
      <Language/>
    </li>

    
  <li className="text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif">
    <button className="bg-transparent hover:bg-orange-700 text-blue-500 font-semibold hover:text-white py-1 px-1 border border-blue-700 rounded overflow-hidden whitespace-nowrap transition-colors duration-300 ease-in-out">
      Report an Issue
    </button>
  </li>  
      </div> 
</ul>

    </div>
    </nav>
  );
};

export default BottomNavbar;