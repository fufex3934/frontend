import React from 'react'
import { RiFileTextFill } from 'react-icons/ri';
import { MdOutlineAlarm }from 'react-icons/md'
import { IoLocationOutline }from 'react-icons/io5'
import './css/UpcomingEvent.css'
const UpcomingEvent = () => {
  return (
    <div className='main-upcoming-event'>
        <div className='sub-main-upcoming-event-left'>
            <div className='text-top'>
                <div className='float-left'>
                    <h1>Upcoming Events</h1>
                </div>
                <div className='float-right'>
                    <a href="">See All Events &gt;</a>
                </div>
            </div>
            <div className='text-bottom'>
                  <div className='one'>
                    <div className=''>
                        <img src="images/explore.jpg" alt="" />
                    </div>
                    <div className='pt-4'>
                        <a href="" className='text-blue-600/100 text-lg'>Conference</a><br />
                    </div>
                    <div className='pt-2'>
                        <a href="" className='text-xl font-semibold'>The Strategically Build Your<br />Business</a>
                    </div>
                      <div className='pt-2 whitespace-nowrap flex text-center'>
                          <MdOutlineAlarm className='relative top-1' />
                          <span className='pl-2'>January 2, 2021 @ 15:00 - 19:00</span>
                      </div>
                      <div className='pt-2 whitespace-nowrap flex text-center'>
                          <IoLocationOutline className='relative top-1' />
                          <span className='pl-2'>32 Quincy Street, Cambridge, MA</span>
                      </div>
                    <div className="mt-8">
                        <a href="" className='hover:bg-red-500 hover:text-white'style={{border:'1px solid grey',padding:'10px'}}>More Details</a>
                    </div>
                </div>
                <div className='two'>
                    <div className=''>
                        <img src="images/explore.jpg" alt="" />
                    </div>
                    <div className='pt-4'>
                        <a href="" className='text-blue-600/100 text-lg'>Conference</a><br />
                    </div>
                    <div className='pt-2'>
                        <a href="" className='text-xl font-semibold'>The Strategically Build Your<br />Business</a>
                    </div>
                    <div className='pt-2 whitespace-nowrap flex text-center'>
                        <MdOutlineAlarm className='relative top-1'/>
                        <span className='pl-2'>January 2, 2021 @ 15:00 - 19:00</span>
                    </div>
                    <div className='pt-2 whitespace-nowrap flex text-center'>
                        <IoLocationOutline className='relative top-1'/>
                        <span className='pl-2'>32 Quincy Street, Cambridge, MA</span>
                    </div>
                    <div className="mt-8">
                        <a href="" className='hover:bg-red-500 hover:text-white' style={{ border: '1px solid grey', padding: '10px' }}>More Details</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='sub-main-upcoming-event-right'>
            <h1>City Document</h1>
            <div className='unnderline'>
                <div className='left-top-icon'>
                    <RiFileTextFill className='text-white text-6xl relative top-0 mx-auto text-center'/>
                </div>
                <div className='div-under-line'>
                  <a href="">Veichle Parking License</a><br />
                  <span>July 24, 2020</span>
                </div>
                <div className='div-under-line'>
                  <a href="">City Board Applications</a><br />
                  <span>July 24, 2020</span>
                </div>
                <div className='div-under-line'>
                  <a href="">Road Transport Forms</a><br />
                  <span>July 24, 2020</span>
                </div>
                <div className='div-under-line'>
                  <a href="">Economy Growth Report</a><br />
                  <span>July 24, 2020</span>
                </div>
                <div className='pt-8 ms-[70px] mb-5'>
                    <a href="" className='text-blue-600/100 hover:text-red-600'>More Documents &gt;</a>
                </div>
            </div>
        </div>
   </div>
  )
}

export default UpcomingEvent