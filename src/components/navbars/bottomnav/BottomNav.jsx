import React, { useState, useEffect } from 'react';
import Language from './Language';
import '../../styles/navbar.css';
import './BottomNav.css'
import { Link, useNavigate } from 'react-router-dom';
import { AiFillHome, AiFillMoneyCollect, AiTwotoneVideoCamera } from "react-icons/ai";
import { IoNewspaper } from 'react-icons/io5';
import { MdLocalPolice, MdTour } from 'react-icons/md';
import { SiSociety6 } from 'react-icons/si';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import {BiNews} from 'react-icons/bi';
import Logo from '/harar.png';
const BottomNavbar = () => {
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const hideHeight = 250; // Height at which you want to hide the navbar

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
      <div className="bg-[#329898] md:bg-[#329898] lg:bg-white/100 py-6  p-4">
        <ul className="flex items-center">
          {!isOpen && (
            <div className="mr-1">
              <Link to='/'>
                <img
                  className="h-12 md:h-12 w-24 object-cover md:w-12 rounded-full lg:hidden"
                  src={Logo}
                  alt="Logo"
                />
              </Link>
            </div>
          )}

          {!isOpen && (
            <a href="#">
              <h1 className="text-white md:text-white lg:text-[#083344] ml-4 md:ml-2 font-bold flex-grow 
               whitespace-wrap text-sm md:text-lg md:uppercase  lg:hidden font-sans leading-snug tracking-tight">
                {t('header')}
              </h1>
            </a>
          )}

          <div className="hidden lg:block ">
            <ul className="flex items-center ">
              <li className="group z-10 relative dropdown text-gray-600 text-md font-serif">
                <button onClick={() => navigate('/')} className="inline-flex w-full cursor-pointer 
                  justify-center gap-x-0 bg-white px-2 py-2 text-xl
                   text-[#1e293b] hover:bg-[#3bb5b5] hover:text-white font-serif leading-snug tracking-tight"
                  id="menu-button" aria-expanded="true" aria-haspopup="true">
                  <AiFillHome className='mr-1 w-6 text-[#3bb] change h-6 ' />
                  {t('navbar.home')}
                </button>
              </li>

              <li className="group z-10 relative dropdown   text-gray-600 hover:text-[#3bb5b5] cursor-pointer text-md font-serif ">
                <button className="hover:bg-[#3bb5b5] hover:text-white inline-flex w-full justify-center gap-x-0 
                 bg-white px-2 py-2 text-xl text-[#1e293b] font-serif leading-snug tracking-tight" >
                  <BsFillBookmarkFill className='mr-1 w-6 h-6 text-[#3bb] change' />
                  {t('navbar.about')}

                </button>
                <div className="  group-hover:block dropdown-menu absolute hidden h-auto">
                  <ul className="top-0 w-52 bg-white py-8 text-center shadow li ">
                    <li className="w-full border-y-[1px] border-[#3bb]"><button onClick={() => navigate('/about')} className="block w-full py-2 text-gray-900  text-md hover:bg-[#3bb5b5] hover:text-white  cursor-pointer whitespace-nowrap">{t('dropdown.aboutUs')}</button></li>
                    <li className="w-full border-b-[1px] border-[#3bb]"><button onClick={() => navigate('/about-history')} className="block w-full py-2 text-gray-900  text-md hover:bg-[#3bb5b5] hover:text-white cursor-pointer">{t('dropdown.harar')}</button></li>
                  </ul>
                </div>
              </li>
              <li className="group z-10 relative dropdown   text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif ">
                <button className=" hover:bg-[#3bb5b5] hover:text-white 
                inline-flex w-full justify-center gap-x-0  bg-white px-2 py-2 
                text-xl text-[#1e293b] font-serif leading-snug tracking-tight" 
                id="menu-button" aria-expanded="true" aria-haspopup="true">
                  <BiNews className='mr-1 w-6 h-6 text-[#3bb] change' />
                  {t('navbar.news')}
                </button>
                <div className="group-hover:block dropdown-menu absolute hidden h-auto">

                  <ul className="top-0 w-52 bg-white py-8 shadow ">
                    <li className="w-full border-y-[1px] border-[#3bb]"><button onClick={() => navigate('/harari-news')} className="block w-full py-2 text-gray-900  text-md hover:bg-[#3bb5b5] hover:text-white cursor-pointer">{t('dropdown.harari-news')}</button></li>
                    <li className="w-full border-b-[1px] border-[#3bb]"><button onClick={() => navigate('/national-news')} className="block w-full py-2 text-gray-900  text-md hover:bg-[#3bb5b5] hover:text-white cursor-pointer whitespace-nowrap">{t('dropdown.national-news')}</button></li>
                    <li className="w-full border-b-[1px] border-[#3bb]"><button onClick={() => navigate('/africa-news')} className="block w-full py-2 text-gray-900  text-md hover:bg-[#3bb5b5] hover:text-white cursor-pointer whitespace-nowrap">{t('dropdown.africa-news')}</button></li>
                    <li className="w-full border-b-[1px] border-[#3bb]"><button onClick={() => navigate('/international-news')} className="block w-full py-2 text-gray-900  text-md hover:bg-[#3bb5b5] hover:text-white cursor-pointer whitespace-nowrap">{t('dropdown.international-news')}</button></li>
                  </ul>
                </div>
              </li>
              <li className="group z-10 relative dropdown   text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif ">
                <button className=" hover:bg-[#3bb5b5] hover:text-white 
                inline-flex w-full justify-center gap-x-0  bg-white px-2 py-2 
                text-xl text-[#1e293b] font-serif leading-snug tracking-tight" 
                id="menu-button" aria-expanded="true" aria-haspopup="true">
                  <IoNewspaper className='mr-1 w-6 h-6 text-[#3bb] change' />
                  {t('navbar.timely')}
                </button>
                <div className="group-hover:block dropdown-menu absolute hidden h-auto">

                  <ul className="top-0 w-52 bg-white py-8 shadow ">
                    <li className="w-full border-y-[1px] border-[#3bb]"><button onClick={() => navigate('/events')} className="block w-full py-2 text-gray-900  text-md hover:bg-[#3bb5b5] hover:text-white cursor-pointer">{t('dropdown.news')}</button></li>
                    <li className="w-full border-b-[1px] border-[#3bb]"><button onClick={() => navigate('/timely-emergence')} className="block w-full py-2 text-gray-900  text-md hover:bg-[#3bb5b5] hover:text-white cursor-pointer whitespace-nowrap">{t('dropdown.emergency')}</button></li>
                  </ul>
                </div>
              </li>
              <li className="group z-10 relative dropdown   text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif ">
                <button className="hover:bg-[#3bb5b5] hover:text-white inline-flex 
                w-full justify-center gap-x-0  bg-white px-2 
                py-2 text-xl text-[#1e293b] font-serif leading-snug tracking-tight" id="menu-button" 
                aria-expanded="true" aria-haspopup="true">
                  <AiFillMoneyCollect className='mr-1  w-6 h-6 text-[#3bb] change' />
                  {t('navbar.economic')}
                </button>
                <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                  <ul className="top-0 w-52 bg-white py-8 shadow  ">
                    <li className="w-full border-y-[1px] border-[#3bb]"><button onClick={() => navigate('/economy-policy')} className="block w-full text-gray-900  text-md hover:bg-[#3bb5b5] hover:text-white py-2 cursor-pointer">{t('dropdown.policies')}</button></li>
                    <li className="w-full border-b-[1px] border-[#3bb]"><button onClick={() => navigate('/economy-sectors')} className="block w-full text-gray-900  text-md hover:bg-[#3bb5b5] hover:text-white py-2 cursor-pointer">{t('dropdown.sectors')}</button></li>
                  </ul>
                </div>
              </li>
              <li className=" group z-10 relative dropdown   text-gray-600  cursor-pointer text-md font-serif ">
                <button className="hover:bg-[#3bb5b5] hover:text-white 
                inline-flex w-full justify-center gap-x-0  bg-white px-2
                 py-2 text-xl text-[#1e293b] font-serif leading-snug tracking-tight" id="menu-button"
                  aria-expanded="true" aria-haspopup="true">
                  <MdLocalPolice className='mr-1 h-6 w-6 text-[#3bb] change' />
                  {t('navbar.politics')}
                </button>
                <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                  <ul className="top-0 w-52 bg-white py-8 shadow  ">
                    <li className="w-full border-y-[1px] border-[#3bb]"><button onClick={() => navigate('/city-adminstration')} className="block w-full text-gray-900  text-md hover:bg-[#3bb5b5] hover:text-white  py-2 cursor-pointer whitespace-nowrap">{t('dropdown.go')}</button></li>
                    <li className="w-full border-b-[1px] border-[#3bb]"><button onClick={() => navigate('/politic-gs')} className="block w-full text-gray-900  text-md hover:bg-[#3bb5b5] hover:text-white py-2 cursor-pointer whitespace-nowrap">{t('dropdown.gs')}</button></li> 
                  </ul>
                </div>
              </li>
              <li className="group z-10 relative dropdown   text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif ">
                <button className="hover:bg-[#3bb5b5] hover:text-white inline-flex w-full justify-center gap-x-0  bg-white px-2
                 py-2 text-xl text-[#1e293b] font-serif leading-snug tracking-tight" 
                 id="menu-button" aria-expanded="true" aria-haspopup="true">
                  <SiSociety6 className='mr-2 h-6 w-6 text-[#3bb] change' />
                  {t('navbar.social')}
                </button>
                <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                  <ul className="top-0 w-52 bg-white py-8 shadow  ">
                    <li className="w-full border-y-[1px] border-[#3bb]"><button onClick={() => navigate('/social-edu')} className="block w-full text-gray-900  text-md hover:bg-[#3bb5b5] hover:text-white py-2 cursor-pointer">{t('dropdown.education')}</button></li>
                    <li className="w-full border-b-[1px] border-[#3bb]"><button onClick={() => navigate('/social-health')} className="block w-full text-gray-900  text-md hover:bg-[#3bb5b5] hover:text-white py-2 cursor-pointer whitespace-nowrap">{t('dropdown.healthcare')}</button></li>
                  </ul>
                </div>
              </li>
              <li className="group z-10 relative dropdown   text-gray-600 hover:text-orange-600 cursor-pointer text-md font-serif ">
                <button className="hover:bg-[#3bb5b5] hover:text-white inline-flex
                 w-full justify-center gap-x-0  bg-white px-2 py-2 text-xl
                  text-[#1e293b] font-serif leading-snug tracking-tight" 
                 id="menu-button" aria-expanded="true" aria-haspopup="true">
                  <MdTour className='mr-1 h-6 w-6 text-[#3bb] change ' />
                  {t('navbar.tourism')}

                </button>
                <div className="group-hover:block dropdown-menu absolute hidden h-auto">
                  <ul className="top-0 w-52 bg-white py-8 shadow ">
                    <li className="w-full border-t-[1px] border-[#3bb]"><button onClick={() => navigate('/tourism-mon')} className="block w-full text-gray-900 py-2  text-md hover:bg-[#3bb5b5] hover:text-white hover:px-[54px] cursor-pointer">{t('dropdown.monuments')}</button></li>
                    <li className="w-full border-y-[1px] border-[#3bb]"><button onClick={() => navigate('/tourism-mus')} className="block w-full text-gray-900 py-2 text-md hover:bg-[#3bb5b5] hover:text-white  cursor-pointer">{t('dropdown.museum')}</button></li>
                    <li className="w-full border-b-[1px] border-[#3bb]"><button onClick={() => navigate('/tourism-animal')} className="block w-full text-gray-900 py-2 text-md hover:bg-[#3bb5b5] hover:text-white  cursor-pointer whitespace-nowrap">{t('dropdown.animalex')}</button></li>
                  </ul>
                </div>
              </li>
              <Link to='https://www.youtube.com/channel/UCCwExJBZJTXiItcz1WLONVA' target='_blank' className="group z-10 relative dropdown link  text-gray-600  cursor-pointer text-md font-serif ">
                <span className="hover:bg-[#3bb5b5] hover:text-white inline-flex w-full justify-center gap-x-0 
                 bg-white px-2 py-2 text-xl  text-[#1e293b] font-serif leading-snug tracking-tight" 
                 id="menu-button" aria-expanded="true" aria-haspopup="true">
                  <AiTwotoneVideoCamera className='mr-2 h-6 w-6 text-[#3bb] change' />
                  {t('navbar.videos')}
                </span>
              </Link>
              <li className='right-7 absolute'>
                <Language />
              </li>

            </ul>
          </div>
                 {/* for mobile */}
          <div className="block lg:hidden items-center ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center px-3 py-2 rounded text-white lg:text-black-500 hover:text-black-400 ${isOpen ? 'rotate-180' : ''
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
                    <button onClick={() => navigate('/')} className=" inline-flex   py-2 text-md " >
                    {t('navbar.home')}
                    </button>
                  </li>
                  <li className="group z-10  dropdown   text-white  cursor-pointer text-md font-serif ">
                    <button className="inline-flex  justify-between gap-x-[163px] py-2 text-md " >
                    {t('navbar.about')}
                      <svg className=" h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div className="group-hover:block dropdown-menu relative hidden h-auto ">

                      <ul className="top-0 w-40 bg-[#1e293b] py-8 shadow  ">
                        <li className="w-full border-y-[1px] border-[#3bb]"><button onClick={() => navigate('/about')} className="block w-full py-2 text-white text-md hover:bg-[#3bb5b5] hover:text-white whitespace-nowrap cursor-pointer">About Us</button></li>
                        <li className="w-full border-b-[1px] border-[#3bb]"><button onClick={() => navigate('/about-history')} className="block py-2 w-full text-white text-md hover:bg-[#3bb5b5] hover:text-white cursor-pointer">Harar</button></li>
                      </ul>
                    </div>
                  </li>
                  <li className="group z-10  dropdown   text-white  hover:text-[#3bb5b5] cursor-pointer text-md font-serif ">
                    <button className="inline-flex  justify-between gap-x-40   py-2 text-md " >
                    {t('navbar.timely')}
                      <svg className=" h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div className="group-hover:block dropdown-menu relative hidden h-auto">

                      <ul className="top-0 w-40 bg-[#1e293b] py-8 shadow  ">
                        <li className="w-full border-y-[1px] border-[#3bb]"><button onClick={() => navigate('/timely-news')} className="block text-white text-md hover:bg-[#3bb5b5] hover:text-white w-full py-2 cursor-pointer">News</button></li>
                        <li className="w-full border-b-[1px] border-[#3bb]"><button onClick={() => navigate('/timely-emergence')} className="block text-white text-md hover:bg-[#3bb5b5] hover:text-white w-full py-2 cursor-pointer">Emergency</button></li>
                      </ul>
                    </div>
                  </li>
                  <li className="group z-10  dropdown   text-white  hover:text-[#3bb5b5] cursor-pointer text-md font-serif ">
                    <button className="inline-flex  justify-between gap-x-[142px] py-2 text-md " >
                    {t('navbar.economic')}
                      <svg className=" h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div className="group-hover:block dropdown-menu relative hidden h-auto">

                      <ul className="top-0 w-40 bg-[#1e293b] py-8 shadow  ">
                        <li className="w-full border-y-[1px] border-[#3bb]"><button onClick={() => navigate('/economy-policy')} className="block w-full py-2 text-white text-md hover:bg-[#3bb5b5] hover:text-white cursor-pointer">Policies</button></li>
                        <li className="w-full border-b-[1px] border-[#3bb]"><button onClick={() => navigate('/economy-sectors')} className="block w-full py-2 text-white text-md hover:bg-[#3bb5b5] hover:text-white cursor-pointer">Sectors</button></li>
                      </ul>
                    </div>
                  </li>
                  <li className="group z-10  dropdown   text-white  hover:text-[#3bb5b5] cursor-pointer text-md font-serif ">
                    <button className="inline-flex  justify-between gap-x-[160px]  py-2 text-md " >
                    {t('navbar.politics')}
                      <svg className=" h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div className="group-hover:block dropdown-menu relative hidden h-auto">
                      <ul className="top-0 w-40 bg-[#1e293b] py-8 shadow  ">
                        <li className="w-full border-y-[1px] border-[#3bb]"><button onClick={() => navigate('/about-leadership')} className="block text-white text-md hover:bg-[#3bb5b5] hover:text-white w-full py-2 cursor-pointer whitespace-nowrap">Government Officials</button></li>
                        <li className="w-full border-b-[1px] border-[#3bb]"><button onClick={() => navigate('/politic-gs')} className="block text-white text-md hover:bg-[#3bb5b5] hover:text-white w-full py-2 cursor-pointer whitespace-nowrap">Government Structure</button></li>
                      </ul>
                    </div>
                  </li>
                  <li className="group z-10  dropdown   text-white  hover:text-[#3bb5b5] cursor-pointer text-md font-serif ">
                    <button className="inline-flex  justify-between gap-x-[169px]   py-2 text-md " >
                    {t('navbar.social')}
                      <svg className=" h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div className="group-hover:block dropdown-menu relative hidden h-auto">
                      <ul className="top-0 w-40 bg-[#1e293b] py-8 shadow  ">
                        <li className="w-full border-y-[1px] border-[#3bb]"><button onClick={() => navigate('/social-edu')} className="block text-white text-md hover:bg-[#3bb5b5] hover:text-white w-full py-2 cursor-pointer">Education</button></li>
                        <li className="w-full border-b-[1px] border-[#3bb]"><button onClick={() => navigate('/social-health')} className="block text-white text-md hover:bg-[#3bb5b5] hover:text-white w-full py-2 cursor-pointer">HealthCare</button></li>
                      </ul>
                    </div>
                  </li>
                  <li className="group z-10  dropdown   text-white  hover:text-[#3bb5b5] cursor-pointer text-md font-serif ">
                    <button className="inline-flex  justify-between gap-x-[156px]   py-2 text-md " >
                    {t('navbar.tourism')}
                      <svg className=" h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div className="group-hover:block dropdown-menu relative hidden h-auto">
                      <ul className="top-0 w-40 bg-[#1e293b] py-8 shadow  ">
                        <li className="w-full border-t-[1px] border-[#3bb]"><button onClick={() => navigate('/tourism-mon')} className="block text-white text-md hover:bg-[#3bb5b5] hover:text-white w-full py-2 cursor-pointer">Monuments</button></li>
                        <li className="w-full border-y-[1px] border-[#3bb]"><button onClick={() => navigate('/tourism-mus')} className="block text-white text-md hover:bg-[#3bb5b5] hover:text-white w-full py-2 cursor-pointer">Museums</button></li>
                        <li className="w-full border-b-[1px] border-[#3bb]"><button onClick={() => navigate('/tourism-animal')} className="block text-white text-md hover:bg-[#3bb5b5] hover:text-white w-full py-2 whitespace-nowrap  cursor-pointer">Animal Exhibition</button></li>
                      </ul>
                    </div>
                  </li>
                  <Link to = 'https://www.youtube.com/channel/UCCwExJBZJTXiItcz1WLONVA' target='_blank' className="group z-10  dropdown   text-white  hover:text-[#3bb5b5] cursor-pointer text-md font-serif ">
                    <button className="inline-flex  justify-between gap-x-[166px]  py-2 text-md " >
                    {t('navbar.videos')}
                    </button>
                  </Link>
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