import React,{useState,useEffect} from 'react'

import { MdOutlineAlarm }from 'react-icons/md';
import { IoLocationOutline }from 'react-icons/io5';
import './css/UpcomingEvent.css';
import createClient from '../../client';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CityDocuments from './CityDocuments';
import { useTranslation } from 'react-i18next';



const UpcomingEvent = () => {
    const {t} = useTranslation();
    const event= [
        {id:1,name:'event',text1: `${t('upcomingEvents.text1')}`},
        {id:2, name: 'event', text2: `${t('upcomingEvents.text2')}` }
    ];
    const navigate = useNavigate();
    const [upcomingData,setUpcomingData] = useState(null);
    const date1 = upcomingData && upcomingData[0] && new Date(upcomingData[0].date);
    const formattedDate1 = date1 ? format(date1, 'MMMM d, yyyy @ HH:mm') : '';
    const date2 = upcomingData && upcomingData[1] && new Date(upcomingData[1].date);
    const formattedDate2 = date2 ? format(date2, 'MMMM d, yyyy @ HH:mm') : '';
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
              const data = await createClient.fetch(`*[_type == "upcomingEvents"]{
                upcomingImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                title,
                slug,
                date,
                place
              }`);
              setUpcomingData(data);
            }catch(error){
                console.error(error);
            }
        }
        fetchData();
    },[]);
  return (
    <div className='main-upcoming-event'>
        <div className='sub-main-upcoming-event-left'>
              {event.map((item) => (
                  <div key={item.id} className='text-top'>
                       <div className='float-left'>
                          <h1>{item.text1}</h1>
                      </div>
                       <div className='float-right'>
                          <button onClick={() => navigate('/timely-news')} className='text-[#329898] hover:underline'>{item.text2}</button>
                        </div>
                  </div>
              ))}
            

            <div className='text-bottom'>
                  <div className='one' data-aos-duration="1000" data-aos="zoom-in" data-aos-easing="linear">
                    <div className=''>
                        <img src={upcomingData && upcomingData[0] && upcomingData[0].upcomingImage.asset.url} alt={upcomingData && upcomingData[0] && upcomingData[0].upcomingImage.alt} />
                    </div>
                    <div className='pt-4'>
                          <Link to= '/upcoming-detail1' className='text-[#329898] text-lg'>Conference</Link><br />
                    </div>
                    <div className='pt-2'>
                        <Link to = '/upcoming-detail1' className='text-xl  font-serif leading-snug tracking-tight font-bold text-[#329898] hover:underline'>{`${upcomingData && upcomingData[0] && upcomingData[0].title.substring(0,50)}...`}</Link>
                    </div>
                      <div className='pt-2 whitespace-nowrap flex text-center'>
                          <MdOutlineAlarm className='relative top-1' />
                          <span className='pl-2'>{formattedDate1}</span>
                      </div>
                      <div className='pt-2 whitespace-nowrap flex text-center'>
                          <IoLocationOutline className='relative top-1' />
                          <span className='pl-2'>{upcomingData && upcomingData[0] && upcomingData[0].place.substring(0,40)}</span>
                      </div>
                    <div className="mt-8">
                        <Link to='/upcoming-detail1' className='hover:bg-[#329898] hover:text-white'style={{border:'1px solid grey',padding:'10px'}}>More Details</Link>
                    </div>
                </div>

                  <div className='two' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">
                    <div className=''>
                        <img src={upcomingData && upcomingData[0] && upcomingData[1].upcomingImage.asset.url} alt={upcomingData && upcomingData[1] && upcomingData[1].upcomingImage.alt} />
                    </div>
                    <div className='pt-4'>
                          <Link to= '/upcoming-detail2' className='text-[#329898] text-lg'>Conference</Link><br />
                    </div>
                    <div className='pt-2'>
                        <Link to = '/upcoming-detail2' className='text-xl  font-serif leading-snug tracking-tight font-bold text-[#329898] hover:underline'>{`${upcomingData && upcomingData[1] && upcomingData[1].title.substring(0,60)}...`}</Link>
                    </div>
                    <div className='pt-2 whitespace-nowrap flex text-center'>
                        <MdOutlineAlarm className='relative top-1'/>
                        <span className='pl-2'>{formattedDate2}</span>
                    </div>
                    <div className='pt-2 whitespace-nowrap flex text-center'>
                        <IoLocationOutline className='relative top-1'/>
                        <span className='pl-2'>{upcomingData && upcomingData[1] && upcomingData[1].place.substring(0,40)}</span>
                    </div>
                    <div className="mt-8">
                        <Link to='/upcoming-detail2' className='hover:bg-[#329898] hover:text-white' style={{ border: '1px solid grey', padding: '10px' }}>More Details</Link>
                    </div>
                </div>
            </div>
        </div>
        
        <CityDocuments/>
   </div>
  )
}

export default UpcomingEvent