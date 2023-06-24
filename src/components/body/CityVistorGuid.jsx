import React from 'react'
import { BsTelephoneInboundFill } from 'react-icons/bs'
import Navs from '../navbars/navs'
import Footer from './Footer'
import './css/CityVistorGuid.css'
import { useTranslation } from 'react-i18next'
const CityVistorGuid = () => {
    const {t } = useTranslation();
const visits = [
    { src: 'v1.jpeg', header: `${t('cityVisitors.traditionH')}`, description: `${t('cityVisitors.traditiondesc')}`, phone:'+251-25-666-00-00'},
    { src: 'v2.png', header: `${t('cityVisitors.rasH')}`, description: `${t('cityVisitors.rasdesc')}`, phone:'+251-25-666-00-00'},
    { src: 'harar_musuem.jpeg', header:`${t('cityVisitors.sherifH')}`, description:`${t('cityVisitors.sherifdesc')}`, phone:'+251-25-666-00-00'},
    { src: 'images/hararicity.jpg', header: `${t('cityVisitors.jugolH')}`, description: `${t('cityVisitors.jugoldesc')}`, phone:'+251-25-666-00-00'},
    { src: 'v3.jpg', header: `${t('cityVisitors.beerH')}`, description: `${t('cityVisitors.beerdesc')}`, phone: '+251-25-666-00-00' },
    { src: 'v4.jpeg', header: `${t('cityVisitors.hyenaH')}`, description: `${t('cityVisitors.hyenadesc')}`, phone:'+251-25-666-00-00'},
]
  return (
    <>
        <Navs/>
        <div className="vistor">
            <h1>{t('cityVisitors.header')}</h1>
            <p>{t('cityVisitors.p')}</p>
        </div>
        <div className='layout'>
            {
                visits.map((visit) => (
                    <div className="visits">
                        <div className="img">
                            <img src={visit.src} alt=""/>
                        </div>
                        <div className="description">
                            <h1>{visit.header}</h1>
                            <p className='text-xl font-mono'>{visit.description}</p>
                        </div>
                        <div className='call'>
                            <span className='text-2xl font-mono'>Call For Guide</span>
                            <div className='icon'>
                                <span><BsTelephoneInboundFill className='mt-1 mr-2 text-xl text-green-600'/></span>
                                <a className='text-gray-700' href='tel:+251-25-666-00-00'>{visit.phone}</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <Footer/>
    </>
  )
}

export default CityVistorGuid