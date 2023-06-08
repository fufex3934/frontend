import React,{useEffect} from 'react'
import Footer from '../Footer'
import Navs from '../../navbars/navs'

const Monuments = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);

  return (
    <>
    <Navs/>
      <div>
      Monuments Page
      </div>
      <Footer/>
    </>
  )
}

export default Monuments
