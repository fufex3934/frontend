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
          <h1 className='text-3xl font-serif mb-2'>Harar Geographic Coordinates</h1>
          <p className='text-lg pl-5 text-start md:text-center'>Harar is located at latitude 9.31387 and longitude 42.11815. It is part of Africa and the northern hemisphere.</p>
        </div>
        <div className=' lg:flex lg:justify-center mt-7'>
          <div className="border-blue-500 border text-center mb-3 lg:w-[20%] lg:text-center lg:mx-2">
            <h1 className='text-xl text-blue-600 font-semibold'>Decimal coordinates</h1>
            <p className='text-gray-400'>Simple standard</p>
            <h3 className='text-blue-600 text-lg font-semibold'>9.31387, 42.11815</h3>
          </div>
          <div className="border-green-500 border text-center mb-3 lg:w-[20%] lg:text-center lg:mx-2 lg:py-2">
            <h1 className='text-xl text-green-500 font-semibold'>DD Coodinates</h1>
            <p className='text-gray-400'>Decimal Degrees</p>
            <h3 className='text-green-500 text-lg font-semibold'>9.3139° N 42.1182° E</h3>
          </div>
          <div className="border-blue-900 border text-center lg:w-[20%] lg:text-center lg:mx-2">
            <h1 className='text-xl text-blue-900 font-semibold'>DMS Coordinates</h1>
            <p className='text-gray-400'>Degrees, Minutes and Seconds</p>
            <h3 className='text-blue-900 text-lg font-semibold'>9°18'49.9'' N 42°7.089' E</h3>
          </div>
        </div>
        <div className="text-start mt-10 w-full lg:w-[58%] mx-auto px-2">
          <h1 className='font-semibold text-3xl text-slate-600 text-center mb-3'>Atitude and Longitude of Harar</h1>
          <p className='text-lg'>
            <span className='font-serif text-xl font-semibold text-blue-600'>Harar</span>, formerly written Harrar and known to its inhabitants as Gey, is a walled city in eastern Ethiopia. It was formerly the capital of Harergey and now the capital of the modern Harari ethno-political division of Ethiopia. The city is located on a hilltop in the eastern extension of the Ethiopian Highlands, about five hundred kilometers from Addis Ababa at an elevation of 1,885 meters. Based on figures from the Central Statistical Agency in 2005, Harar had an estimated total population of 122,000, of whom 60,000 were males and 62,000 were females.
          </p>
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