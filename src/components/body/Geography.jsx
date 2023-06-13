import React from 'react'
import Navs from '../navbars/navs'
import Footer from './Footer'
import './css/Geography.css'
const Geography = () => {
  return (
    <>
    <Navs/>
   <div className="geography">
        <div className='location'>
          <img className='' src="http://maps.maphill.com/ethiopia/harari/location-maps/savanna-style-map/free-savanna-style-location-map-of-harari.jpg" width="1550" />
          <img className='relative ione float-left left-6 bottom-[290px]' src="harar-location.png" width='350' height='200' alt="" />
          <img className='relative itwo float-right right-0 bottom-[352px]' src="harar-location.jpeg" width='350' height='200' alt="" />
        </div>
        <div className="harar-google-map">
          <h1 className='text-center text-4xl text-[#3bb] font-mono mt-28'>Harari In Google Map Location</h1>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31497.842636474456!2d42.097549099085654!3d9.312848458641636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bda3c73a509d%3A0x47a0ad82e9e99ed6!2sHarar!5e0!3m2!1sen!2set!4v1686597056190!5m2!1sen!2set" width="1400" height='500'></iframe>
        </div>
   </div>
    <Footer/>
    </>
  )
}

export default Geography