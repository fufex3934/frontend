import React from 'react';
import { HiOutlinePhone } from 'react-icons/hi';
import { FiMail } from 'react-icons/fi';
import { BiChevronRight,BiAlarm } from 'react-icons/bi';
import {FaTwitter,FaInstagram,FaYoutube,FaFacebookSquare} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className=''>
      <div className='bg-[#132244] h-24 w-screen flex'>
          <div className='flex py-8 px-14'>
            <span className='text-slate-300 text-sm mx-3 cursor-pointer hover:text-red-500 whitespace-nowrap'>About Us</span>
            <span className='text-slate-300 text-sm mr-3 cursor-pointer hover:text-red-500'>Services</span>
            <span className='text-slate-300 text-sm mx-3 cursor-pointer hover:text-red-500'>Events</span>
            <span className='text-slate-300 text-sm mx-3 cursor-pointer hover:text-red-500'>News</span>
            <span className='text-slate-300 text-sm mx-3 cursor-pointer hover:text-red-500'>Contact</span>
          </div>

          <div className='ml-[90vh] mt-10  flex'>
            <p className='text-slate-300 text-sm'>Connect With Us</p>
            <span className='ml-6 -mt-1 mr-2'>
              <FaFacebookSquare className='rounded-full bg-white p-2 w-8 h-8 hover:bg-orange-600 cursor-pointer hover:text-white' />
            </span>
            <span className='ml-1 -mt-1 mr-2'>
              <FaTwitter className='rounded-full bg-white p-2 w-8 h-8 hover:bg-orange-600 cursor-pointer hover:text-white' />
            </span>
            <span className='ml-1 -mt-1 mr-2'>
              <FaInstagram className='rounded-full bg-white p-2 w-8 h-8 hover:bg-orange-600 cursor-pointer hover:text-white' />
            </span>
            <span className='ml-1 -mt-1'>
              <FaYoutube className='rounded-full bg-white p-2 w-8 h-8 hover:bg-orange-600 cursor-pointer hover:text-white' />
            </span>  
          </div>
      </div>

      <hr className='border-b border-gray-700 h-px '/>

      <footer className="bg-[#132244]  h-96 mt-0 ">
      <div className='main-footer'>

      </div>
      <div className="container mx-auto py-8 px-4 ">
        <div className="flex pt-10 ">
          <a href="#">
            <img className="h-12 md:h-12 w-12 md:w-12 rounded-full" src="./harar.png" alt="Logo" />
          </a>
          <a href="#">
            <h1 className="text-[#dfe1e6] md:ml-2 font-bold whitespace-wrap md:text-sm">
              Harar Government<br /> Communication Affairs Office
            </h1>
          </a>
        </div>
        <p className="text-sm text-[#8c95a4] ms-8 mt-2 py-2">95 FF3, App Street Avenue<br />NSW 96209, Canada</p>
        <div className="flex mt-1">
          <BiAlarm className="text-[#8c95a4] mt-1 mr-4" />
          <span className="text-white">Opening Hours:</span>
          <span className="mt-7 -ml-28 text-sm text-[#8c95a4]">Mon - Fri 8.00 am - 6.00 pm</span>
        </div>
        <div className="relative my-2 flex">
          <HiOutlinePhone className="text-[#8c95a4]" />
          <span className="text-white ml-8 absolute">Phone:</span>
          <span className="hover:text-red-600 text-sm cursor-pointer ml-20 text-[#8c95a4]">
            1800 123 4567
          </span>
        </div>
        <div className="relative my-2 flex">
          <FiMail className="text-[#8c95a4]" />
          <span className="text-white ml-8 absolute">Email:</span>
          <span className="hover:text-red-600 cursor-pointer text-sm ml-20 text-[#8c95a4]">
            harar@gmail.com
          </span>
        </div>
      </div>

      <div className="container mx-auto -mt-[40vh] ml-[75vh]">
        <p className="text-white text-lg mt-8 font-bold">Service Request</p>
        <div className="py-3">
          <span className="hover:text-red-600 text-sm text-[#8c95a4] py-1 cursor-pointer flex items-center">
            <BiChevronRight /> Apply for City Job
          </span>
          <span className="hover:text-red-600 text-sm text-[#8c95a4] py-1 cursor-pointer flex items-center">
            <BiChevronRight /> Request a 311 service
          </span>
          <span className="hover:text-red-600 text-sm text-[#8c95a4] py-1 cursor-pointer flex items-center">
            <BiChevronRight /> Get a Parking Permit
          </span>
          <span className="hover:text-red-600 text-sm text-[#8c95a4] py-1 cursor-pointer flex items-center">
            <BiChevronRight /> Building Permit
          </span>
          <span className="hover:text-red-600 text-sm text-[#8c95a4] py-1 cursor-pointer flex items-center">
            <BiChevronRight /> Online Birth Certificate
          </span>
          <span className="hover:text-red-600 text-sm text-[#8c95a4] py-1 cursor-pointer flex items-center">
            <BiChevronRight /> Trade License
          </span>
        </div>
      </div>

      <div className="container -mt-[33vh] ml-[120vh]">
        <p className="text-white text-lg mt-8 font-bold">Useful Links</p>
        <div className="py-3">
          <span className="hover:text-red-600 text-sm text-[#8c95a4] py-1 cursor-pointer flex items-center">
            <BiChevronRight /> Our Blog
          </span>
          <span className="hover:text-red-600 text-sm text-[#8c95a4] py-1 cursor-pointer flex items-center">
            <BiChevronRight /> Our History
          </span>
          <span className="hover:text-red-600 text-sm text-[#8c95a4] py-1 cursor-pointer flex items-center">
            <BiChevronRight /> Documentation
          </span>
          <span className="hover:text-red-600 text-sm text-[#8c95a4] py-1 cursor-pointer flex items-center">
            <BiChevronRight /> Environmental
          </span>
          <span className="hover:text-red-600 text-sm text-[#8c95a4] py-1 cursor-pointer flex items-center">
            <BiChevronRight /> Town Gallery
          </span>
          <span className="hover:text-red-600 text-sm text-[#8c95a4] py-1 cursor-pointer flex items-center">
            <BiChevronRight /> Department
          </span>
        </div>
      </div>

      <div className="container mx-auto -mt-[33vh] ml-[155vh]">
        <p className="text-white text-lg mt-8 font-bold">City News & Updates</p>
        <p className="text-sm text-[#8c95a4] py-3 pr-[10vh] ">
          The latest Harar Government <br/>Communication Affairs Office <br/>news, articles,
          and <br />
          resources, sent straight to your <br />
          inbox every month.
        </p>
        <div className="mt-4 ">
          <input
            className=" py-2 px-2 focus:outline-none"
            type="email"
            placeholder="Your Email"
          />
          <button className="uppercase 
           bg-red-500  text-white
           hover:bg-blue-600
            px-2 py-2 -ml-10">
            Subscribe
          </button>
        </div>
      </div>

      <div className='bg-[#06163a]  h-20  w-screen mt-[10vh]'>
        <p className="text-center pt-8 text-[#8c95a4] italic">
          © {new Date().getFullYear()} Harar Government 
            Communication Affairs Office. All rights reserved.
        </p>
      </div>

    </footer>
    </div>
  );
};

export default Footer;
