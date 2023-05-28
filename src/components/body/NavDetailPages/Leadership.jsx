import React, { useState } from 'react';
import Navs from '../../navbars/navs';
import Footer from '../Footer';
import { motion } from 'framer-motion';

const leaders = [
  {
    name: 'Hacalu Hundesa',
    role: 'CEO',
    image: '/images/abiy.jpg',
    description: 'Hacalu Hundesa is the CEO of Harar Government. He has years of experience in public administration and is dedicated to serving the community.',
    additionalInfo: 'John Doe has received several awards for his outstanding contributions to public service.',
    email: 'hace@example.com',
    phone: '+1 123 456 7890',
  },
  {
    name: 'Kadir Martu',
    role: 'CTO',
    image: '/images/lema.jpg',
    description: 'Kadir Martu is the Chief Technology Officer of Harar Government. She is passionate about leveraging technology to drive innovation and improve government services.',
    additionalInfo: 'Jane Smith holds a Master\'s degree in Computer Science and has published numerous research papers on government technology.',
    email: 'kedir@example.com',
    phone: '+1 987 654 3210',
  },
  {
    name: 'Hacalu Hundesa',
    role: 'CEO',
    image: '/images/abiy.jpg',
    description: 'Hacalu Hundesa is the CEO of Harar Government. He has years of experience in public administration and is dedicated to serving the community.',
    additionalInfo: 'John Doe has received several awards for his outstanding contributions to public service.',
    email: 'hace@example.com',
    phone: '+1 123 456 7890',
  },
  {
    name: 'Kadir Martu',
    role: 'CTO',
    image: '/images/lema.jpg',
    description: 'Kadir Martu is the Chief Technology Officer of Harar Government. She is passionate about leveraging technology to drive innovation and improve government services.',
    additionalInfo: 'Jane Smith holds a Master\'s degree in Computer Science and has published numerous research papers on government technology.',
    email: 'kedir@example.com',
    phone: '+1 987 654 3210',
  },
  // Add more leaders as needed
];

const Leadership = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);

  const openProfileModal = (leader) => {
    setSelectedLeader(leader);
  };

  const closeProfileModal = () => {
    setSelectedLeader(null);
  };

  return (
    <>
      <Navs />
      <div className="container mx-auto px-4 mt-32">
        <h1 className="text-3xl font-bold text-center mt-8 mb-4">Harar Government Leadership</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              />
              <div className="p-4 flex flex-col items-center">
                <h2 className="text-xl font-semibold mb-2">{leader.name}</h2>
                <p className="text-gray-700">{leader.role}</p>
                <p className="text-gray-600 text-sm mt-2">{leader.description}</p>
                <button
                  className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
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
            <h2 className="text-xl font-semibold mb-4">{selectedLeader.name}</h2>
            <p className="text-gray-700">{selectedLeader.description}</p>
            <p className="text-gray-600 mt-4">{selectedLeader.additionalInfo}</p>
            <p className="text-gray-600 mt-2">Email: {selectedLeader.email}</p>
            <p className="text-gray-600 mt-2">Phone: {selectedLeader.phone}</p>
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
