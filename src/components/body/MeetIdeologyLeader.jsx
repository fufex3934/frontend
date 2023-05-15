import React, { useEffect } from 'react'
import './css/MeetIdeologyLeader.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const MeetIdeologyLeader = () => {
    useEffect(()=>{
        Aos.init();
    },[])
  return (
    <>
    <div className='main'>
        <div className='main-text'>
            <h1>
                Meet Ideological leader for youth generation
            </h1>
            <p className='p1'>
                Mayor Ordin Bedri is committed to solving problems for town
                people across the state under his leadership.
            </p>
            <p className='p2'>
                Expanding access to affordable healthcare, improving skills, respecting 
                working families as the City’s 20th mayor. 
                Mayor Ordin was won in the serve a sixth term on Octorber 7, 2018.
            </p>
            <p className='qouet'>
                “Stand at the top of a cliff and jump off and build your wings on the way down.”<br/>
                <span>– Ordin Bedri, Mayor</span>
            </p>
            <a href="">
                <div className='youtubeIcon'>
                    <div className='triangle'></div>
                </div>
            </a>
            <span className='span'>Video Intro<br/>
                About Our Municipal</span>
        </div>
        <div className='main-image'>
            <img src="images/mayor.jpeg" alt="" className="person" data-aos-duration="1000" data-aos="fade-up" data-aos-easing="linear" />
            <img src="images/hararicity.jpg" alt="" className='city' data-aos-easing="linear" data-aos-duration="1500" data-aos="zoom-in-left" />   
        </div>
    </div>
    </>
  )
}

export default MeetIdeologyLeader;