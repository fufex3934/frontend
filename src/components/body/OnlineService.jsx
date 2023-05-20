import React, { useState } from 'react';
import { BiChevronRight, BiRightArrowAlt } from 'react-icons/bi';
import './css/OnlineService.css';

const OnlineService = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  const renderIcon = (index) => {
    if (hoveredIndex === index) {
      return <BiRightArrowAlt className="ml-24 mt-auto" />;
    } else {
      return <BiChevronRight className="ml-24 mt-auto" />;
    }
  };

  return (
    <div className="bg-[#08143c] h-80 w-screen ">
      <div className="px-10 py-16  ">
        <p className="text-white text-3xl font-bold ">
          Explore Online <br />
          Services & Resource
        </p>
        <p className="text-slate-400 pt-4">
          City government providing a wide range of online<br />
          services to people who need help
        </p>
      </div>
      <div className="flex relative -top-44  h-80 w-[120vh] float-right mr-12 drop-shadow-2xl">
        {/* left div */}
        <div className="bg-white h-80 w-[60vh] py-10 px-8">
          <span
            className={`flex text-slate-700 whitespace-nowrap hover:text-red-500 hover:shadow-sm py-3 border-b-[1px] hover:cursor-pointer text-sm font-medium`}
            onMouseEnter={() => handleHover(0)}
            onMouseLeave={handleLeave}
          >
            Parking Permission
            <span className={`icon-transition ${hoveredIndex === 0 ? 'animate-icon' : ''}`}>{renderIcon(0)}</span>
          </span>
          <span
            className={`flex text-slate-700 whitespace-nowrap hover:text-red-500 hover:shadow-sm py-3 border-b-[1px] hover:cursor-pointer text-sm font-medium`}
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={handleLeave}
          >
            File a tax Return
            <span className={`ml-4 icon-transition ${hoveredIndex === 1 ? 'animate-icon' : ''}`}>{renderIcon(1)}</span>
          </span>
          <span
            className={`flex text-slate-700 whitespace-nowrap hover:text-red-500 hover:shadow-sm py-3 border-b-[1px] hover:cursor-pointer text-sm font-medium`}
            onMouseEnter={() => handleHover(2)}
            onMouseLeave={handleLeave}
          >
            Order Birth certificate
            <span className={`-ml-5 icon-transition ${hoveredIndex === 2 ? 'animate-icon' : ''}`}>{renderIcon(2)}</span>
          </span>
          <span
            className={`flex text-slate-700 whitespace-nowrap hover:text-red-500 hover:shadow-sm py-3 border-b-[1px] hover:cursor-pointer text-sm font-medium`}
            onMouseEnter={() => handleHover(3)}
            onMouseLeave={handleLeave}
          >
            Get building Permission
            <span className={`-ml-8 icon-transition ${hoveredIndex === 3 ? 'animate-icon' : ''}`}>{renderIcon(3)}</span>
          </span>
          <span
            className={`flex text-slate-700 whitespace-nowrap hover:text-red-500 hover:shadow-sm py-3 border-b-[1px] hover:cursor-pointer text-sm font-medium`}
            onMouseEnter={() => handleHover(4)}
            onMouseLeave={handleLeave}
          >
            Apply for Driving License
            <span className={`-ml-10 icon-transition ${hoveredIndex === 4 ? 'animate-icon' : ''}`}>{renderIcon(4)}</span>
          </span>
          <span
            className={`flex text-slate-700 whitespace-nowrap hover:text-red-500 hover:shadow-sm py-3  hover:cursor-pointer text-sm font-medium`}
            onMouseEnter={() => handleHover(5)}
            onMouseLeave={handleLeave}
          >
            Report Pollution
            <span className={`ml-4 pb-5 icon-transition ${hoveredIndex === 5 ? 'animate-icon' : ''}`}>{renderIcon(5)}</span>
          </span>
        </div>
        {/* right div  */}
        <div className="bg-red-500 h-80 w-[60vh] py-10 px-4">
        <span
            className={`flex text-white 
            whitespace-nowrap hover:text-slate-700
             hover:shadow-sm py-3 border-b-[1px]
             hover:bg-white px-3 border-white/40
              hover:cursor-pointer text-sm font-medium`}
            onMouseEnter={() => handleHover(0)}
            onMouseLeave={handleLeave}
          >
            Parking Permission
            <span className={`icon-transition ${hoveredIndex === 0 ? 'animate-icon' : ''}`}>{renderIcon(0)}</span>
          </span>
          <span
            className={`flex text-white 
            whitespace-nowrap hover:text-slate-700
             hover:shadow-sm py-3 border-b-[1px]
             hover:bg-white px-3 border-white/40
              hover:cursor-pointer text-sm font-medium`}
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={handleLeave}
          >
            File a tax Return
            <span className={`ml-4 icon-transition ${hoveredIndex === 1 ? 'animate-icon' : ''}`}>{renderIcon(1)}</span>
          </span>
          <span
            className={`flex text-white 
            whitespace-nowrap hover:text-slate-700
             hover:shadow-sm py-3 border-b-[1px]
             hover:bg-white px-3 border-white/40
              hover:cursor-pointer text-sm font-medium`}
            onMouseEnter={() => handleHover(2)}
            onMouseLeave={handleLeave}
          >
            Order Birth certificate
            <span className={`-ml-5 icon-transition ${hoveredIndex === 2 ? 'animate-icon' : ''}`}>{renderIcon(2)}</span>
          </span>
          <span
            className={`flex text-white 
            whitespace-nowrap hover:text-slate-700
             hover:shadow-sm py-3 border-b-[1px]
             hover:bg-white px-3 border-white/40
              hover:cursor-pointer text-sm font-medium`}
            onMouseEnter={() => handleHover(3)}
            onMouseLeave={handleLeave}
          >
            Get building Permission
            <span className={`-ml-8 icon-transition ${hoveredIndex === 3 ? 'animate-icon' : ''}`}>{renderIcon(3)}</span>
          </span>
          <span
            className={`flex text-white 
            whitespace-nowrap hover:text-slate-700
             hover:shadow-sm py-3 border-b-[1px]
             hover:bg-white px-3 border-white/40
              hover:cursor-pointer text-sm font-medium`}
            onMouseEnter={() => handleHover(4)}
            onMouseLeave={handleLeave}
          >
            Apply for Driving License
            <span className={`-ml-10 icon-transition ${hoveredIndex === 4 ? 'animate-icon' : ''}`}>{renderIcon(4)}</span>
          </span>
          <span
            className={`flex text-white 
            whitespace-nowrap hover:text-slate-700
             hover:shadow-sm py-3
             hover:bg-white px-3
              hover:cursor-pointer text-sm font-medium`}
            onMouseEnter={() => handleHover(5)}
            onMouseLeave={handleLeave}
          >
            Report Pollution
            <span className={`ml-4  icon-transition ${hoveredIndex === 5 ? 'animate-icon' : ''}`}>{renderIcon(5)}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OnlineService;
