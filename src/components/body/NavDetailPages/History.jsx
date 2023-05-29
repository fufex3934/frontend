import React,{useEffect} from 'react';
import Navs from '../../navbars/navs';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import Aos from 'aos'
import 'aos/dist/aos.css'
const History = () => {
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
          Harari, Ethiopia History
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-[#475569] text-sm'
          data-aos-duration="1000" data-aos="fade-up" data-aos-easing="linear"
        >
          Harar is the capital city of the Harari Region. The ancient city is located on a hilltop in the eastern part
          of the country and is about five hundred kilometers from the Ethiopian capital Addis Ababa at an elevation of
          1,885 metres (6,184 ft). For centuries, Harar has been a major commercial center, linked by the trade routes
          with the rest of Ethiopia, the entire Horn of Africa, the Arabian Peninsula, Asia, and through its ports, the
          outside world. Harar Jugol, the old walled city, was listed as a World Heritage Site in 2006 by UNESCO in
          recognition of its cultural heritage.
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
          Early history of Harar city is generally obscure, as many documents and records differ the exact date of the
          origin of the city. Most historical records state that Harar's history dates back to the 16th century,
          beginning with the Adal Sultanate moving its capital from Dakkar to Harar during the reign of Sultan Abu
          Bakr ibn Muhammad. Other rudimentary oral traditions produced in the 19th and 20th century stated that Harar
          history dated back to the 10th century when Abadir Umar ar-Rida founded the first Harar kingdom after
          migrating from the Arabian Peninsula to spread Islam in the 12th and 13th century.
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
          Besides the stone wall surrounding the city, the old town is home to 110 mosques and many more shrines,
          centered on Feres Magala square. Notable buildings include Medhane Alem Cathedral, the house of Arthur
          Rimbaud, the sixteenth-century Jami Mosque, and the historic Great Five Gates of Harar. Harrar Bira Stadium
          is the home stadium for the Harrar Beer Bottling FC. One can also visit the market.
          <br />
          <br />
          A long-standing tradition of feeding meat to spotted hyenas also evolved during the 1960s into an impressive
          night show for tourists (see spotted hyenas in Harar). Other places of interest include the highest amba
          overlooking the city, the Kondudo or "W" mountain, which hosts an ancient population of feral horses. A 2008
          scientific mission has unleashed efforts for their conservation, as the animals are greatly endangered. The
          Harar Brewery was established in 1984. Its beers can be sampled at the brewery social club adjacent to the
          brewery in Harar.
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
          Barker Haines reported in 1840 that the majority of the population of Harar were Hararis; however, a few
          Oromo, Afar, Somali Issa, and Arabian traders of Yemen were also present. In 1855 Richard Francis Burton
          described Harar as having approximately 8,000 inhabitants: 3,000 Bedouins (referring to seasonal nomads who
          "come and go"), 2,500 Hararis, and 2,500 Somalis. Burton further reported a large Oromo presence leading to
          the town. During his visit in the Khedivate of Egypt occupation of the Emirate of Harar, researcher Paultischke
          describes Harar as having roughly 40,000 inhabitants, with 25,000 of these being Hararis, 6,000 Oromo, 5,000
          Somalis, 3,000 Abyssinians, as well as a minority of Europeans and Asians.
          <br />
          <br />
          After the conquest of the Emirate of Harar by the Ethiopian Empire, an influx of Amhara settled in Harar and
          its surroundings. The Somali population of the town was decimated following the overthrow of Lij Iyasu by
          Abyssinian militias. The indigenous Harari natives who once were the majority within the walled city are now
          under 15% due to ethnic cleansing by the Haile Selassie regime. As a result of the repression by the Ethiopian
          regime, in the late 1970s, Hararis residing in Addis Ababa outnumbered those in Harar. According to Feener,
          the Harari have not recovered from the 1948 state-led crackdown on their population.
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
