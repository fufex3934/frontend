import React,{useEffect} from 'react'
import { useState } from 'react';
import Navs from '../../navbars/navs'
import Footer from '../Footer'


const AnimalExhibition = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);
  const [like, setLike] = useState(50),
  [isLike,setisLike]=useState(false)
  const onLikedClick=()=>{
    setLike(like+(isLike?-1:1));
    setisLike(!isLike);

  }

  const[disLike,setDislike]=useState(0),
  [isDislike,setisDislike] = useState(false)
     const DisLike=()=>{
     setDislike(disLike+(isDislike?-1:1));
      setisDislike(!isDislike);
   }
 
  return (
    <>
    <Navs/>
      <div className='bg-white mt-10 mb-10 h-webkit-fill-available'>
       
        <h1 className='border shadow-black pt-3 hover:text-lg hover:scale-110 uppercase text-black text-2xl text-center  mt-6 ml-10 '> Welcome to Harari Animal Exhibiton  Center </h1>
        
      
      </div>
      <div className='grid md:grid-cols-3 w-auto h-webkit-fill-available  gap-6 box-border  mt-5 mb-14 mr-5 bg-slate-50 shadow-slate-400'>
        <div className='ml-3 bg-teal-100 hover:scale-105 duration-300 shadow-md rounded-[10px] '><img src="./hyne2.jpg" alt=" exh " className=' ml-3 rounded-[20px] mb-5   w-[400px] h-[400px] mt-5 ' /></div>
        <div className='shadow-md bg-cyan-100 hover:scale-105 duration-300  rounded-[10px]    '> <img src='./hynish.jpg' alt='hyy' className=' ml-5 mr-4 rounded-[20px] mb-5   w-[400px] h-[400px]  mt-5'/></div>
        <div className='hover:scale-105 bg-amber-100 duration-300 shadow-md rounded-[10px]'><img src='./hyne3.jpg' alt='hyy' className='  ml-3 mr-4 rounded-[20px] mb-5  w-[400px] mt-5  h-[400px] '/> </div>
      </div>
      
      <div className=' flex-auto grid md:grid-cols-3 justify-center shadow-lg mx-3 w-auto mt-10 h-webkit-fill-available rounded-[5px] gap-10  bg- box-border'>
      
          <div className=''>
            <img src="./hyenaman.jpg" alt=" hyenaman" className='w-[350px] h-[350px] mb-5 mt-6 ml-3 pl-5 rounded-[40px] hover:scale-110 duration-300' />
          </div>
          <div>
          <p className='ml-[15px] mr-[15px]  border-1 w-auto h-[350px] rounded-[20px] p-5 mt-5 mb-3 shadow-xl bg-neutral-50 dark:md:hover:text-lg hover:scale-105'  >
          Written records indicate that spotted hyenas have been 
          present in the walled Ethiopian city of Harar for at least 500 years, where they
          sanitise the city by feeding on its organic refuse.[1]
          The practice of regularly feeding them did not begin until the 1960s.s
          The first to put it into practice was a farmer who began feeding the hyenas
          in order to stop them from attacking his livestock, with his descendants having 
         continued the practice.[2] Some of the hyena men give each hyena a name they respond to,
          and call to them using a "hyena dialect", a mixture of English and Oromo. 
          <h1 className='mt-1 mb-3 '>Hyenaman</h1>
        </p>
          </div>
      
          
        <div>
         <p className=' mb-3  border bg-neutral-50 rounded-[20px] w-auto h-[350px] mx-[15px] p-5 mt-5 dark:md:hover:text-lg hover:scale-110'>
          Written records indicate that spotted hyenas have been 
          present in the walled Ethiopian city of Harar for at least 500 years, where they
          sanitise the city by feeding on its organic refuse.[1]
          The practice of regularly feeding them did not begin until the 1960s.
          The first to put it into practice was a farmer who began feeding the hyenas 
         in order to stop them from attacking his livestock, with his descendants having 
         continued the practice.[2] Some of the hyena men give each hyena a name they respond to,
          and call to them using a "hyena dialect", a mixture of English and Oromo. 
        
        </p>
      </div>
     
    </div>
       
     
      <div className=' mx-5 bg-slate-50 my-5 '>
      <div className=" max-w-[1440px] border-emerald-950 shadow-xl mx-auto bg-slate-50  grid md:grid-cols-3 py-5 gap-8 mt-10 rounded-2xl">
                <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-[30px] hover:scale-105 duration-300">
                    <img className="w-[360px] rounded-[10px] mx-auto bg-white hover:bg-violet-600" src="./graff1.jpg" alt=" GRAFF "  />
                    <h2 className="text-2xl font-bold text-center py-8">GRAFF </h2>
                    <p className=" text-center text-4xl px-1 font-medium"> ETB</p>
                    <div className="font-medium text-center">
                        <p className="py-2 border-b mx-6"> This is the </p>
                        <p className="py-2 border-b mx-6">Graffi center</p>
                        <p className="py-2 border-b mx-6">please come and visit</p>
                    </div>
                    <div className='grid md:grid-cols-2 gap-3 px-3' >
                        
                        <button className="bg-[#00df9a] px-3 h-12 text-black 
                          rounded-md font-medium w-[100px] mr-2 my-3 py-3 mx-10" onClick={onLikedClick}> <i className="fa fa-thumbs-up"> Like {like}</i>
                        </button>
                          <button className="bg-[#00df9a] h-12 text-black 
                           rounded-md font-medium w-[100px] my-3 mx-10 py-3" onClick={ DisLike}><i className="fa fa-thumbs-down"> DisLike {disLike}</i>
                          </button>
                  
                    </div>
                    
                    </div>
                    <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-[30px] hover:scale-105 duration-300">
                       <img className="bg-white w-[360px] h-[288px] rounded-[10px] mx-auto" src="./hy.jpg" alt="HyenaMan" />
                       <h2 className="text-2xl font-bold text-center py-8">Hyena  </h2>
                       <p className=" text-center text-4xl px-1 font-medium"> please come to visit Us </p>
                        <div className="font-medium text-center">
                           <p className="py-2 border-b mx-6"> come to visit us and enjoy</p>
                           <p className="py-2 border-b mx-6">1 Granted User</p>
                           <p className="py-2 border-b mx-6">Send up to 2 GB</p>
                       </div>
                       <div className='grid md:grid-cols-2 gap-3 px-3' >
                        
                        <button className="bg-[#00df9a] px-3 h-12 text-black 
                          rounded-md font-medium w-[100px] mr-2 my-3 py-3 mx-10" onClick={onLikedClick}> <i className="fa fa-thumbs-up"> Like {like}</i>
                        </button>
                          <button className="bg-[#00df9a] h-12 text-black 
                           rounded-md font-medium w-[100px] my-3 mx-10 py-3" onClick={ DisLike}><i className="fa fa-thumbs-down"> DisLike {disLike}</i>
                          </button>
                  
                    </div>
                    </div>
                    <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-[30px]  bg-gray-200 hover:scale-105 duration-300">
                        <img className="w-[360px] h-[288px] rounded-[10px] mx-auto bg-white" src="./hy.jpg" alt="" />
                        <h2 className="text-2xl font-bold text-center py-8">Triple </h2>
                        <p className=" text-center text-4xl px-1 font-medium"> 2000 ETB</p>
                        <div className="font-medium text-center">
                             <p className="py-2 border-b mx-6"> 500 GB Storag</p>
                             <p className="py-2 border-b mx-6">1 Granted User</p>
                             <p className="py-2 border-b mx-6">Send up to 2 GB</p>
                        </div>
                        
                        <div className='grid md:grid-cols-2 gap-3 px-3' >
                        
                            <button className="bg-[#00df9a] px-3 h-12 text-black 
                              rounded-md font-medium w-[100px] mr-2 my-3 py-3 mx-10" onClick={onLikedClick}> <i className="fa fa-thumbs-up"> Like {like}</i>
                            </button>
                              <button className="bg-[#00df9a] h-12 text-black 
                               rounded-md font-medium w-[100px] my-3 mx-10 py-3" onClick={ DisLike}><i className="fa fa-thumbs-down"> DisLike {disLike}</i>
                              </button>
                      
                        </div>
                    
                  </div>

            </div>
        </div>
      <Footer/>
    </>
  )
}

export default AnimalExhibition
