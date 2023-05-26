import React from 'react';
import { HiOutlinePhone } from 'react-icons/hi';
import { FiMail } from 'react-icons/fi';
import { BiChevronRight, BiAlarm } from 'react-icons/bi';
import { FaTwitter, FaInstagram, FaYoutube, FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#132244]">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex py-4 md:py-0">
            <span className="text-slate-300 text-sm mx-3 cursor-pointer hover:text-red-500 whitespace-nowrap">
              About Us
            </span>
            <span className="text-slate-300 text-sm mx-3 cursor-pointer hover:text-red-500">
              Services
            </span>
            <span className="text-slate-300 text-sm mx-3 cursor-pointer hover:text-red-500">
              Events
            </span>
            <span className="text-slate-300 text-sm mx-3 cursor-pointer hover:text-red-500">
              News
            </span>
            <span className="text-slate-300 text-sm mx-3 cursor-pointer hover:text-red-500">
              Contact
            </span>
          </div>

          <div className="flex mt-4 md:mt-0">
            <p className="text-slate-300 text-sm">Connect With Us</p>
            <span className="ml-6 -mt-1 mr-2">
              <FaFacebookSquare className="rounded-full bg-white p-2 w-8 h-8 hover:bg-orange-600 cursor-pointer hover:text-white" />
            </span>
            <span className="ml-1 -mt-1 mr-2">
              <FaTwitter className="rounded-full bg-white p-2 w-8 h-8 hover:bg-orange-600 cursor-pointer hover:text-white" />
            </span>
            <span className="ml-1 -mt-1 mr-2">
              <FaInstagram className="rounded-full bg-white p-2 w-8 h-8 hover:bg-orange-600 cursor-pointer hover:text-white" />
            </span>
            <span className="ml-1 -mt-1">
              <FaYoutube className="rounded-full bg-white p-2 w-8 h-8 hover:bg-orange-600 cursor-pointer hover:text-white" />
            </span>
          </div>
        </div>

        <hr className="border-b border-gray-700 mt-6" />

        <footer className="container mx-auto py-8">
          <div className="flex items-center">
            <a href="#">
              <img className="h-12 w-12 rounded-full" src="./harar.png" alt="Logo" />
            </a>
            <a href="#">
              <h1 className="text-slate-300 text-base ml-2 font-bold md:text-sm">
                Harar Government<br /> Communication Affairs Office
              </h1>
            </a>
          </div>
          <p className="text-slate-500 text-sm mt-2 py-2">95 FF3, App Street Avenue<br />NSW 96209, Canada</p>
          <div className="flex items-center mt-1">
            <BiAlarm className="text-slate-500 mr-2" />
            <span className="text-white">Opening Hours:</span>
            <span className="ml-2 text-slate-500">Mon - Fri 8.00 am - 6.00 pm</span>
          </div>
          <div className="relative my-2 flex items-center">
            <HiOutlinePhone className="text-slate-500" />
            <span className="text-white ml-4">Phone:</span>
            <span className="ml-2 text-slate-500 hover:text-red-600 cursor-pointer">
              1800 123 4567
            </span>
          </div>
          <div className="relative my-2 flex items-center">
            <FiMail className="text-slate-500" />
            <span className="text-white ml-4">Email:</span>
            <span className="ml-2 text-slate-500 hover:text-red-600 cursor-pointer">
              harar@gmail.com
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div>
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

            <div>
              <p className="text-white text-lg font-bold">Useful Links</p>
              <div className="py-3">
                <span className="text-slate-500 text-sm py-1 cursor-pointer flex items-center hover:text-red-600">
                  <BiChevronRight /> Our Blog
                </span>
                <span className="text-slate-500 text-sm py-1 cursor-pointer flex items-center hover:text-red-600">
                  <BiChevronRight /> Our History
                </span>
                <span className="text-slate-500 text-sm py-1 cursor-pointer flex items-center hover:text-red-600">
                  <BiChevronRight /> Documentation
                </span>
                <span className="text-slate-500 text-sm py-1 cursor-pointer flex items-center hover:text-red-600">
                  <BiChevronRight /> Environmental
                </span>
                <span className="text-slate-500 text-sm py-1 cursor-pointer flex items-center hover:text-red-600">
                  <BiChevronRight /> Town Gallery
                </span>
                <span className="text-slate-500 text-sm py-1 cursor-pointer flex items-center hover:text-red-600">
                  <BiChevronRight /> Department
                </span>
              </div>
            </div>

            <div>
              <p className="text-white text-lg font-bold">City News & Updates</p>
              <p className="text-slate-500 text-sm py-3">
                The latest Harar Government Communication Affairs Office news, articles, and resources, sent straight to your inbox every month.
              </p>
              <div className="flex">
                <input
                  className="py-2 px-2 focus:outline-none"
                  type="email"
                  placeholder="Your Email"
                />
                <button className="uppercase bg-red-500 text-white hover:bg-blue-600 px-2 py-2 -ml-10">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#06163a] h-20 w-full mt-10">
            <p className="text-center pt-8 text-slate-500 italic">
              © {new Date().getFullYear()} Harar Government Communication Affairs Office. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
