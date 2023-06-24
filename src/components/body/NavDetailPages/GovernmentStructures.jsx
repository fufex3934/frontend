import React,{useEffect} from 'react'
import Navs from '../../navbars/navs'
import Footer from '../Footer'
import '../css/GovernmentStructure.css'

const GovernmentStructures = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);

  return (
    <>
    <Navs/>
    <div className='my-container'>
      <div className="header">
        <h1>Origanaizational Sturture Of Harari Government Communication Affaris Office</h1>
      </div>
      <div className="structure">
        <img src="images/structure.jpg" width='70%' alt="" />
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default GovernmentStructures
