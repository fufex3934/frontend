
import React from 'react'
import BottomNavbar from './bottomnav/BottomNav'
import TopNav from './topnav/TopNav';
import MiddleNav from './middleNav/MiddleNav';

const Navs = () => {
  return (
    <>
     <nav>
      <TopNav/>
      <MiddleNav/>
     <BottomNavbar/>
     </nav>
    </>
  )
}

export default Navs;
