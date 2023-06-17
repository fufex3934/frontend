import React,{useEffect} from 'react';
import Navs from '../../navbars/navs';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from 'react-i18next';
const History = () => {
  const {t} = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(()=>{
    Aos.init();
},[])

  return (
    <>
      <Navs />
      <div className="bg-white p-8 my-28 md:my-24 lg:my-16">
        <motion.h1
          className="text-3xl font-bold
          text-[#334155] 
           border-b-4 border-s-2 
           border-t-4 border-e-2 py-2
          text-center mb-12" 
          data-aos="zoom-in"
           data-aos-easing="linear" 
          data-aos-duration="1500"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.5 }}
        >
          {t('history.header')}
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-[#475569] text-sm'
          data-aos-duration="1000" data-aos="fade-up" data-aos-easing="linear"
        >
           {t('history.text1')}
        </motion.p>
        <motion.div
          className="mt-8 rounded-md overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ duration: 0.8 }}
        >
          <img className="w-full  h-72" src="images/hararicity.jpg" alt="Harari, Ethiopia" />
          <p className="text-center mt-2 font-thin text-xs text-[#64748b] mb-10">Harari City Street</p>
        </motion.div>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-[#475569] text-sm'
          data-aos-duration="1000" data-aos="fade-up" data-aos-easing="linear"
        >
           {t('history.text2')}
        </motion.p>
        <motion.div
          className="mt-8 rounded-md overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ duration: 0.8 }}
        >
          <img className="w-full  h-72" src="images/h.jpg" alt="Harari, Ethiopia" />
          <p className="text-center mt-2 font-thin text-xs mb-10 text-[#64748b]">A scene on the road to the market in Harar, between 1900 and 1920.</p>
        </motion.div>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-[#475569] text-sm'
          data-aos-duration="1000" data-aos="fade-up" data-aos-easing="linear"
        >
           {t('history.text3')}
          <br />
          <br />
          {t('history.text4')}
        </motion.p>
        <motion.div
          className="mt-8 rounded-md overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ duration: 0.8 }}
          data-aos-duration="1000" data-aos="fade-up" data-aos-easing="linear"
        >
          <img className="w-full  h-72" src="images/jogol.jpg" alt="Harari, Ethiopia" />
          <p className="text-center mt-2 font-thin text-xs text-[#64748b]">View of Harar Jugol, the Fortified Historic Town</p>
        </motion.div>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-[#475569] text-sm'
          data-aos-duration="1000" data-aos="fade-up" data-aos-easing="linear"
        >
          {t('history.text5')}
          <br />
          <br />
          {t('history.text6')}
        </motion.p>
        <motion.div
          className="mt-8 rounded-md overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          transition={{ duration: 0.8 }}
        >
          <img className="w-full  h-72" src="images/imam.jpg" alt="Harari, Ethiopia" />
          <p className="text-center mt-2 font-thin mb-10 text-xs text-[#64748b]">H. H. Ahmad Bin Abi Bakr, Emir of Harar.</p>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default History;
