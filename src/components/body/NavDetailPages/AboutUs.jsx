import React,{useEffect} from 'react'
import Footer from '../Footer'
import '../../body/css/AboutUs.css'
import Navs from '../../navbars/navs'
import { useTranslation } from 'react-i18next';



const AboutUs = () => {
  const {t}=useTranslation();
const data=[
  {
    heading:`${t('dropdownDetails.about-mission')}`,
    content:`${t('dropdownDetails.mission-content')}`
  },
  {
    heading:`${t('dropdownDetails.about-vision')}`,
    content:`${t('dropdownDetails.vision-content')}`
  }
]
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);

  return (
    <>
      <Navs/>
      <div className='about'>
        <div className="heading-top">
          <h1>{t('dropdownDetails.header')}</h1>
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
                <h1>{t('dropdownDetails.coreValues')}</h1>
              </div>
              <div className="content">
                <ul>
                  <li>{t('dropdownDetails.sincerity')}</li>
                  <li>{t('dropdownDetails.loyalty')}</li>
                  <li>{t('dropdownDetails.responsibility')}</li>
                  <li>{t('dropdownDetails.respect')}</li>
                  <li>{t('dropdownDetails.faith')}</li>
                  <li>{t('dropdownDetails.collaboration')}</li>
                  <li>{t('dropdownDetails.leadership')}</li>
                  <li>{t('dropdownDetails.takingres')}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right-map">
            <div className="header">
              <h1>{t('dropdownDetails.location')}</h1>
            </div>
            <div className="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7874.5420027639975!2d42.11993219085563!3d9.30923851305471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bd9e4de55b21%3A0x356aa2e25fa05727!2z4Yuo4YiQ4Yio4YiqIOGKreGIjeGIjSDhiJjhipXhjI3hiKXhibUg4Yqu4YiZ4YqS4Yqs4Yi94YqVIOGMvS_hiaThibUgSGFyYXJpIFJlZ2lvbmFsIFN0YXRlIENvbW11bmljYXRpb24gQWZmYWlycw!5e0!3m2!1snl!2snl!4v1685453121730!5m2!1snl!2snl" width="600" height="600" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default AboutUs;