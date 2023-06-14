import React, { useState,useEffect } from 'react';
import Navs from '../../navbars/navs';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from 'react-i18next';


const Leadership = () => {
  const {t} = useTranslation();
  const leaders = [
    {
      name: `${t('leadership.badri')}`,
      role: `${t('leadership.badrijob')}`,
      image: '/images/lema.jpg',
      description: `${t('leadership.badridesc')}`,
      additionalInfo: `${t('leadership.badriInfo')}`,
      email: 'ordin@example.com',
      phone: '+1 123 456 7890',
    },
    {
      name: `${t('leadership.fethi')}`,
      role: `${t('leadership.fethijob')}`,
      image: '/images/leaders/fatihi.jpg',
      description: `${t('leadership.fethidesc')}`,
      additionalInfo: `${t('leadership.fethiInfo')}`,
      email: 'fetihi@example.com',
      phone: '+1 987 654 3210',
    },
    {
      name: `${t('leadership.misra')}`,
      role: `${t('leadership.misrajob')}`,
      image: '/images/leaders/misra.jpg',
      description: `${t('leadership.misradesc')}`,
      additionalInfo: `${t('leadership.misraInfo')}`,
      email: 'misra@example.com',
      phone: '+1 123 456 7890',
    },
    {
      name: `${t('leadership.usmael')}`,
      role: `${t('leadership.usmaeljob')}`,
      image: '/images/leaders/usmael.jpg',
      description: `${t('leadership.usmaeldesc')}`,
      additionalInfo: `${t('leadership.usmaelInfo')}`,
      email: 'usmael@example.com',
      phone: '+1 987 654 3210',
    },
    {
      name: `${t('leadership.abdul')}`,
      role: `${t('leadership.abduljob')}`,
      image: '/images/leaders/abdul.jpeg',
      description: `${t('leadership.abduldesc')}`,
      additionalInfo: `${t('leadership.abdulInfo')}`,
      email: 'abdul@example.com',
      phone: '+1 987 654 3210',
    },
    {
      name: `${t('leadership.henok')}`,
      role: `${t('leadership.henokjob')}`,
      image: '/images/leaders/henok.jpeg',
      description: `${t('leadership.henokdesc')}`,
      additionalInfo: `${t('leadership.henokInfo')}`,
      email: 'henok@example.com',
      phone: '+1 987 654 3210',
    },
    {
      name: `${t('leadership.telahun')}`,
      role: `${t('leadership.telahunjob')}`,
      image: '/images/leaders/telahun.jpg',
      description: `${t('leadership.telahundesc')}`,
      additionalInfo: `${t('leadership.telahunInfo')}`,
      email: 'telahun@example.com',
      phone: '+1 123 456 7890',
    },
    {
      name: `${t('leadership.abdulhakim')}`,
      role: `${t('leadership.abdulhakimjob')}`,
      image: '/images/leaders/abdulhakim.jfif',
      description: `${t('leadership.abdulhakimdesc')}`,
      additionalInfo: `${t('leadership.abdulhakimInfo')}`,
      email: 'abdulhakim@example.com',
      phone: '+1 987 654 3210',
    },
    {
      name: `${t('leadership.abduljebar')}`,
      role: `${t('leadership.abduljebarjob')}`,
      image: '/images/leaders/abduljabar.jpeg',
      description: `${t('leadership.abduljebardesc')}`,
      additionalInfo: `${t('leadership.abduljebarInfo')}`,
      email: 'abduljebar@example.com',
      phone: '+1 123 456 7890',
    },
    {
      name: `${t('leadership.arif')}`,
      role: `${t('leadership.arifjob')}`,
      image: '/images/leaders/arif.jpg',
      description: `${t('leadership.arifdesc')}`,
      additionalInfo: `${t('leadership.arifInfo')}`,
      email: 'arif@example.com',
      phone: '+1 987 654 3210',
    },
    {
      name: `${t('leadership.ayub')}`,
      role: `${t('leadership.ayubjob')}`,
      image: '/images/leaders/ayub.jpg',
      description:`${t('leadership.ayubdesc')}`,
      additionalInfo: `${t('leadership.ayubInfo')}`,
      email: 'ayub@example.com',
      phone: '+1 987 654 3210',
    },
    {
      name: `${t('leadership.bekele')}`,
      role: `${t('leadership.bekelejob')}`,
      image: '/images/leaders/bekele.jpg',
      description: `${t('leadership.bekeledesc')}`,
      additionalInfo: `${t('leadership.bekeleInfo')}`,
      email: 'bekele@example.com',
      phone: '+251911541867',
    },
    {
      name: `${t('leadership.jafar')}`,
      role: `${t('leadership.jafarjob')}`,
      image: '/images/leaders/jafar.jpg',
      description: `${t('leadership.jafardesc')}`,
      additionalInfo: `${t('leadership.jafarInfo')}`,
      email: 'jafar@example.com',
      phone: '+251911541867',
    },
    {
      name: `${t('leadership.sultan')}`,
      role: `${t('leadership.sultanjob')}`,
      image: '/images/leaders/sultan.jpg',
      description: `${t('leadership.sultandesc')}`,
      additionalInfo: `${t('leadership.sultanInfo')}`,
      email: 'sultan@example.com',
      phone: '+251911541867',
    },
    {
      name: `${t('leadership.bushra')}`,
      role: `${t('leadership.bushrajob')}`,
      image: '/images/leaders/bushra.jpg',
      description: `${t('leadership.bushradesc')}`,
      additionalInfo: `${t('leadership.bushraInfo')}`,
      email: 'bushra@example.com',
      phone: '+251911541867',
    },
    {
      name: `${t('leadership.tawalada')}`,
      role: `${t('leadership.tawaladajob')}`,
      image: '/images/leaders/tawlda.jpg',
      description: `${t('leadership.tawaladadesc')}`,
      additionalInfo: `${t('leadership.tawaladaInfo')}`,
      email: 'teweteda@gmail.com',
      phone: '+251911541867',
    },
    {
      name: `${t('leadership.yasin')}`,
      role: `${t('leadership.yasinjob')}`,
      image: '/images/leaders/yasin.jpg',
      description: `${t('leadership.yasindesc')}`,
      additionalInfo: `${t('leadership.yasinInfo')}`,
      email: 'yasin@gmail.com',
      phone: '+251911541867',
    },
    
    {
      name: `${t('leadership.amina')}`,
      role: `${t('leadership.aminajob')}`,
      image: '/images/leaders/amina.jpg',
      description: `${t('leadership.aminadesc')}`,
      additionalInfo: `${t('leadership.aminaInfo')}`,
      email: 'amina@gmail.com',
      phone: '+251911541867',
    },
    {
      name: `${t('leadership.fariha')}`,
      role: `${t('leadership.farihajob')}`,
      image: '/images/leaders/fariha.jfif',
      description: `${t('leadership.farihadesc')}`,
      additionalInfo: `${t('leadership.farihaInfo')}`,
      email: 'fariha@gmail.com',
      phone: '+251911541867',
    },
    {
      name: `${t('leadership.samira')}`,
      role: `${t('leadership.samirajob')}`,
      image: '/images/leaders/samira.jfif',
      description: `${t('leadership.samiradesc')}`,
      additionalInfo: `${t('leadership.samiraInfo')}`,
      email: 'samira@gmail.com',
      phone: '+251911541867',
    },
    {
      name: `${t('leadership.teyeba')}`,
      role: `${t('leadership.teyebajob')}`,
      image: '/images/leaders/samira.jfif',
      description: `${t('leadership.teyebadesc')}`,
      additionalInfo: `${t('leadership.teyebaInfo')}`,
      email: 'teyeba@gmail.com',
      phone: '+251911541867',
    },
    {
      name: `${t('leadership.delila')}`,
      role: `${t('leadership.delilajob')}`,
      image: '/images/leaders/delila.jpg',
      description:`${t('leadership.deliladesc')}`,
      additionalInfo: `${t('leadership.delilaInfo')}`,
      email: 'delila@gmail.com',
      phone: '+251911541867',
    },
    
    
    // Add more leaders as needed
  ];
  const [selectedLeader, setSelectedLeader] = useState(null);

  const openProfileModal = (leader) => {
    setSelectedLeader(leader);
  };

  const closeProfileModal = () => {
    setSelectedLeader(null);
  };
  useEffect(()=>{
    Aos.init();
},[]);

useEffect(() => {
  window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
}, []);


  return (
    <>
      <Navs />
      <div className="container mx-auto px-4 my-28 md:my-28 lg:my-16">
        <h1 className="text-3xl font-bold
         text-[#334155]  border-b-4 border-s-2 border-t-4 border-e-2 py-2
         text-center mt-8 mb-12 bg-[#fef2f2]" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">
          {t('leadership.header')}</h1>
        <p className='my-12 text-lg text-slate-500' data-aos-duration="1000" data-aos="fade-up" data-aos-easing="linear">
        {t('leadership.text')}
          </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-16">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              className="flex flex-col items-center bg-white rounded-lg shadow hover:shadow-lg"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 200 }}
            >
              <motion.img
                src={leader.image}
                alt={leader.name}
                className="w-full h-56 object-cover rounded-t-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                data-aos-duration="1000" data-aos="fade-up" data-aos-easing="linear"
              />
              <div className="p-4 flex flex-col items-center">
                <h2 className="text-xl font-semibold text-[#334155] mb-2">{leader.name}</h2>
                <p className="text-gray-700 text-2xl">{leader.role}</p>
                <p className="text-[#475569] text-sm mt-2">{leader.description}</p>
                <button
                  className="mt-4 px-4 py-2 text-white bg-[#0ea5e9] rounded hover:bg-[#5eead4]"
                  onClick={() => openProfileModal(leader)}
                >
                  View Profile
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedLeader && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-md">
            <h2 className="text-xl font-semibold text-[#334155] mb-4">{selectedLeader.name}</h2>
            <p className="text-[#475569]">{selectedLeader.description}</p>
            <p className="text-[#475569] mt-4">{selectedLeader.additionalInfo}</p>
            <p className="text-[#475569] mt-2">Email: {selectedLeader.email}</p>
            <p className="text-[#475569] mt-2">Phone: {selectedLeader.phone}</p>
            <button
              className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              onClick={closeProfileModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Leadership;
