import React from 'react'
import { BsFacebook, BsTwitter, BsYoutube, BsTelegram, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Navs from '../navbars/navs'
import Footer from './Footer'
import './css/Adminstration.css'
const city=[
  {
    head: 'About City Of Harare', to: '/about-history', description: 'All about the capital of Harare, its government and administration: People, projects, facts and figures'
  },
  {
    head: 'Animal Exhibition', to: '/', description:'A weird and wonderful experience that attracts visitors to Harar, and that is the hyena men of Harar.'
  },
  {
    head:'Historic Monuments',to:'/tourism-mon',description:'The choice of exhibitions and venues. Here we will present you some of Harars great museum monuments.'
  }
]
const life_style=[
  {
    src: 'dress.jpg', description: 'The Muslims of Harar wear colorful dress. The men often dress in red, purple or black. Harar is also famous for the work of its silversmiths, who craft beautiful anklets, necklaces, arm bands, silver chains, bangles and earrings out of the precious metal..', name: 'Dressing', head:'Harari Dressing style'
  },
  {
    src:'1.jpeg',description:'Goat meat that is cooked by being steamed very slowly overnight in a big pot made from termite soil. The succulent meat is then eaten with a spicy dipping sauce made from tamarind, lime, water and berbere.',name:' Hanid Food',head:'head'
  },
  {
    src:'1.jpeg',description:'We love name and head',name:'name',head:'head'
  },
]
const follow_us=[
  {
    link: '/', icon: <BsFacebook className='text-5xl text-blue-700' />,name:'Facebook',linkName:'link-url'
  },
  {
    link: '/', icon: <BsTwitter className='text-5xl text-blue-500' />,name:'Twitter',linkName:'link-url'
  },
  {
    link: '/', icon: <BsYoutube className='text-5xl text-red-500' />,name:'Youtube',linkName:'link-url'
  },
  {
    link: '/', icon: <BsTelegram className='text-5xl text-blue-400'/>,name:'Telegram',linkName:'link-url'
  },
  {
    link: '/', icon: <BsLinkedin className='text-5xl text-blue-500'/>,name:'Linkedin',linkName:'link-url'
  },
]
const Adminstration = () => {
  return (
   <>
    <Navs/>
    <div className='adminstration'> 
        <h1 className='text-5xl mb-3'>Welcome To City Of Harare</h1>
    </div>
    <div className="welcome">
      <h1 className='text-4xl mb-3 text-[#3bb] font-serif'>Harar City Adminstration</h1>
      <p className='text-xl'>With integrity, the Office of the City Administrator serves all Harare people and its visitors</p>
    </div>
    <div className="area-interst">
      <h1 className='text-3xl font-bold font-serif text-[#3bb] mb-2'>Area Of Interst</h1>
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
        <h1>Harari Lifestyle</h1>
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
        <h1>You Can Find Us Here</h1>
      </div>
      <div className="layout-us">
       {
        follow_us.map((followUs)=>(
          <Link className='link' to={followUs.link}>
            <div className="sm-icon">
              {followUs.icon}
            </div>
            <div className="sm-icon-name">
              <span className='text-2xl'>{followUs.name}</span>
              <p className='text-[17px]'>{followUs.linkName}</p>
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