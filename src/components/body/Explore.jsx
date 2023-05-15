import React from 'react';
import './Explore.css';

const Explore = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-start mx-5 my-10'>
        <div className='text-left'>
          <h3 className='text-3xl font-bold text-slate-700 font-sans'>
            Let’s explore local services,
          </h3>
          <h3 className='text-3xl font-bold text-slate-700 font-sans'>
            programs & initiatives.
          </h3>
        </div>
        <div className='mt-8'>
          <button className='bg-slate-700 text-2xl font-serif hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105'>
            Explore Service
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 m-5 p-5'>
        <div className='text-center'>
          <div className='image relative'>
            <img className='image-img' src='images/explore.jpg' alt='' />
            <a
              href=''
              className='text-xl mt-2 block text-white bg-black p-3 hover:shadow-lg transform hover:translate-y-2 transition duration-300 ease-in-out'
            >
              Service Departments
            </a>
          </div>
        </div>
        <div className='text-center'>
          <div className='image relative'>
            <img src='images/explore.jpg' alt='' />
            <a
              href=''
              className='text-xl mt-2 block text-white bg-black p-3 hover:shadow-lg transform hover:translate-y-2 transition duration-300 ease-in-out'
            >
              Service Departments
            </a>
          </div>
        </div>
        <div className='text-center'>
          <div className='image relative'>
            <img src='images/explore.jpg' alt='' />
            <a
              href=''
              className='text-xl mt-2 block text-white bg-black p-3 hover:shadow-lg transform hover:translate-y-2 transition duration-300 ease-in-out'
            >
              Service Departments
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
