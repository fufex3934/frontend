import React,{useEffect} from 'react'
import Navs from '../../navbars/navs'
import Footer from '../Footer'

const HealthCare = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);

  return (
    <>
    <Navs/>
      <div>
      HealthCarePage
      </div>
      <Footer/>
    </>
  )
}

export default HealthCare
