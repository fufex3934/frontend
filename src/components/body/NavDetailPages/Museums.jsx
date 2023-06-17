import React,{useEffect} from 'react'
import Navs from '../../navbars/navs'
import Footer from '../Footer'
import '../css/Museums.css'
import {Link} from 'react-router-dom'
const Museums = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);
  const gallary = [
    {id:1, src: '1.jpeg' }, 
    {id: 2, src: '2.jpeg' },
    {id: 3, src: '5.jpeg' },
    {id: 4, src: '6.jpeg' },
    {id: 5, src: '7.jpeg' },
    {id: 6, src: '8.jpeg' },
    {id: 7, src: '9.jpeg' },
    {id: 8, src: '10.jpeg' },
  ]
  return (
    <>
    <Navs/>
    <div className='musuem'>
        <h1 className='text-2xl font-mono text-white'>Experience 5,000 Years Of</h1>
        <h1 className='text-2xl mb-6 font-mono text-white'>Art At Harar Musuem</h1>
        <Link to='https://harari.gov.et/hr/landmarks/sherif-private-musuem' target='_blank' className='link text-xl font-serif px-4 py-2'>Explore</Link>
    </div>
    <div className="art-history text-center mt-8">
      <h1 className='text-4xl font-mono text-[#3bb] text-center'>Art And History Musuem</h1>
      
    </div>
    <div className=" flex justify-center my-5 text-xl p-6">
        <p className='p-4' style={{width:'58%',boxShadow:'0px 0px 10px grey'}}>When it comes to museum, Harar is a magnificent destination for all lovers of art and culture. Whether you're interested in Ethiopian history, modern art or science and technology
          –
          the museums in Harar won't let you down! The choice of exhibitions and venues is huge. Here we present you some of Harar's great museum monuments.</p>
    </div>
      <h1 className='text-4xl text-[#3bb] text-center'>Free Monument Gellary</h1>
    <div className="free-gallary">
          {
            gallary.map((image)=>(
              <img className='' key={image.id} src={image.src} alt="" />
            ))
          }
    </div>
    <div className='description mt-2 flex'>
      <div className="text-center">
        <p className=' font-mono md:text-2xl'>Harari</p>
        <p className=' relative  md:text-2xl -left-5 font-mono'>Musuem</p>
        <p className=' font-mono md:text-2xl'>Gallary</p>
      </div>
      <div className="text-center">
        <h1 className='text-xl font-mono mb-2 md:text-2xl'>Musuem Location</h1>
        <p className='md:text-xl'>Located in Harari Ethiopia</p>
      </div>
      <div className="text-center">
        <h1 className='textl-xl font-mono md:text-2xl'>Hours</h1>
        <p className='md:text-xl'>Open (Monday – Sunday) from 8am to 12pm and 2pm to 6pm</p>
      </div>
    </div>
   
    <Footer/>
    </>
  )
}

export default Museums
