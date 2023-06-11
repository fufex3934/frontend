import React,{useEffect} from 'react'
import Navs from '../../navbars/navs'
import Footer from '../Footer'
import '../css/Sectors.css'
import data from './data/Sectors.json'

const Sectors = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);

  return (
    <>
    <Navs/>
    <div className='layout'>
      <div className="main-con">
        <div className="header">
            <h1>A Long-Term View Is Key To Our Approach...</h1>
        </div>
        <div className="content">
          {
            data.map((item)=>(
              <div className="content-container">
                <div className="top">
                  <h1>{item.header}</h1>
                  <div className="icon">
                    <img src={item.image} alt=""/>
                  </div>
                </div>
                <div className="bottom">
                  <p className="">{item.p1}</p>
                  <p className="">{item.p2}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Sectors
