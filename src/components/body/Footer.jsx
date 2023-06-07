import React from 'react';
import { HiOutlinePhone } from 'react-icons/hi';
import { FiMail } from 'react-icons/fi';
import { BsFacebook, BsTelegram, BsTwitter, BsYoutube} from 'react-icons/bs'
import { BiChevronRight, BiAlarm } from 'react-icons/bi';
import { FaTwitter, FaTelegram, FaYoutube, FaFacebookSquare } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import './css/Footer.css';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#132244]">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex py-4 md:py-0">
            <button onClick={() => navigate('/about')} className="text-slate-300 text-sm mx-3 cursor-pointer hover:text-red-500 whitespace-nowrap">
              About Us
            </button>
            <button onClick={()=>navigate('/')} className="text-slate-300 text-sm mx-3 cursor-pointer hover:text-red-500">
              Services
            </button>
            <button onClick={() => navigate('/upcoming-detail1')} className="text-slate-300 text-sm mx-3 cursor-pointer hover:text-red-500">
              Events
            </button>
            <button onClick={() => navigate('/timely-news')} className="text-slate-300 text-sm mx-3 cursor-pointer hover:text-red-500">
              News
            </button>
            <button onClick={()=>navigate('/')} className="text-slate-300 text-sm mx-3 cursor-pointer hover:text-red-500">
              Contact
            </button>
          </div>

          <div className="flex mt-4 md:mt-0">
            <p className="text-slate-300 text-sm">Connect With Us</p>
            <Link to='https://www.facebook.com/people/Harari-Government-communication-affairs-Office/' target="_blank" className="ml-6 -mt-1 mr-2">
              <FaFacebookSquare className="rounded-full bg-white p-2 w-8 h-8 hover:bg-orange-600 cursor-pointer hover:text-white" />
            </Link>
            <Link to='https://twitter.com/HarariGovComm/status/1559545087117377538' target="_blank" className="ml-1 -mt-1 mr-2">
              <FaTwitter className="rounded-full bg-white p-2 w-8 h-8 hover:bg-orange-600 cursor-pointer hover:text-white" />
            </Link>
            <Link to='https://t.me/s/HarariGovernmentCommunication' target="_blank" className="ml-1 -mt-1 mr-2">
              <FaTelegram className="rounded-full bg-white p-2 w-8 h-8 hover:bg-orange-600 cursor-pointer hover:text-white" />
            </Link>
            <Link to='https://www.youtube.com/@hararicommunication82' target="_blank" className="ml-1 -mt-1">
              <FaYoutube className="rounded-full bg-white p-2 w-8 h-8 hover:bg-orange-600 cursor-pointer hover:text-white" />
            </Link>
          </div>
        </div>

        <hr className="border-b border-gray-700 mt-6" />

        <footer className="container mx-auto py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* left div */}
            <div className="flex items-start md:-ml-10 lg:-ml-44 l">
              <a href="#">
                <img className="h-16 w-16 rounded-full " src="./harar.png" alt="Logo" />
              </a>
              <a href="#">
                <h1 className="text-slate-300 text-base ml-2 font-bold md:text-xl">
                  Harar Government<br /> Communication Affairs Office
                </h1>
              </a>
            </div>
            {/* right div */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
              <div className="flex flex-col lg:-ml-44 ">
                <div className='flex'>
                  <BiAlarm className="text-slate-500 mr-2 mt-1" />
                  <span className="text-white">Opening Hours:</span>
                </div>
                <span className="ml-2 text-slate-500">Mon - Fri 8.00 am - 6.00 pm</span>
              </div>
              <div className="flex flex-col items-center mt-4 md:mt-0 ">
                <div className="relative my-2 flex items-center">
                  <HiOutlinePhone className="text-slate-500" />
                  <span className="text-white ml-4">Phone:</span>
                  <span className="ml-2 text-slate-500 hover:text-red-600 cursor-pointer whitespace-nowrap">
                    1800 123 4567
                  </span>
                </div>
                <div className="relative my-2 flex items-center">
                  <FiMail className="text-slate-500" />
                  <span className="text-white ml-5">Email:</span>
                  <span className="-mr-4 text-slate-500 hover:text-red-600 cursor-pointer">
                    harar@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-12">
            <div className='ml-16 md:ml-0'>
              <p className="text-white text-lg font-bold">Service Request</p>
              <div className="py-3">
                <span className="text-slate-500 text-sm py-1 cursor-pointer flex items-center hover:text-red-600">
                  <BiChevronRight /> Apply for City Job
                </span>
                <span className="text-slate-500 text-sm py-1 cursor-pointer flex items-center hover:text-red-600">
                  <BiChevronRight /> Request a 311 service
                </span>
                <span className="text-slate-500 text-sm py-1 cursor-pointer flex items-center hover:text-red-600">
                  <BiChevronRight /> Get a Parking Permit
                </span>
                <span className="text-slate-500 text-sm py-1 cursor-pointer flex items-center hover:text-red-600">
                  <BiChevronRight /> Building Permit
                </span>
                <span className="text-slate-500 text-sm py-1 cursor-pointer flex items-center hover:text-red-600">
                  <BiChevronRight /> Online Birth Certificate
                </span>
                <span className="text-slate-500 text-sm py-1 cursor-pointer flex items-center hover:text-red-600">
                  <BiChevronRight /> Trade License
                </span>
              </div>
            </div>

            <div className='ml-16 md:ml-0'>
              <p className="text-white text-lg font-bold">Follow Us</p>
              <div className="py-3">
                <Link to='https://www.facebook.com/people/Harari-Government-communication-affairs-Office/' target="_blank" className="text-slate-500 text-sm py-1 mb-1 cursor-pointer flex items-center hover:text-red-600">
                  <BsFacebook className='mr-1 text-blue-500' /> Facebook
                </Link>
                <Link to='https://t.me/s/HarariGovernmentCommunication' target="_blank" className="text-slate-500 text-sm py-1 mb-1 cursor-pointer flex items-center hover:text-red-600">
                  <BsTelegram className='mr-1 text-blue-500' /> Telegram
                </Link >
                <Link to='https://twitter.com/HarariGovComm/status/1559545087117377538' target="_blank" className="mb-1 text-slate-500 text-sm py-1 cursor-pointer flex items-center hover:text-red-600">
                  <BsTwitter className='mr-1 text-blue-500' /> Twitter
                </Link>
                <Link to='https://www.youtube.com/@hararicommunication82' target="_blank" className="text-slate-500  text-sm py-1 cursor-pointer flex items-center hover:text-red-600">
                  <BsYoutube className='mr-1 text-red-600' /> Youtube
                </Link>
              </div>
            </div>

            <div className='ml-16 md:ml-0'>
              <p className="text-white text-lg font-bold">Newsletter</p>
              <div className="py-3">
                <p className="text-slate-500 text-sm">
                  Sign up for our newsletter and get the latest news and updates directly to your inbox.
                </p>
                <div className="mt-4 flex -ml-10 md:-ml-10 lg:-ml-0">
                  <input
                    className="w-64 bg-white  py-2 px-3 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button className="bg-red-500  py-3 px-3   text-white text-sm hover:bg-red-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500">
                    Subscribe
                  </button>
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
