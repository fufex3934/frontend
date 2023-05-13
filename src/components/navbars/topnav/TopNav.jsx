import React from 'react';
import { HiOutlinePhoneArrowDownLeft } from 'react-icons/hi';
import { BiAlarm } from 'react-icons/bi';

const TopNav = () => {
  return (
    <div className="bg-gray-800 w-full p-2   ">
      <div className="flex-auto ml-6 flex items-center">
        <a
          href="tel:+25164963831"
          className="text-white transition ease-in-out duration-300 decoration-0 flex items-center hover:text-blue-400"
        >
          <HiOutlinePhoneArrowDownLeft className="text-green-500 mr-2 text-2xl" />
          <span className="whitespace-nowrap">Call on: 1800 123 4567</span>
        </a>
        <span className="text-white ml-6 flex items-center">
          <BiAlarm className="text-green-500 mr-2 text-2xl" />
          <span className="whitespace-nowrap">Open Hours: Mon - Fri 8.00 am - 6.00 pm</span>
        </span>
      </div>
      <div className="flex-auto ml-auto mr-12">
        <a href="#" className="text-white decoration-0 ml-6 hover:text-blue-400">
          Council
        </a>
        <a href="#" className="text-white decoration-0 ml-6 hover:text-blue-400">
          Vacancies
        </a>
        <a href="#" className="text-white decoration-0 ml-6 hover:text-blue-400">
          Complaints
        </a>
      </div>
    </div>
  );
};

export default TopNav;
