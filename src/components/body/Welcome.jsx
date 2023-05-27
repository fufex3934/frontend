import React, { useEffect, useRef, useState } from 'react';
import './css/Welcome.css';
const Welcome = () => {
  const timerRef = useRef(null);
  const [carouselData, setCarouselData] = useState([
    {
      image: '/images/car1.jpg',
      title: 'Fastest Growing City in Ethiopia Harar',
      detail: `Every Year 2 million People from the worldwide visiting here.`,
    },
    {
      image: '/images/car2.jpg',
      title: 'Welcome to the Harar City of Peace',
      detail: 'Harari is the city of Peace in Ethiopia.',
    },
    {
      image: '/images/car3.jpg',
      title: 'We build basis for Ethiopian Development',
      detail: 'Harari is the attractive city for tourism in Ethiopia.',
    },
    {
      image: '/images/car4.jpg',
      title: 'Harari is The best Place to Live in Ethiopia',
      detail: 'Harari is the city of Peace in Ethiopia.',
    },
    {
      image: '/images/car5.jpg',
      title: 'Welcome to Harar City of Nations and Nationalities of Ethiopia',
      detail: 'Harari is the city of Peace in Ethiopia.',
    },
    {
      image: '/images/car6.jpg',
      title: 'Welcome the Harar City of Peace',
      detail: 'Harari is the city of Peace in Ethiopia.',
    },
    {
      image: '/images/hararicity.jpg',
      title: 'Welcome the Harar City of Peace',
      detail: 'Harari is the city of Peace in Ethiopia.',
    },
    
    {
      image: '/images/car10.jpg',
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
    <div className=' overflow-x-hidden overflow-y-hidden'>
      
      <div id="default-carousel" className="relative w-screen" data-carousel="slide">
  {/* Carousel wrapper */}
  <div className="relative h-96 md:h-[100vh] lg:h-[100vh] overflow-hidden">
  {/* Carousel items */}
  {carouselData.map((item, index) => (
    <div
      key={index}
      className={`hidden duration-700 ease-in-out ${
        index === currentIndex ? '' : 'hidden'
      }`}
      data-carousel-item
    >
      <img
        src={item.image}
        className="absolute block w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-transform duration-500"
        alt="..."
        style={{ animationDelay: `${index * 0.2}s` }} // Add delay for each item
      />
      <div className="absolute top-1/4 left-0 p-8 text-white">
        <h2 className="text-3xl md:text-5xl  decoration-8 font-bold transition-all duration-300">
          {item.title}
        </h2>
        <p className="mt-2 ml-2 text-xl">{item.detail}</p>
        <button className="mt-8 px-6 py-2 text-white bg-[#3bb5b5] hover:bg-cyan-800 transition-colors duration-300 ease-in-out">
          Discover More
        </button>
      </div>
    </div>
  ))}

  {/* Navigation buttons */}
  <button
    className="absolute top-1/2 -translate-y-1/2 left-4 p-2 rounded-full bg-white bg-opacity-50 transition-opacity duration-300 hover:bg-opacity-75 hidden md:hover:block"
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

<div className='bg-[#3bb5b5] outer  w-full flex justify-center items-end relative sm:h-[100vh] md:h-[68vh] lg:h-[60vh]'>
  <div className='bg-white inner  md:w-full lg:w-auto md:mt-[10vh] lg:mt-auto md:mx-8 -top-14 md:-top-16 absolute md:grid-cols-3  lg:grid-cols-6 gap-4 '>
  <div className=" hover:shadow-2xl flex flex-col items-center justify-center p-5">
  <div className="p-5 hover:bg-[#3bb5b5]  hover:rounded-full">
    <svg
      className="w-10 h-10 text-[#3bb5b5] fill-current hover:fill-white transform hover:scale-110 transition-transform duration-300"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <g>
          <rect height="7" width="2" x="5" y="10" />
          <rect height="7" width="2" x="11" y="10" />
          <polygon points="22,6 12,1 2,6 2,8 22,8" />
          <path d="M2,19v2h12.4c-0.21-0.64-0.32-1.31-0.36-2H2z" />
          <polygon points="19,12.26 19,10 17,10 17,13.26" />
          <path d="M20,14l-4,2v2.55c0,2.52,1.71,4.88,4,5.45c2.29-0.57,4-2.93,4-5.45V16L20,14z M19.28,21l-2.03-2.03l1.06-1.06l0.97,0.97 l2.41-2.38l1.06,1.06L19.28,21z" />
        </g>
      </g>
    </svg>
  </div>
  <span className="text-sm  text-slate-700
   hover:text-[#3bb5b5] hover:cursor-pointer
    hover:border-b-2  md:hover:py-2 hover:mx-4 md:hover:mx-20 hover:border-gray-300">
    Your Government
    </span>
  
</div>

    <div className="hover:shadow-2xl flex flex-col items-center justify-center p-5">
  <div className="p-5  hover:bg-[#3bb5b5]  hover:rounded-full ">
    
<svg   className="w-10 h-10 text-[#3bb5b5] fill-current hover:fill-white transform hover:scale-110 transition-transform duration-300" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="#fffff" stroke="none">
<path d="M234 585 c-45 -20 -58 -41 -58 -96 0 -27 -3 -49 -7 -49 -23 0 -15
-82 9 -100 4 -3 12 -14 19 -26 10 -19 6 -24 -68 -60 -44 -21 -86 -48 -94 -61
-10 -15 -15 -48 -15 -98 l0 -75 150 0 c93 0 150 -4 150 -10 0 -6 60 -10 160
-10 l160 0 0 135 0 135 -29 0 c-18 0 -35 8 -43 19 -11 15 -28 21 -72 23 l-58
3 20 26 c30 37 37 73 18 92 -18 18 -21 37 -6 37 31 0 -8 83 -53 110 -38 24
-135 26 -183 5z m185 -49 c19 -20 22 -29 14 -37 -15 -15 -5 -70 15 -86 13 -11
12 -17 -10 -50 -14 -21 -32 -50 -42 -65 -12 -20 -25 -28 -45 -28 -16 0 -31 -6
-34 -12 -8 -23 -60 15 -86 62 -14 25 -31 51 -38 58 -17 18 -16 29 3 36 13 5
15 15 10 45 -10 63 4 86 66 103 64 18 111 10 147 -26z m199 -323 c2 -18 -1
-40 -7 -51 -11 -20 -91 -56 -91 -41 0 5 -18 9 -40 9 -22 0 -40 -4 -40 -9 0
-14 -72 17 -87 37 -14 17 -18 74 -6 86 4 3 66 5 137 4 l131 -3 3 -32z m-457
-36 c-16 -16 -14 -38 6 -59 9 -11 11 -18 5 -18 -7 0 -12 -9 -12 -20 0 -24 17
-27 22 -4 2 13 8 10 28 -11 l24 -26 -94 3 -95 3 -3 30 c-2 17 3 48 10 70 11
32 23 45 63 67 l50 27 3 -26 c2 -14 -1 -30 -7 -36z m282 -113 c10 -18 64 -18
74 0 4 8 30 24 56 35 l48 21 -3 -48 -3 -47 -135 0 -135 0 -3 47 -3 48 48 -21
c26 -11 52 -27 56 -35z"/>
</g>
</svg>

  </div>
  <span className="text-sm 
  font-medium text-slate-700 hover:text-[#3bb5b5] hover:cursor-pointer
  hover:border-b-2  md:hover:py-2 hover:mx-4 md:hover:mx-20 hover:border-gray-300">
    Jobs and Unemployment
    </span>
</div>


<div className="hover:shadow-2xl flex flex-col items-center justify-center p-5">
  <div className="p-5 hover:bg-[#3bb5b5]  hover:rounded-full ">
    
<svg className="w-10 h-10 text-[#3bb5b5] fill-current hover:fill-white transform hover:scale-110 transition-transform duration-300" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="50.000000pt" height="50.000000pt" viewBox="0 0 50.000000 50.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
fill="#fffff" stroke="none">
<path d="M218 465 c-83 -61 -128 -137 -128 -217 0 -82 53 -148 120 -148 25 0
25 1 0 47 -27 51 -27 132 0 164 l19 24 1 -36 c0 -43 34 -92 48 -71 21 31 30
-50 10 -93 -14 -31 -7 -39 26 -31 42 10 76 71 76 136 0 47 -7 65 -45 130 -25
41 -45 87 -45 102 0 38 -23 36 -82 -7z m103 -122 c39 -56 51 -135 25 -168 -15
-19 -15 -19 -16 10 -1 43 -25 118 -40 123 -7 3 -16 -2 -21 -9 -6 -9 -9 5 -9
39 0 63 -14 67 -59 17 -38 -44 -45 -69 -39 -147 l4 -61 -23 27 c-29 34 -31
101 -3 155 10 21 43 60 72 86 l52 47 12 -36 c7 -20 27 -57 45 -83z"/>
<path d="M80 40 l0 -40 170 0 170 0 0 40 c0 38 -2 40 -29 40 -20 0 -31 -6 -34
-17 -4 -17 -5 -17 -6 0 -1 24 -58 24 -64 0 -4 -17 -5 -17 -6 0 -1 12 -10 17
-30 17 -20 0 -31 -6 -34 -17 -4 -17 -5 -17 -6 0 -1 24 -58 24 -64 0 -4 -17 -5
-17 -6 0 -1 12 -10 17 -31 17 -28 0 -30 -2 -30 -40z"/>
</g>
</svg>
  </div>
  <span className="text-sm 
  font-medium text-slate-700 hover:text-[#3bb5b5] hover:cursor-pointer
  hover:border-b-2  md:hover:py-2 hover:mx-4 md:hover:mx-20 hover:border-gray-300">
    Business and Industry
    </span>
</div>
<div className="hover:shadow-2xl flex flex-col items-center justify-center p-5">
  <div className="p-5 hover:bg-[#3bb5b5]  hover:rounded-full ">
    
<svg className="w-10 h-10 text-[#3bb5b5] fill-current hover:fill-white transform hover:scale-110 transition-transform duration-300" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="#fffff" stroke="none">
<path d="M264 544 c-20 -20 -25 -33 -22 -60 4 -32 2 -34 -24 -34 -44 0 -68
-32 -68 -89 0 -33 -5 -51 -14 -54 -15 -6 -26 1 -26 15 0 4 7 8 15 8 8 0 15 5
15 11 0 6 -10 9 -22 7 -22 -3 -23 -8 -26 -85 -1 -51 2 -83 8 -83 5 0 10 17 10
38 0 68 12 72 212 72 197 0 208 -4 208 -73 0 -20 5 -37 10 -37 6 0 9 32 8 83
-3 77 -4 82 -25 85 -13 2 -23 -1 -23 -7 0 -6 7 -11 15 -11 8 0 15 -4 15 -8 0
-14 -11 -21 -26 -15 -9 3 -14 21 -14 54 0 57 -24 89 -68 89 -26 0 -28 2 -24
34 5 45 -32 86 -78 86 -20 0 -40 -9 -56 -26z"/>
<path d="M74 155 c-4 -8 -4 -22 0 -30 5 -13 39 -15 248 -13 l243 3 0 25 0 25
-243 3 c-209 2 -243 0 -248 -13z"/>
</g>
</svg>

  </div>
  <span className="text-sm 
  font-medium text-slate-700 hover:text-[#3bb5b5] hover:cursor-pointer
  hover:border-b-2  md:hover:py-2 hover:mx-4 md:hover:mx-20 hover:border-gray-300">
    Roads and Transport
    </span>
</div>
<div className="hover:shadow-2xl flex flex-col items-center justify-center p-5">
  <div className="p-5 hover:bg-[#3bb5b5]  hover:rounded-full ">
    
<svg className="w-10 h-10 text-[#3bb5b5] fill-current hover:fill-white transform hover:scale-110 transition-transform duration-300" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
fill="#fffff" stroke="none">
<path d="M154 516 c-6 -24 -10 -26 -65 -26 -58 0 -59 0 -59 -29 0 -35 32 -78
63 -84 12 -2 -4 -5 -35 -6 -54 -1 -58 -3 -58 -25 0 -27 33 -56 62 -56 15 0 18
-9 18 -50 l0 -50 -40 0 -40 0 0 -45 0 -45 105 0 c63 0 105 4 105 10 0 6 -38
10 -95 10 -57 0 -95 4 -95 10 0 6 38 10 95 10 126 0 124 18 -2 23 l-98 3 108
2 107 2 0 -40 0 -40 90 0 90 0 0 40 0 40 108 -2 107 -2 -97 -3 c-127 -5 -129
-23 -3 -23 57 0 95 -4 95 -10 0 -6 -32 -10 -75 -10 -43 0 -75 -4 -75 -10 0 -6
35 -10 85 -10 l85 0 0 45 0 45 -40 0 -40 0 0 50 c0 41 3 50 18 50 29 0 62 29
62 56 0 22 -4 24 -57 25 -32 1 -48 4 -36 6 31 6 63 49 63 84 0 29 -1 29 -59
29 -55 0 -59 2 -65 26 -5 19 -11 24 -23 19 -26 -9 -91 -17 -167 -18 -48 -2
-71 -6 -74 -16 -4 -11 18 -13 116 -10 109 4 121 2 126 -13 3 -12 15 -18 38
-19 l33 -1 -35 -9 c-45 -11 -315 -11 -360 0 l-35 9 33 1 c24 1 35 6 39 20 3
11 13 21 24 24 22 6 26 27 5 27 -8 0 -21 3 -30 6 -10 4 -17 -2 -22 -20z m356
-110 c0 -8 -6 -17 -12 -19 -10 -4 -9 -8 2 -16 11 -8 -27 -11 -137 -11 -95 0
-153 -4 -153 -10 0 -6 72 -10 197 -10 142 0 194 -3 186 -11 -27 -27 -519 -27
-546 0 -8 8 5 11 46 11 53 0 74 11 45 23 -7 3 65 6 160 6 107 1 172 5 172 11
0 6 -22 10 -50 10 -69 0 -63 18 8 23 31 2 63 4 70 5 6 1 12 -4 12 -12z m30
-128 c0 -3 -6 -9 -12 -12 -10 -5 -10 -7 0 -12 14 -7 17 -64 2 -64 -5 0 -10 9
-10 20 0 17 -7 20 -40 20 -33 0 -40 -3 -40 -20 0 -16 -7 -20 -30 -20 -25 0
-30 4 -30 25 0 24 -3 25 -60 25 -57 0 -60 -1 -60 -25 0 -21 -5 -25 -30 -25
-23 0 -30 4 -30 20 0 17 -7 20 -40 20 -33 0 -40 -3 -40 -20 0 -11 -4 -20 -10
-20 -5 0 -10 14 -10 30 l0 30 180 0 c113 0 180 4 180 10 0 6 -67 10 -180 10
-99 0 -180 3 -180 8 0 4 99 7 220 7 121 0 220 -3 220 -7z"/>
</g>
</svg>

  </div>
  <span className="text-sm 
  font-medium text-slate-700 hover:text-[#3bb5b5] hover:cursor-pointer
  hover:border-b-2  md:hover:py-2 hover:mx-4 md:hover:mx-20 hover:border-gray-300">
    Culture and Recreation
    </span>
</div>
<div className="hover:shadow-2xl flex flex-col items-center justify-center p-5">
  <div className="p-5 hover:bg-[#3bb5b5]  hover:rounded-full">
    
<svg className="w-10 h-10 text-[#3bb5b5] fill-current hover:fill-white transform hover:scale-110 transition-transform duration-300" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="50.000000pt" height="50.000000pt" viewBox="0 0 50.000000 50.000000"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
fill="#fffff" stroke="none">
<path d="M220 458 c0 -17 -3 -19 -12 -10 -7 7 -40 12 -76 12 -60 0 -64 -1 -59
-21 3 -12 -9 -55 -29 -102 -35 -84 -35 -91 5 -124 19 -17 83 -17 102 -1 40 34
40 41 4 127 -19 45 -35 84 -35 87 0 9 50 4 75 -8 l25 -11 0 -168 0 -168 -47
-3 c-41 -3 -48 -6 -51 -25 -3 -23 -3 -23 128 -23 131 0 131 0 128 23 -3 19
-10 22 -50 25 l-48 3 0 160 0 159 39 0 c72 0 71 -22 -7 -200 -1 -4 9 -19 22
-33 28 -30 90 -37 117 -15 40 34 40 41 5 125 -19 45 -33 90 -30 100 6 24 -52
53 -106 53 -38 0 -40 2 -40 30 0 27 -3 30 -30 30 -24 0 -30 -4 -30 -22z"/>
</g>
</svg>

  </div>
  <span className="text-sm
   font-medium text-slate-700 hover:text-[#3bb5b5] hover:cursor-pointer
   hover:border-b-2  md:hover:py-2
    hover:mx-4 md:hover:mx-20 hover:border-gray-300   md:hover:text-xs ">
    Justice, Safety and the Law
    </span>
</div>
    
  </div>
  <p className='text-white welcome-p font-serif font-medium text-lg md:text-xl pb-8'>
    The official guide to living, working, visiting, and investing in Harar
    <span>
      <button className="ml-4 mt-4 pb-5 hover:bg-gray-900 text-white font-serif font-medium py-3 px-6 border-orange-500 hover:border-transparent">
        Let's explore more
      </button>
    </span>
  </p>
</div>





    </div>
    
  );
  
  
  
};

export default Welcome;