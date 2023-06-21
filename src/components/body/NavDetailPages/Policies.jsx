import React,{useEffect} from 'react'
import Navs from '../../navbars/navs'
import Footer from '../Footer'
import '../css/Policies.css'

const policies = [
  {
    src:'al.png',
    heading: "Agriculture and rural development",
    content: "The Harari common agricultural policy (CAP) ensures food security for citizens, affordable products and a sustainable management of natural resources."
  },
  {
    src: 'itl.jpeg',
    heading: "Domostic And Foreign Trade",
    content: "We want to ensure that trade between countries is fair and beneficial for all parties involved and to strengthen the domestic economy by protecting domestic industries from foreign competition and by promoting exports of quality products and to promote collaboration between countries"
  },
  {
    src: 'tl.jpeg',
    heading: "Business and industry",
    content: "The Harari industrial policy aims to increase the share of manufacturing in GDP. Small business and entrepreneurship ensure economic growth, innovation and jobs."
  },
  {
    src: 'ecl.jpeg',
    heading: "Economic Competition",
    content: "The Harari police applies competition law to businesses that operate within the region and nation, to protect consumers and foster competition."
  },
  {
    src: 'lll.jpeg',
    heading: "Labor Law",
    content: "We want to ensure that workers are treated fairly and that they are not exploited by their employers and also help to promote economic growth by ensuring that workers are paid fairly and that they have access to benefits such as health insurance and retirement plans"
  },
  {
    src: 'al.png',
    heading: "Culture and media",
    content: "  To promote social cohesion by promoting cultural diversity and by providing opportunities for people to engage with different cultures."
  },
]

const Policies = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);

  return (
    <>
      <Navs />
      <div className="wraper">
        <div className="economic">
          <h1>Economic Policy</h1>
        </div>
        <div className="economic-definition">
          <p>More efficient, more inclusive, more sustainable: Policies to support economic
            Availability, affordability and proximity of economy to job opportunities, education, culture and amenities are vital</p>
        </div>
      </div>
      <div className='economic-container-layout'>
        {
          policies.map((item) => (
            <div key={item.heading} className="policies">
              <img src={item.src} alt="" srcset="" />
              <h1 className=''>{item.heading}</h1>
              <p className=''>{item.content}</p>
            </div>
          )
          )
        }
      </div>
      <Footer />
    </>
  )
}

export default Policies
