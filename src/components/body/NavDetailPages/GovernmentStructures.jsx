import React,{useEffect} from 'react'
import Navs from '../../navbars/navs'
import Footer from '../Footer'

const GovernmentStructures = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);

  return (
    <>
    <Navs/>
      <div>
      Government Structures Page
      </div>
      <Footer/>
    </>
  )
}

export default GovernmentStructures
