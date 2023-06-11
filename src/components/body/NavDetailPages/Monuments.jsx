import React from 'react'
import { IoIosHeartDislike } from 'react-icons/io'
import { FcLike } from 'react-icons/fc'
import Footer from '../Footer'
import Navs from '../../navbars/navs'
import '../css/Monuments.css'

const monuments_data = [
  { name: 'A', p:'Ratione explicabo nam odit doloribus rem molestiae, maiores corrupti aperiam nesciunt ex adipisci, illum autem voluptatem ipsa. Numquam unde odit repudiandae nisi.', image: 'harari-general-hospital.jpeg', icons: { icon1: <FcLike />, icon2: <IoIosHeartDislike /> } },
  { name: 'A', p: 'Ratione explicabo nam odit doloribus rem molestiae, maiores corrupti aperiam nesciunt ex adipisci, illum autem voluptatem ipsa. Numquam unde odit repudiandae nisi.', image: 'harari-general-hospital.jpeg', icons: { icon1: <FcLike />, icon2: <IoIosHeartDislike /> } },
  { name: 'B', p: 'Ratione explicabo nam odit doloribus rem molestiae, maiores corrupti aperiam nesciunt ex adipisci, illum autem voluptatem ipsa. Numquam unde odit repudiandae nisi.', image: 'hiwot-fana.jpg', icons: { icon1: <FcLike/>, icon2: <IoIosHeartDislike />  } },
  { name: 'B', p: 'Ratione explicabo nam odit doloribus rem molestiae, maiores corrupti aperiam nesciunt ex adipisci, illum autem voluptatem ipsa. Numquam unde odit repudiandae nisi.', image: 'hiwot-fana.jpg', icons: { icon1: <FcLike />, icon2: <IoIosHeartDislike />  } },
  { name: 'B', p: 'Ratione explicabo nam odit doloribus rem molestiae, maiores corrupti aperiam nesciunt ex adipisci, illum autem voluptatem ipsa. Numquam unde odit repudiandae nisi.', image: 'hiwot-fana.jpg', icons: { icon1: <FcLike />, icon2: <IoIosHeartDislike />  } },
  { name: 'C', p: 'Ratione explicabo nam odit doloribus rem molestiae, maiores corrupti aperiam nesciunt ex adipisci, illum autem voluptatem ipsa. Numquam unde odit repudiandae nisi.', image: 'jugel-hospital.jpg', icons: { icon1: <FcLike />, icon2: <IoIosHeartDislike />  } },
  { name: 'C', p: 'Ratione explicabo nam odit doloribus rem molestiae, maiores corrupti aperiam nesciunt ex adipisci, illum autem voluptatem ipsa. Numquam unde odit repudiandae nisi.', image: 'jugel-hospital.jpg', icons: { icon1: <FcLike />, icon2: <IoIosHeartDislike />  } },
  { name: 'D', p: 'Ratione explicabo nam odit doloribus rem molestiae, maiores corrupti aperiam nesciunt ex adipisci, illum autem voluptatem ipsa. Numquam unde odit repudiandae nisi.', image: 'jugel-hospital.jpg', icons: { icon1: <FcLike />, icon2: <IoIosHeartDislike /> } }
];
const Monuments = () => {
  return (
    <>
      <Navs/>
      <div className='monument-container'>
        <div className="head">
          <h1>Harari Historic Monuments</h1>
        </div>
        <div className="monument">
        {
          monuments_data.map((monument)=>(
              <div className="layout">
                <div className="image" style={{backgroundImage:`url(${monument.image})`}}>
                  <div className="icon">
                    <p className='hov-effect'>
                      <span className='text-white text-xl'>Over View</span>
                      <p className='text-white'>{monument.p}</p>
                    </p>
                  </div>
                </div>
                <div className="only-icons mt-2">
                  <button className='text-xl mr-3 text-gray-400'>{monument.icons.icon1}</button>
                  <button className='text-xl text-gray-400'>{monument.icons.icon2}</button>
                </div>
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
