import React from 'react';
const MiddleNav = () => {
  return (
    <div className=' hidden md:hidden lg:flex bg-[#329898] h-20 relative'>
                    <a href="/">
                    <img
                      className="h-16 w-16  ml-6 mt-2 rounded-full"
                      src="/harar.png"
                      alt="Logo"
                    />
                  </a>
    
                <h1 className='uppercase ml-6 text-white 
                mt-6 font-semibold font-serif text-lg '>
                    Harar Government Communications Affairs Office
                    </h1>
                   <div className='flex justify-evenly absolute right-8'>
                                    <a href="#">
                    <img
                      className="h-32 md:h-10 w-72 md:w-20 ml-6 mt-4"
                      src="images/har.png"
                      alt="Logo"
                    />
                  </a>

                    </div>                                                                       
    </div>
  )
}

export default MiddleNav;
