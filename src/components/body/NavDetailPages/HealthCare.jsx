import React,{useEffect} from 'react'
import Navs from '../../navbars/navs'
import Footer from '../Footer'
import '../css/HealthCare.css'

const hospitals_data= [
  { id: 1, image: 'harari-general-hospital.jpeg', description: { h1: 'Harar General Hospital', p1: 'The aim and objective of our hospital is to provide a high standard of care and support to every service user. To provide a safe, welcoming, nurturing environment where service users are able to develop and grow at their own pace to maximize their potential emotionally, physically, intellectually, socially and spiritually. Hospitals also promote awareness of health care among all sections of the Ethiopian people.', p2:'Our vision is to be a national and international leader in healthcare, rooted in our communities.'} },
  {
    id: 2, image: 'hiwot-fana.jpg', description: {
      h1: 'Hiwot Fana Specialized Hospital', p1: 'Our aim is to update the knowledge and skill of the Health & Hospital Administrators and other personnel involved in  the management of   health care organization through continuous education and research and to promote   and   grant recognition to research in the fields of Health and Hospital Management and to grant awards, scholarship and assistance in other suitable forms to meritorious individuals and institutions.', p2: 'Our vision is to improving the health and wellbeing of the population in our country'} },
  {
    id: 3, image: 'jugel-hospital.jpg', description: {
      h1: 'Jugel Historic Hospital', p1: 'Our aim To promote a forum for the exchange of ideas and information among  health and hospital planners, academicians, administrators, various statutory bodies and the general public for the improvement of Hospital and Health Care delivery Systems and to develop norms and standards for accreditation of the Health Care Organization and adopt means of evaluation of such institutions, so as to improve the quality of health care in the community.', p2: 'Our Core objective is to ensure services are timely and accessible to all parts of the community we serve'} }
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
                  <p className='md:text-xl lg:text-start'>{item.description.p1}</p>
                  <p className='md:text-xl lg:text-start'>{item.description.p2}</p>
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
