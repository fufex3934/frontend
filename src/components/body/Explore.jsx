import React from 'react';
import './css/Explore.css';
import 'aos/dist/aos.css'

const Explore = () => {
   
    return (
        <>
            <div className='block ms-[150px] me-[150px] mt-[50px] p-5 main'>

                <div className='inline w-full sub-main'>
                    <div className="block text-start float-left sub-sub-main">
                        <h3 className="text-3xl  font-bold text-[#329898] font-serif" data-aos="zoom-out" data-aos-easing="linear" data-aos-duration="1500">
                            Let's Explore Local Services,
                        </h3>
                        <h3 className="text-3xl  font-bold text-[#329898] font-serif" data-aos="zoom-out" data-aos-easing="linear" data-aos-duration="1500">
                            Programs & Initiatives.
                        </h3>
                    </div>
                    <div className="text-center float-right mt-4 sub-sub-main1" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                        <button className="bg-[#329898] text-3xl font-serif hover:bg-[#ff0000] text-white  py-2 px-4 rounded-0">
                            Explore Service
                        </button>
                    </div>
                </div>
            </div>
            <div className="main2">
                <div className="sub-main-2">
                    <div className='text-center image relative' data-aos-duration="1000" data-aos="fade-up" data-aos-easing="linear">
                        <img  src="images/dept.jpg" alt="" />
                        <a href="" className='text-md md:text-sm lg:text-sm absolute bottom-15 text-white p-2 hover:shadow-lg left-7 whitespace-nowrap'>Service Departments</a>
                    </div>
                    <div className='text-center image relative' data-aos="fade-up"
                        data-aos-duration="1500">
                        <img src="images/visitor.jpg" alt="" />
                        <a href="" className='text-md md:text-lg lg:text-sm absolute bottom-15  text-white p-2 hover:shadow-lg left-20 whitespace-nowrap'>City Visitors Guide</a>
                    </div>
                    <div className='text-center image relative' data-aos-duration="1000" data-aos="fade-up" data-aos-easing="linear">
                        <img src="images/admin.jpg" alt="" />
                        <a href="" className='text-md md:text-lg lg:text-sm absolute bottom-15 text-white p-2 hover:shadow-lg left-20'>Administrations</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Explore;
