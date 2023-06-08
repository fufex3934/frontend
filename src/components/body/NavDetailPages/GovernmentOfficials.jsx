import React,{useEffect} from 'react'
import Navs from '../../navbars/navs'
import Footer from '../Footer'
import { motion } from 'framer-motion';

const GovernmentOfficials = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);

  const officials = [
    {
      name: 'Lema Megarsa',
      profileImage: '/images/abiy.jpg',
      position: 'Minister of Education',
      biography: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      email: 'lema.megarsa@example.com',
      phone: '+1 123-456-7890',
      responsibilities: 'Oversees the education system and develops policies.',
      achievements: 'Implemented new curriculum standards and increased funding for schools.',
      priorExperience: 'Former Principal of XYZ High School.',
      education: "Master's Degree in Education.",
      publicEngagements: 'Keynote speaker at National Education Conference 2022.',
    },
    {
      name: 'Xayiba Hasen',
      profileImage: '/images/xayiba.jpg',
      position: 'Minister of Health',
      biography: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      email: 'xayiba.hasen@example.com',
      phone: '+1 987-654-3210',
      responsibilities: 'Oversees healthcare policies and manages public health initiatives.',
      achievements: 'Implemented universal healthcare coverage and reduced wait times for medical procedures.',
      priorExperience: 'Former CEO of ABC Hospital.',
      education: 'Doctor of Medicine (MD) degree.',
      publicEngagements: 'Panelist at Global Health Summit 2021.',
    },
    {
      name: 'Abdul Karim',
      profileImage: '/images/leaders/abdul.jpeg',
      position: 'Minister of Health',
      biography: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      email: 'abdul.smith@example.com',
      phone: '+1 987-654-3210',
      responsibilities: 'Oversees healthcare policies and manages public health initiatives.',
      achievements: 'Implemented universal healthcare coverage and reduced wait times for medical procedures.',
      priorExperience: 'Former CEO of ABC Hospital.',
      education: 'Doctor of Medicine (MD) degree.',
      publicEngagements: 'Panelist at Global Health Summit 2021.',
    },
    {
      name: 'Ayub Bekele',
      profileImage: '/images/leaders/ayub.jpg',
      position: 'Minister of Health',
      biography: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      email: 'jane.smith@example.com',
      phone: '+1 987-654-3210',
      responsibilities: 'Oversees healthcare policies and manages public health initiatives.',
      achievements: 'Implemented universal healthcare coverage and reduced wait times for medical procedures.',
      priorExperience: 'Former CEO of ABC Hospital.',
      education: 'Doctor of Medicine (MD) degree.',
      publicEngagements: 'Panelist at Global Health Summit 2021.',
    },
    
    // Add more officials as needed
  ];
  return (
    <>
    <Navs/>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mt-20 md:mt-24 lg:mt-10 mb-20">
  {officials.map((official, index) => (
    <motion.div
      key={index}
      className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="flex items-center mb-6">
        <img
          className="w-32 h-32 rounded-full mr-4 object-cover"
          src={official.profileImage}
          alt={official.name}
        />
        <div>
          <h2 className="text-2xl font-semibold mb-1 text-gray-700">{official.name}</h2>
          <p className="text-gray-500 text-lg">{official.position}</p>
        </div>
      </div>
      <div className="text-gray-700 mb-6">
        <h3 className="text-lg font-semibold mb-2">Biography:</h3>
        <p>{official.biography}</p>
      </div>
      <div className="text-gray-700 mb-6">
        <h3 className="text-lg font-semibold mb-2">Responsibilities:</h3>
        <p>{official.responsibilities}</p>
      </div>
      <div className="text-gray-700 mb-6">
        <h3 className="text-lg font-semibold mb-2">Achievements:</h3>
        <p>{official.achievements}</p>
      </div>
      <div className="text-gray-700 mb-6">
        <h3 className="text-lg font-semibold mb-2">Prior Experience:</h3>
        <p>{official.priorExperience}</p>
      </div>
      <div className="text-gray-700 mb-6">
        <h3 className="text-lg font-semibold mb-2">Education:</h3>
        <p>{official.education}</p>
      </div>
      <div className="text-gray-700 mb-6">
        <h3 className="text-lg font-semibold mb-2">Public Engagements:</h3>
        <p>{official.publicEngagements}</p>
      </div>
      <div className="text-gray-700">
        <h3 className="text-lg font-semibold mb-2">Contact Information:</h3>
        <p>Email: <a href={`mailto:${official.email}`} className="text-blue-500">{official.email}</a></p>
        <p>Phone: <a href={`tel:${official.phone}`} className="text-blue-500">{official.phone}</a></p>
      </div>
    </motion.div>
  ))}
</div>

      <Footer/>
    </>
  )
}

export default GovernmentOfficials
