import React, { useState, useEffect } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs'
import Navs from './components/navbars/navs';
import Welcome from './components/body/Welcome';
import Explore from './components/body/Explore';
import MeetIdeologyLeader from './components/body/MeetIdeologyLeader';
import HararData from './components/body/HararData';
import UpcomingEvent from './components/body/UpcomingEvent';
import News from './components/body/News';
import Footer from './components/body/Footer';
import BottomImages from './components/body/BottomImages';
import Aos from 'aos';
import CityCouncil from './components/body/CityCouncil';
import ExploreCity from './components/body/ExploreCity';
import VideoList from './components/body/VideoList';
const CustomApp = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    handleLoad(); // Mark the initial loading as complete when the component mounts

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    Aos.init();
  }, [])

  const data = [
    {
      image: 'images/c9.jpg',
      text1: 'Leading,Culture',
      text2: 'Convetional Leaders',
      url: '/about-leadership',
      icon: <BsArrowRightCircle className='text-4xl  fill-white hover:fill-[#3bb]'/>
    },
    {
      image: 'images/car4.jpg',
      text1: 'Economics,Culture',
      text2: 'Business Agence',
      url: '/economy-sectors',
      icon: <BsArrowRightCircle className='text-4xl  fill-white hover:fill-[#3bb]' />
    },
    {
      image: 'images/car6.jpg',
      text1: 'Gallary',
      text2: 'City Gallary',
      url: '/gallery',
      icon: <BsArrowRightCircle className='text-4xl  fill-white hover:fill-[#3bb]' />
    },
    {
      image: 'images/car8.jpg',
      text1: 'History, Culture',
      text2: 'Harari Historic Monuments',
      url: '/tourism-mon',
      icon: <BsArrowRightCircle className='text-4xl  fill-white hover:fill-[#3bb]' />
    },
    {
      image: 'images/hararicity.jpg',
      text1: 'Harar',
      text2: 'History Of Ancient City',
      url: '/about-history',
      icon: <BsArrowRightCircle className='text-4xl fill-white hover:fill-[#3bb]' />
    },
    {
      image: 'images/new2.jpg',
      text1: 'Business,Culture',
      text2: 'Animal Exibition',
      url: '/tourism-animal',
      icon: <BsArrowRightCircle className='text-4xl fill-white hover:fill-[#3bb]' />
    },
    {
      image: 'images/musume.jpg',
      text1: 'Business ,Culture',
      text2: 'Art And History Musuem',
      url:'/tourism-mus',
      icon: <BsArrowRightCircle className='text-4xl fill-white hover:fill-[#3bb]' />
    },
    // Rest of the data array items
  ];

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 
         border-b-2 border-[#329898] transition-all duration-700">
        </div>
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
          <ExploreCity data={data} />
          <CityCouncil />
          <VideoList/>
          {/* <BottomImages /> */}
          <Footer />
        </div>
      )}
    </>
  );
};

export default CustomApp;
