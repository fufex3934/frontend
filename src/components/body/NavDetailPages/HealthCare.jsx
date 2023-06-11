import React,{useEffect} from 'react'
import Navs from '../../navbars/navs'
import Footer from '../Footer'
import '../css/HealthCare.css'

const hospitals_data= [
  { id: 1, image: 'harari-general-hospital.jpeg', description: { h1: 'Harar General Hospital', p1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, architecto? Recusandae sequi blanditiis atque quis corporis voluptatibus suscipit ex ea aliquam, optio, accusamus animi nihil fugit exercitationem quidem, eius ipsam!', p2:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, architecto? Recusandae sequi blanditiis atque quis corporis voluptatibus suscipit ex ea aliquam, optio, accusamus animi nihil fugit exercitationem quidem, eius ipsam!'} },
  { id: 2, image: 'hiwot-fana.jpg', description: { h1: 'Hiwot Fana Specialized Hospital', p1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, architecto? Recusandae sequi blanditiis atque quis corporis voluptatibus suscipit ex ea aliquam, optio, accusamus animi nihil fugit exercitationem quidem, eius ipsam!', p2:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, architecto? Recusandae sequi blanditiis atque quis corporis voluptatibus suscipit ex ea aliquam, optio, accusamus animi nihil fugit exercitationem quidem, eius ipsam!'} },
  { id: 3, image: 'jugel-hospital.jpg', description: { h1: 'Jugel Historic Hospital', p1: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, architecto? Recusandae sequi blanditiis atque quis corporis voluptatibus suscipit ex ea aliquam, optio, accusamus animi nihil fugit exercitationem quidem, eius ipsam!', p2:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, architecto? Recusandae sequi blanditiis atque quis corporis voluptatibus suscipit ex ea aliquam, optio, accusamus animi nihil fugit exercitationem quidem, eius ipsam!'} }
];

const HealthCare = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);

  return (
    <>
      <Navs/>
      <div className='main-health'>
        <div className='health' >
          <div className="health-description">
            <h1 className='text-7xl font-serif font-bold'>Health  Care</h1>
            <h3 className='text-7xl font-light'>For Hole Human</h3>
            <p className='p text-xl mt-4 w-[60%]'>In Healthcare Sectore,we belive service excellence is the facililty of the hospital for the rest of health center.</p>
          </div>
          <div className='health-icon' >
            <img src="global-health-care-icon.png" width='70%' alt="" />
          </div>
        </div>
        <div className="hospitals">
          <div className="hospitals-title">
            <h1 className='text-5xl font-serif text-center'>Our Hospitals</h1>
          </div>
          {
            hospitals_data.map((item)=>(
              <div className="hospital">
                <div className="hospital-image">
                  <img src={item.image}/>
                </div>
                <div className="description">
                  <h1 className='text-center font-serif text-3xl mb-2 text-[#3bb]'>{item.description.h1}</h1>
                  <p className='md:text-xl'>{item.description.p1}</p>
                  <p className='md:text-xl'>{item.description.p2}</p>
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
export default HealthCare
