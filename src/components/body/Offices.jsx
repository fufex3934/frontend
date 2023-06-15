import React,{useEffect} from 'react';
import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import Navs from '../navbars/navs';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {useTranslation} from 'react-i18next';
const Offices = () => {
  const {t} = useTranslation();
    const offices = [
        { id: 1, name: `${t('offices.hrevenue')}`, icon: <img src='/images/offices/COUNCIL.jpg'  /> },
        { id: 2, name: `${t('offices.hoffice')}`, icon: <img src='/images/offices/download.png'  /> },
        { id: 3, name: `${t('offices.heducation')}`, icon: <img src='/images/offices/edu.jpg'  /> },
        { id: 4, name: `${t('offices.municapl')}`, icon: <img src='/images/offices/mun.jpg'  /> },
        { id: 5, name: `${t('offices.vicep')}`, icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 6, name: `${t('offices.hethics')}`, icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 7, name: `${t('offices.hhealth')}`, icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 8, name: `${t('offices.attorney')}`, icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 9, name: `${t('offices.urban')}`, icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 10, name: `${t('offices.culture')}`, icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 11, name: `${t('offices.peace')}`, icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 12, name: `${t('offices.public')}`, icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 13, name: `${t('offices.women')}`, icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 14, name: `${t('offices.transport')}`, icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 15, name: `${t('offices.enterprise')}`, icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 16, name: `${t('offices.poffice')}`, icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 17, name: `${t('offices.scourt')}`, icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 18, name: `${t('offices.scouncil')}`, icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 19, name: `${t('offices.police')}`, icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 20, name: `${t('offices.environment')}`, icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 21, name: `${t('offices.technical')}`, icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 22, name: `${t('offices.media')}`, icon: <img src='/images/offices/mass.png'  /> },
        { id: 23, name: `${t('offices.water')}`, icon: <img src='/images/offices/water.jpg'  /> },
        { id: 24, name: `${t('offices.prosperity')}`, icon: <img src='/images/offices/pp.jpg'  /> },
        
        // Add more woredas as needed
      ];
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
      }, []);
  return (
    <>
      <Navs/>
      <div className="container mx-auto p-8 mt-28 md:mt-28 lg:my-10">
      <h1 className="text-4xl font-semibold mb-8 text-center text-gray-800">{t('offices.header')}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offices.map((office) => (
          <motion.div
            key={office.id}
            className="bg-white rounded-lg p-6 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-32 h-32">{office.icon}</div>
            </div>
            <Link to={`/office-details/${office.id}`} className="text-2xl font-bold mb-2 text-slate-600 flex ml-6 md:ml-16 whitespace-wrap hover:text-[#329898] hover:underline">{office.name}</Link>
          </motion.div>
        ))}
      </div>
    </div>
      <Footer/>
    </>
  )
}

export default Offices
