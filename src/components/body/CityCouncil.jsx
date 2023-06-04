        import React, { useState,useEffect } from 'react';
        import { FaFacebook, FaTwitter,FaPhoneAlt,
          FaLinkedin, FaInstagram } from 'react-icons/fa';

        import { AiOutlineMail } from 'react-icons/ai';
        import createClient from '../../client';
        const CityCouncil = () => {
          const [hoveredIndexes, setHoveredIndexes] = useState([]);
          const [cityCouncilData, setCityCouncilData] = useState(null);

          useEffect(()=>{
            const fetchData = async ()=>{
              try{
                  const data = await createClient.fetch(`*[_type == "cityCouncil"]{
                    councilImage{
                      asset->{
                        _id,
                        url
                      },
                      alt
                    },
                    name,
                    role,
                    email,
                    phone
                  }`);
                  setCityCouncilData(data);
              }catch(error){
                console.error(error);
              }
            }
            fetchData();
          },[]);

          const handleMouseEnter = (index) => {
            setHoveredIndexes((prevIndexes) => [...prevIndexes, index]);
          };

          const handleMouseLeave = (index) => {
            setHoveredIndexes((prevIndexes) => prevIndexes.filter((i) => i !== index));
          };

          return (
            <div className='bg-[#f8f5f4] h-[110vh] w-screen mt-8 '>
              <p className='text-[#202b5d] mx-4 ml-16 md:ml-[30vh] lg:ml-[75vh] text-2xl md:text-3xl lg:text-4xl font-extrabold font-serif whitespace-nowrap pt-8 md:pt-20'>
                Meet City Council
              </p>
              <p className='ml-7 md:ml-[18vh] lg:ml-[50vh] text-slate-400 mt-3'>
                The city council has the real superpowers as administration to lead the country.
              </p>
              <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8 mx-8 mt-8'>
                <div
                  className='shadow relative'
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={() => handleMouseLeave(0)}
                >
                  <img
                    className='cursor-pointer'
                    src={cityCouncilData && cityCouncilData[1] && cityCouncilData[1].councilImage.asset.url}
                    alt={cityCouncilData && cityCouncilData[1] && cityCouncilData[1].name}
                  />
                  {hoveredIndexes.includes(0) && (
                    <div className='absolute top-44 left-0 w-full flex justify-center items-end transition-opacity duration-300'>
                      <div className='bg-white rounded-s-full rounded-e-full border border-gray-400 p-2 flex items-center'>
                        <a href='https://www.facebook.com/' className='mr-2'>
                          <FaFacebook className='text-gray-500 hover:text-orange-500' />
                        </a>
                        <div className='border-l border-gray-400'></div>
                        <a href='https://www.twitter.com/' className='mx-2'>
                          <FaTwitter className='text-gray-500 hover:text-orange-500' />
                        </a>
                        <div className='border-l border-gray-400'></div>
                        <a href='https://www.linkedin.com/' className='mx-2'>
                          <FaLinkedin className='text-gray-500 hover:text-orange-500' />
                        </a>
                        <div className='border-l border-gray-400'></div>
                        <a href='https://www.instagram.com/' className='mx-2'>
                          <FaInstagram className='text-gray-500 hover:text-orange-500' />
                        </a>
                      </div>
                    </div>
                  )}
                  <div className='p-4 bg-white'>
                    <p className='text-lg font-bold hover:text-red-500 cursor-pointer text-[#202b5d] opacity-90 '>{cityCouncilData && cityCouncilData[1] &&cityCouncilData[1].name}</p>
                    <p className='text-md text-blue-500 pb-5'>{cityCouncilData && cityCouncilData[1] &&cityCouncilData[1].role}</p>
                    <p className='text-md text-gray-500 flex mb-2'>
                      <AiOutlineMail className='mr-2 mt-1' />
                      <span className='hover:text-red-500 cursor-pointer'>{cityCouncilData && cityCouncilData[1] &&cityCouncilData[1].email}</span>
                    </p>
                    <p className='text-md text-gray-500 flex'>
                      <FaPhoneAlt className='mr-2 mt-0.5' />
                      <span className='hover:text-red-500 cursor-pointer'>{cityCouncilData && cityCouncilData[1] &&cityCouncilData[1].phone}</span>
                    </p>
                  </div>
                </div>
                <div
                  className='shadow relative'
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={() => handleMouseLeave(1)}
                >
                  <img
                    className='cursor-pointer'
                    src={cityCouncilData && cityCouncilData[3] && cityCouncilData[3].councilImage.asset.url}
                    alt={cityCouncilData && cityCouncilData[3] && cityCouncilData[3].name}
                  />
                  {hoveredIndexes.includes(1) && (
                    <div className='absolute top-44 left-0 w-full flex justify-center items-end transition-opacity duration-300'>
                      <div className='bg-white rounded-s-full rounded-e-full border border-gray-400 p-2 flex items-center'>
                        <a href='https://www.facebook.com/' className='mr-2'>
                          <FaFacebook className='text-gray-500 hover:text-orange-500' />
                        </a>
                        <div className='border-l border-gray-400'></div>
                        <a href='https://www.twitter.com/' className='mx-2'>
                          <FaTwitter className='text-gray-500 hover:text-orange-500' />
                        </a>
                        <div className='border-l border-gray-400'></div>
                        <a href='https://www.linkedin.com/' className='mx-2'>
                          <FaLinkedin className='text-gray-500 hover:text-orange-500' />
                        </a>
                        <div className='border-l border-gray-400'></div>
                        <a href='https://www.instagram.com/' className='mx-2'>
                          <FaInstagram className='text-gray-500 hover:text-orange-500' />
                        </a>
                      </div>
                    </div>
                  )}
                  <div className='p-4 bg-white'>
                    <p className='text-lg font-bold hover:text-red-500 cursor-pointer text-[#202b5d] opacity-90'>{cityCouncilData && cityCouncilData[3] &&cityCouncilData[3].name}</p>
                    <p className='text-md text-blue-500 pb-5'>{cityCouncilData && cityCouncilData[3] && cityCouncilData[3].role}</p>
                    <p className='text-md text-gray-500 flex mb-2'>
                      <AiOutlineMail className='mr-2 mt-1' />
                      <span className='hover:text-red-500 cursor-pointer'>{cityCouncilData && cityCouncilData[3] && cityCouncilData[3].email}</span>
                    </p>
                    <p className='text-md text-gray-500 flex'>
                      <FaPhoneAlt className='mr-2 mt-0.5' />
                      <span className='hover:text-red-500 cursor-pointer'>{cityCouncilData && cityCouncilData[3] && cityCouncilData[3].phone}</span>
                    </p>
                  </div>
                </div>
                <div
                  className='shadow relative'
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={() => handleMouseLeave(2)}
                >
                  <img
                    className='cursor-pointer'
                    src={cityCouncilData && cityCouncilData[0] && cityCouncilData[0].councilImage.asset.url}
                    alt={cityCouncilData && cityCouncilData[0] && cityCouncilData[0].name}
                  />
                  {hoveredIndexes.includes(2) && (
                    <div className='absolute top-44 left-0 w-full flex justify-center items-end transition-opacity duration-300'>
                      <div className='bg-white rounded-s-full rounded-e-full border border-gray-400 p-2 flex items-center'>
                        <a href='https://www.facebook.com/' className='mr-2'>
                          <FaFacebook className='text-gray-500 hover:text-orange-500' />
                        </a>
                        <div className='border-l border-gray-400'></div>
                        <a href='https://www.twitter.com/' className='mx-2'>
                          <FaTwitter className='text-gray-500 hover:text-orange-500' />
                        </a>
                        <div className='border-l border-gray-400'></div>
                        <a href='https://www.linkedin.com/' className='mx-2'>
                          <FaLinkedin className='text-gray-500 hover:text-orange-500' />
                        </a>
                        <div className='border-l border-gray-400'></div>
                        <a href='https://www.instagram.com/' className='mx-2'>
                          <FaInstagram className='text-gray-500 hover:text-orange-500' />
                        </a>
                      </div>
                    </div>
                  )}
                  <div className='p-4 bg-white'>
                    <p className='text-lg font-bold hover:text-red-500 cursor-pointer text-[#202b5d] opacity-90'>{cityCouncilData && cityCouncilData[0] && cityCouncilData[0].name}</p>
                    <p className='text-md text-blue-500 pb-5'>{cityCouncilData && cityCouncilData[0] && cityCouncilData[0].role}</p>
                    <p className='text-md text-gray-500 flex mb-2'>
                      <AiOutlineMail className='mr-2 mt-1' />
                      <span className='hover:text-red-500 cursor-pointer'>{cityCouncilData && cityCouncilData[0] && cityCouncilData[0].email}</span>
                    </p>
                    <p className='text-md text-gray-500 flex'>
                      <FaPhoneAlt className='mr-2 mt-0.5' />
                      <span className='hover:text-red-500 cursor-pointer'>{cityCouncilData && cityCouncilData[0] && cityCouncilData[0].phone}</span>
                    </p>
                  </div>
                </div>
                <div
                  className='shadow relative'
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={() => handleMouseLeave(3)}
                >
                  <img
                    className='cursor-pointer'
                    src={cityCouncilData && cityCouncilData[2] && cityCouncilData[2].councilImage.asset.url}
                    alt={cityCouncilData && cityCouncilData[2] && cityCouncilData[2].name}
                  />
                  {hoveredIndexes.includes(3) && (
                    <div className='absolute top-44 left-0 w-full flex justify-center items-end transition-opacity duration-300'>
                      <div className='bg-white rounded-s-full rounded-e-full border border-gray-400 p-2 flex items-center'>
                        <a href='https://www.facebook.com/' className='mr-2'>
                          <FaFacebook className='text-gray-500 hover:text-orange-500' />
                        </a>
                        <div className='border-l border-gray-400'></div>
                        <a href='https://www.twitter.com/' className='mx-2'>
                          <FaTwitter className='text-gray-500 hover:text-orange-500' />
                        </a>
                        <div className='border-l border-gray-400'></div>
                        <a href='https://www.linkedin.com/' className='mx-2'>
                          <FaLinkedin className='text-gray-500 hover:text-orange-500' />
                        </a>
                        <div className='border-l border-gray-400'></div>
                        <a href='https://www.instagram.com/' className='mx-2'>
                          <FaInstagram className='text-gray-500 hover:text-orange-500' />
                        </a>
                      </div>
                    </div>
                  )}
                  <div className='p-4 bg-white'>
                    <p className='text-lg font-bold hover:text-red-500 cursor-pointer text-[#202b5d] opacity-90'>{cityCouncilData && cityCouncilData[2] && cityCouncilData[2].name}</p>
                    <p className='text-md text-blue-500 pb-5'>{cityCouncilData && cityCouncilData[2] && cityCouncilData[2].role}</p>
                    <p className='text-md text-gray-500 flex mb-2'>
                      <AiOutlineMail className='mr-2 mt-1' />
                      <span className='hover:text-red-500 cursor-pointer'>{cityCouncilData && cityCouncilData[2] && cityCouncilData[2].email}</span>
                    </p>
                    <p className='text-md text-gray-500 flex'>
                      <FaPhoneAlt className='mr-2 mt-0.5' />
                      <span className='hover:text-red-500 cursor-pointer'>{cityCouncilData && cityCouncilData[2] && cityCouncilData[2].phone}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        };

        export default CityCouncil;
