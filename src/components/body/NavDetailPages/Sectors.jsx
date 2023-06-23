import React,{useEffect} from 'react'
import Navs from '../../navbars/navs'
import Footer from '../Footer'
import '../css/Sectors.css'
import {useTranslation} from 'react-i18next';

const Sectors = () => {
     const {t} = useTranslation();
          const data = 
        [
          {
          header:`${t('sectors.agri')}`,
          image:"al.png",
          p1:`${t('sectors.agrip1')}`,
          p2:`${t('sectors.agrip2')}`
          },
          {
          header:`${t('sectors.health')}`,
          image:"global-health-care-icon.png",
          p1:`${t('sectors.healthp1')}`,
          p2:`${t('sectors.healthp2')}`
          },
          {
          header:`${t('sectors.education')}`,
          image:"el.jpeg",
          p1:`${t('sectors.educationp1')}`,
          p2:`${t('sectors.educationp2')}`
          },
          {
          header:`${t('sectors.transport')}`,
          image:"trl.jpg",
          p1:`${t('sectors.transportp1')}`,
          p2:`${t('sectors.transportp2')}`
          },
          {
          header:`${t('sectors.industry')}`,
          image:"tl.jpeg",
          p1:`${t('sectors.industryp1')}`,
          p2:`${t('sectors.industryp2')}`
          },
          {
          header:`${t('sectors.capacity')}`,
          image:"icons/icon4.png",
          p1:`${t('sectors.capacityp1')}`,
          p2:`${t('sectors.capacityp2')}`
          }
        ]
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);

  return (
    <>
    <Navs/>
    <div className="top-sector-layout">
        <h1 className="text-white mt-2 font-serif pl-8 w-96 ">{t('sectors.header')}</h1>
    </div>
    <div className='layout'>
      <div className="main-con">
        <div className="header">
            <h1>{t('sectors.long')}</h1>
        </div>
        <div className="content">
          {
            data.map((item)=>(
              <div className="content-container" key={item.header}>
                <div className="top">
                  <h1>{item.header}</h1>
                  <div className="icon">
                    <img src={item.image} alt="" style={{backgroundImage:'none'}}/>
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
