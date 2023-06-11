import React,{useEffect} from 'react'
import Navs from '../../navbars/navs'
import Footer from '../Footer'

const AnimalExhibition = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);

  return (
    <>
    <Navs/>
      <div>
      Animal Exhibition Page
      </div>
      <Footer/>
    </>
  )
}

export default AnimalExhibition
