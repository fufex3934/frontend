import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import {BsLinkedin,BsTelegram,BsYoutube} from 'react-icons/bs';
import { formatDistanceToNow } from 'date-fns';
import createClient from '../../../../client';
import { useTrail, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import {BiTimeFive} from 'react-icons/bi';
import NewsNav from '../../../navbars/NewsNav';

function InternationalNews() {
  const [internationalNews, setInternationalNews] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await createClient.fetch(`*[_type == "internationalNews"]| order(time desc) {
          title,
          slug,
          image{
            asset->{
              _id,
              url
            },
            alt
          },
          description,
          time,
        }`);
        setInternationalNews(data);
       
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
      const getDescriptionSubstring = (description, length) => {
        if (description && description[0].children && description[0].children.length > 0) {
          const children = description[0].children;
          const text = children.map(child => child.text).join('');
          if (text.length <= length) {
            return text;
          }
          return `${text.substring(0, length)}...`;
        }
        return '';
      };

      const trail = useTrail(internationalNews.length, {
        opacity: 1,
        transform: 'scale(1)',
        from: { opacity: 0, transform: 'scale(0.8)' },
        config: { mass: 1, tension: 180, friction: 12 },
      });
      useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
      }, []);
    
  return (
    <>
      <NewsNav/>
 
      {/* Home News section */}
  <section className="bg-gray-100 py-8 relative">
  <div className=" absolute max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 top-48 md:top-28">
    <h2 className="text-4xl font-bold mb-8
     text-[#329898] hover:underline text-center font-serif
     leading-snug tracking-tight
      cursor-pointer">
     International Most Recent News
      </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
      {internationalNews.length > 0 &&
        trail.map((props, index) => (
          <animated.div key={internationalNews[index].slug.current} style={props}>
            <Link to={`/international-news/${internationalNews[index].slug.current}`}>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={internationalNews[index].image.asset.url}
                    alt={internationalNews[index].title}
                    className="w-full h-48 object-cover hover:scale-[1.3] transition-all duration-700 cursor-pointer"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <p className="text-white text-sm flex items-center justify-center">
                      <BiTimeFive className='mr-1'/>
                      {formatDistanceToNow(new Date(internationalNews[index].time), { addSuffix: true })}
                    </p>
                  </div>
                </div>
                <div className="p-6 ">
                  <div className='h-20 overflow-hidden mb-2 '>
                  <h3 className="text-xl font-bold  text-[#141414] hover:text-orange-700 hover:underline">
                    {`${internationalNews[index].title.substring(0,100)}...`}
                  </h3>
                  </div>
                  <div className="h-24 overflow-hidden">
                    <p className="text-[#141414] mb-2">
                      {`${getDescriptionSubstring(internationalNews[index].description, 200)}...`}
                    </p>
                  </div>
                  <div className='flex items-center justify-between '>
                  <button>
                  <Link to={`/international-news/${internationalNews[index].slug.current}`} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                      <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                      <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </span>
                      <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </span>
                      <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Read More</span>
                      </Link>
                      </button>
                  </div>
                </div>
              </div>
            </Link>
          </animated.div>
        ))}
    </div>
    
  </div>
</section>
     {/* footer part */}
    <footer className="bg-[#132244] py-24 mt-[850vh] md:mt-[210vh] lg:mt-[270vh] ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="flex items-center justify-between">
        <p className="text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} Harar Government Communication Affairs Office. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <BsLinkedin size={24} />
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <BsTelegram size={24} />
          </a>
          <a href="#" className="text-red-800 hover:text-white">
            <BsYoutube size={24} />
          </a>
        </div>
      </div>
    </div>
  </footer>
    </>
  );
}

export default InternationalNews;
