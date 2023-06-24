import React,{useEffect} from 'react'
import Navs from '../../navbars/navs'
import Footer from '../Footer'
import '../css/AnimalExhibition.css'

const AnimalExhibition = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);

  return (
    <>
    <Navs/>
      <div className="background-hyena" style={{backgroundImage:'url("harar-hyena.png")'}}></div>
      <div className="animal-visit-head">
       <h1>Animal To Visit</h1>
      </div>
      <div className="animal-visit">
      </div>
      <div className='lg:bg-white  lg:flex lg:flex-auto lg:justify-between lg:rounded-s-full'>
       
        <h1 className=' hover:text-lg hover:scale-110 hover:bg-green-700 uppercase text-black h-20 mt-6 ml-10 '> Welcome to Harari Animal Exhibiton </h1>
        <img src="./zool.png" alt="" className='rounded-full'/>
      </div>
      <div className='rounded-lg'>
          <img src="./hyne2.jpg" alt=" Hyena exhibition " className='px-5 rounded-[10px] mb-10 w-full h-96 ' />  
      </div>
      <div className='flex flex-auto justify-center w-full gap-10 bg-teal-600 box-border'>
      
        <img src="./hyenaman.jpg" alt=" hyenaman" className='w-[388px] h-[388px] rounded-full hover:scale-110 duration-300' />
       
        <p className='lg:bottom-2 lg:mt-2 mb-3  lg:border lg:bg-neutral-50 lg:rounded-[20px]  lg:mx-[15px] p-5 hover:selection:bg-green-600 hover:visited:text-clip'>
          Written records indicate that spotted hyenas have been 
          present in the walled Ethiopian city of Harar for at least 500 years, where they
         sanitise the city by feeding on its organic refuse.
         The practice of regularly feeding them did not begin until the 1960s.
         The first to put it into practice was a farmer who began feeding the hyenas 
         in order to stop them from attacking his livestock, with his descendants having s
         continued the practice. Some of the hyena men give each hyena a name they respond to,
          and call to them using a "hyena dialect", a mixture of English and Oromo. 
          The hyena men feed the hyenas by mouth, using pieces of raw meat provided by spectators.[3] 
          Tourists usually organise to watch the spectacle through a guide for a negotiable rate.
           As of 2002, the practice is considered to be on the decline, 
          with only two practicing hyena men left in Harar
        </p>
       </div>
       <p className='ml-10 mt-4 mb-8'>
          <h1 className='font-medium uppercase'>HyenaMan</h1>
        </p>
     
      <div className=' mx-5 bg-slate-50 my-5'>
      <div className=" max-w-[1240px] border-emerald-950 mx-auto  bg-slate-50  grid md:grid-cols-3 py-5 gap-8 mt-10 rounded-2xl">
                <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-full hover:scale-105 duration-300">
                    <img className="w-[360px] rounded-[10px] mx-auto bg-white hover:bg-violet-600" src="./hynish.jpg" alt=" Boss "  />
                    <h2 className="text-2xl font-bold text-center py-8">GRAFF </h2>
                    <p className=" text-center text-4xl px-1 font-medium"> ETB</p>
                    <div className="font-medium text-center">
                        <p className="py-2 border-b mx-6"> This is the </p>
                        <p className="py-2 border-b mx-6">Graffi center</p>
                        <p className="py-2 border-b mx-6">please come and visit</p>
                    </div>
                    <button className="bg-[#00df9a] text-black h-12 rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'">Start Trial</button>
                    
                    </div>
                    <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-full hover:scale-105 duration-300">
                       <img className="bg-white w-[360px] h-[288px] rounded-[10px] mx-auto" src="./hy.jpg" alt="HyenaMan" />
                       <h2 className="text-2xl font-bold text-center py-8">Hyena  </h2>
                       <p className=" text-center text-4xl px-1 font-medium"> please come to visit Us </p>
                        <div className="font-medium text-center">
                           <p className="py-2 border-b mx-6"> come to visit us and enjoy</p>
                           <p className="py-2 border-b mx-6">1 Granted User</p>
                           <p className="py-2 border-b mx-6">Send up to 2 GB</p>
                       </div>
                       <button className="bg-[#00df9a] text-black h-12 rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'">Start Trial</button>
                    </div>
                    <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-full  bg-gray-200 hover:scale-105 duration-300">
                        <img className="w-[360px] h-[288px] rounded-[10px] mx-auto bg-white" src="./hy.jpg" alt="" />
                        <h2 className="text-2xl font-bold text-center py-8">Triple </h2>
                        <p className=" text-center text-4xl px-1 font-medium"> 2000 ETB</p>
                        <div className="font-medium text-center">
                             <p className="py-2 border-b mx-6"> 500 GB Storag</p>
                             <p className="py-2 border-b mx-6">1 Granted User</p>
                             <p className="py-2 border-b mx-6">Send up to 2 GB</p>
                        </div>
                        <button className="bg-[#00df9a] h-12 text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'">Start Trial</button>
                    
                  </div>

            </div>
        </div>
      <Footer/>
    </>
  )
}

export default AnimalExhibition
