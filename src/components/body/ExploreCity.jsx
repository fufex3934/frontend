import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/ExploreCity.css'

const ExploreCity = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  const newData=props.data.map((item,index)=>{
    
    return (
      <div className='indexs' key={index}>
          <img src={item.image} alt="" />
          <div className='link-div'>
            <p><a href="">{item.text1}</a></p>
            <h1><a href="">{item.text2}</a></h1>
            <span>{item.icon}</span>
          </div>
      </div>
    );
  });
  return (
    <div className='main-container'>
        <div className='heading'>
          <h1 className='font-semibold'>Explore City Highlights</h1>
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