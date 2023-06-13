import React, { useState, useEffect } from 'react';
import { RiRunLine, RiPlantLine } from 'react-icons/ri';
import { TbDirections } from 'react-icons/tb';
import { GiArchBridge } from 'react-icons/gi';
import {useTranslation} from 'react-i18next';
const HararData = () => {
  const {t} = useTranslation();
  const [counters, setCounters] = useState({
    peopleCount: 0,
    regionSize: 0,
    gardenLand: 0,
    homeOwnership: 0,
  });

  const targetCounters = {
    peopleCount: 62,
    regionSize: 4.8,
    gardenLand: 32,
    homeOwnership: 6,
  };

  useEffect(() => {
    const incrementCounters = () => {
      setCounters((prevCounters) => ({
        peopleCount: prevCounters.peopleCount + 1,
        regionSize: prevCounters.regionSize + 0.1,
        gardenLand: prevCounters.gardenLand + 1,
        homeOwnership: prevCounters.homeOwnership + 0.01,
      }));
    };

    const handleScroll = () => {
      const container = document.getElementById('harar-data');
      const rect = container.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (rect.top >= 0 && rect.top <= window.innerHeight && !counters.peopleCount) {
        const interval = setInterval(() => {
          incrementCounters();
        }, 1);

        setTimeout(() => {
          clearInterval(interval);
        }, 500);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [counters]);

  return (
    <div id="harar-data" className="bg-[#3bb5b5] h-auto md:h-[70vh] w-screen flex flex-col items-center py-36 ">
  <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 lg:-ml-[10vh]">
    <div className="flex flex-col items-center">
      <RiRunLine className="text-[#a5ff00] w-16 h-16" />
      <span className="text-white text-4xl font-bold mt-2 font-mono">{counters.peopleCount}K</span>
      <span className="text-white/95 text-lg md:ml-4">{t('hararData.people')}</span>
    </div>
    <div className="flex flex-col items-center">
      <TbDirections className="text-[#a5ff00] w-16 h-16" />
      <span className="text-white text-4xl font-bold mt-2 font-mono">{counters.regionSize.toFixed(1)}K</span>
      <span className="text-white/95 text-lg">{t('hararData.area')}</span>
    </div>
    <div className="flex flex-col items-center">
      <RiPlantLine className="text-[#a5ff00] w-16 h-16" />
      <span className="text-white text-4xl font-bold mt-2 font-mono">{counters.gardenLand}%</span>
      <span className="text-white/95 text-lg">{t('hararData.land')}</span>
    </div>
    <div className="flex flex-col items-center">
      <GiArchBridge className="text-[#a5ff00] w-16 h-16" />
      <span className="text-white text-4xl font-bold mt-2 font-mono">{counters.homeOwnership.toFixed(2)}th</span>
      <span className="text-white/95 text-lg">{t('hararData.cost')}</span>
    </div>
  </div>
</div>

  );
};

export default HararData;
