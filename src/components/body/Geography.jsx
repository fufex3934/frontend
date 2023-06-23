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
        <div className="text-center mt-24">
          <h1 className='lg:text-3xl lg:font-serif mb-2'>Harar Geographic Coordinates</h1>
          <p className='text-lg'>Harar is located at latitude 9.31387 and longitude 42.11815. It is part of Africa and the northern hemisphere.</p>
        </div>
        <div className=' lg:flex lg:justify-center mt-7'>
          <div className="border-blue-500 border lg:w-[20%] lg:text-center lg:mx-2">
            <h1 className='text-xl text-blue-600 font-semibold'>Decimal coordinates</h1>
            <p className='text-gray-400'>Simple standard</p>
            <h3 className='text-blue-600 text-lg font-semibold'>9.31387, 42.11815</h3>
          </div>
          <div className="border-green-500 border lg:w-[20%] lg:text-center lg:mx-2 lg:py-2">
            <h1 className='text-xl text-green-500 font-semibold'>DD Coodinates</h1>
            <p className='text-gray-400'>Decimal Degrees</p>
            <h3 className='text-green-500 text-lg font-semibold'>9.3139° N 42.1182° E</h3>
          </div>
          <div className="border-blue-900 border lg:w-[20%] lg:text-center lg:mx-2">
            <h1 className='text-xl text-blue-900 font-semibold'>DMS Coordinates</h1>
            <p className='text-gray-400'>Degrees, Minutes and Seconds</p>
            <h3 className='text-blue-900 text-lg font-semibold'>9°18'49.9'' N 42°7.089' E</h3>
          </div>
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