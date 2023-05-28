import React, { useState } from 'react';
import Navs from '../../navbars/navs';
import Footer from '../Footer';
import { motion } from 'framer-motion';

const leaders = [
  {
    name: 'Mr. Ordin Bedri',
    role: 'President',
    image: '/images/lema.jpg',
    description: 'Ordin Bedri is the President of Harar Government. He has years of experience in public administration and is dedicated to serving the community.',
    additionalInfo: 'Ordin Bedri has received several awards for his outstanding contributions to public service.',
    email: 'ordin@example.com',
    phone: '+1 123 456 7890',
  },
  {
    name: 'Mr.Fethi Mehadi',
    role: 'President Office',
    image: '/images/leaders/fatihi.jpg',
    description: 'Fethi Mehadi is the Chief Technology Officer of Harar Government. She is passionate about leveraging technology to drive innovation and improve government services.',
    additionalInfo: 'Fethi Mehadi holds a Master\'s degree in Computer Science and has published numerous research papers on government technology.',
    email: 'fetihi@example.com',
    phone: '+1 987 654 3210',
  },
  {
    name: 'Mrs. Misra Abdella',
    role: 'Vice President',
    image: '/images/leaders/misra.jpg',
    description: 'Misra Abdella is the Vice President of Harar Government. She has years of experience in public administration and is dedicated to serving the community.',
    additionalInfo: 'Misra Abdella has received several awards for his outstanding contributions to public service.',
    email: 'misra@example.com',
    phone: '+1 123 456 7890',
  },
  {
    name: 'Eng. Usmael Yusuf',
    role: 'Head Office',
    image: '/images/leaders/usmael.jpg',
    description: 'Eng. Usmael Yusuf is the Municipality Of Harar City.  She is passionate about leveraging technology to drive innovation and improve government services.',
    additionalInfo: 'Usmael Yusuf holds a Master\'s degree in Computer Science and has published numerous research papers on government technology.',
    email: 'usmael@example.com',
    phone: '+1 987 654 3210',
  },
  {
    name: 'Mr. Abdul- hakim Oumer',
    role: 'Deputy Head',
    image: '/images/leaders/abdul.jpeg',
    description: ' Abdul- hakim Oumer is the Harari Region Prosperity Party of Harar Government. He is passionate about leveraging technology to drive innovation and improve government services.',
    additionalInfo: 'Abdul- hakim Oumer holds a Master\'s degree in Computer Science and has published numerous research papers on government technology.',
    email: 'abdul@example.com',
    phone: '+1 987 654 3210',
  },
  {
    name: 'Mr. Henok Muluneh',
    role: 'Head Office',
    image: '/images/leaders/henok.jpeg',
    description: 'Henok Muluneh is the Chief T of Harar Government Communication Office. He is passionate about leveraging technology to drive innovation and improve government services.',
    additionalInfo: 'Henok Muluneh holds a Master\'s degree in Computer Science and has published numerous research papers on government technology.',
    email: 'henok@example.com',
    phone: '+1 987 654 3210',
  },
  {
    name: 'Mr. Telahun Wadara',
    role: 'Head Office',
    image: '/images/leaders/telahun.jpg',
    description: 'Telahun Wadara is the Peace and Security Administration of Harar Government. He has years of experience in public administration and is dedicated to serving the community.',
    additionalInfo: 'Telahun Wadara has received several awards for his outstanding contributions to public service.',
    email: 'telahun@example.com',
    phone: '+1 123 456 7890',
  },
  {
    name: 'Mr. Abdulhakim Abdi Oumer',
    role: 'Head Office',
    image: '/images/leaders/abdulhakim.jfif',
    description: 'Abdulhakim Abdi Oumer is the Chief of Finance and Economic Development of Harar Government. She is passionate about leveraging technology to drive innovation and improve government services.',
    additionalInfo: 'Abdulhakim Abdi Oumer holds a Master\'s degree in Computer Science and has published numerous research papers on government technology.',
    email: 'abdulhakim@example.com',
    phone: '+1 987 654 3210',
  },
  {
    name: 'Mr. Abduljebar Mohammed',
    role: 'Head Office',
    image: '/images/leaders/abduljabar.jpeg',
    description: 'Abduljebar Mohammed is the Harari Region Prosperity Party of Harar Government. He has years of experience in public administration and is dedicated to serving the community.',
    additionalInfo: 'Abduljebar Mohammed has received several awards for his outstanding contributions to public service.',
    email: 'abduljebar@example.com',
    phone: '+1 123 456 7890',
  },
  {
    name: 'Mr. Arif Mohamed Addus',
    role: 'Council Deputy Speaker',
    image: '/images/leaders/arif.jpg',
    description: 'Arif Mohamed Addus is the State Council Office of Harar Government. He is passionate about leveraging technology to drive innovation and improve government services.',
    additionalInfo: 'Arif Mohamed Addus holds a Master\'s degree in Computer Science and has published numerous research papers on government technology.',
    email: 'arif@example.com',
    phone: '+1 987 654 3210',
  },
  {
    name: 'Mr. Ayub Ahamed',
    role: 'Head Office',
    image: '/images/leaders/ayub.jpg',
    description: 'Ayub Ahamed is the Attorney General of Harar Government. He is passionate about leveraging technology to drive innovation and improve government services.',
    additionalInfo: 'Ayub Ahamed holds a Master\'s degree in Computer Science and has published numerous research papers on government technology.',
    email: 'ayub@example.com',
    phone: '+1 987 654 3210',
  },
  {
    name: 'Mr. Bekele Temesgen',
    role: 'Head Office',
    image: '/images/leaders/bekele.jpg',
    description: 'Bekele Temesgen is the Revenue Authority of Harar Government. He is passionate about leveraging technology to drive innovation and improve government services.',
    additionalInfo: 'Bekele Temesgen holds a Master\'s degree in Computer Science and has published numerous research papers on government technology.',
    email: 'bekele@example.com',
    phone: '+251911541867',
  },
  {
    name: 'Mr. Jafar Sufian',
    role: 'Head Organization of Harari Regional Prosperity Party',
    image: '/images/leaders/jafar.jpg',
    description: 'Jafar Sufian is the Head of Harari Region Prosperity Party. He is passionate about leveraging technology to drive innovation and improve government services.',
    additionalInfo: 'Jafar Sufian holds a Master\'s degree in Computer Science and has published numerous research papers on government technology.',
    email: 'jafar@example.com',
    phone: '+251911541867',
  },
  {
    name: 'Mr. Sultan Abduselam',
    role: 'Speaker of Council',
    image: '/images/leaders/sultan.jpg',
    description: 'Sultan Abduselam is the State Office Council of Harari Government. He is passionate about leveraging technology to drive innovation and improve government services.',
    additionalInfo: 'Sultan Abduselam holds a Master\'s degree in Computer Science and has published numerous research papers on government technology.',
    email: 'sultan@example.com',
    phone: '+251911541867',
  },
  {
    name: 'Mr.Bushra Aliyi Yousuf',
    role: 'Head Office',
    image: '/images/leaders/bushra.jpg',
    description: 'Bushra Aliyi Yousuf is the Trade Development Agency of Harari Government. He is passionate about leveraging technology to drive innovation and improve government services.',
    additionalInfo: 'Bushra Aliyi Yousuf holds a Master\'s degree in Computer Science and has published numerous research papers on government technology.',
    email: 'bushra@example.com',
    phone: '+251911541867',
  },
  {
    name: 'Mr.Tawalada Abdosh',
    role: 'Head Office',
    image: '/images/leaders/tawlda.jpg',
    description: 'Tawalada Abdosh is the Head of Cultural Heritage and Tourism Bureau of Harari Government. He is passionate about leveraging technology to drive innovation and improve government services.',
    additionalInfo: 'Tawalada Abdosh holds a Master\'s degree in Computer Science and has published numerous research papers on government technology.',
    email: 'teweteda@gmail.com',
    phone: '+251911541867',
  },
  {
    name: 'Mr.Yasin Abdullahi',
    role: 'Head Office',
    image: '/images/leaders/yasin.jpg',
    description: 'Yasin Abdullahi is the Head of Harari Health Bureau. He is passionate about leveraging technology to drive innovation and improve government services.',
    additionalInfo: 'Yasin Abdullahi holds a Master\'s degree in Computer Science and has published numerous research papers on government technology.',
    email: 'yasin@gmail.com',
    phone: '+251911541867',
  },
  
  {
    name: 'Mrs. Amina Abdulkarim',
    role: 'Head Office',
    image: '/images/leaders/amina.jpg',
    description: 'Amina Abdulkarim is the Head of Urban Construction Development Bureau of Harari Government. She is passionate about leveraging technology to drive innovation and improve government services.',
    additionalInfo: 'Amina Abdulkarim holds a Master\'s degree in Computer Science and has published numerous research papers on government technology.',
    email: 'amina@gmail.com',
    phone: '+251911541867',
  },
  {
    name: 'Mrs. Fariha Mohamed',
    role: 'Head Office',
    image: '/images/leaders/fariha.jfif',
    description: ' Fariha Mohamed is the Head of Public Service and Human Resource Bureau of Harari Government. She is passionate about leveraging technology to drive innovation and improve government services.',
    additionalInfo: ' Fariha Mohamed holds a Master\'s degree in Computer Science and has published numerous research papers on government technology.',
    email: 'fariha@gmail.com',
    phone: '+251911541867',
  },
  {
    name: 'Mrs. Samira Yusuf',
    role: 'Head Office',
    image: '/images/leaders/samira.jfif',
    description: 'Samira Yusuf is the Head of Enterprise Development and Industry Bureau of Harari Government. She is passionate about leveraging technology to drive innovation and improve government services.',
    additionalInfo: 'Samira Yusuf Mohamed holds a Master\'s degree in Computer Science and has published numerous research papers on government technology.',
    email: 'samira@gmail.com',
    phone: '+251911541867',
  },
  {
    name: 'Mrs. Teyeba Abdella',
    role: 'Head Office',
    image: '/images/leaders/samira.jfif',
    description: 'Teyeba Abdella is the Head of Transport and Road Development Bureau of Harari Government. She is passionate about leveraging technology to drive innovation and improve government services.',
    additionalInfo: 'Teyeba Abdella Mohamed holds a Master\'s degree in Computer Science and has published numerous research papers on government technology.',
    email: 'teyeba@gmail.com',
    phone: '+251911541867',
  },
  {
    name: 'Mrs.Delila Yusuf',
    role: 'Head Office',
    image: '/images/leaders/delila.jpg',
    description: 'Delila Yusuf is the Head of Women,Youth and Children  Bureau of Harari Government. She is passionate about leveraging technology to drive innovation and improve government services.',
    additionalInfo: 'Delila Yusuf Mohamed holds a Master\'s degree in Computer Science and has published numerous research papers on government technology.',
    email: 'delila@gmail.com',
    phone: '+251911541867',
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
      <div className="container mx-auto px-4 mt-32 mb-32">
        <h1 className="text-3xl font-bold text-[#334155] text-center mt-8 mb-8">Harar Government Leadership</h1>
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
