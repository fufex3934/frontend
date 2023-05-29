import React, { useState, useEffect } from 'react';
import Language from './Language';
import '../../styles/navbar.css';
import { useNavigate } from 'react-router-dom';
const BottomNavbar = () => {
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const hideHeight = 200; // Height at which you want to hide the navbar

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
    
      <nav className={`navbar ${showNavbar ? 'fixed top-0 z-50 left-0 right-0 transition: all 300ms ease-in-out shadow-md' : ''} lg:block shadow-xl`}>
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
              <li className="group z-10 relative dropdown text-gray-600 text-md font-serif">
                  <button onClick={()=>navigate('/')} className="inline-flex w-full cursor-pointer 
                  justify-center gap-x-0 bg-white px-3 py-2 text-sm
                   text-[#1e293b] hover:bg-[#3bb5b5] hover:text-white" 
                  id="menu-button" aria-expanded="true" aria-haspopup="true">
                    Home
                  </button>   
                </li>

            <li className="group z-10 relative dropdown   text-gray-600 hover:text-[#3bb5b5] cursor-pointer text-md font-serif ">
              <a  className="hover:text-[#3bb5b5] inline-flex w-full justify-center gap-x-0  bg-white px-3 py-2 text-sm text-[#1e293b]" id="menu-button" aria-expanded="true" aria-haspopup="true">
                About
                <svg className="-mr-1 h-4 w-4  text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </a>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul className="top-0 w-48 bg-white  px-6 py-8 shadow  ">
                    <li className="py-1"><button onClick={()=>navigate('/about')}  className="block text-gray-900  text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">About Us</button></li>
                    <li className="py-1"><button onClick={()=>navigate('/about-leadership')} className="block text-gray-900  text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Leadership</button></li>
                    <li className="py-1"><button onClick={()=>navigate('/about-history')} className="block text-gray-900  text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">History</button></li>
                </ul>
              </div>
            </li>
            <li className="group z-10 relative dropdown   text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif ">
              <a className=" hover:text-[#3bb5b5] inline-flex w-full justify-center gap-x-0  bg-white px-3 py-2 text-sm text-[#1e293b]" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Timely
                <svg className="-mr-1 h-4 w-4  text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </a>
                <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                
                <ul className="top-0 w-48 bg-white  px-6 py-8 shadow  ">
                    <li className="py-1"><button onClick={()=>navigate('/timely-news')} className="block text-gray-900  text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">News</button></li>
                    <li className="py-1"><button onClick={()=>navigate('/timely-emergence')} className="block text-gray-900  text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Emergency</button></li>
                </ul>
                </div>
            </li>
          <li className="group z-10 relative dropdown   text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif ">
            <a className="hover:text-[#3bb5b5] inline-flex w-full justify-center gap-x-0  bg-white px-3 py-2 text-sm text-[#1e293b]" id="menu-button" aria-expanded="true" aria-haspopup="true">
              Economic
              <svg className="-mr-1 h-4 w-4  text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </a>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul className="top-0 w-48 bg-white  px-6 py-8 shadow  ">
                    <li className="py-1"><button onClick={()=>navigate('/economy-policy')} className="block text-gray-900  text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Policies</button></li>
                    <li className="py-1"><button onClick={()=>navigate('/economy-sectors')} className="block text-gray-900  text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Sectors</button></li>
                </ul>
              </div>
          </li>
          <li className=" group z-10 relative dropdown   text-gray-600  cursor-pointer text-md font-serif ">
            <a className="hover:text-[#3bb5b5] inline-flex w-full justify-center gap-x-0  bg-white px-3 py-2 text-sm text-[#1e293b]" id="menu-button" aria-expanded="true" aria-haspopup="true">
              Politics
              <svg className="-mr-1 h-4 w-4  text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </a>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
              <ul className="top-0 w-48 bg-white  px-6 py-8 shadow  ">
                  <li className="py-1"><button onClick={()=>navigate('/politic-go')} className="block text-gray-900  text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer whitespace-nowrap">Government Officials</button></li>
                  <li className="py-1"><button onClick={()=>navigate('/politic-gs')} className="block text-gray-900  text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer whitespace-nowrap">Government Structure</button></li>
                  <li className="py-1"><button onClick={()=>navigate('/politic-news')} className="block text-gray-900  text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer whitespace-nowrap">Political News</button></li>
              </ul>
              </div>
          </li>
          <li className="group z-10 relative dropdown   text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif ">
            <a className="hover:text-[#3bb5b5] inline-flex w-full justify-center gap-x-0  bg-white px-3 py-2 text-sm text-[#1e293b]" id="menu-button" aria-expanded="true" aria-haspopup="true">
              Social
              <svg className="-mr-1 h-4 w-4  text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </a>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto"> 
              <ul className="top-0 w-48 bg-white  px-6 py-8 shadow  ">
                  <li className="py-1"><button onClick={()=>navigate('/social-edu')} className="block text-gray-900  text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Education</button></li>
                  <li className="py-1"><button onClick={()=>navigate('/social-health')} className="block text-gray-900  text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">HealthCare</button></li>
              </ul>
              </div>
          </li>
            <li className="group z-10 relative dropdown   text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif ">
              <a className="hover:text-[#3bb5b5] inline-flex w-full justify-center gap-x-0  bg-white px-3 py-2 text-sm text-[#1e293b] " id="menu-button" aria-expanded="true" aria-haspopup="true">
                Tourism
                <svg className="-mr-1 h-4 w-4  text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </a>
                <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                <ul className="top-0 w-48 bg-white  px-6 py-8 shadow ">
                    <li className="py-1"><button onClick={()=>navigate('/tourism-mon')} className="block text-gray-900  text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Monuments</button></li>
                    <li className="py-1"><button onClick={()=>navigate('/tourism-mus')} className="block text-gray-900  text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Museum</button></li>
                    <li className="py-1"><button onClick={()=>navigate('/tourism-animal')} className="block text-gray-900  text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Animal Exhibition</button></li>

                </ul>
                </div>
            </li>
          <li className="group z-10 relative dropdown   text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif ">
            <a  className="hover:text-[#3bb5b5] inline-flex w-full justify-center gap-x-0  bg-white px-3 py-2 text-sm text-[#1e293b]" id="menu-button" aria-expanded="true" aria-haspopup="true">
              Videos
              <svg className="-mr-1 h-4 w-4  text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </a>
              <div className="group-hover:block dropdown-menu absolute hidden h-auto">
              <ul className="top-0 w-48 bg-white  px-6 py-8 shadow  ">
                  <li className="py-1"><button onClick={()=>navigate('/video-doc')} className="block text-gray-900  text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer whitespace-nowrap">Documentary</button></li>
                  <li className="py-1"><button onClick={()=>navigate('/video-test')} className="block text-gray-900  text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer whitespace-nowrap">Testimonials</button></li>
                  <li className="py-1"><button onClick={()=>navigate('/video-success')} className="block text-gray-900  text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer whitespace-nowrap">Success Stories</button></li>
                  <li className="py-1"><button onClick={()=>navigate('/video-tour')} className="block text-gray-900  text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer whitespace-nowrap">Tourism Promotions</button></li>
                  <li className="py-1"><button onClick={()=>navigate('/video-event')} className="block text-gray-900  text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer whitespace-nowrap">Events and Conferences</button></li>
                  
              </ul>
              </div>
          </li>
            <li className=''>
              <Language/>
            </li>
          <li className="text-gray-600 hover:text-orange-600 cursor-pointer relative left-[10px] font-serif">
                <button onClick={()=>navigate('/report')} className="bg-transparent hover:bg-orange-700 text-[#329898] text-sm font-semibold hover:text-white p-3 border border-[#329898] 
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
                className={`fill-current h-4 w-4 ${isOpen ? 'block' : 'block'}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              
            </button>
          </div>

          {isOpen && (
            <div className="fixed top-0 left-0 animate-slide-in  w-80% h-screen bg-[#1e293b] text-white">
              <div className="flex justify-end p-4">
                <button
                  className="text-white "
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
              <div className="flex flex-col w-80% h-full p-4 ">
                    <ul className="space-y-4  ">
                    <li className="group z-10 relative dropdown   text-white  hover:text-[#3bb5b5] cursor-pointer text-md font-serif ">
                    <button onClick={()=>navigate('/')}  className=" inline-flex   py-2 text-sm " >
                        Home
                      </button>
                      </li>
                      <li className="group z-10  dropdown   text-white  cursor-pointer text-md font-serif ">
                        <a  className="inline-flex  justify-between gap-x-[163px] py-2 text-sm " >
                          About
                          <svg className=" h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                          </svg>
                        </a>
                          <div className="group-hover:block dropdown-menu relative hidden h-auto ">
                          
                          <ul className="top-0 w-40 bg-[#1e293b] px-6 py-8 shadow  ">
                              <li className="py-1"><button onClick={()=>navigate('/about')}  className="block text-white text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">About Us</button></li>
                              <li className="py-1"><button onClick={()=>navigate('/about-leadership')}  className="block text-white text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Leadership</button></li>
                              <li className="py-1"><button onClick={()=>navigate('/about-history')} className="block text-white text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">History</button></li>
                          </ul>
                          </div>
                      </li>
                      <li className="group z-10  dropdown   text-white  hover:text-[#3bb5b5] cursor-pointer text-md font-serif ">
                    <a  className="inline-flex  justify-between gap-x-40   py-2 text-sm " >
                        Timely
                        <svg className=" h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      </a>
                          <div className="group-hover:block dropdown-menu relative hidden h-auto">
                          
                          <ul className="top-0 w-40 bg-[#1e293b] px-6 py-8 shadow  ">
                              <li className="py-1"><button onClick={()=>navigate('/timely-news')} className="block text-white text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">News</button></li>
                              <li className="py-1"><button onClick={()=>navigate('/timely-emergence')} className="block text-white text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Emergency</button></li>
                          </ul>
                          </div>
                      </li>
                      <li className="group z-10  dropdown   text-white  hover:text-[#3bb5b5] cursor-pointer text-md font-serif ">
                    <a  className="inline-flex  justify-between gap-x-[142px] py-2 text-sm " >
                        Economic
                        <svg className=" h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      </a>
                          <div className="group-hover:block dropdown-menu relative hidden h-auto">
                          
                          <ul className="top-0 w-40 bg-[#1e293b] px-6 py-8 shadow  ">
                              <li className="py-1"><button onClick={()=>navigate('/economy-policy')} className="block text-white text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Policies</button></li>
                              <li className="py-1"><button onClick={()=>navigate('/economy-sectors')} className="block text-white text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Sectors</button></li>
                          </ul>
                          </div>
                      </li>
                      <li className="group z-10  dropdown   text-white  hover:text-[#3bb5b5] cursor-pointer text-md font-serif ">
                        <a  className="inline-flex  justify-between gap-x-[160px]  py-2 text-sm " >
                          Politics
                          <svg className=" h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                          </svg>
                        </a>
                          <div className="group-hover:block dropdown-menu relative hidden h-auto">
                          <ul className="top-0 w-40 bg-[#1e293b] px-6 py-8 shadow  ">
                              <li className="py-1"><button onClick={()=>navigate('/politic-go')} className="block text-white text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Government Officials</button></li>
                              <li className="py-1"><button onClick={()=>navigate('/politic-gs')} className="block text-white text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Government Structure</button></li>
                              <li className="py-1"><button onClick={()=>navigate('/politic-news')} className="block text-white text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Political News</button></li>
                          </ul>
                          </div>
                      </li>
                      <li className="group z-10  dropdown   text-white  hover:text-[#3bb5b5] cursor-pointer text-md font-serif ">
                        <a className="inline-flex  justify-between gap-x-[169px]   py-2 text-sm " >
                          Social
                          <svg className=" h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                          </svg>
                        </a>
                          <div className="group-hover:block dropdown-menu relative hidden h-auto">
                          <ul className="top-0 w-40 bg-[#1e293b] px-6 py-8 shadow  ">
                              <li className="py-1"><button  onClick={()=>navigate('/social-edu')} className="block text-white text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Education</button></li>
                              <li className="py-1"><button  onClick={()=>navigate('/social-health')} className="block text-white text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">HealthCare</button></li>
                          </ul>
                          </div>
                      </li>
                      <li className="group z-10  dropdown   text-white  hover:text-[#3bb5b5] cursor-pointer text-md font-serif ">
                        <a className="inline-flex  justify-between gap-x-[156px]   py-2 text-sm " >
                          Tourism
                          <svg className=" h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                          </svg>
                        </a>
                          <div className="group-hover:block dropdown-menu relative hidden h-auto">
                          <ul className="top-0 w-40 bg-[#1e293b] px-6 py-8 shadow  ">
                              <li className="py-1"><button onClick={()=>navigate('/tourism-mon')} className="block text-white text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Monuments</button></li>
                              <li className="py-1"><button onClick={()=>navigate('/tourism-mus')} className="block text-white text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Museums</button></li>
                              <li className="py-1"><button onClick={()=>navigate('/tourism-animal')} className="block text-white text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Animal Exhibition</button></li>
                          </ul>
                          </div>
                      </li>
                      <li className="group z-10  dropdown   text-white  hover:text-[#3bb5b5] cursor-pointer text-md font-serif ">
                        <a className="inline-flex  justify-between gap-x-[166px]  py-2 text-sm " >
                          Videos
                          <svg className=" h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                          </svg>
                        </a>
                          <div className="group-hover:block dropdown-menu relative hidden h-auto">
                          <ul className="top-0 w-40 bg-[#1e293b] px-6 py-8 shadow  ">
                              <li className="py-1"><button onClick={()=>navigate('/video-doc')} className="block text-white text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Documentary</button></li>
                              <li className="py-1"><button onClick={()=>navigate('/video-test')} className="block text-white text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:-ml-5  hover:py-1 cursor-pointer">Testimonials</button></li>
                              <li className="py-1"><button onClick={()=>navigate('/video-success')} className="block text-white text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Success Stories</button></li>
                              <li className="py-1"><button onClick={()=>navigate('/video-tour')} className="block text-white text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Tourism Promotions</button></li>
                              <li className="py-1"><button onClick={()=>navigate('/video-event')} className="block text-white text-sm hover:bg-[#3bb5b5] hover:text-white hover:px-5 hover:py-1 hover:-ml-5  cursor-pointer">Events and Conferences</button></li>
                          </ul>
                          </div>
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