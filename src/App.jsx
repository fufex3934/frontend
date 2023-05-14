import React from 'react'
import Navs from './components/navbars/navs'
import Welcome from './components/body/Welcome';
import Explore from './components/body/Explore';

const App = () => {
  return (
    <div>
      <Navs/>
      <Welcome/>
      <Explore/>
    </div>
  )
}

export default App;

