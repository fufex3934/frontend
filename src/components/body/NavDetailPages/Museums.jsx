import React from 'react'
import Navs from '../../navbars/navs'
import Footer from '../Footer'
import '../css/Museums.css'
import {Link} from 'react-router-dom'
const Museums = () => {
  return (
    <>
    <Navs/>
    <div className='musuem'>
        <h1 className='text-2xl font-mono'>Experience 5,000 Years Of</h1>
        <h1 className='text-2xl mb-6 font-mono'>Art At Sherif Private</h1>
        <Link to='https://harari.gov.et/hr/landmarks/sherif-private-musuem' target='_blank' className='link text-xl font-serif px-4 py-2'>Explore</Link>
    </div>
    <div className="latest-exhibition"></div>
    <Footer/>
    </>
  )
}

export default Museums
