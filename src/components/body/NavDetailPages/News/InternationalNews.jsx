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
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
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
      {
        loading ? (
          <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 
           border-b-2 border-[#329898] transition-all duration-700">
          </div>
         </div>
        ):(
          <section className="bg-gray-100 py-8  min-h-screen flex-grow  ">
        <div className=" absolute max-w-7xl  px-4 sm:px-6 lg:px-8 top-24 md:top-24 container mx-auto">
         
            <h2 className="text-4xl font-bold mb-8 text-[#329898] hover:underline text-center font-serif leading-snug tracking-tight cursor-pointer">
              International Most Recent News
            </h2>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {trail.map((props, index) => {
                const { title, slug, image, description, time, category } = internationalNews[index];
                const formattedTime = formatDistanceToNow(new Date(time), { addSuffix: true });

                return (
                  <animated.div key={slug.current} style={props}>
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <Link to={`/news/${slug.current}`}>
                        <img
                          className="w-full h-48 object-cover "
                          src={image.asset.url}
                          alt={image.alt}
                        />
                      </Link>
                      <div className="p-4">
                        <Link
                          to={`/news/${slug.current}`}
                          className="text-lg font-semibold hover:underline text-[#329898] font-serif leading-snug tracking-tight"
                        >
                          {`${title.substring(0,70)}...`}
                        </Link>
                        <p className="text-sm text-gray-500 mb-2">
                          <BiTimeFive className="inline-block mr-1 mb-1 text-gray-400 " />
                          {formattedTime}
                        </p>
                        <p className="text-gray-600 text-sm mb-4">
                        {`${getDescriptionSubstring(internationalNews[index].description, 200)}...`}
                        </p>
                        <div className="flex items-center space-x-16">
                        <span className="text-xs text-gray-400">{category}</span>
                      <button>
                      <Link to={`/news/${internationalNews[index].slug.current}`} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
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
                  </animated.div>
                );
              })}
            </div>
        </div>
      </section>
        )
      }
      
     {/* footer part */}
     <footer className="bg-[#132244] py-24  mt-[750vh] md:mt-[200vh] lg:mt-[240vh] ">
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
