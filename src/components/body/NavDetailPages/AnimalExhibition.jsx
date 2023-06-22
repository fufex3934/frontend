import React,{useEffect} from 'react'
import Navs from '../../navbars/navs'
import Footer from '../Footer'
import '../css/AnimalExhibition.css'

const AnimalExhibition = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);

  return (
    <>
    <Navs/>
      <div className="background-hyena" style={{backgroundImage:'url("harar-hyena.png")'}}></div>
      <div className="animal-visit-head">
       <h1>Animal To Visit</h1>
      </div>
      <div className="animal-visit">
      </div>
      <Footer/>
    </>
  )
}

export default AnimalExhibition
