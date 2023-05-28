import React from 'react'
import CustomApp from './CustomApp'
import {Routes,Route} from 'react-router-dom';
import AboutUs from './components/body/NavDetailPages/AboutUs';
import Leadership from './components/body/NavDetailPages/Leadership';
import History from './components/body/NavDetailPages/History';
const App = () => {
  return (
    <Routes>
    <Route path='/' element={<CustomApp/>}/>
    <Route path='about' element={<AboutUs/>}/>
    <Route path='about-leadership' element={<Leadership/>}/>
    <Route path='about-history' element={<History/>}/>
    </Routes>
  )
}

export default App
