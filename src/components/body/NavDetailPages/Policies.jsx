import React,{useEffect} from 'react'
import Navs from '../../navbars/navs'
import Footer from '../Footer'
import '../css/Policies.css'
import { useTranslation } from 'react-i18next'

const Policies = () => {
  const {t} = useTranslation();
  const policies = [
    {
      src:'al.png',
      heading: `${t('economicPolicy.agri')}`,
      content: `${t('economicPolicy.agridesc')}`
    },
    {
      src: 'itl.jpeg',
      heading: `${t('economicPolicy.trade')}`,
      content: `${t('economicPolicy.tradedesc')}`
    },
    {
      src: 'tl.jpeg',
      heading: `${t('economicPolicy.industry')}`,
      content: `${t('economicPolicy.industrydesc')}`
    },
    {
      src: 'ecl.jpeg',
      heading: `${t('economicPolicy.economic')}`,
      content: `${t('economicPolicy.economicdesc')}`
    },
    {
      src: 'lll.jpeg',
      heading: `${t('economicPolicy.law')}`,
      content: `${t('economicPolicy.lawdesc')}`
    },
    {
      src: 'al.png',
      heading: `${t('economicPolicy.media')}`,
      content: `${t('economicPolicy.mediadesc')}`
    },
  ]
  
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);

  return (
    <>
      <Navs />
      <div className="wraper">
        <div className="economic">
          <h1 className='ml-4'>{t('economicPolicy.header')}</h1>
        </div>
        <div className="economic-definition">
          <p>{t('economicPolicy.desc')}</p>
        </div>
      </div>
      <div className='economic-container-layout'>
        {
          policies.map((item) => (
            <div key={item.heading} className="policies">
              <img src={item.src} alt="" srcset="" />
              <h1 className=''>{item.heading}</h1>
              <p className=''>{item.content}</p>
            </div>
          )
          )
        }
      </div>
      <Footer />
    </>
  )
}

export default Policies
