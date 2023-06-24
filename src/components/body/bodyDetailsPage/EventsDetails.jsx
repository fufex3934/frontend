import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsFillShareFill } from 'react-icons/bs';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BsLinkedin, BsTelegram, BsYoutube } from 'react-icons/bs';
import Navs from '../../navbars/navs';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import createClient from '../../../client';
import { useParams } from 'react-router-dom';

const EventsDetails = () => {
  const [singlePost, setSinglePost] = useState({});
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await createClient.fetch(`*[slug.current == "${slug}"]{
          title,
          upcomingImage{
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
          date
        }`);
        setSinglePost(data[0]);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    const fetchNewsList = async () => {
      try {
        const newsData = await createClient.fetch(`*[_type == "upcomingEvents" ]{
          title,
          slug,
          upcomingImage{
            asset->{
              _id,
              url
            },
            alt
          },
          date
        }`);
        setNewsList(newsData);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
    fetchNewsList();
  }, [slug]);

  const formattedTime = singlePost?.date
    ? new Date(singlePost?.date).toLocaleDateString('en-US', {
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
      <Navs/>
      {
        loading ? (
          <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 
           border-b-2 border-[#329898] transition-all duration-700">
          </div>
         </div>
        ):(
          <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 pb-7">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8 sm:mb-72  mt-36 md:mt-8"
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
            <div className="mt-2">
              <h2 className="text-3xl font-bold font-serif mb-7 text-[#141414]">
                {singlePost?.title}
              </h2>
              {singlePost?.upcomingImage && (
                <img
                  src={urlFor(singlePost.upcomingImage.asset).url()}
                  alt={singlePost?.upcomingImage?.alt}
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
                  serializers={{ types: { image: ({ node }) => <img src={urlFor(node).url()} alt={node?.alt} className='m-4 md:w-full h-[390px] object-cover' /> } }}
                  className='text-lg font-light  font-serif leading-snug tracking-tight'
                />
              )}
            </div>
          </motion.div>
        </motion.div>
        <Link to='/events' className='text-[#329898] hover:underline text-lg  '>Back to Events Page</Link>
      </div>
        )
      }
      
      <footer className="bg-[#132244] py-24  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between flex-col md:flex-row">
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
    </>
  );
};

export default EventsDetails;
