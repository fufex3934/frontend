import React, { useEffect, useState } from 'react';


const WelcomePage = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Welcome', 'Bienvenue', 'أهلاً بك'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [texts.length]);

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "./harar-city.jpg" }}
    >
      <h1 className="text-4xl text-white animate-slide-down">
        <span className="animated-text">{texts[textIndex]}</span>
      </h1>
      <img
        className="max-w-md animate-slide-up"
        src="/harar-city.jpg"
        alt="Animated Image"
      />
    </div>
  );
};

export default WelcomePage;
