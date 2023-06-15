import React,{useEffect} from 'react';
import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import { BiPhone } from 'react-icons/bi';
import { FaFax } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import Navs from '../../navbars/navs';
import Footer from '../Footer';
import { useTranslation } from 'react-i18next';
const WoredaDetails = () => {
  const {t} = useTranslation();
  const woredas = [
    {
      id: 1,
      name: `${t('woredas.abadir')}`,
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15749.128651486908!2d42.13324459999999!3d9.308247599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bd6131a0547b%3A0x9c037d1bf42a687b!2zQWJhZGlyIFdvcmVkYSBBZG1pbmlzdHJhdGlvbiBPZmZpY2Ug4Yuo4Yqg4Ymj4Yuy4YitIOGLiOGIqOGLsyDhiJjhiLXhibDhi7Phi7XhiK0g4Yy9L-GJpOGJtQ!5e0!3m2!1sen!2snl!4v1686164422730!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      address: `${t('woredaDetails.abadirLoc')}`,
      phone: '+2519434567',
      fax: '+0254660268',
      email: 'abadir@gmail.com',
      totalPopulation: '18853',
      femalePopulation: '9683',
      malePopulation: '9170',
      totalArea: `166`,
      populationDensity: '12'
    },
    {
      id: 2,
      name: `${t('woredas.shenkor')}`,
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d401.14907988900427!2d42.12908774354169!3d9.319401013245436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bde6d5584a83%3A0xd1234261eee4e515!2sShenkor-konerel%20meda!5e1!3m2!1sen!2set!4v1686141151373!5m2!1sen!2set" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      address: `${t('woredaDetails.shenkorLoc')}`,
      phone: '+2519434567',
      fax: '+0254660268',
      email: 'shenkor@gmail.com',
      totalPopulation: '35092',
      femalePopulation: '17316',
      malePopulation: '17776',
      totalArea: `179`,
      populationDensity: '22'
    },
    {
      id: 3,
      name: `${t('woredas.jinala')}`,
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.2821629757473!2d42.13066967397478!3d9.308247590764656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bd300e65e6ef%3A0x3a1aa79da499663a!2sJinela%20Health%20Center!5e0!3m2!1sen!2snl!4v1686166220166!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      address: `${t('woredaDetails.jinalaLoc')}`,
      phone: '+2519434567',
      fax: '+0254660268',
      email: 'jinala@gmail.com',
      totalPopulation: '28674',
      femalePopulation: '13562',
      malePopulation: '15112',
      totalArea: `276`,
      populationDensity: '17'
    },
    {
      id: 4,
      name: `${t('woredas.amir')}`,
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15749.128658976437!2d42.12294483114193!3d9.308247433761805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bdc7246620a1%3A0xc9ee095b3fac1b76!2sAmir%20Nur%20Woreda%20Administration!5e0!3m2!1sen!2snl!4v1686166446352!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      address: `${t('woredaDetails.amirLoc')}`,
      phone: '+025 666 9184',
      fax: '+0254660268',
      email: 'amirnur@gmail.com',
      totalPopulation: '19696',
      femalePopulation: '10152',
      malePopulation: '9544',
      totalArea: `155`,
      populationDensity: '13'
    },
    {
      id: 5,
      name: `${t('woredas.aboker')}`,
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62996.515088628104!2d42.0920444859788!3d9.308244921595842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bda793d5c0b9%3A0x25ef79d51bc56a93!2sAboker%20Wereda%20Administration!5e0!3m2!1sen!2snl!4v1686166774346!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      address: `${t('woredaDetails.abokerLoc')}`,
      phone: '+025 666 9184',
      fax: '+0254660268',
      email: 'amirnur@gmail.com',
      totalPopulation: '19063',
      femalePopulation: '9577',
      malePopulation: '9485',
      totalArea: `202`,
      populationDensity: '12'
    },
    {
      id: 6,
      name: `${t('woredas.hakim')}`,
      location: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15748.853824600976!2d42.1056255!3d9.3143457!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bd0489332695%3A0x90725365c65ac424!2sHakim%20Woreda%20Adminstration!5e0!3m2!1sen!2snl!4v1686220714262!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      address: `${t('woredaDetails.hakimLoc')}`,
      phone: '+025 666 9184',
      fax: '+0254660268',
      email: 'Hakim@gmail.com',
      totalPopulation: '34397',
      femalePopulation: '17028',
      malePopulation: '17369',
      totalArea: `941`,
      populationDensity: '22'
    },
    {
      id: 7,
      name: `${t('woredas.direteyara')}`,
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62983.9049551848!2d42.041129156604725!3d9.377960076657946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bb9f8c9bd4c9%3A0xbeca8a3f20fb73d1!2sDire%20Teyara%2C%20Ethiopia!5e0!3m2!1sen!2snl!4v1686167512037!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      address: `${t('woredaDetails.direteyaraLoc')}`,
      phone: '+025 666 9184',
      fax: '+0254660268',
      email: 'direteyara@gmail.com',
      totalPopulation: '47190',
      femalePopulation: '23359',
      malePopulation: '23831',
      totalArea: `941`,
      populationDensity: '22'
    },
    {
      id: 8,
      name: `${t('woredas.erer')}`,
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8164.0473754872455!2d42.12952997727949!3d9.30618877994816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bda3c73a509d%3A0x47a0ad82e9e99ed6!2sHarar%2C%20Ethiopia!5e0!3m2!1sen!2snl!4v1686167923610!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      address: `${t('woredaDetails.ererLoc')}`,
      phone: '+025 666 9184',
      fax: '+0254660268',
      email: 'erer@gmail.com',
      totalPopulation: '24200',
      femalePopulation: '11979',
      malePopulation: '12221',
      totalArea: `941`,
      populationDensity: '22'
    },
    {
      id: 9,
      name: `${t('woredas.sofi')}`,
      location: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8164.0473754872455!2d42.12952997727949!3d9.30618877994816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bda3c73a509d%3A0x47a0ad82e9e99ed6!2sHarar%2C%20Ethiopia!5e0!3m2!1sen!2snl!4v1686167923610!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      address: `${t('woredaDetails.sofiLoc')}`,
      phone: '+025 666 9184',
      fax: '+0254660268',
      email: 'sofi@gmail.com',
      totalPopulation: '49610',
      femalePopulation: '24557',
      malePopulation: '25053',
      totalArea: `941`,
      populationDensity: '22'
    },
    
    // Add more woredas as needed
  ];

  const { id } = useParams(); // Retrieve the woreda ID from the URL parameter

  // Find the woreda object with the matching ID
  const selectedWoreda = woredas.find((woreda) => woreda.id === parseInt(id));

  if (!selectedWoreda) {
    return <p>Woreda not found.</p>; // Handle the case when the woreda ID is not valid
  }
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);

  return (
    
    <>
      <Navs />
      <div className="container mx-auto p-8 mt-18 md:mt-24 lg:my-10">
        <div>
          <h1 className="text-3xl font-bold mb-4 text-slate-600">{selectedWoreda.name}</h1>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <motion.div
                className="bg-white rounded-lg p-6 md:py-8 lg:p-4 shadow hover:shadow-lg transition-shadow "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="flex items-center text-slate-600 ">
                  <FiMapPin size={28} className="mr-2 bg-[#329898] text-white rounded-full p-2" />
                  <span className='font-bold font-serif whitespace-nowrap mr-1'>Address: </span> {selectedWoreda.address}
                </p>
                <p className="flex items-center text-slate-600 my-4">
                  <BiPhone size={28} className="mr-2  bg-[#329898] text-white rounded-full p-2" />
                  <span className='font-bold font-serif mr-1'>Phone: </span>{selectedWoreda.phone}
                </p>
                <p className="flex items-center text-slate-600">
                  <FaFax size={28} className="mr-2  bg-[#329898] text-white rounded-full p-2" />
                  <span className='font-bold font-serif mr-1'>Fax Numb: </span>{selectedWoreda.fax}
                </p>
                <p className="flex items-center text-slate-600 mt-4">
                  <AiOutlineMail size={28} className="mr-2  bg-[#329898] text-white rounded-full p-2" />
                  <span className='font-bold font-serif mr-1'>Email: </span>{selectedWoreda.email}
                </p>
              </motion.div>
            </div>

            <div>
              <motion.div
                className="bg-white p-4  -mt-14 "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4 md:-ml-4 lg:text-center lg:-mt-6 text-slate-600 whitespace-nowrap md:mt-4">{t('woredaDetails.loc')}</h2>
                <div className="flex items-center justify-center mb-4">
                  <div dangerouslySetInnerHTML={{ __html: selectedWoreda.location }} />
                </div>
              </motion.div>
            </div>
          </div>
          <h1 className='text-3xl font-bold mb-4 text-slate-600'>{t('woredaDetails.stat')}</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div>
              <motion.div className='bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow flex flex-col'>
                <p className='text-[#329898] text-5xl text-center font-extrabold'>
                  {selectedWoreda.totalPopulation}
                </p>
                <h1 className='text-slate-900 font-normal text-2xl text-center'>
                  {t('woredaDetails.tp')}
                </h1>
              </motion.div>
            </div>
            <div>
              <motion.div className='bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow flex flex-col'>
                <p className='text-[#329898] text-5xl text-center font-extrabold'>
                  {selectedWoreda.femalePopulation}
                </p>
                <h1 className='text-slate-900 font-normal text-2xl text-center'>{t('woredaDetails.fp')}</h1>
              </motion.div>
            </div>
            <div>
              <motion.div className='bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow flex flex-col'>
                <p className='text-[#329898] text-5xl text-center font-extrabold'>
                  {selectedWoreda.malePopulation}
                </p>
                <h1 className='text-slate-900 font-normal text-2xl text-center'>{t('woredaDetails.mp')}</h1>
              </motion.div>
            </div>
            <div>
              <motion.div className='bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow flex flex-col'>
                <p className='text-[#329898] text-5xl text-center font-extrabold'>
                  {selectedWoreda.totalArea}
                </p>
                <h1 className='text-slate-900 font-normal text-2xl text-center'>{t('woredaDetails.ta')}</h1>
              </motion.div>
            </div>
            <div>
              <motion.div className='bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow flex flex-col'>
                <p className='text-[#329898] text-5xl text-center font-extrabold'>
                  {selectedWoreda.populationDensity}
                </p>
                <h1 className='text-slate-900 font-normal text-2xl text-center'>{t('woredaDetails.pd')}</h1>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WoredaDetails;
