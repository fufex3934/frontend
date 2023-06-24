import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import {BsLinkedin,BsTelegram,BsYoutube} from 'react-icons/bs';
import { formatDistanceToNow } from 'date-fns';
import createClient from '../../client';
import { useTrail, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import {BiTimeFive} from 'react-icons/bi';
import Navs from '../navbars/navs';

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await createClient.fetch(`*[_type == "upcomingEvents"]| order(date desc) {
          title,
          slug,
          upcomingImage{
            asset->{
              _id,
              url
            },
            alt
          },
          description,
          date,
          place
        }`);
        setEvents(data);
        
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

      const trail = useTrail(events.length, {
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
      <Navs/>
 
      {/* Home events section */}
      {
        loading ? (
          <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 
           border-b-2 border-[#329898] transition-all duration-700">
          </div>
         </div>
        ):(
          <section className="bg-gray-50  flex-grow ">
          <div className=" max-w-7xl px-4 sm:px-6 lg:px-8 container mx-auto mt-36 ">
            
              <h2 className="text-4xl font-bold mb-8 text-[#329898] hover:underline text-center font-serif leading-snug tracking-tight cursor-pointer">
                Most Upcoming Events
              </h2>
           
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {trail.map((props, index) => {
                  const { title, slug, upcomingImage, description, date, place } = events[index];
                  const formattedTime = formatDistanceToNow(new Date(date), { addSuffix: true });
  
                  return (
                    <animated.div key={slug.current} style={props}>
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <Link to={`/events/${slug.current}`}>
                          <img
                            className="w-full h-48 object-cover "
                            src={upcomingImage.asset.url}
                            alt={upcomingImage.alt}
                          />
                        </Link>
                        <div className="p-4">
                          <Link
                            to={`/events/${slug.current}`}
                            className="text-lg font-semibold hover:underline text-[#329898] font-serif leading-snug tracking-tight"
                          >
                            {`${title.substring(0,70)}...`}
                          </Link>
                          <p className="text-sm text-gray-500 mb-2">
                            <BiTimeFive className="inline-block mr-1 mb-1 text-gray-400 " />
                            {formattedTime}
                          </p>
                          <p className="text-gray-600 text-sm mb-4">
                          {`${getDescriptionSubstring(events[index].description, 200)}...`}
                          </p>
                          <div className="flex items-center space-x-16">
                          <span className="text-xs text-gray-400">{place}</span>
                        <button>
                        <Link to={`/events/${events[index].slug.current}`}  className="relative inline-block text-lg group">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#3bb5b5] rounded-lg group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#3bb5b5] group-hover:-rotate-180 ease"></span>
                        <span className="relative">Read More</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#3bb5b5] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
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
          {/* Footer */}
          <footer className="bg-[#132244] py-24 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <p className="text-gray-300 text-sm mb-4">
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
        </section>
        )
      }
     
     
    </>
  );
}

export default Events;
