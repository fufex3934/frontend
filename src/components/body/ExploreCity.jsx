import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/ExploreCity.css'
import {useTranslation} from 'react-i18next';
const ExploreCity = (props) => {
  const {t} = useTranslation();
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const newData=props.data.map((item,index)=>{
    
    return (
      <div className='indexs' key={index}>
          <img className='h-52 w-full ' src={item.image} alt="" />
          <div className='link-div'>
            <p className='pb-3'><Link to={item.url}>{item.text1}</Link></p>
            <h1 className='pb-3'><Link to={item.url}>{item.text2}</Link></h1>
            <Link to={item.url} className='pb-2'>{item.icon}</Link>
          </div>
      </div>
    );
  });
  return (
    <div className='main-container'>
        <div className='heading'>
          <h1 className='font-semibold'>{t('exploreCity.header')}</h1>
        </div>
        <div className='slideshow-container'>
          <Slider {...settings}>
              {newData}
          </Slider>
        </div>
    </div>
  );
}

export default ExploreCity;