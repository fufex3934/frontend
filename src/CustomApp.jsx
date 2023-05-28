import React, { useState, useEffect } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs'
import Navs from './components/navbars/navs';
import Welcome from './components/body/Welcome';
import Explore from './components/body/Explore';
import MeetIdeologyLeader from './components/body/MeetIdeologyLeader';
import HararData from './components/body/HararData';
import UpcomingEvent from './components/body/UpcomingEvent';
import News from './components/body/News';
import OnlineService from './components/body/OnlineService';
import Footer from './components/body/Footer';
import BottomImages from './components/body/BottomImages';
import CityCouncil from './components/body/CityCouncil';
import ExploreCity from './components/body/ExploreCity';
const CustomApp = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
      window.setInterval(1000)
    };
  }, []);

  const data = [
    {
      image: 'images/c12.jpg',
      text1: 'Hello, world!',
      text2: 'OPs',
      icon: <BsArrowRightCircle className='text-4xl  fill-white hover:fill-red-500'/>
    },
    {
      image: 'images/car1.jpg',
      text1: 'Hello, world!',
      text2: 'OPs',
      icon: <BsArrowRightCircle className='text-4xl  fill-white hover:fill-red-500' />
    },
    {
      image: 'images/car10.jpg',
      text1: 'Hello, world!',
      text2: 'OPs',
      icon: <BsArrowRightCircle className='text-4xl  fill-white hover:fill-red-500' />
    },
    {
      image: 'images/car6.jpg',
      text1: 'Hello, world!',
      text2: 'OPs',
      icon: <BsArrowRightCircle className='text-4xl  fill-white hover:fill-red-500' />
    },
    {
      image: 'images/car7.jpg',
      text1: 'Hello, world!',
      text2: 'OPs',
      icon: <BsArrowRightCircle className='text-4xl fill-white hover:fill-red-500' />
    },
    {
      image: 'images/car8.jpg',
      text1: 'Hello, world!',
      text2: 'OPs',
      icon: <BsArrowRightCircle className='text-4xl fill-white hover:fill-red-500' />
    },
    {
      image: 'images/car13.jpg',
      text1: 'Hello, world!',
      text2: 'OPs',
      icon: <BsArrowRightCircle className='text-4xl fill-white hover:fill-red-500' />
    },
    // Rest of the data array items
  ];

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-[#3bb5b5]"></div>
        </div>
      ) : (
        <div>
          <Navs/>
          <Welcome />
          <Explore />
          <MeetIdeologyLeader />
          <HararData />
          <UpcomingEvent />
          <News />
          <OnlineService />
          <ExploreCity data={data} />
          <CityCouncil />
          <BottomImages />
          <Footer />
        </div>
      )}
    </>
  );
};

export default CustomApp;
