import React,{useEffect} from 'react'
import Footer from '../Footer'
import Navs from '../../navbars/navs'
import '../css/Monuments.css'
import {FcLike} from 'react-icons/fc';
import {IoIosHeartDislike} from 'react-icons/io';
import { useTranslation } from 'react-i18next';

const Monuments = () => {
  const {t} = useTranslation();
  const monuments_data = [
    { id: 1, name: `${t('monuments.name1')}`, p:`${t('monuments.p1')}`, image: 'alj.jpeg', icons: { icon1: <FcLike />, icon2: <IoIosHeartDislike /> } },
    { id: 2, name: `${t('monuments.name2')}`, p: `${t('monuments.p2')}`, image: 'm2.jpeg', icons: { icon1: <FcLike />, icon2: <IoIosHeartDislike /> } },
    { id: 3, name: `${t('monuments.name3')}`, p:`${t('monuments.p3')}`, image: 'm8.jpeg', icons: { icon1: <FcLike/>, icon2: <IoIosHeartDislike />  } },
    { id: 4, name: `${t('monuments.name4')}`, p: `${t('monuments.p4')}`,image:'quranmajeed.jpg' ,icons: { icon1: <FcLike />, icon2: <IoIosHeartDislike />  } },
    { id: 5, name: `${t('monuments.name5')}`, p: `${t('monuments.p5')}`, image: 'dress.jpg', icons: { icon1: <FcLike />, icon2: <IoIosHeartDislike />  } },
    { id: 6, name: `${t('monuments.name6')}`, p: `${t('monuments.p6')}`, image: 'm6.jpeg', icons: { icon1: <FcLike />, icon2: <IoIosHeartDislike />  } },
    { id: 7, name: `${t('monuments.name7')}`, p: `${t('monuments.p7')}`, image: '1.jpeg', icons: { icon1: <FcLike />, icon2: <IoIosHeartDislike />  } },
    { id: 8, name: `${t('monuments.name8')}`, p: `${t('monuments.p8')}`, image: '5.jpeg', icons: { icon1: <FcLike />, icon2: <IoIosHeartDislike /> } }
  ];
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);

  return (
    <>
      <Navs/>
      <div className="wraper">
        <div className="economic" style={{backgroundImage:'url("m2.jpeg")',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
          <h1 className='text-[#5ff13e]'>{t('monuments.h1')}</h1>
        </div>
        <div className="economic-definition text-red-600" style={{ backgroundImage: 'url("m1.jpeg")', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <p style={{ color:'#f13ee5'}}>`${t('monuments.p')}`</p>
        </div>
      </div>
      <div className='monument-container'>
        <div className="head">
          <h1>{t('monuments.h2')}</h1>
        </div>
        <h1 className='text-center font-mono text-[#3bb] text-4xl'>{t('monuments.freeg')}</h1>
        <div className="monument">
          {
            monuments_data.map((src)=>(
              <div className="">
                <img src={src.image} alt="" />
                <button className='mr-3'>{src.icons.icon1}</button>
                <button>{src.icons.icon2}</button>
                <h1 className='text-xl text-blue-500'>{src.name}</h1>
                <p>{src.p}</p>
              </div>
            ))
          }
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Monuments
