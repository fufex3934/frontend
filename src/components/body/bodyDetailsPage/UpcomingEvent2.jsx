import React, { useState, useEffect } from 'react';
import createClient from '../../../client';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import Navs from '../../navbars/navs';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import { BsFillShareFill } from 'react-icons/bs';

const UpcomingEvent2 = () => {
  const [upcomingEvent1Data, setUpcomingEventData] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await createClient.fetch(`*[_type == "upcomingEvents"]{
          title,
          slug,
          place,
          date,
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
        }`);
        setUpcomingEventData(data[1]);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);


  // Function to resolve image URLs using Sanity's imageUrlBuilder
  const builder = imageUrlBuilder(createClient);
  const urlFor = (source) => builder.image(source);

  return (
    <>
      <Navs />
      {
        loading ? (
          <div className="flex items-center justify-center h-screen">
         <div className="animate-spin rounded-full h-10 w-10 border-t-2 
          border-b-2 border-[#329898] transition-all duration-700">
         </div>
        </div>
        ):(
          <div className="container mx-auto max-w-7xl">
        {upcomingEvent1Data && (
          <motion.div
            className=""
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mt-4">
              <h2 className="text-3xl font-bold font-serif mb-4 text-[#141414]">
                {upcomingEvent1Data.title}
              </h2>
              {upcomingEvent1Data.upcomingImage && (
                <img
                  src={urlFor(upcomingEvent1Data.upcomingImage.asset).url()}
                  alt={upcomingEvent1Data.upcomingImage.alt}
                  className="md:w-full h-[390px] object-cover"
                />
              )}
              <p className="text-[#141414] mb-4 mt-8">
                {upcomingEvent1Data.date
                  ? new Date(upcomingEvent1Data.date).toLocaleDateString(
                      'en-US',
                      {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }
                    )
                  : ''}
              </p>
              <div className="h-10 w-10 bg-red-600 px-3 py-2 hover:scale-105 cursor-pointer mb-3">
                <BsFillShareFill className="text-white" />
              </div>
              {upcomingEvent1Data.description && (
                <BlockContent
                  blocks={upcomingEvent1Data.description}
                  projectId="9ik05vf8"
                  dataset="production"
                  imageOptions={{ w: 800, h: 600, fit: 'max' }}
                  serializers={{
                    types: {
                      image: ({ node }) => (
                        <img
                          src={urlFor(node).url()}
                          alt={node?.alt}
                          className="m-4"
                        />
                      ),
                    },
                  }}
                />
              )}
            </div>
          </motion.div>
        )}
      </div>
        )
      }
      
      <Footer />
    </>
  );
};

export default UpcomingEvent2;
