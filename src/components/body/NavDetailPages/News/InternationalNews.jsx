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
      <section className="bg-gray-100 py-8  min-h-screen flex-grow  ">
        <div className=" absolute max-w-7xl  px-4 sm:px-6 lg:px-8 top-48 md:top-28 container mx-auto">
          {!loading && (
            <h2 className="text-4xl font-bold mb-8 text-[#329898] hover:underline text-center font-serif leading-snug tracking-tight cursor-pointer">
              International Most Recent News
            </h2>
          )}
          {loading ? (
            <div role="status" className="absolute left-[600px] top-24 transition-all duration-700 ">
              <svg
                aria-hidden="true"
                className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-[#329898]"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM2.39752 50.5908C2.39752 76.8015 23.9735 98.5908 50 98.5908C76.0265 98.5908 97.6025 76.8015 97.6025 50.5908C97.6025 24.3802 76.0265 2.59082 50 2.59082C23.9735 2.59082 2.39752 24.3802 2.39752 50.5908Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M70.5432 67.1658C71.474 64.8002 71.9004 62.083 71.9004 59.2399C71.9004 45.5717 61.7709 34.5742 49.4584 34.5742C46.1489 34.5742 42.993 35.8211 40.3943 38.1511L37.2431 34.9999C41.0342 31.3927 45.846 29.4395 49.8999 29.4395C59.0239 29.4395 66.9004 37.316 66.9004 46.4399C66.9004 49.4572 65.6867 52.2613 63.709 54.3636L70.5432 67.1658Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M34.2747 76.008C37.5855 78.7981 42.0226 80.3626 46.653 80.3626C53.365 80.3626 59.0705 76.4701 61.9246 70.4495L55.1449 66.6704C53.6187 69.5846 50.9907 71.5107 47.8475 71.5107C45.1255 71.5107 42.8029 69.667 42.8029 67.1657C42.8029 64.8889 44.6972 62.9946 47.0316 62.3702L34.2747 49.6133C31.4361 52.9484 29.8399 57.359 29.8399 61.9245C29.8399 67.8739 34.2774 72.3113 40.2268 72.3113C44.3283 72.3113 47.9827 69.9189 49.4415 66.6703L34.2747 76.008Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M29.9781 27.774C33.1514 26.1169 36.7095 25.2305 40.3641 25.2305C46.496 25.2305 51.4808 28.7644 53.3663 34.2497L60.121 30.4949C56.4077 22.6642 48.6582 17.1032 40.3641 17.1032C35.437 17.1032 30.9522 19.5199 28.2243 23.6931L29.9781 27.774Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
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
          )}
        </div>
      </section>
     {/* footer part */}
     <footer className="bg-[#132244] py-24  mt-[650vh] md:mt-[180vh] lg:mt-[240vh] ">
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
