import React from 'react';
import './Explore.css';

const Explore = () => {
    return (
        <>
            <div className='block m-5 md:m-[150px] md:ms-[110px] p-5'>

                <div className='inline w-full'>
                    <div className="block text-center md:text-left">
                        <h3 className="text-2xl md:text-4xl font-bold text-slate-600 font-sans">
                            Let’s explore local services,
                        </h3>
                        <h3 className="text-2xl md:text-4xl font-bold text-slate-600 font-sans">
                            programs & initiatives.
                        </h3>
                    </div>
                    <div className="mt-4 text-center ">
                        <button className="bg-black text-xl md:text-2xl font-serif hover:bg-orange-700 text-white font-bold py-2 px-4 -me-10 rounded">
                            Explore Service
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid mx-5  mb-5 ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                    <div className='text-center image relative'>
                        <img className='' src="images/explore.jpg" alt="" />
                        <a href="" className='text-lg md:text-xl absolute -bottom-10 md:-bottom-20 text-white bg-black p-3 hover:shadow-lg left-20'>Service Departments</a>
                    </div>
                    <div className='text-center image relative'>
                        <img src="images/explore.jpg" alt="" />
                        <a href="" className='text-lg md:text-xl absolute -bottom-10 md:-bottom-20 text-white bg-black p-3 hover:shadow-lg left-20'>Service Departments</a>
                    </div>
                    <div className='text-center image relative'>
                        <img src="images/explore.jpg" alt="" />
                        <a href="" className='text-lg md:text-xl absolute -bottom-10 md:-bottom-20 text-white bg-black p-3 hover:shadow-lg left-20'>Service Departments</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Explore
