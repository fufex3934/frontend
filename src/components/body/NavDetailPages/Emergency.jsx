          import React,{useEffect} from 'react';
          import { motion } from 'framer-motion';
          import Navs from '../../navbars/navs';
          import Footer from '../Footer';
          import { useTranslation } from 'react-i18next';

          const Emergency = () => {
            const {t} = useTranslation();
            useEffect(() => {
              window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
            }, []);
          
            return (
              <>
                <Navs />
                <div className="container mx-auto p-8 mb-8">
                  <h1 className="text-3xl font-bold mb-4 text-[#64748b]">{t('emergency.header')}</h1>
                  <p className="mb-8">
                  {t('emergency.text')}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <motion.div
            className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#64748b]">{t('emergency.police')}</h2>
            <p className="text-gray-600">{t('emergency.pemergence')} <a href="tel:911" className="text-red-500">911</a></p>
            <p className="text-gray-600">{t('emergency.pnemergence')} <a href="tel:1234567890" className="text-blue-500">(123) 456-7890</a></p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#64748b]">{t('emergency.fire')}</h2>
            <p className="text-gray-600">{t('emergency.femergency')} <a href="tel:911" className="text-red-500">911</a></p>
            <p className="text-gray-600">{t('emergency.nfemergency')} <a href="tel:1234567890" className="text-blue-500">(123) 456-7890</a></p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#64748b]">{t('emergency.medical')}</h2>
            <p className="text-gray-600">{t('emergency.memergency')} <a href="tel:911" className="text-red-500">911</a></p>
            <p className="text-gray-600">{t('emergency.nmemergency')} <a href="tel:1234567890" className="text-blue-500">(123) 456-7890</a></p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#64748b]">{t('emergency.public')}</h2>
            <p className="text-gray-600">{t('emergency.pubemergency')} <a href="tel:911" className="text-red-500">911</a></p>
            <p className="text-gray-600">{t('emergency.npubemergency')} <a href="tel:1234567890" className="text-blue-500">(123) 456-7890</a></p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#64748b]">{t('emergency.emanage')}</h2>
            <p className="text-gray-600">{t('emergency.emanageEmerg')} <a href="tel:911" className="text-red-500">911</a></p>
            <p className="text-gray-600">{t('emergency.nemanageEmerg')} <a href="tel:1234567890" className="text-blue-500">(123) 456-7890</a></p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#64748b]">{t('emergency.social')}</h2>
            <p className="text-gray-600">{t('emergency.semergency')} <a href="tel:911" className="text-red-500">911</a></p>
            <p className="text-gray-600">{t('emergency.nsemergency')} <a href="tel:1234567890" className="text-blue-500">(123) 456-7890</a></p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#64748b]">{t('emergency.media')}</h2>
            <p className="text-gray-600">{t('emergency.medemergency')} <a href="tel:911" className="text-red-500">911</a></p>
            <p className="text-gray-600">{t('emergency.nmedemergency')} <a href="tel:1234567890" className="text-blue-500">(123) 456-7890</a></p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#64748b]">{t('emergency.relatation')}</h2>
            <p className="text-gray-600">{t('emergency.remergency')}<a href="tel:911" className="text-red-500">911</a></p>
            <p className="text-gray-600">{t('emergency.nremergency')} <a href="tel:1234567890" className="text-blue-500">(123) 456-7890</a></p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h2 className="text-xl font-bold mb-2 text-[#64748b]">{t('emergency.socialmedia')}</h2>
            <p className="text-gray-600">{t('emergency.smemergency')} <a href="tel:911" className="text-red-500">911</a></p>
            <p className="text-gray-600">{t('emergency.nsmemergency')} <a href="tel:1234567890" className="text-blue-500">(123) 456-7890</a></p>
          </motion.div>


                    {/* Add more motion.div elements for additional departments */}
                    
                  </div>
                </div>
                <Footer />
              </>
            );
          };

          export default Emergency;
