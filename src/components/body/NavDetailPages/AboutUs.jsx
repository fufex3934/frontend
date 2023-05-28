import React from 'react'
import Footer from '../Footer'
import '../../body/css/AboutUs.css'
import Navs from '../../navbars/navs'

const AboutUs = () => {
  return (
    <div>
      <Navs/>
      <div className='about'>
        <div className="heading-top">
          <h1>Harari Government Communication Affairs Office</h1>
        </div>
        <div className='mission'>
          <div className='heading'>
            <h1>Mission</h1>
          </div>
          <div className=' content'>
            <p>To play a leading role in the Government Communication, Information and Media Sector and to effectively coordinate the success of our vision by developing public awareness on basic policies, strategies, plans and programs through a comprehensive exchange of information among the people.</p>
          </div>
        </div>
        <div className='vission'>
          <div className='heading'>
            <h1>Vission</h1>
          </div>
          <div className='content'>
            <p>
              "To see the people of 2023 come to an agreement on basic regional and national issues with a rich, multifaceted participation."
            </p>
          </div>
        </div>
        <div className="goal">
          <div className='heading'>
            <h1>Goal</h1>
          </div>
          <div className="content">
            <p>Goals</p>
          </div>
        </div>
        <div className="value">
          <div className="heading">
            <h1>Values</h1>
          </div>
          <div className="content">
            <p>Values</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutUs
