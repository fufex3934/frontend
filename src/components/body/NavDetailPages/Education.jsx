import React,{useState,useEffect} from 'react';
import { motion } from 'framer-motion';
import Navs from '../../navbars/navs';
import Footer from '../Footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Chart from 'react-apexcharts';
import { FaTwitter, FaInstagram,FaFacebook,FaYoutube } from 'react-icons/fa';


const Education = () => {
  const [activeSlide, setActiveSlide] = useState(0);
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
      title: 'Overview of Education System',
      content:
        'The education system in Harari Region, Ethiopia, encompasses multiple levels of education, including primary, secondary, and tertiary education. It is governed by the Ministry of Education and follows national education policies and curriculum guidelines.',
      image: '/images/education/ed1.jpg',
    },
    {
      title: 'Programs and Initiatives',
      content:
        'Highlight various government programs and initiatives related to education, such as scholarships, grants, vocational training, adult education, inclusive education, and special education programs.',
      image: '/images/education/ed2.jpg',
    },
    {
      title: 'Support Services',
      content:
        'Access various support services available to students, including counseling, career guidance, special needs support, and extracurricular activities. Explore our educational resources, libraries, and online learning platforms.',
      image: '/images/education/ed3.jpg',
    },
    {
      title: 'Research and Statistics',
      content:
        'Stay informed with educational research findings, statistical data, and reports related to educational performance, enrollment rates, graduation rates, and other relevant metrics.',
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
      categories: ['Schools', 'Teachers 2', 'Students', 'library', 'materials'],
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
        'The education system in Harari Region has provided me with excellent opportunities to grow and succeed. I am grateful for the dedicated teachers and supportive environment.',
    },
    {
      name: 'Jane Smith',
      image:'/images/testimonial/test2.jpg',
      testimonial:
        'As a teacher in Harari Region, I have witnessed the positive impact of the education system on students. It encourages holistic development and prepares them for a bright future.',
    },
  ];


  const events = [
    {
      title: 'Education Conference 2023',
      date: 'July 15, 2023',
      image:'/images/education/ed5.jpg',
      location: 'Harari Region',
    },
    {
      title: 'Workshop: Innovations in Teaching',
      date: 'August 5, 2023',
      image:'/images/education/ed6.jpg',
      location: 'Harari Region',
    },
    {
      title: 'Workshop: Innovations in Teaching',
      date: 'August 5, 2023',
      image:'/images/education/ed7.jpg',
      location: 'Harari Region',
    },
  ];

  const socialMediaFeeds = [
    {
      platform: 'Twitter',
      feed: 'Check out our latest article on inclusive education. #EducationForAll',
      icon: <FaTwitter />,
    },
    {
      platform: 'Instagram',
      feed: 'Explore the vibrant learning environment at our schools. #HarariEducation',
      icon: <FaInstagram />,
    },
    {
      platform: 'Facebook',
      feed: 'Join our community and stay updated with the latest educational news.',
      icon: <FaFacebook />,
    },
    {
      platform: 'YouTube',
      feed: 'Subscribe to our channel for educational videos and tutorials.',
      icon: <FaYoutube className='text-red-500' />,
    },
  ];
  const mapCoordinates = {
    latitude: 9.3154,
    longitude: 42.1150,
  };

  const studentResources = [
    {
      title: 'Study Materials',
      link: '/study-materials',
    },
    {
      title: 'Online Learning Platforms',
      link: '/online-learning',
    },
  ];

  return (
    <>
      <Navs />
      <div className="wraper">
        <div className="economic">
          <h1 className='text-4xl ml-6'>Education Program and Initiatives</h1>
        </div>
        <div className="economic-definition">
          <p>More efficient, more inclusive, more sustainable: Education to support quality
            Availability, affordability and proximity of education to job opportunities, education, culture and amenities are vital</p>
        </div>
      </div>
      <div className="container mx-auto px-4 my-14">
        <h1 className="text-xl font-bold my-8 text-slate-700 mb-18 text-center font-serif md:text-4xl">Harar Government Education Program and Initiatives</h1>
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
        <h1 className='mt-8 mb-2 text-center text-2xl font-bold font-serif text-text-slate-700 md:text-4xl lg:mt-10 lg:mb-8'>Our Education System</h1>
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
          <h2 className="text-2xl font-bold mb-4 text-slate-700">Testimonials and Success Stories</h2>
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

        {/* <section className="my-8">
        <h2 className="text-2xl font-bold mb-4 text-slate-700">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="p-4 border rounded-lg shadow-md">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-32 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-lg font-bold mb-2 text-slate-700">{event.title}</h3>
              <p className="text-gray-600 mb-2">Date: {event.date}</p>
              <p className="text-gray-600">Location: {event.location}</p>
            </div>
          ))}
        </div>
      </section> */}


        <section className="my-8 lg:mx-40">
          <h2 className="text-2xl font-bold mb-4 text-slate-700">Social Media Feeds</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {socialMediaFeeds.map((feed, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md flex items-center">
                <span className="text-3xl text-blue-500 mr-4">{feed.icon}</span>
                <a href=""><p className="text-gray-800 hover:text-orange-600 md:font-semibold">{feed.feed}</p></a>
              </div>
            ))}
          </div>
        </section>


        {/* <section className="my-8 lg:mx-10">
          <h2 className="text-2xl font-bold mb-4 text-slate-700">Student Resources</h2>
          <div>
            {studentResources.map((resource, index) => (
              <div key={index} className="mb-4 md:font-semibold">
                <a href={resource.link}>{resource.title}</a>
              </div>
            ))}
          </div>
        </section> */}

        <section className="my-8 lg:mx-20">
          <h2 className="text-2xl font-bold mb-4 text-slate-700">Our Location</h2>
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
