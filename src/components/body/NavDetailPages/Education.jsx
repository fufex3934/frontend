import React,{useState,useEffect} from 'react';
import { motion } from 'framer-motion';
import Navs from '../../navbars/navs';
import Footer from '../Footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Chart from 'react-apexcharts';
import { FaTwitter, FaInstagram,FaFacebook,FaYoutube } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Education = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const {t}= useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);


  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : 0));
  };

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide < carouselImages.length - 1 ? prevSlide + 1 : prevSlide));
  };
  const educationSections = [
    {
      title: `${t('education.edutitle1')}`,
      content:
      `${t('education.educontent1')}`,
      image: '/images/education/ed1.jpg',
    },
    {
      title: `${t('education.edutitle2')}`,
      content:
      `${t('education.educontent2')}`,
      image: '/images/education/ed2.jpg',
    },
    {
      title: `${t('education.edutitle3')}`,
      content:
      `${t('education.educontent3')}`,
      image: '/images/education/ed3.jpg',
    },
    {
      title: `${t('education.edutitle4')}`,
      content:
      `${t('education.educontent4')}`,
      image: '/images/education/ed4.jpg',
    },
  ];

  const carouselImages = [
    '/images/education/c1.jpg',
    '/images/education/c2.jpg',
    '/images/education/c3.jpg',
    '/images/education/c4.jpg',
    '/images/education/c5.jpg',
  ];

  const chartOptions = {
    chart: {
      id: 'education-chart',
    },
    xaxis: {
      categories: [`${t('education.chart1')}`, `${t('education.chart2')}`, `${t('education.chart3')}`, `${t('education.chart4')}`, `${t('education.chart5')}`],
    },
  };

  const chartSeries = [
    {
      name: 'Series 1',
      data: [15, 28, 46, 67, 78],
    },
  ];

  const testimonials = [
    {
      name: 'John Doe',
      image:'/images/testimonial/test1.jpg',
      testimonial:
      `${t('education.t1')}`,
    },
    {
      name: 'Jane Smith',
      image:'/images/testimonial/test2.jpg',
      testimonial:
      `${t('education.t2')}`,
    },
  ];


  

  const socialMediaFeeds = [
    {
     
      feed: `${t('education.socialMf1')}`,
      icon: <FaTwitter />,
    },
    {
      
      feed: `${t('education.socialMf2')}`,
      icon: <FaInstagram />,
    },
    {
     
      feed: `${t('education.socialMf2')}`,
      icon: <FaFacebook />,
    },
    {
     
      feed: `${t('education.socialMf3')}`,
      icon: <FaYoutube className='text-red-500' />,
    },
  ];
  const mapCoordinates = {
    latitude: 9.3154,
    longitude: 42.1150,
  };

 
  return (
    <>
      <Navs />
      <div className="wraper">
        <div className="economic">
          <h1 className='text-4xl ml-6'>{t('education.header')}</h1>
        </div>
        <div className="economic-definition">
          <p>{t('education.p')}</p>
        </div>
      </div>
      <div className="container mx-auto px-4 my-14">
        <h1 className="text-xl font-bold my-8 text-slate-700 mb-18 text-center font-serif md:text-4xl">{t('education.header2')}</h1>
        <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlaySpeed={3000}
      centerMode={false}
      containerClass="carousel-container"
      dotListClass="carousel-dot-list"
      draggable
      focusOnSelect={false}
      infinite
      itemClass="carousel-item"
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside
      
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
      }}
      showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {carouselImages.map((image, index) => (
        <div key={index} className="carousel-item">
          <motion.img
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
            className="w-full h-auto md:h-[70vh] rounded-lg"
            src={image}
            alt={`Education ${index + 1}`}
          />
        </div>
      ))}
    </Carousel>
        <h1 className='mt-8 mb-2 text-center text-2xl font-bold font-serif text-text-slate-700 md:text-4xl lg:mt-10 lg:mb-8'>{t('education.oureducation')}</h1>
        {educationSections.map((section, index) => (
          <section key={index} className="">
            <div className="flex justify-center flex-col-reverse gap-2 mb-10 lg:flex-row items-center lg:gap-10">
              <div className="lg:w-1/3">
                <h2 className="text-xl font-bold font-serif mb-1 text-slate-700 md:text-3xl">{section.title}</h2>
                <p className='text-lg md:text-xl'>{section.content}</p>
              </div>
              <div className="lg:w-1/3">
                <img
                  className="w-full h-auto rounded-lg  md:mt-0"
                  src={section.image}
                  alt={section.title}
                />
              </div>
            </div>
          </section>
        ))}

        <Chart options={chartOptions} series={chartSeries} type="bar" height={350} />

          <section className="my-8 lg:mx-20">
          <h2 className="text-2xl font-bold mb-4 text-slate-700">{t('education.testimonialH')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md flex">
                <img className="w-16 h-16 rounded-full mr-4" src={testimonial.image} alt={`Testimonial ${index}`} />
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-700">{testimonial.name}</h3>
                  <p className="text-gray-600 md:font-bold">{testimonial.testimonial}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        


        <section className="my-8 lg:mx-40">
          <h2 className="text-2xl font-bold mb-4 text-slate-700">{t('education.socialH')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {socialMediaFeeds.map((feed, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md flex items-center">
                <span className="text-3xl text-blue-500 mr-4">{feed.icon}</span>
                <a href=""><p className="text-gray-800 hover:text-orange-600 md:font-semibold">{feed.feed}</p></a>
              </div>
            ))}
          </div>
        </section>


       

        <section className="my-8 lg:mx-20">
          <h2 className="text-2xl font-bold mb-4 text-slate-700">{t('education.location')}</h2>
          <div className=" mr-3 md:ml-3">
            <iframe
              src={`https://maps.google.com/maps?q=${mapCoordinates.latitude},${mapCoordinates.longitude}&z=15&output=embed`}
              width="1200"
              height="400"
              allowFullScreen
              loading="lazy"
              title="Harari Region Map"
            ></iframe>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Education;
