import React from 'react';
import { HiOutlinePhone } from 'react-icons/hi';
import { BiAlarm } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs'
import { FaTelegram } from 'react-icons/fa'
import { AiFillTwitterCircle } from 'react-icons/ai'
import './TopNav.css'
import { Link } from 'react-router-dom';
const TopNav = () => {
  // Check if the device is a mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Render the navbar only if it's not a mobile device
  if (isMobile) {
    return null;
  }

  return (
    <div className="bg-[#3bb5b5] w-full  p-2 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex flex-col sm:flex-row items-center relative left-8">
        <a
          href="tel:+251-25-666-00-00"
          className="text-white font-serif transition ease-in-out duration-300 decoration-0 flex items-center hover:text-orange-600 sm:mr-8"
        >
          <HiOutlinePhone className="text-red-200 mr-2 text-2xl" />
          <span className="text-sm ">Call on: +251-25-666-00-00</span>
        </a>
        <span className="text-white flex items-center mt-4 sm:mt-0">
          <BiAlarm className="text-red-200 mr-2 text-2xl" />
          <span className="text-sm font-serif">Open Hours: Mon - Fri 8.00 am - 6.00 pm</span>
        </span>
      </div>
      <div className="flex mt-4 relative right-6 sm:mt-0">
        <Link to = 'https://www.facebook.com/p/Harari-Government-communication-affairs-Office-100064845514191/' target='_blank' className="text-white ml-6 sm:ml-0 sm:mr-6 hover:text-orange-600">
          <BsFacebook className='change' />
        </Link>
        <Link to='https://t.me/HarariGovernmentCommunication' target='_blank' className="text-white ml-6 sm:ml-0 sm:mr-6 hover:text-orange-600">
          <FaTelegram className='change' />
        </Link>
        <button className="text-white ml-6 sm:ml-0 hover:text-orange-600">
          <AiFillTwitterCircle className='change' />
        </button>
      </div>
    </div>
  );
};

export default TopNav;
