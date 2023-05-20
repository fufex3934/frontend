import React from 'react';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
const MiddleNav = () => {
  return (
    <div className='flex bg-[#164e63] h-20 relative'>
           <a href="#">
                <img
                  className="h-32 md:h-10 w-32  md:w-10 rounded-full ml-6 mt-4"
                  src="./harar.png"
                  alt="Logo"
                />
              </a>     
                <h1 className='uppercase ml-14 text-white 
                mt-6 font-semibold font-serif text-sm '>
                    Harar Government Communications Affairs Office
                    </h1>
                   <div className='flex justify-evenly absolute right-8'>
                   <a href="">
                    < FaFacebookSquare className='h-6 w-6 mr-4 mt-8 text-[#3b82f6] hover:text-orange-500'/>
                        </a>  
                        <a href="">
                    < FaTwitterSquare className='h-6 w-6 mt-8 mr-4 text-[#06b6d4] hover:text-orange-500'/>
                        </a>  
                        <a href="">
                    < FaYoutube className='h-6 w-6 mt-8 text-[#dc2626] hover:text-orange-500'/>
                        </a>
                    </div>  
                    
                         
                                
    </div>
  )
}

export default MiddleNav;
