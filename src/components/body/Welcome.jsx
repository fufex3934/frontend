import React, { useState, useEffect } from 'react';

const Welcome = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    './harar.jpg',
    './harar.jpg',
    '/harar.jpg',
  ];

  useEffect(() => {
    // Function to handle the automatic image sliding
    const slideImages = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Set the time interval for sliding (e.g., every 3 seconds)
    const interval = setInterval(slideImages, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex">
      <nav className="flex-1 bg-gray-200 py-4">
        {/* Navbar content goes here */}
      </nav>
      <div className="relative flex-1">
        <img
          className="h-64 w-full object-cover"
          src={images[currentImageIndex]}
          alt="Slider Image"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Welcome Text</h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-900 text-white">
          <p className="text-xl">Other Text</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
