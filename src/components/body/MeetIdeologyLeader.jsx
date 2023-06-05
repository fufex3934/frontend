import React, {useState, useEffect } from 'react'
import './css/MeetIdeologyLeader.css'
import 'aos/dist/aos.css'
import createClient from '../../client';
const MeetIdeologyLeader = () => {
            const [leaderData,setLeaderData] = useState(null);
            useEffect(()=>{
                const fetchData = async ()=>{
                    try{
                    const data = await createClient.fetch(`*[_type == "meetLeader"]{
                        descriptionOne,
                        descriptionTwo,
                        leaderImage{
                            asset->{
                                _id,
                                url
                            },
                            alt
                        },
                        quote,
                        name
                    }`);
                    setLeaderData(data);
                    }catch(error){
                        console.error(error);
                    }
                }
                fetchData();
            },[]);
  return (
    <>
    <div className='main medium-margin'>
        <div className='main-text'>
            <h1 className='h1' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">
                Meet Ideological leader for youth generation
            </h1>
            <p className='p1' data-aos-duration="1000" data-aos="fade-up" data-aos-easing="linear">
               {leaderData && leaderData[0] && leaderData[0].descriptionOne}
            </p>
            <p className='p2' data-aos-duration="1000" data-aos="fade-up" data-aos-easing="linear">
            {leaderData && leaderData[0] && leaderData[0].descriptionTwo}
            </p>
            <p className='qouet' data-aos-duration="1000" data-aos="fade-up" data-aos-easing="linear">
                “Stand at the top of a cliff and jump off and build your wings on the way down.”<br/>
                <span>– Ordin Bedri, Mayor</span>
            </p>
            <button onClick={() => navigate('/leader')} >
                <div className='youtubeIcon' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="5000">
                    <div className='triangle' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1000"></div>
                </div>
                <span className='span' data-aos-duration="5000" data-aos="fade-up" data-aos-easing="linear">Video Intro<br />
                    About Our Mayor
                </span>
            </button>
        </div>
        <div className='main-image'>
            <img src="images/mayor.jpeg" alt="" className="person" data-aos-duration="2000" data-aos="fade-up" data-aos-easing="linear" />
            <img src="images/hararicity.jpg" alt="" className='city' data-aos-easing="linear" data-aos-duration="2500" data-aos="zoom-in-left" />   
        </div>
    </div>
    </>
  )
}

export default MeetIdeologyLeader;