import React, { useEffect, useState, useRef } from 'react';

const HararData = () => {
  const [scrollNumbers, setScrollNumbers] = useState([0, 0, 0, 0]);
  const [animationFrameIds, setAnimationFrameIds] = useState([null, null, null, null]);
  const incrementSpeeds = [20, 30, 40, 50]; // Adjust the increment speeds for each column as desired
  const prevScrollPosition = useRef(0);

  useEffect(() => {
    const increaseNumber = (index) => {
      const maxNumber = 100; // Maximum number to display
      const increment = incrementSpeeds[index] / 100;

      setScrollNumbers((prevNumbers) => {
        const updatedNumbers = [...prevNumbers];
        updatedNumbers[index] += increment;

        if (updatedNumbers[index] >= maxNumber) {
          updatedNumbers[index] = maxNumber; // Stop increasing once the maximum number is reached
          cancelAnimationFrame(animationFrameIds[index]);
          setAnimationFrameIds((prevIds) => {
            const updatedIds = [...prevIds];
            updatedIds[index] = null;
            return updatedIds;
          });
        }

        return updatedNumbers;
      });

      if (scrollNumbers[index] < maxNumber) {
        setAnimationFrameIds((prevIds) => {
          const updatedIds = [...prevIds];
          updatedIds[index] = requestAnimationFrame(() => increaseNumber(index));
          return updatedIds;
        });
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerHeight = document.getElementById('increased-number-component').offsetTop;
      const minScroll = triggerHeight - window.innerHeight;
    
      const scrollingUp = scrollPosition < prevScrollPosition.current;
      prevScrollPosition.current = scrollPosition;
    
      if (scrollPosition <= minScroll && scrollingUp) {
        for (let i = 0; i < scrollNumbers.length; i++) {
          if (!animationFrameIds[i]) {
            increaseNumber(i);
          }
        }
      }
    };
    
    

    handleScroll(); // Initial check to update the numbers based on the scroll position

    window.addEventListener('scroll', handleScroll);
    return () => {
      animationFrameIds.forEach((id) => cancelAnimationFrame(id));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#07173b] mt-14">
      <div className="container mx-auto p-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {scrollNumbers.map((number, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#0d264f] rounded-lg p-6 text-white shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48">
                <path
                  d="M388 302q-30 0-51.5-21.5T315 229q0-30 21.5-51.5T388 156q30 0 51.5 21.5T461 229q0 30-21.5 51.5T388 302Zm-262 714 117-589-103
              46v133H80V433l192-81q30-13 62-6.5t48 31.5l42 66q30 48
              75.5 75.5T601 546v60q-66 0-119.5-30.5T384
              484l-41 156 92 83v293h-60V776l-108-98-79 338h-62Zm554
              0V451H530V176h350v275H730v565h-50Zm43-610 92-92-92-92-36
              36 31 31H587v50h131l-31 31 36 36Z"
                  fill="#b91c1c"
                />
              </svg>
              <div className="text-white mt-4 font-bold text-4xl" id='increased-number-component'></div>
              <div className="text-[#94a3b8] text-lg mt-2">
                {index === 0 && 'Average Costs of Home Ownership'}
                {index === 1 && 'Total People Live in Our City'}
                {index === 2 && 'Square Kilometers Region Covers'}
                {index === 3 && 'Private & Domestic Garden Land'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HararData;
