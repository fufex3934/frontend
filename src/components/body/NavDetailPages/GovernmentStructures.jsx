import React from 'react'
import Navs from '../../navbars/navs'
import Footer from '../Footer'
import '../css/GovernmentStructure.css'

const GovernmentStructures = () => {
  return (
    <>
    <Navs/>
    <div className='my-container'>
      <div className="header">
        <h1>Origanaizational Sturture Of Harari Government Communication Affaris Office</h1>
      </div>
      <div className="structure">
        <img src="images/abiy.jpg" width='100%' alt="" />
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default GovernmentStructures
