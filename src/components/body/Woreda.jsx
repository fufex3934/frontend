import React,{useEffect} from 'react';
import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import Navs from '../navbars/navs';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Woreda = () => {
  const {t} = useTranslation()
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);

  const woredas = [
    { id: 1, name: `${t('woredas.abadir')}`, icon: <FiMapPin size={24} /> },
    { id: 2, name: `${t('woredas.shenkor')}`, icon: <FiMapPin size={24} /> },
    { id: 3, name: `${t('woredas.jinala')}`, icon: <FiMapPin size={24} /> },
    { id: 4, name: `${t('woredas.amir')}`, icon: <FiMapPin size={24} /> },
    { id: 5, name: `${t('woredas.aboker')}`, icon: <FiMapPin size={24} /> },
    { id: 6, name: `${t('woredas.hakim')}`, icon: <FiMapPin size={24} /> },
    { id: 7, name: `${t('woredas.direteyara')}`, icon: <FiMapPin size={24} /> },
    { id: 8, name: `${t('woredas.erer')}`, icon: <FiMapPin size={24} /> },
    { id: 9, name: `${t('woredas.sofi')}`, icon: <FiMapPin size={24} /> },
    // Add more woredas as needed
  ];

  return (
    <>
       <Navs/>
       <div className="container mx-auto p-8 mt-28 md:mt-28 lg:my-10">
      <h1 className="text-4xl font-semibold mb-8 text-center text-gray-800">{t('woredas.header')}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {woredas.map((woreda) => (
          <motion.div
            key={woreda.id}
            className="bg-white rounded-lg p-6 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-[#329898] text-white rounded-full p-4">{woreda.icon}</div>
            </div>
            <Link to={`/woreda-details/${woreda.id}`} className="text-2xl font-bold mb-2 text-slate-600 text-center ml-6 md:ml-16 whitespace-nowrap hover:text-[#329898] hover:underline">{woreda.name}</Link>
          </motion.div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Woreda;
