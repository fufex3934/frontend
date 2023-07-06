import React, { useState } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/ExploreCity.css';
import { useTranslation } from 'react-i18next';

const ExploreCity = (props) => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: (i) => {
      // Custom dot style
      return <div className={`bg-white rounded-full mt-16  ${i === currentSlide ? 'w-1 h-1 bg-[#2dd4bf]' : 'w-1 h-1'}`} />;
    },
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  const newData = props.data.map((item, index) => {
    return (
      <div className='indexs ' key={index}>
        <img className='h-52 w-full ' src={item.image} alt='' />
        <div className='link-div'>
          <p className='pb-3 '>
            <Link to={item.url}>{item.text1}</Link>
          </p>
          <h1 className='mb-5 md:mb-10 font-bold'>
            <Link to={item.url}>{item.text2}</Link>
          </h1>
          <Link to={item.url} className='pb-2'>
            {item.icon}
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div className='main-container bg-[#329898] pb-32 '>
      <div className='heading'>
        <h1 className='font-semibold w-72 md:w-full text-center md:text-justify'>{t('exploreCity.header')}</h1>
      </div>
      <div className='slideshow-container'>
        <Slider {...settings}>
          {newData}
        </Slider>
        <div className='flex justify-center space-x-1 mt-4'>
          {/* The dots will be rendered here */}
        </div>
      </div>
    </div>
  );
};

export default ExploreCity;
