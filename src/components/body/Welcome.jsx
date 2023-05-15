import React, { useEffect, useRef, useState } from 'react';

const Welcome = () => {
  const timerRef = useRef(null);
  const [carouselData, setCarouselData] = useState([
    {
      image: '/city.jpg',
      title: 'Fastest Growing City in Ethiopia Harar',
      detail: `Every Year 2 million People from the worldwide visiting here.`,
    },
    {
      image: '/harar-city.jpg',
      title: 'Welcome to the Harar City of Peace',
      detail: 'Harari is the city of Peace in Ethiopia.',
    },
    {
      image: '/c1.jpg',
      title: 'Welcome the Harar City of Peace',
      detail: 'Harari is the city of Peace in Ethiopia.',
    },
    {
      image: '/c2.jpg',
      title: 'Welcome the Harar City of Peace',
      detail: 'Harari is the city of Peace in Ethiopia.',
    },
    {
      image: '/c3.jpg',
      title: 'Welcome the Harar City of Peace',
      detail: 'Harari is the city of Peace in Ethiopia.',
    },
    {
      image: '/c5.jpg',
      title: 'Welcome the Harar City of Peace',
      detail: 'Harari is the city of Peace in Ethiopia.',
    },
    // Add more carousel data objects as needed
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const carousel = document.querySelector('#default-carousel');
    const prevButton = document.querySelector('[data-carousel-prev]');
    const nextButton = document.querySelector('[data-carousel-next]');

    const items = carousel.querySelectorAll('[data-carousel-item]');
    const interval = 5000; // Time between automatic slides in milliseconds

    const showItem = (index) => {
      items.forEach((item, i) => {
        if (i === index) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    };

    const goToNextSlide = () => {
      const nextIndex = (currentIndex + 1) % carouselData.length;
      setCurrentIndex(nextIndex);
    };

    const startAutoSlide = () => {
      timerRef.current = setInterval(goToNextSlide, interval);
    };

    const stopAutoSlide = () => {
      clearInterval(timerRef.current);
    };

    const handlePrevClick = () => {
      const prevIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
      setCurrentIndex(prevIndex);
      stopAutoSlide();
    };

    const handleNextClick = () => {
      const nextIndex = (currentIndex + 1) % carouselData.length;
      setCurrentIndex(nextIndex);
      stopAutoSlide();
    };

    prevButton.addEventListener('click', handlePrevClick);
    nextButton.addEventListener('click', handleNextClick);

    // Show the initial item and start auto slide
    showItem(currentIndex);
    startAutoSlide();

    return () => {
      prevButton.removeEventListener('click', handlePrevClick);
      nextButton.removeEventListener('click', handleNextClick);
      stopAutoSlide();
    };
  }, [currentIndex, carouselData]);

  return (
    <div className=' overflow-x-hidden'>
      <div id="default-carousel" className="relative w-screen" data-carousel="slide">
  {/* Carousel wrapper */}
  <div className="relative h-96 md:h-80 lg:h-96 overflow-hidden">
    {/* Carousel items */}
    {carouselData.map((item, index) => (
      <div
        key={index}
        className={`hidden duration-700 ease-in-out ${index === currentIndex ? '' : 'hidden'}`}
        data-carousel-item
      >
        <img
          src={item.image}
          className="absolute block w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 md:-translate-x-1/4 lg:-translate-x-1/2 top-1/2 left-1/2 transition-all duration-300"
          alt="..."
        />
        <div className="absolute top-1/4 left-0 p-8 text-white">
          <h2 className="text-3xl font-bold transition-all duration-300">{item.title}</h2>
          <p className="mt-2 ml-2">{item.detail}</p>
          <button className="mt-4 px-6 py-2 text-white bg-orange-700 hover:bg-cyan-800 transition-colors duration-300 ease-in-out">
            Discover More
          </button>
        </div>
      </div>
    ))}
    {/* Navigation buttons */}
    <button
      className="absolute top-1/2 -translate-y-1/2 left-4 p-2 rounded-full bg-white bg-opacity-50 transition-opacity duration-300 hover:bg-opacity-75 hidden md:block"
      data-carousel-prev
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <button
      className="absolute top-1/2 -translate-y-1/2 right-4 p-2 rounded-full bg-white bg-opacity-50 transition-opacity duration-300 hover:bg-opacity-75 hidden md:block"
      data-carousel-next
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</div>

      <div className='bg-orange-600 h-48 md:h-72 w-full flex justify-center items-end relative'>
  <div className='bg-white/100 h-40 md:h-48 mx-2 md:mx-8 flex items-center justify-center absolute -top-14 md:-top-16 left-8 right-8'>
    {/* Content */}
  </div>
  <p className='text-white font-serif font-medium text-lg md:text-xl pb-8'>
    The official guide to living, working, visiting, and investing in Texas
    <span>
      <button className="ml-4 hover:bg-gray-900 text-white font-serif font-medium py-3 px-6 border-orange-500 hover:border-transparent">
        Let's explore more
      </button>
    </span>
  </p>
</div>



    </div>
    
  );
  
  
  
};

export default Welcome;
