          import React,{useEffect} from 'react';
          import { motion } from 'framer-motion';
          import { BsTelephone } from 'react-icons/bs';
          import Navs from '../../navbars/navs';
          import Footer from '../Footer';

          const Emergency = () => {
            useEffect(() => {
              window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
            }, []);
          
            return (
              <>
                <Navs />
                <div className="container mx-auto p-8 mb-8">
                  <h1 className="text-3xl font-bold mb-4 text-[#64748b]">Emergency Contact Information</h1>
                  <p className="mb-8">
                    In case of an emergency, please find below the contact information for the relevant government departments:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <motion.div
            className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#64748b]">Harar Police Commission</h2>
            <p className="text-gray-600">Emergency Hotline: <a href="tel:911" className="text-red-500">911</a></p>
            <p className="text-gray-600">Non-Emergency: <a href="tel:1234567890" className="text-blue-500">(123) 456-7890</a></p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#64748b]">Fire Department</h2>
            <p className="text-gray-600">Emergency Hotline: <a href="tel:911" className="text-red-500">911</a></p>
            <p className="text-gray-600">Non-Emergency: <a href="tel:1234567890" className="text-blue-500">(123) 456-7890</a></p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#64748b]">Medical Services</h2>
            <p className="text-gray-600">Emergency Hotline: <a href="tel:911" className="text-red-500">911</a></p>
            <p className="text-gray-600">Non-Emergency: <a href="tel:1234567890" className="text-blue-500">(123) 456-7890</a></p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#64748b]">Public Works</h2>
            <p className="text-gray-600">Emergency Hotline: <a href="tel:911" className="text-red-500">911</a></p>
            <p className="text-gray-600">Non-Emergency: <a href="tel:1234567890" className="text-blue-500">(123) 456-7890</a></p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#64748b]">Emergency Management</h2>
            <p className="text-gray-600">Emergency Hotline: <a href="tel:911" className="text-red-500">911</a></p>
            <p className="text-gray-600">Non-Emergency: <a href="tel:1234567890" className="text-blue-500">(123) 456-7890</a></p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#64748b]">Social Services</h2>
            <p className="text-gray-600">Emergency Hotline: <a href="tel:911" className="text-red-500">911</a></p>
            <p className="text-gray-600">Non-Emergency: <a href="tel:1234567890" className="text-blue-500">(123) 456-7890</a></p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#64748b]">Department of Media Relations</h2>
            <p className="text-gray-600">Emergency Hotline: <a href="tel:911" className="text-red-500">911</a></p>
            <p className="text-gray-600">Non-Emergency: <a href="tel:1234567890" className="text-blue-500">(123) 456-7890</a></p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#64748b]">Public Relations Office</h2>
            <p className="text-gray-600">Emergency Hotline: <a href="tel:911" className="text-red-500">911</a></p>
            <p className="text-gray-600">Non-Emergency: <a href="tel:1234567890" className="text-blue-500">(123) 456-7890</a></p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#64748b]">Social Media Department</h2>
            <p className="text-gray-600">Emergency Hotline: <a href="tel:911" className="text-red-500">911</a></p>
            <p className="text-gray-600">Non-Emergency: <a href="tel:1234567890" className="text-blue-500">(123) 456-7890</a></p>
          </motion.div>


                    {/* Add more motion.div elements for additional departments */}
                    
                  </div>
                </div>
                <Footer />
              </>
            );
          };

          export default Emergency;
