import React,{useState} from 'react';
import { HiOutlinePhone } from 'react-icons/hi';
import { FiMail } from 'react-icons/fi';
import { BsFacebook, BsTelegram, BsTwitter, BsYoutube} from 'react-icons/bs'
import { BiChevronRight, BiAlarm } from 'react-icons/bi';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import {RiAdminLine} from 'react-icons/ri';
import './css/Footer.css';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Logo from '/harar.png';

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const {t} = useTranslation();

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      // Send the email to the backend
      const response = await axios.post('http://localhost:3000/api/subscribe', { email });
      // Clear the email input field and display success message
      setEmail('');
      setMessage(response.data.message);
    } catch (error) {
      // Display error message if the subscription failed
      setMessage('An error occurred. Please try again later.');
    }
  };
  return (
    <div className="bg-[#132244] ">
      <div className="container mx-auto  px-4 ">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex py-4 md:py-0">
            <button onClick={() => navigate('/about')} className="text-slate-300 text-sm mx-3 cursor-pointer hover:text-red-500 whitespace-nowrap">
              {t('footer.about')}
            </button>
            <button onClick={() => navigate('/service')}
             className="text-slate-300 text-sm mx-3 cursor-pointer hover:text-red-500">
            {t('footer.services')}
            </button>
            <button  className="text-slate-300 text-sm mx-3 cursor-pointer hover:text-red-500">
            {t('footer.events')}
            </button>
            <button onClick={() => navigate('/timely-news')} className="text-slate-300 text-sm mx-3 cursor-pointer hover:text-red-500">
            {t('footer.news')}
            </button>
            <button onClick={() => navigate('/contact-us')} className="text-slate-300 text-sm mx-3 cursor-pointer hover:text-red-500">
            {t('footer.contact')}
            </button>
            <button onClick={()=>navigate('/sanity')} className='absolute right-20  '>
              <RiAdminLine className='text-slate-300 text-sm h-6 w-6 cursor-pointer hover:text-red-500'/>
            </button>
          </div>
        </div>

        <hr className="border-b border-gray-700 mt-6" />

        <footer className="container mx-auto py-8">
          <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between">
            {/* left div */}
            <div className="flex items-start md:-ml-96 lg:-ml-48 space-x-4 ml-6  ">
              <Link to ='/'>
                <img className="h-10 w-40  mt-1 md:mt-0  md:h-12  object-cover md:w-12 rounded-full mr-10 md:mr-0" src={Logo} alt="Logo" />
              </Link>
              <Link to = '/'>
                <h1 className="text-slate-300 text-base md:whitespace-nowrap lg:whitespace-break-spaces text-start  font-bold md:text-2xl lg:text-lg  w-[300px]">
                {t('footer.header')}
                </h1>
              </Link>
            </div>
            {/* right div */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
              <div className="flex flex-col lg:-ml-44 ">
                <div className='flex'>
                  <BiAlarm className="text-slate-400 mr-2 mt-1" />
                  <span className="text-white">{t('footer.open')}</span>
                </div>
                <span className="ml-2 text-slate-400">Mon - Fri 8.00 am - 6.00 pm</span>
              </div>
              <div className="flex flex-col items-center mt-4 md:mt-0 ">
                <div className="relative my-2 flex items-center">
                  <HiOutlinePhone className="text-slate-400" />
                  <span className="text-white ml-4">{t('footer.phone')}</span>
                  <span className="ml-2 text-slate-400 hover:text-red-600 cursor-pointer whitespace-nowrap">
                    1800 123 4567
                  </span>
                </div>
                <div className="relative my-2 flex items-center">
                  <FiMail className="text-slate-400" />
                  <span className="text-white ml-5">{t('footer.email')}</span>
                  <span className="-mr-4 text-slate-400 hover:text-red-600 cursor-pointer">
                    harar@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-12">
            <div className='ml-16 md:ml-0'>
              <p className="text-white text-lg font-bold">{t('footer.links')}</p>
              <div className="py-3">
                <Link to={'https://harari.gov.et'} target='_blank' className="text-slate-400 text-sm py-1 cursor-pointer flex items-center hover:text-red-600">
                  <BiChevronRight /> Harari Official Websit
                </Link>
                <Link to={'https://harari.gov.et'} target='_blank' className="text-slate-400 text-sm py-1 cursor-pointer flex items-center hover:text-red-600">
                  <BiChevronRight />Harari Innovation Center
                </Link>
                <Link to={'https://harari.prosperity'} target='_blank' className="text-slate-400 text-sm py-1 cursor-pointer flex items-center hover:text-red-600">
                  <BiChevronRight /> Harari Prosperity Official Websit
                </Link>
                <Link to={'https://harari.gov.et'} target='_blank' className="text-slate-400 text-sm py-1 cursor-pointer flex items-center hover:text-red-600">
                  <BiChevronRight /> https://harari.gov.et
                </Link>
                <Link to={'https://harari.gov.et'} target='_blank' className="text-slate-400 text-sm py-1 cursor-pointer flex items-center hover:text-red-600">
                  <BiChevronRight /> https://harari.gov.et
                </Link>
              </div>
            </div>

            <div className='ml-16 md:ml-0'>
              <p className="text-white text-lg font-bold">{t('footer.follow')}</p>
              <div className="py-3">
                <Link to='https://www.facebook.com/p/Harari-Government-communication-affairs-Office-100064845514191/' target="_blank" className="text-slate-400 text-sm py-1 mb-1 cursor-pointer flex items-center hover:text-red-600">
                  <BsFacebook className='mr-1 text-blue-500' /> Facebook
                </Link>
                <Link to='https://t.me/s/HarariGovernmentCommunication' target="_blank" className="text-slate-400 text-sm py-1 mb-1 cursor-pointer flex items-center hover:text-red-600">
                  <BsTelegram className='mr-1 text-blue-500' /> Telegram
                </Link >
                <Link to='https://twitter.com/HarariGovComm/status/1559545087117377538' target="_blank" className="mb-1 text-slate-400 text-sm py-1 cursor-pointer flex items-center hover:text-red-600">
                  <BsTwitter className='mr-1 text-blue-500' /> Twitter
                </Link>
                <Link to='https://www.youtube.com/@hararicommunication82' target="_blank" className="text-slate-400  text-sm py-1 cursor-pointer flex items-center hover:text-red-600">
                  <BsYoutube className='mr-1 text-red-600' /> Youtube
                </Link>
              </div>
            </div>

            <div className='ml-16 md:ml-0'>
              <p className="text-white text-lg font-bold">{t('footer.newsletter')}</p>
              <div className="py-3">
                <p className="text-slate-400 text-sm">
                {t('footer.subscribe')}
                </p>
                <div >
                  <form onSubmit={handleSubscribe} className="mt-4 flex -ml-10 md:-ml-16 lg:-ml-0">
                  <input
                    className="w-64 bg-white  py-2 px-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                    type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
                  <button className="bg-red-500  py-3 px-3   text-white text-sm hover:bg-red-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500">
                    Subscribe
                  </button>
                  </form>
                  <p className= 'text-green-200'>{message}</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
