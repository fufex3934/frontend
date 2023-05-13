import React from 'react'
import { HiOutlinePhoneArrowDownLeft } from "react-icons/hi2"
import { BiAlarm } from "react-icons/bi"

const TopNav = () => {
    return (
        <div className='bg-gray-800 w-full flex p-2 max-[942px]:hidden'>
            <div className='float-left flex-auto ml-[100px] flex'>
                <a href='tel:+25164963831' className='text-white whitespace-nowrap transition ease-in-out delay-250 decoration-0 px-3 flex hover:drop-shadow-2xl hover:bg-white hover:rounded-full  hover:shadow-white-500/50  hover:text-blue-400 hover hover:translate-x-1 hover:-translate-y-1'> <HiOutlinePhoneArrowDownLeft className='text-green-500/100 mr-2  text-2xl' />Call on: 1800 123 4567</a>
                <span className='text-white whitespace-nowrap px-3 flex'><BiAlarm className="text-green-500/100 mr-1 text-2xl" />Open Hours: Mon - Fri 8.00 am - 6.00 pm</span>
            </div>
            <div className='float-right flex-auto ml-[300px]'>
                <a href="#" className='text-white decoration-0 px-5 hover:text-blue-400'>Council</a>
                <a href="#" className='text-white decoration-0 px-5 hover:text-blue-400'>Vacancies</a>
                <a href="#" className='text-white decoration-0 px-5 hover:text-blue-400'>Complaints</a>
            </div>
        </div>
    )
}

export default TopNav;