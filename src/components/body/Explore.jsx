import React from 'react';
import './Explore.css';
import 'aos/dist/aos.css'

const Explore = () => {
   
    return (
        <>
            <div className='block ms-[150px] me-[150px] mt-[50px] p-5 main'>

                <div className='inline w-full sub-main'>
                    <div className="block text-start float-left sub-sub-main">
                        <h3 className="text-3xl  font-bold text-slate-600 font-serif" data-aos="zoom-out" data-aos-easing="linear" data-aos-duration="1500">
                            Let’s Explore Local Services,
                        </h3>
                        <h3 className="text-3xl  font-bold text-slate-600 font-serif" data-aos="zoom-out" data-aos-easing="linear" data-aos-duration="1500">
                            Programs & Initiatives.
                        </h3>
                    </div>
                    <div className="text-center float-right mt-4 sub-sub-main1" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                        <button class="bg-black text-3xl font-serif hover:bg-orange-700 text-white  py-2 px-4 rounded-0">
                            Explore Service
                        </button>
                    </div>
                </div>
            </div>
            <div class="main2">
                <div class="sub-main-2">
                    <div className='text-center image relative' data-aos-duration="1000" data-aos="fade-up" data-aos-easing="linear">
                        <img className='' src="images/explore.jpg" alt="" />
                        <a href="" className='text-lg md:text-xl absolute -bottom-10 text-white p-3 hover:shadow-lg left-20'>Service Departments</a>
                    </div>
                    <div className='text-center image relative' data-aos="fade-up"
                        data-aos-duration="1500">
                        <img src="images/explore.jpg" alt="" />
                        <a href="" className='text-lg md:text-xl absolute -bottom-10  text-white p-3 hover:shadow-lg left-20'>City Visitors Guide</a>
                    </div>
                    <div className='text-center image relative' data-aos-duration="1000" data-aos="fade-up" data-aos-easing="linear">
                        <img src="images/explore.jpg" alt="" />
                        <a href="" className='text-lg md:text-xl absolute -bottom-10 text-white p-3 hover:shadow-lg left-20'>Administrations</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Explore;
