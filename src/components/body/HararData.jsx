import React, { useEffect, useState } from 'react';

const HararData = () => {
  const [scrollNumber, setScrollNumber] = useState(0);

  useEffect(() => {
    let animationFrameId;
    let currentNumber = 0;
    let incrementSpeed = 1;

    const increaseNumber = () => {
      const maxNumber = 200000; // Maximum number to display
      const increment = incrementSpeed / 100;

      if (currentNumber < maxNumber) {
        currentNumber += increment;
        setScrollNumber(currentNumber);
        incrementSpeed += 0.05; // Increase the speed of increment
        animationFrameId = requestAnimationFrame(increaseNumber);
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Add your logic to calculate the scrollNumber based on scrollPosition
      const maxScroll = 1000; // Maximum scroll position at which the number stops increasing

      if (scrollPosition <= maxScroll) {
        if (!animationFrameId) {
          animationFrameId = requestAnimationFrame(increaseNumber);
        }
      } else {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
        currentNumber = 0;
        incrementSpeed = 1;
        setScrollNumber(currentNumber);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-svg-background bg-cover bg-center mt-[70px] relative">
      <div className="absolute inset-0 bg-[#07173b]"></div>
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <path fill="white" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 13h-9l3.75-6L12 9.5l4.5 6zM7 13h2v2H7v-2zm4 0h2v2h-2v-2z" />
            </svg>
            <div className="text-white mt-4">Icon 1</div>
            <div className="text-white mt-2">{Math.floor(scrollNumber)}</div>
            <div className="text-white mt-2">Description 1</div>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <path fill="white" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 16h-2v-2h2v2zm0-4h-2V7h2v7z" />
            </svg>
            <div className="text-white mt-4">Icon 2</div>
            <div className="text-white mt-2">{Math.floor(scrollNumber)}</div>
            <div className="text-white mt-2">Description 2</div>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <path fill="white" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 16h-2v-2h2v2zm4 0h-2v-2h2v2zm0-4h-2V7h2v7z" />
            </svg>
            <div className="text-white mt-4">Icon 3</div>
            <div className="text-white mt-2">{Math.floor(scrollNumber)}</div>
            <div className="text-white mt-2">Description 3</div>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-12 h-12" viewBox="0 0 24 24">
              <path fill="white" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 16h-2v-2h2v2zm0-4h-2V7h2v7zm4 0h-2V7h2v7z" />
            </svg>
            <div className="text-white mt-4">Icon 4</div>
            <div className="text-white mt-2">{Math.floor(scrollNumber)}</div>
            <div className="text-white mt-2">Description 4</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HararData;
