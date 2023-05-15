import React from 'react'
import Navs from './components/navbars/navs'
import Welcome from './components/body/Welcome';
import Explore from './components/body/Explore';
import MeetIdeologyLeader from './components/body/MeetIdeologyLeader';

const App = () => {
  return (
    <div>
      <Navs/>
      <Welcome/>
      <Explore/>
      <MeetIdeologyLeader/>
    </div>
  )
}

export default App;

