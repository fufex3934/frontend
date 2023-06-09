import React,{useEffect} from 'react';
import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import { BiPhone } from 'react-icons/bi';
import { FaFax } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import Footer from '../Footer'
import Navs from '../../navbars/navs';
import { useParams } from 'react-router-dom';
const OfficesDetails = () => {
    const offices = [
        {
            id: 1,
            name: "Harari Revenue Authority",
            location:'<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4034622.023926607!2d39.39637685096437!3d9.0582399348193!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1631bd49d4295cdf%3A0x988d210b602a9ca5!2sHarar%20People&#39;s%20Regional%20State%20Revenue%20Authority%20Bureau!5e0!3m2!1sen!2snl!4v1686336149715!5m2!1sen!2snl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
            mission:"Providing comprehensive coverage and quality of international audit services based on professional freedom, in collaboration with the Regional Council, auditing agencies, accountants, private auditors, corporations and offices, as well as the public to ensure good governance and government performance. Develop competency and accountability.",
            vision:"To be a model by 2022 among the best Auditor General offices nationwide. 5. Increase public participation 6. Improving effective resource and budget utilization 7. Improving basic process change standard and",
            coreValues:"It is our tool for up-to-date and up-to-date information, Professional freedom is our guarantee for our audit work, We work for transparency and accountability  We operate independently of audit professional ethics.",
            address: 'Unknown ',
            phone: '+025 666 9184',
            fax: '+0254660268',
            email: 'sofi@gmail.com',
          },
    ];

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
      }, []);
    
    const {id} = useParams();
    

    // Find the woreda object with the matching ID
  const selectedOffice = offices.find((office) => office.id === parseInt(id));
  


  if (!selectedOffice) {
    return <p>Office not found.</p>; // Handle the case when the office ID is not valid
  }
  return (
    <>
     <Navs/>
       <div className='container mx-auto p-8 mt-18 md:mt-24 lg:my-10 max-w-7xl'>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 '>
            {/* left div */}
            <div className='md:mr-24'>
                <h1 className='text-4xl capitalize font-serif mb-4'>{selectedOffice.name}</h1>
                <h1 className='font-bold uppercase text-xl'>Mission</h1>
                <p className='text-md my-6'>{selectedOffice.mission}</p>
                <h2 className=' font-bold uppercase text-xl mb-4'>Vision</h2>
                <p>{selectedOffice.vision}</p>
                <h2 className='font-bold uppercase text-xl my-4'>core values</h2>
                <p className='text-md my-6'>{selectedOffice.coreValues}</p>
            </div>
            {/* right div */}
            <div className='flex flex-col'>
            <motion.div
                className="bg-white rounded-lg p-6 md:py-8 lg:p-4 shadow hover:shadow-lg transition-shadow mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="flex items-center text-slate-600 ">
                  <FiMapPin size={28} className="mr-2 bg-[#329898] text-white rounded-full p-2" />
                  <span className='font-bold font-serif whitespace-nowrap mr-1'>Address: </span> {selectedOffice.address}
                </p>
                <p className="flex items-center text-slate-600 my-4">
                  <BiPhone size={28} className="mr-2  bg-[#329898] text-white rounded-full p-2" />
                  <span className='font-bold font-serif mr-1'>Phone: </span>{selectedOffice.phone}
                </p>
                <p className="flex items-center text-slate-600">
                  <FaFax size={28} className="mr-2  bg-[#329898] text-white rounded-full p-2" />
                  <span className='font-bold font-serif mr-1'>Fax Numb: </span>{selectedOffice.fax}
                </p>
                <p className="flex items-center text-slate-600 mt-4">
                  <AiOutlineMail size={28} className="mr-2  bg-[#329898] text-white rounded-full p-2" />
                  <span className='font-bold font-serif mr-1'>Email: </span>{selectedOffice.email}
                </p>
              </motion.div>
              <div className="justify-center  md:justify-end ">
                  <div dangerouslySetInnerHTML={{ __html: selectedOffice.location }} />
            </div>
            </div>
            

        </div>

       </div>
     <Footer/>
    </>
  )
}

export default OfficesDetails
