import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react'
import './css/MeetIdeologyLeader.css'
import 'aos/dist/aos.css'
const MeetIdeologyLeader = () => {
    const navigate = useNavigate();
    
  return (
    <>
    <div className='main medium-margin'>
        <div className='main-text'>
            <h1 className='h1' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500">
                Meet Ideological leader for youth generation
            </h1>
            <p className='p1' data-aos-duration="1000" data-aos="fade-up" data-aos-easing="linear">
                Mayor Ordin Bedri is committed to solving problems for town
                people across the state under his leadership.
            </p>
            <p className='p2' data-aos-duration="1000" data-aos="fade-up" data-aos-easing="linear">
                Expanding access to affordable healthcare, improving skills, respecting 
                working families as the City’s 20th mayor. 
                Mayor Ordin was won in the serve a sixth term on Octorber 7, 2018.
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