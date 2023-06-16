// import Dist from '@vitejs/plugin-react'
import React,{useEffect} from 'react'
import Navs from '../../navbars/navs'
import Footer from '../Footer'
 import hjogol from '/hjogol.jpg'

const Museums = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);

  return (
    <>
    <Navs/>
    <div>
       <div style={{
        width:'',
        height:'700px',
        backgroundSize:'cover',
        backgroundImage:`url(${hjogol})`
       }}>
         <div>
         <h1 className='text-lg uppercase  
             text-center justify-center mt-10 mb-10'>
              Welcome to Harari regional state museum center</h1>
         </div>
         <p>Baga gara magaalaa jaalalaa fi tokkummaatti Nagaan Dhuftan</p>
         
       </div>
    </div>
    <Footer/>
    </>
  )
}

export default Museums
