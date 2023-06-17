import React, { useEffect, useState } from 'react';
import { BiComment } from 'react-icons/bi';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { Link, useNavigate } from 'react-router-dom';
import createClient from '../../client';
import { useTranslation } from 'react-i18next';
const News = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const {t} = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await createClient.fetch(
          `*[_type == "home"] | order(time desc){
            image{
              asset->{
                _id,
                url
              },
              alt
            },
            title,
            slug,
            time
          }[0..2]`
        );
        setNews(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const formattedTime = (time) =>
    time
      ? new Date(time).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : '';
      useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
      }, []);
    
  return (
    <div className=" bg-gray-100 p-6 shadow-lg">
      <div className="">
        <h1 className="text-4xl text-[#329898]">{t('newsPublications.header')}</h1>
        <p className="text-gray-500 text-lg">{t('newsPublications.text')}</p>
        <button
          className=" px-4 py-2 mt-4"
          onClick={() => navigate('/timely-news')}
        >
          <Link  className="relative inline-block text-lg group">
                        <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#3bb5b5] rounded-lg group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#3bb5b5] group-hover:-rotate-180 ease"></span>
                        <span className="relative"> {t('newsPublications.moreNews')}</span>
                        </span>
                        <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#3bb5b5] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </Link>
        </button>
      </div>

      {news.length >= 3 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {news.slice(0, 3).map((item, index) => (
            <div className="bg-white rounded-lg shadow-md " key={index}>
              <Link to={`/news/${news[index].slug.current}`}>
                <img src={item?.image.asset.url} alt={item?.image.alt} className="w-full h-48 object-cover rounded-t-lg" />
                
              </Link>
              <div className="p-8 ">
              <div className="text-white  bg-[#329898] p-2 flex items-center  mb-4 w-36 h-10 text-lg">
                  {formattedTime(item?.time)}
                </div>
                <span className="flex items-center text-green-600 text-lg">
                  <BiComment className="mr-1" />Comment off
                </span>
                <Link to = {`/news/${news[index].slug.current}`}
                  href=""
                  className="text-xl text-[#329898] hover:underline font-serif leading-snug tracking-tight font-bold  block mt-4"
                >
                  {`${item?.title.substring(0,70)}...`}
                </Link>
                <Link to = {`/news/${news[index].slug.current}`}
                  href=""
                  className="text-md flex font-semibold leading-snug tracking-tight mt-6 text-gray-600 hover:text-red-700"
                >
                  Continue Reading
                  <HiOutlineArrowLongRight className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
