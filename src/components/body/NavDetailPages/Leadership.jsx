import React, { useState, useEffect } from 'react';
import Navs from '../../navbars/navs';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import Aos from 'aos'
import 'aos/dist/aos.css'
import createClient from './../../../client';

const Leadership = () => {
  
  const [leader,setLeader] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await createClient.fetch(`*[_type == "leaders"]| order(time asc)  {
          name,
          role,
          image{
            asset->{
              _id,
              url
            },
            alt
          },
          description,
          additionalInfo,
          email,
          phone,
          time,
        }`);
        setLeader(data);
        console.log(data);
      } catch (error) {
        console.error(error);
        
      }
    };
    fetchData();
  }, []);
  const [selectedLeader, setSelectedLeader] = useState(null);

  const openProfileModal = (leader) => {
    setSelectedLeader(leader);
  };

  const closeProfileModal = () => {
    setSelectedLeader(null);
  };
  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);


  return (
    <>
      <Navs />
      <div className="wraper">
        <div className="economic">
          <h1 data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">Council Leaders</h1>
        </div>
        <div className="economic-definition">
          <p data-aos-duration="1000" data-aos="fade-up" data-aos-easing="linear">Members of the Harar Regional Government leadership team continue to redefine Good Governance and the critical role it plays in our global future.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 my-28 md:my-28 lg:my-16">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-16">
          {leader.map((leader, index) => (
            <motion.div
              key={leader.name}
              className="flex flex-col items-center bg-white rounded-lg shadow hover:shadow-lg"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 200 }}
            >
              <motion.img
                src={leader.image.asset.url}
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
