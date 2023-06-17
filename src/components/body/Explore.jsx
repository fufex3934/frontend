import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router';
import './css/Explore.css';
import 'aos/dist/aos.css'
import createClient from '../../client';
import { useTranslation } from 'react-i18next';
const Explore = () => {
    const {t} = useTranslation();
        const navigate = useNavigate();
        const [exploreData,setExploreData] = useState(null);

        useEffect(()=>{
            const fetchData = async ()=>{
                try{
                    const data = await createClient.fetch(`*[_type == "exploreService"]{
                        exploreImage{
                            asset->{
                                _id,
                                url
                            },
                            alt
                        }
                    }`);
                    setExploreData(data);
                }catch(error){
                    console.error(error);
                }
            }
            fetchData();
        },[]);
    return (
        <>
            <div className='block ms-[150px] me-[150px] mt-[50px] p-5 main'>

                <div className='inline w-full sub-main'>
                    <div className="block text-start float-left sub-sub-main">
                        <h3 className="text-3xl  font-bold text-[#329898] font-serif  md:w-[450px] lg:w-[600px]" data-aos="zoom-out" data-aos-easing="linear" data-aos-duration="1500">
                            {t('exploreService.header')}
                        </h3>
                    </div>
                    <div className="text-center float-right -mt-32 md:mt-4 sub-sub-main1" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                        <button onClick={() => navigate('/service')} className="bg-[#329898] text-3xl font-serif hover:bg-white hover:text-[#3bb] text-white  py-2 px-4 rounded-0">
                            {t('exploreService.btn')}
                        </button>
                    </div>
                </div>
            </div>
            <div className="main2">
                <div className="sub-main-2">
                    <div className='text-center image relative' data-aos-duration="1000" data-aos="fade-up" data-aos-easing="linear">
                        <img  src={exploreData && exploreData[0] && exploreData[0].exploreImage.asset.url} 
                        alt={ exploreData && exploreData[0] && exploreData[0].title} 
                        className='w-[250vh] h-60'
                        />
                        <button onClick={() => navigate('/service-department')} className='text-md md:text-sm lg:text-sm absolute bottom-15 text-white p-2 hover:shadow-lg left-7 whitespace-nowrap'>Service Departments</button>
                    </div>
                    <div className='text-center image relative' data-aos="fade-up"
                        data-aos-duration="1500">
                        <img src={exploreData && exploreData[1] && exploreData[1].exploreImage.asset.url}
                         alt={ exploreData && exploreData[1] && exploreData[1].title}
                         className='w-[250vh] h-60'
                          />
                        <button onClick={() => navigate('/city-vistor-guid')}  className='text-md md:text-lg lg:text-sm absolute bottom-15  text-white p-2 hover:shadow-lg left-20 whitespace-nowrap'>City Visitors Guide</button>
                    </div>
                    <div className='text-center image relative' data-aos-duration="1000" data-aos="fade-up" data-aos-easing="linear">
                        <img src={exploreData && exploreData[2] && exploreData[2].exploreImage.asset.url}
                         alt={ exploreData && exploreData[2] && exploreData[2].title}
                         className='w-[250vh] h-60'
                         />
                        <button onClick={() => navigate('/city-adminstration')} className='text-md md:text-lg lg:text-sm absolute bottom-15 text-white p-2 hover:shadow-lg left-20'>City Administrations</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Explore;
