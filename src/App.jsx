import React from 'react'
import Navs from './components/navbars/navs'
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
  const data = [
    {
      image: 'images/explore.jpg',
      text1: 'Hello, world!',
      text2:'OPs',
      icon:'->'
    }, 
    {
      image: 'images/explore.jpg',
      text1: 'Hello, world!',
      text2:'Ops',
      icon:'->'
    },
    {
      image: 'images/explore.jpg',
      text1: 'Hello, world!',
      text2:'OPs',
      icon:'->'
    }, 
    {
      image: 'images/explore.jpg',
      text1: 'Hello, world!',
      text2:'Ops',
      icon:'->'
    },
    {
      image: 'images/explore.jpg',
      text1: 'Hello, world!',
      text2:'OPs',
      icon:'->'
    }, 
    {
      image: 'images/explore.jpg',
      text1: 'Hello, world!',
      text2:'Ops',
      icon:'->'
    }
  ]
  return (
    <div>
      <Navs/>
      <Welcome/>
      <Explore/>
      <MeetIdeologyLeader/>
       <HararData /> 
      <UpcomingEvent/>
      <News/>
    </div>
  )
}

export default App;

