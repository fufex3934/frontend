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
const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
      window.setInterval(1000)
    };
  }, []);

  const data = [
    {
      image: 'images/hyenas.jpg',
      text1: 'Hyenas',
      text2: 'Animal Exhibition',
      icon: <BsArrowRightCircle className='text-4xl  fill-white hover:fill-[#3bb5b5]'/>
    },
    {
      image: 'images/hararicity.jpg',
      text1: 'Jugol Building!',
      text2: 'Historical Building',
      icon: <BsArrowRightCircle className='text-4xl  fill-white hover:fill-[#3bb5b5]' />
    },
    {
      image: 'images/musume.jpg',
      text1: 'Bussiness, Government!',
      text2: 'Harari Art Musume',
      icon: <BsArrowRightCircle className='text-4xl  fill-white hover:fill-[#3bb5b5]' />
    },
    {
      image: 'images/car6.jpg',
      text1: 'Business',
      text2: 'Cinema Teater',
      icon: <BsArrowRightCircle className='text-4xl  fill-white hover:fill-[#3bb5b5]' />
    },
    {
      image: 'images/car7.jpg',
      text1: 'Culture,Event',
      text2: 'City Of Harari',
      icon: <BsArrowRightCircle className='text-4xl fill-white hover:fill-[#3bb5b5]' />
    },
    {
      image: 'images/car13.jpg',
      text1: 'Culture ,Public Place',
      text2: 'Business Agence',
      icon: <BsArrowRightCircle className='text-4xl fill-white hover:fill-[#3bb5b5]' />
    },
    {
      image: 'images/car8.jpg',
      text1: 'Holydays ,Festivals',
      text2: 'Shewal Eid Holyday/Festival',
      icon: <BsArrowRightCircle className='text-4xl fill-white hover:fill-[#3bb5b5]' />
    },
    // Rest of the data array items
  ];

  return (
    <div>
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
    </div>
  );
};

export default App;
