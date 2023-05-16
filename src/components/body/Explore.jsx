import React from 'react';
import './Explore.css';
import 'aos/dist/aos.css'

const Explore = () => {
   
    return (
        <>
            <div className='block m-[150px] ms-[110px] p-5'>

                <div className='inline w-full'>
                    <div className="block float-left">
                        <h3 className="h3 text-4xl font-bold text-slate-600 font-sans">
                            Let’s explore local services,
                        </h3>
                        <h3 className="text-4xl font-bold text-slate-600 font-sans">
                            programs & initiatives.
                        </h3>
                    </div>
                    <div className="float-right mt-8">
                        <button class="bg-black text-2xl hover:bg-red-500 font-normal font-serif rounded-none hover:bg-blue-700 text-white font-bold py-2 px-4 -me-10 rounded">
                            Explore Service
                        </button>
                    </div>
                </div>
            </div>
            <div class="grid mx-[150px] mb-[100px]">
                <div class="h-[200px] grid grid-rows-1 grid-flow-col gap-5 mb-8">
                    <div className='text-center image relative' data-aos-duration="1000" data-aos="fade-right" data-aos-easing="linear">
                        <img className='' src="images/explore.jpg" alt="" />
                        <a href="" className='text-xl absolute -bottom-20 text-white bg-black p-3 hover:shadow-lg left-20'>Service Departments</a>
                    </div>
                    <div className='text-center image relative' data-aos="zoom-in"
                        data-aos-duration="1500">
                        <img src="images/explore.jpg" alt="" />
                        <a href="" className='text-xl absolute -bottom-20 text-white bg-black p-3 hover:shadow-lg left-20'>Service Departments</a>
                    </div>
                    <div className='text-center image relative' data-aos-duration="1000" data-aos="fade-left" data-aos-easing="linear">
                        <img src="images/explore.jpg" alt="" />
                        <a href="" className='text-xl absolute -bottom-20 text-white bg-black p-3 hover:shadow-lg left-20'>Service Departments</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Explore;