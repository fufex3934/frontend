import React,{useEffect} from 'react';
import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import Navs from '../navbars/navs';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Offices = () => {
    const offices = [
        { id: 1, name: 'Harari Revenue Authority', icon: <img src='/images/offices/COUNCIL.jpg'  /> },
        { id: 2, name: 'Harari Office of the Auditor General', icon: <img src='/images/offices/download.png'  /> },
        { id: 3, name: "Harari Education Bureau", icon: <img src='/images/offices/edu.jpg'  /> },
        { id: 4, name: "Municipality Of Harar City", icon: <img src='/images/offices/mun.jpg'  /> },
        { id: 5, name: "Vice President of Harari People's Region and Head of Agriculture Development Bureau", icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 6, name: "Harari Ethics and Anti-Corruption Commission", icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 7, name: "Harar Health Bureau", icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 8, name: "Attorney General", icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 9, name: "Urban Construction Development Bureau", icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 10, name: "Cultural Heritage And Tourism Bureau", icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 11, name: "Peace and Security Administration Bureau", icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 12, name: "Public Service and Human Resource development Bureau", icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 13, name: "Office of Women, Youth and Children", icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 14, name: "Transport and Road Development Bureau", icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 15, name: "Enterprise Development and Industry Bureau", icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 16, name: "President Office", icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 17, name: "Supreme Court", icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 18, name: "State Council Office", icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 19, name: "Police Commission", icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 20, name: "Environment Protection Authority", icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 21, name: "Environment Protection Authority", icon: <img src='/images/offices/vice.jpg'  /> },
        { id: 22, name: "Harari Mass Media Agency", icon: <img src='/images/offices/mass.png'  /> },
        { id: 23, name: "Water And Severage Authority", icon: <img src='/images/offices/water.jpg'  /> },
        { id: 24, name: "Harar Region Prosperity Party", icon: <img src='/images/offices/pp.jpg'  /> },
        
        // Add more woredas as needed
      ];
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
      }, []);
  return (
    <>
      <Navs/>
      <div className="container mx-auto p-8 mt-28 md:mt-28 lg:my-10">
      <h1 className="text-4xl font-semibold mb-8 text-center text-gray-800">Harari Region Government Offices</h1>

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
