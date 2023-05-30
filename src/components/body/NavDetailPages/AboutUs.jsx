import React from 'react'
import Footer from '../Footer'
import '../../body/css/AboutUs.css'
import Navs from '../../navbars/navs'

const data=[
  {
    heading:"Mission",
    content:"To play a leading role in the Government Communication, Information and Media Sector and to effectively coordinate the success of our vision by developing public awareness on basic policies, strategies, plans and programs through a comprehensive exchange of information among the people."
  },
  {
    heading:"Vision",
    content:"To see the people of 2023 come to an agreement on basic regional and national issues with a rich, multifaceted participation."
  }
]

const AboutUs = () => {
  return (
    <>
      <Navs/>
      <div className='about'>
        <div className="heading-top">
          <h1>Harari Government Communication Affairs Office</h1>
        </div>
        <div className="both">
          <div className="left-content">
            {
              data.map((item) => (
                <div key={item.heading} className="content-container">
                  <div className='heading'>
                    <h1>{item.heading}</h1>
                  </div>
                  <div className='content'>
                    <p>{item.content}</p>
                  </div>
                </div>
              ))
            }
            <div className="value">
              <div className="heading">
                <h1>Core Values</h1>
              </div>
              <div className="content">
                <ul>
                  <li>Sincerity</li>
                  <li>Loyalty</li>
                  <li>Responsibility</li>
                  <li>Respect and Unity</li>
                  <li>Faith in the Power of Victory</li>
                  <li>Collaboration and teamwork</li>
                  <li>Leadership qualifications</li>
                  <li>Taking Responsibility</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right-map">
            <div className="header">
              <h1>Our Location</h1>
            </div>
            <div className="map"></div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default AboutUs;