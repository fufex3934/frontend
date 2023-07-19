import React,{useEffect} from 'react'
import Navs from '../../navbars/navs'
import Footer from '../Footer'
import '../css/AnimalExhibition.css'
import { useTranslation } from 'react-i18next'
const AnimalExhibition = () => {
  const {t}= useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);

  return (
    <>
    <Navs/>
      <div className="background-hyena" style={{backgroundImage:'url("harar-hyena.png")'}}></div>
      <div className="animal-visit-head">
       <h1>{t('animal.h1')}</h1>
      </div>
      <div className='lg:bg-white  lg:flex lg:flex-auto lg:justify-between lg:rounded-s-full'>
        <h1 className=' uppercase text-black h-20 mt-6 mx-auto text-center'>{t('animal.h2')} </h1>
        <img src="./zool.png" alt="" className='rounded-full'/>
      </div>
      <div className='rounded-lg'>
          <img src="./hyne2.jpg" alt=" Hyena exhibition " className='px-5 rounded-[10px] mb-10 w-full h-96 ' />  
      </div>
      <div className='flex flex-col lg:flex-auto lg:flex-row justify-center w-full gap-10 bg-teal-600 box-border'>
      
        <img src="./hyenaman.jpg" alt=" hyenaman" className='w-full lg:w-[388px] h-[388px] rounded-full lg:hover:scale-110 duration-300' />
        <p className='lg:bottom-2 lg:mt-2 mb-1  lg:border lg:bg-neutral-50 lg:rounded-[20px]  lg:mx-[15px] p-5 pb-0 hover:selection:bg-green-600 hover:visited:text-clip'>
        {t('animal.p1')}
        </p>
       
        <p className='lg:bottom-2 lg:mt-2 mb-3  lg:border lg:bg-neutral-50 lg:rounded-[20px]  lg:mx-[15px] p-5 hover:selection:bg-green-600 hover:visited:text-clip'>
        {t('animal.p2')}
        </p>
       </div>
       <p className='ml-10 mt-4 mb-8'>
          <h1 className='font-medium uppercase'>{t('animal.h3')}</h1>
        </p>
     
      <div className=' mx-5 bg-slate-50 my-5'>
      <div className=" max-w-[1240px] border-emerald-950 mx-auto  bg-slate-50  grid md:grid-cols-3 py-5 gap-8 mt-10 rounded-2xl">
                <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-full hover:scale-105 duration-300">
                    <img className="w-[360px] rounded-[10px] mx-auto bg-white hover:bg-violet-600" src="./hynish.jpg" alt=" Boss "  />
                    <h2 className="text-2xl font-bold text-center py-8">{t('animal.h4')} </h2>
                   
                    <div className="font-medium text-center">
                        <p className="py-2 border-b mx-6"> {t('animal.p3')}  </p>
                        <p className="py-2 border-b mx-6">{t('animal.p4')} </p>
                        <p className="py-2 border-b mx-6">{t('animal.p5')}</p>
                    </div>
                    <p className=" text-black h-12 rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'">{t('animal.p6')} </p>
                    
                    </div>
                    <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-full hover:scale-105 duration-300">
                       <img className="bg-white w-[360px] h-[288px] rounded-[10px] mx-auto" src="./hy.jpg" alt="HyenaMan" />
                       <h2 className="text-2xl font-bold text-center py-8">{t('animal.h5')}  </h2>
                       <p className=" text-center text-4xl px-1 font-medium"> {t('animal.h6')} </p>
                        <div className="font-medium text-center">
                           <p className="py-2 border-b mx-6"> {t('animal.p7')}</p>
                           <p className="py-2 border-b mx-6">{t('animal.p8')} </p>
                           <p className="py-2 border-b mx-6">{t('animal.p9')}</p>
                       </div>
                       <button className=" text-black h-12 rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'">{t('animal.p10')} </button>
                    </div>
                    <div className="w-full shadow-xl flex flex-col py-4 my-4 rounded-full  bg-gray-200 hover:scale-105 duration-300">
                        <img className="w-[360px] h-[288px] rounded-[10px] mx-auto bg-white" src="eagle.jpg" alt="" />
                        <h2 className="text-2xl font-bold text-center py-8">{t('animal.h7')}</h2>
                        <p className=" text-center text-4xl px-1 font-medium">{t('animal.h8')} </p>
                        <div className="font-medium text-center">
                             <p className="py-2 border-b mx-6"> {t('animal.p11')} </p>
                             <p className="py-2 border-b mx-6">{t('animal.p12')} </p>
                             <p className="py-2 border-b mx-6">{t('animal.p12')}</p>
                        </div>
                        <button className="h-12 text-black rounded-md font-medium w-[200px] mx-auto my-6 px-6 py-3'">{t('animal.p13')}</button>
                    
                  </div>

            </div>
        </div>
      <Footer/>
    </>
  )
}

export default AnimalExhibition
