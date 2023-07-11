import React from 'react'
import { BsFacebook, BsTwitter, BsYoutube, BsTelegram, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Navs from '../navbars/navs'
import Footer from './Footer'
import MeetIdeologyLeader from './MeetIdeologyLeader'
import './css/Adminstration.css'
import { useTranslation } from 'react-i18next'
const follow_us=[
  {
    link: 'https://www.facebook.com/p/Harari-Government-communication-affairs-Office-100064845514191/', icon: <BsFacebook className='text-5xl text-blue-700 myIcon' />,name:'Facebook',linkName:'link-url'
  },
  {
    link: 'https://twitter.com/HarariGovComm/status/1559545087117377538', icon: <BsTwitter className='text-5xl text-blue-500 myIcon' />,name:'Twitter',linkName:'link-url'
  },
  {
    link: 'https://www.youtube.com/@hararicommunication82', icon: <BsYoutube className='text-5xl text-red-500 myIcon' />,name:'Youtube',linkName:'link-url'
  },
  {
    link: 'https://t.me/s/HarariGovernmentCommunication', icon: <BsTelegram className='text-5xl text-blue-400 myIcon'/>,name:'Telegram',linkName:'link-url'
  },
  {
    link: '/', icon: <BsLinkedin className='text-5xl text-blue-500 myIcon'/>,name:'Linkedin',linkName:'link-url'
  },
]
const Adminstration = () => {
  const {t} = useTranslation();

  const city=[
    {
      head: `${t('administration.head1')}`, to: '/about-history', description: `${t('administration.d1')}`
    },
    {
      head: `${t('administration.head2')}`, to: '/', description:`${t('administration.d2')}`
    },
    {
      head:`${t('administration.head3')}`,to:'/tourism-mon',description:`${t('administration.d3')}`
    }
  ]
  const life_style=[
    {
      src: 'dress.jpg', description: `${t('administration.d4')}`, name: `${t('administration.name1')}`, head:`${t('administration.head4')}`
    },
    {
      src:'hgm.jpeg',description:`${t('administration.d5')}`,name:`${t('administration.name2')}`,head:`${t('administration.head5')}`
    },
    {
      src:'alj.jpeg',description:`${t('administration.d6')}`,name:`${t('administration.name3')}`,head:`${t('administration.head6')}`
    },
  ]
  return (
   <>
    <Navs/>
    <div className='adminstration'> 
        <h1 className='text-5xl mb-3'>{t('administration.welcome')}</h1>
    </div>
    <div className="welcome">
      <h1 className='text-4xl mb-3 text-[#3bb] font-serif'>{t('administration.h1')}</h1>
      <p className='text-xl'>{t('administration.p1')}</p>
    </div>
      <MeetIdeologyLeader/>
    <div className="area-interst">
      <h1 className='text-3xl font-bold font-serif text-[#3bb] mb-2'>{t('administration.area')}</h1>
      <div className="area">
      {
        city.map((city_data)=>(
          <div className="interst">
            <h1 className='text-2xl mb-3'>
              <Link to={city_data.to}>{city_data.head}</Link>
            </h1>
            <p className='text-lg'>{ city_data.description}</p>
          </div>
        ))
      }
      </div>
    </div>
    <div className="life-style">
      <div className="life">
        <h1>{t('administration.life')}</h1>
      </div>
      <div className="style-layout">
          {
            life_style.map((life) => (
              <div className="style">
                <div className="src relative">
                  <img src={life.src} alt="" />
                  <p className=''>{life.description}</p>
                </div>
                <div className=''>
                  <h3 className='text-blue-400'>{life.name}</h3>
                  <h1 className='text-xl text-slate-800'>{life.head}</h1>
                </div>
              </div>
            ))
          }
      </div>
    </div>
    <div className="follow-us">
      <div className="follow">
        <h1>{t('administration.find')}</h1>
      </div>
      <div className="layout-us">
       {
        follow_us.map((followUs)=>(
          <Link className='link' to={followUs.link}>
            <div className="sm-icon">
              {followUs.icon}
            </div>
            <div className="sm-icon-name">
              <span className='text-xl font-serif'>{followUs.name}</span>
              <p className='text-[15px] italic'>{followUs.linkName}</p>
            </div>
          </Link>
        ))
       }
      </div>
    </div>
    <Footer/>
   </>
  )
}

export default Adminstration