import React, { useState } from 'react';
import { BiChevronRight, BiRightArrowAlt } from 'react-icons/bi';
import './css/OnlineService.css';

const OnlineService = () => {
  const [leftHoveredIndex, setLeftHoveredIndex] = useState(null);
  const [rightHoveredIndex, setRightHoveredIndex] = useState(null);

  const handleLeftHover = (index) => {
    setLeftHoveredIndex(index);
  };

  const handleRightHover = (index) => {
    setRightHoveredIndex(index);
  };

  const handleLeave = () => {
    setLeftHoveredIndex(null);
    setRightHoveredIndex(null);
  };

  const renderLeftIcon = (index) => {
    if (leftHoveredIndex === index) {
      return <BiRightArrowAlt className="ml-24 mt-auto" />;
    } else {
      return <BiChevronRight className="ml-24 mt-auto" />;
    }
  };

  const renderRightIcon = (index) => {
    if (rightHoveredIndex === index) {
      return <BiRightArrowAlt className="ml-24 mt-auto" />;
    } else {
      return <BiChevronRight className="ml-24 mt-auto" />;
    }
  };

  return (
    <div className="bg-[#08143c]   md:h-[50vh] lg:h-[70vh] w-full mt-2 mb-[10vh] md:mb-[35vh] drop-shadow-2xl">
              <div className="px-6 sm:px-10 py-8 sm:py-16">
                <p className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                  Explore Online <br />
                  Services & Resources
                </p>
                <p className="text-slate-400 pt-4">
                  City government providing a wide range of online<br />
                  services to people who need help
                </p>
              </div>
    <div className="flex flex-col md:flex-row lg:ml-auto relative lg:-top-48 lg:w-[120vh] md:mr-20 ">
      {/* Left div */}
     <div className="bg-white sm:h-80 md:h-[35vh] lg:h-[70vh] sm:w-[60vh] md:w-[60vh] py-6 px-4 sm:py-10   mb-4 md:mb-0 md:mx-0  md:ml-8 mobile-margin ">
            <span
                className={`flex text-slate-700 whitespace-nowrap hover:text-red-500 hover:shadow-sm py-3 border-b-[1px] hover:cursor-pointer text-sm font-medium`}
                onMouseEnter={() => handleLeftHover(0)}
                onMouseLeave={handleLeave}
              >
                Parking Permission
                <span className={`ml-1 icon-transition ${leftHoveredIndex === 0 ? 'animate-icon' : ''}`}>{renderLeftIcon(0)}</span>
              </span>
              <span
                className={`flex text-slate-700 whitespace-nowrap hover:text-red-500 hover:shadow-sm py-3 border-b-[1px] hover:cursor-pointer text-sm font-medium`}
                onMouseEnter={() => handleLeftHover(1)}
                onMouseLeave={handleLeave}
              >
                File a tax Return
                <span className={`ml-5 icon-transition ${leftHoveredIndex === 1 ? 'animate-icon' : ''}`}>{renderLeftIcon(1)}</span>
              </span>
              <span
                className={`flex text-slate-700 whitespace-nowrap hover:text-red-500 hover:shadow-sm py-3 border-b-[1px] hover:cursor-pointer text-sm font-medium`}
                onMouseEnter={() => handleLeftHover(2)}
                onMouseLeave={handleLeave}
              >
                Order Birth certificate
                <span className={`-ml-4 icon-transition ${leftHoveredIndex === 2 ? 'animate-icon' : ''}`}>{renderLeftIcon(2)}</span>
              </span>
              <span
                className={`flex text-slate-700 whitespace-nowrap hover:text-red-500 hover:shadow-sm py-3 border-b-[1px] hover:cursor-pointer text-sm font-medium`}
                onMouseEnter={() => handleLeftHover(3)}
                onMouseLeave={handleLeave}
              >
                Get Building Permission
                <span className={`-ml-8 icon-transition ${leftHoveredIndex === 3 ? 'animate-icon' : ''}`}>{renderLeftIcon(3)}</span>
              </span>
              <span
                className={`flex text-slate-700 whitespace-nowrap hover:text-red-500 hover:shadow-sm py-3 border-b-[1px] hover:cursor-pointer text-sm font-medium`}
                onMouseEnter={() => handleLeftHover(4)}
                onMouseLeave={handleLeave}
              >
                Apply for Driving License
                <span className={`-ml-10 icon-transition ${leftHoveredIndex === 4 ? 'animate-icon' : ''}`}>{renderLeftIcon(4)}</span>
              </span>
              <span
                className={`flex text-slate-700 whitespace-nowrap hover:text-red-500 hover:shadow-sm py-3  hover:cursor-pointer text-sm font-medium`}
                onMouseEnter={() => handleLeftHover(5)}
                onMouseLeave={handleLeave}
              >
                Report Pollution
                <span className={`ml-4 icon-transition ${leftHoveredIndex === 5 ? 'animate-icon' : ''}`}>{renderLeftIcon(5)}</span>
              </span>
      </div>
      {/* Right div */}
      <div className="bg-[#065f46] sm:h-80 md:h-[35vh] lg:h-[70vh] sm:w-[60vh] md:w-[60vh] py-6 sm:py-10 px-4  mb-12 md:mb-0 md:mx-0 md:mr-8 mobile-margin">
                   <span 
                        className={`flex text-white whitespace-nowrap hover:text-slate-700 hover:shadow-sm py-3  border-b-[1px] hover:bg-white px-3 border-white/40 hover:cursor-pointer text-sm font-medium`}
                        onMouseEnter={() => handleRightHover(0)}
                        onMouseLeave={handleLeave}
                      >
                        Public Service Identity
                        <span className={`ml-1 icon-transition ${rightHoveredIndex === 0 ? 'animate-icon' : ''}`}>{renderRightIcon(0)}</span>
                      </span>
                      <span
                        className={`flex text-white whitespace-nowrap hover:text-slate-700 hover:shadow-sm py-3 border-b-[1px] hover:bg-white px-3 border-white/40 hover:cursor-pointer text-sm font-medium`}
                        onMouseEnter={() => handleRightHover(1)}
                        onMouseLeave={handleLeave}
                      >
                        Apply for City Job
                        <span className={`ml-7 icon-transition ${rightHoveredIndex === 1 ? 'animate-icon' : ''}`}>{renderRightIcon(1)}</span>
                      </span>
                      <span
                        className={`flex text-white whitespace-nowrap hover:text-slate-700 hover:shadow-sm py-3 border-b-[1px] hover:bg-white px-3 border-white/40 hover:cursor-pointer text-sm font-medium`}
                        onMouseEnter={() => handleRightHover(2)}
                        onMouseLeave={handleLeave}
                      >
                        Professional Licenses
                        <span className={`ml-2 icon-transition ${rightHoveredIndex === 2 ? 'animate-icon' : ''}`}>{renderRightIcon(2)}</span>
                      </span>
                      <span
                        className={`flex text-white whitespace-nowrap hover:text-slate-700 hover:shadow-sm py-3 border-b-[1px] hover:bg-white px-3 border-white/40 hover:cursor-pointer text-sm font-medium`}
                        onMouseEnter={() => handleRightHover(3)}
                        onMouseLeave={handleLeave}
                      >
                        National Planning Framework
                        <span className={`-ml-12 icon-transition ${rightHoveredIndex === 3 ? 'animate-icon' : ''}`}>{renderRightIcon(3)}</span>
                      </span>
                      <span
                        className={`flex text-white whitespace-nowrap hover:text-slate-700 hover:shadow-sm py-3 border-b-[1px] hover:bg-white px-3 border-white/40 hover:cursor-pointer text-sm font-medium`}
                        onMouseEnter={() => handleRightHover(4)}
                        onMouseLeave={handleLeave}
                      >
                        Apply for Business Licenses
                        <span className={`-ml-9 icon-transition ${rightHoveredIndex === 4 ? 'animate-icon' : ''}`}>{renderRightIcon(4)}</span>
                      </span>
                      <span
                        className={`flex text-white whitespace-nowrap hover:text-slate-700 hover:shadow-sm py-3  hover:bg-white px-3 border-white/40 hover:cursor-pointer text-sm font-medium`}
                        onMouseEnter={() => handleRightHover(5)}
                        onMouseLeave={handleLeave}
                      >
                        Online Court Services
                        <span className={`ml-1 icon-transition ${rightHoveredIndex === 5 ? 'animate-icon' : ''}`}>{renderRightIcon(5)}</span>
                      </span>
              </div>
        </div> 
     </div>
  

  );
};

export default OnlineService;
