import React, { useState } from 'react';
import { FaFacebook, FaTwitter,FaPhoneAlt,
   FaLinkedin, FaInstagram } from 'react-icons/fa';

import { AiOutlineMail } from 'react-icons/ai';

const CityCouncil = () => {
  const [hoveredIndexes, setHoveredIndexes] = useState([]);

  const handleMouseEnter = (index) => {
    setHoveredIndexes((prevIndexes) => [...prevIndexes, index]);
  };

  const handleMouseLeave = (index) => {
    setHoveredIndexes((prevIndexes) => prevIndexes.filter((i) => i !== index));
  };

  return (
    <div className='bg-[#f8f5f4] h-[110vh] w-screen mt-48'>
      <p className='text-[#202b5d] ml-[90vh] text-2xl font-extrabold font-serif whitespace-nowrap pt-24'>
        Meet City Council
      </p>
      <p className='ml-[67vh] text-slate-400'>
        The city council has the real superpowers as administration to lead the country.
      </p>
      <div className='grid grid-cols-4 gap-8 mx-8 mt-8'>
        <div
          className='shadow relative'
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
        >
          <img
            className='cursor-pointer'
            src='/images/8.png'
            alt='Administrator 1'
          />
          {hoveredIndexes.includes(0) && (
            <div className='absolute top-44 left-0 w-full flex justify-center items-end transition-opacity duration-300'>
              <div className='bg-white rounded-s-full rounded-e-full border border-gray-400 p-2 flex items-center'>
                <a href='https://www.facebook.com/' className='mr-2'>
                  <FaFacebook className='text-gray-500 hover:text-orange-500' />
                </a>
                <div className='border-l border-gray-400'></div>
                <a href='https://www.twitter.com/' className='mx-2'>
                  <FaTwitter className='text-gray-500 hover:text-orange-500' />
                </a>
                <div className='border-l border-gray-400'></div>
                <a href='https://www.linkedin.com/' className='mx-2'>
                  <FaLinkedin className='text-gray-500 hover:text-orange-500' />
                </a>
                <div className='border-l border-gray-400'></div>
                <a href='https://www.instagram.com/' className='mx-2'>
                  <FaInstagram className='text-gray-500 hover:text-orange-500' />
                </a>
              </div>
            </div>
          )}
          <div className='p-4 bg-white'>
            <p className='text-lg font-bold hover:text-red-500 cursor-pointer text-[#202b5d] opacity-90'>Muktar Kedir</p>
            <p className='text-sm text-blue-500 pb-5'>Councilor, District 3</p>
            <p className='text-sm text-gray-500 flex mb-2'>
              <AiOutlineMail className='mr-2 mt-1' />
              <span className='hover:text-red-500 cursor-pointer'>admin1@example.com</span>
            </p>
            <p className='text-sm text-gray-500 flex'>
              <FaPhoneAlt className='mr-2 mt-0.5' />
              <span className='hover:text-red-500 cursor-pointer'>+1 123-456-7890</span>
            </p>
          </div>
        </div>
        <div
          className='shadow relative'
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
        >
          <img
            className='cursor-pointer'
            src='/images/7.png'
            alt='Administrator 2'
          />
          {hoveredIndexes.includes(1) && (
            <div className='absolute top-44 left-0 w-full flex justify-center items-end transition-opacity duration-300'>
              <div className='bg-white rounded-s-full rounded-e-full border border-gray-400 p-2 flex items-center'>
                <a href='https://www.facebook.com/' className='mr-2'>
                  <FaFacebook className='text-gray-500 hover:text-orange-500' />
                </a>
                <div className='border-l border-gray-400'></div>
                <a href='https://www.twitter.com/' className='mx-2'>
                  <FaTwitter className='text-gray-500 hover:text-orange-500' />
                </a>
                <div className='border-l border-gray-400'></div>
                <a href='https://www.linkedin.com/' className='mx-2'>
                  <FaLinkedin className='text-gray-500 hover:text-orange-500' />
                </a>
                <div className='border-l border-gray-400'></div>
                <a href='https://www.instagram.com/' className='mx-2'>
                  <FaInstagram className='text-gray-500 hover:text-orange-500' />
                </a>
              </div>
            </div>
          )}
          <div className='p-4 bg-white'>
            <p className='text-lg font-bold hover:text-red-500 cursor-pointer text-[#202b5d] opacity-90'>Abiy Ahmed</p>
            <p className='text-sm text-blue-500 pb-5'>Councilor, District 1</p>
            <p className='text-sm text-gray-500 flex mb-2'>
              <AiOutlineMail className='mr-2 mt-1' />
              <span className='hover:text-red-500 cursor-pointer'>admin2@example.com</span>
            </p>
            <p className='text-sm text-gray-500 flex'>
              <FaPhoneAlt className='mr-2 mt-0.5' />
              <span className='hover:text-red-500 cursor-pointer'>+1 987-654-3210</span>
            </p>
          </div>
        </div>
        <div
          className='shadow relative'
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
        >
          <img
            className='cursor-pointer'
            src='/images/6.png'
            alt='Administrator 3'
          />
          {hoveredIndexes.includes(2) && (
            <div className='absolute top-44 left-0 w-full flex justify-center items-end transition-opacity duration-300'>
              <div className='bg-white rounded-s-full rounded-e-full border border-gray-400 p-2 flex items-center'>
                <a href='https://www.facebook.com/' className='mr-2'>
                  <FaFacebook className='text-gray-500 hover:text-orange-500' />
                </a>
                <div className='border-l border-gray-400'></div>
                <a href='https://www.twitter.com/' className='mx-2'>
                  <FaTwitter className='text-gray-500 hover:text-orange-500' />
                </a>
                <div className='border-l border-gray-400'></div>
                <a href='https://www.linkedin.com/' className='mx-2'>
                  <FaLinkedin className='text-gray-500 hover:text-orange-500' />
                </a>
                <div className='border-l border-gray-400'></div>
                <a href='https://www.instagram.com/' className='mx-2'>
                  <FaInstagram className='text-gray-500 hover:text-orange-500' />
                </a>
              </div>
            </div>
          )}
          <div className='p-4 bg-white'>
            <p className='text-lg font-bold hover:text-red-500 cursor-pointer text-[#202b5d] opacity-90'>Adanech Abebe</p>
            <p className='text-sm text-blue-500 pb-5'>Councilor, District 2</p>
            <p className='text-sm text-gray-500 flex mb-2'>
              <AiOutlineMail className='mr-2 mt-1' />
              <span className='hover:text-red-500 cursor-pointer'>admin3@example.com</span>
            </p>
            <p className='text-sm text-gray-500 flex'>
              <FaPhoneAlt className='mr-2 mt-0.5' />
              <span className='hover:text-red-500 cursor-pointer'>+1 555-123-4567</span>
            </p>
          </div>
        </div>
        <div
          className='shadow relative'
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
        >
          <img
            className='cursor-pointer'
            src='/images/single-1.jpg'
            alt='Administrator 4'
          />
          {hoveredIndexes.includes(3) && (
            <div className='absolute top-44 left-0 w-full flex justify-center items-end transition-opacity duration-300'>
              <div className='bg-white rounded-s-full rounded-e-full border border-gray-400 p-2 flex items-center'>
                <a href='https://www.facebook.com/' className='mr-2'>
                  <FaFacebook className='text-gray-500 hover:text-orange-500' />
                </a>
                <div className='border-l border-gray-400'></div>
                <a href='https://www.twitter.com/' className='mx-2'>
                  <FaTwitter className='text-gray-500 hover:text-orange-500' />
                </a>
                <div className='border-l border-gray-400'></div>
                <a href='https://www.linkedin.com/' className='mx-2'>
                  <FaLinkedin className='text-gray-500 hover:text-orange-500' />
                </a>
                <div className='border-l border-gray-400'></div>
                <a href='https://www.instagram.com/' className='mx-2'>
                  <FaInstagram className='text-gray-500 hover:text-orange-500' />
                </a>
              </div>
            </div>
          )}
          <div className='p-4 bg-white'>
            <p className='text-lg font-bold hover:text-red-500 cursor-pointer text-[#202b5d] opacity-90'>Lema Megarsa</p>
            <p className='text-sm text-blue-500 pb-5'>Councilor, District 4</p>
            <p className='text-sm text-gray-500 flex mb-2'>
              <AiOutlineMail className='mr-2 mt-1' />
              <span className='hover:text-red-500 cursor-pointer'>admin4@example.com</span>
            </p>
            <p className='text-sm text-gray-500 flex'>
              <FaPhoneAlt className='mr-2 mt-0.5' />
              <span className='hover:text-red-500 cursor-pointer'>+1 333-999-8888</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityCouncil;
