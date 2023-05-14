import React from 'react';
import { HiOutlinePhone } from 'react-icons/hi';
import { BiAlarm } from 'react-icons/bi';

const TopNav = () => {
  // Check if the device is a mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // Render the navbar only if it's not a mobile device
  if (isMobile) {
    return null;
  }

  return (
    <div className="bg-gray-800 w-full p-2 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex flex-col sm:flex-row items-center">
        <a
          href="tel:+25164963831"
          className="text-white transition ease-in-out duration-300 decoration-0 flex items-center hover:text-blue-400 sm:mr-8"
        >
          <HiOutlinePhone className="text-red-500 mr-2 text-2xl" />
          <span className="text-sm font-semibold">Call on: 1800 123 4567</span>
        </a>
        <span className="text-white flex items-center mt-4 sm:mt-0">
          <BiAlarm className="text-red-500 mr-2 text-2xl" />
          <span className="text-sm font-semibold">Open Hours: Mon - Fri 8.00 am - 6.00 pm</span>
        </span>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <a href="#" className="text-white ml-6 sm:ml-0 sm:mr-6 hover:text-blue-400">
          Council
        </a>
        <a href="#" className="text-white ml-6 sm:ml-0 sm:mr-6 hover:text-blue-400">
          Vacancies
        </a>
        <a href="#" className="text-white ml-6 sm:ml-0 hover:text-blue-400">
          Complaints
        </a>
      </div>
    </div>
  );
};

export default TopNav;
