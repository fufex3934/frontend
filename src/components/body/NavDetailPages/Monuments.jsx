import React,{useEffect} from 'react'
import Footer from '../Footer'
import Navs from '../../navbars/navs'
import '../css/Monuments.css'
import {FcLike} from 'react-icons/fc';
import {IoIosHeartDislike} from 'react-icons/io';

const monuments_data = [
  { id: 1,name: 'A', p:'Ratione explicabo nam odit doloribus rem molestiae, maiores corrupti aperiam nesciunt ex adipisci, illum autem voluptatem ipsa. Numquam unde odit repudiandae nisi.', image: 'm1.jpeg', icons: { icon1: <FcLike />, icon2: <IoIosHeartDislike /> } },
  { id: 2, name: 'Ras Makonnen', p: 'In the centre of Ras Makonnen Sq stands a rather Italian-looking, equestrian statue of the ras cast in bronze by the well-known Amhara artist Afewerk Tekle. The ras is said to look towards Somalia and the lands conquered here.The ras is also known as the father of the Emperor Haile Selassie.', image: 'm2.jpeg', icons: { icon1: <FcLike />, icon2: <IoIosHeartDislike /> } },
  { id: 3, name: 'B', p: 'Ratione explicabo nam odit doloribus rem molestiae, maiores corrupti aperiam nesciunt ex adipisci, illum autem voluptatem ipsa. Numquam unde odit repudiandae nisi.', image: 'm8.jpeg', icons: { icon1: <FcLike/>, icon2: <IoIosHeartDislike />  } },
  { id: 4, name: 'B', p: 'Ratione explicabo nam odit doloribus rem molestiae, maiores corrupti aperiam nesciunt ex adipisci, illum autem voluptatem ipsa. Numquam unde odit repudiandae nisi.', image: '8.jpeg', icons: { icon1: <FcLike />, icon2: <IoIosHeartDislike />  } },
  { id: 5, name: 'B', p: 'Ratione explicabo nam odit doloribus rem molestiae, maiores corrupti aperiam nesciunt ex adipisci, illum autem voluptatem ipsa. Numquam unde odit repudiandae nisi.', image: '6.jpeg', icons: { icon1: <FcLike />, icon2: <IoIosHeartDislike />  } },
  { id: 6, name: 'C', p: 'The Harar Jugol Wall is believed to have been built between the 13th and 16th centuries. The Harar Jugol Wall originally had five historic gates providing five entries into five different districts of the city. The wall was built as a defense in medieval times, an imposing 5m high and 3.5km long.', image: 'm6.jpeg', icons: { icon1: <FcLike />, icon2: <IoIosHeartDislike />  } },
  { id: 7, name: 'C', p: 'Ratione explicabo nam odit doloribus rem molestiae, maiores corrupti aperiam nesciunt ex adipisci, illum autem voluptatem ipsa. Numquam unde odit repudiandae nisi.', image: '1.jpeg', icons: { icon1: <FcLike />, icon2: <IoIosHeartDislike />  } },
  { id: 8, name: 'D', p: 'Ratione explicabo nam odit doloribus rem molestiae, maiores corrupti aperiam nesciunt ex adipisci, illum autem voluptatem ipsa. Numquam unde odit repudiandae nisi.', image: '5.jpeg', icons: { icon1: <FcLike />, icon2: <IoIosHeartDislike /> } }
];
const Monuments = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);

  return (
    <>
      <Navs/>
      <div className="wraper">
        <div className="economic" style={{backgroundImage:'url("m2.jpeg")',backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
          <h1 className='text-[#5ff13e]'>Harari Monuments</h1>
        </div>
        <div className="economic-definition text-red-600" style={{ backgroundImage: 'url("m1.jpeg")', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <p style={{ color:'#f13ee5'}}>More efficient, more inclusive, more sustainable: Policies to support economic
            Availability, affordability and proximity of economy to job opportunities, education, culture and amenities are vital</p>
        </div>
      </div>
      <div className='monument-container'>
        <div className="head">
          <h1>Harari Historic Monuments</h1>
        </div>
        <h1 className='text-center font-mono text-[#3bb] text-4xl'>Free Gallary</h1>
        <div className="monument">
          {
            monuments_data.map((src)=>(
              <div className="">
                <img src={src.image} alt="" />
                <button className='mr-3'>{src.icons.icon1}</button>
                <button>{src.icons.icon2}</button>
                <h1 className='text-xl text-blue-500'>{src.name}</h1>
                <p>{src.p}</p>
              </div>
            ))
          }
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Monuments
