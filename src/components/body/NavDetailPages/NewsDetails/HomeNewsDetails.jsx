import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsFillShareFill } from 'react-icons/bs';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BsLinkedin, BsTelegram, BsYoutube } from 'react-icons/bs';
import NewsNav from '../../../navbars/NewsNav';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import createClient from '../../../../client';
import { useParams } from 'react-router-dom';

const HomeNewsDetails = () => {
  const [singlePost, setSinglePost] = useState({});
  const [newsList, setNewsList] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await createClient.fetch(`*[slug.current == "${slug}"]{
          title,
          image{
            asset->{
              _id,
              url
            },
            alt
          },
          description[]{
            ...,
            _type == "image" => {
              ...,
              asset->{
                _id,
                url
              }
            }
          },
          time
        }`);
        setSinglePost(data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchNewsList = async () => {
      try {
        const newsData = await createClient.fetch(`*[_type == "home" && !(slug.current == "${slug}")]{
          title,
          slug,
          image{
            asset->{
              _id,
              url
            },
            alt
          }
        }[0...11]`);
        setNewsList(newsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    fetchNewsList();
  }, [slug]);

  const formattedTime = singlePost?.time
    ? new Date(singlePost?.time).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';
    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
    }, []);
  
  // Function to resolve image URLs using Sanity's imageUrlBuilder
  const builder = imageUrlBuilder(createClient);
  const urlFor = (source) => builder.image(source);

  return (
    <>
      <NewsNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10  flex flex-col justify-between ">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 sm:mb-72  mt-36 md:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="col-span-2 md:col-span-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mt-4">
              <h2 className="text-3xl font-bold font-serif mb-4 text-[#141414]">
                {singlePost?.title}
              </h2>
              {singlePost?.image && (
                <img
                  src={urlFor(singlePost.image.asset).url()}
                  alt={singlePost?.image?.alt}
                  className="md:w-full h-[390px] object-cover"
                />
              )}
              <p className="text-[#141414] mb-4 mt-8">{formattedTime}</p>
              <div className="h-10 w-10 bg-red-600 px-3 py-2 hover:scale-105 cursor-pointer mb-3">
                <BsFillShareFill className="text-white" />
              </div>
              {singlePost?.description && (
                <BlockContent
                  blocks={singlePost.description}
                  projectId="9ik05vf8"
                  dataset="production"
                  imageOptions={{ w: 800, h: 600, fit: 'max' }}
                  serializers={{ types: { image: ({ node }) => <img src={urlFor(node).url()} alt={node?.alt} className='m-4' /> } }}
                />
              )}
            </div>
          </motion.div>
          <div className="hidden lg:block col-span-1 ml-52">
            <h3 className="text-2xl font-bold font-serif mb-4 text-[#141414]">
              Related News
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {newsList.map((news) => (
                <Link to={`/news/${news.slug.current}`} key={news.slug.current}>
                  <div className="flex-col items-center mb-4  p-2  cursor-pointer">
                    <img
                      src={news.image?.asset?.url}
                      alt={news.image?.alt}
                      className="w-80 h-48 object-cover "
                    />
                    <h4 className="text-xl font-semibold font-serif text-[#141414]
                     bg-[#f6f6f6] hover:text-orange-700 hover:underline mr-12">
                      {news.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
        <Link to='/timely-news' className='text-[#329898] hover:underline text-lg  '>Back to News Page</Link>
      </div>
      <footer className="bg-[#132244] py-24   ">
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
};

export default HomeNewsDetails;
