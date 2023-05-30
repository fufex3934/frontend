import React from 'react'
import Navs from '../../navbars/navs'
import Footer from '../Footer'
import '../css/Policies.css'

const policies = [
  {
    heading: "Agriculture and rural development",
    content: "The HGCAO common agricultural policy (CAP) ensures food security for citizens, affordable products and a sustainable management of natural resources."
  },
  {
    heading: "Banking and financial services",
    content: "The Commission wants to ensure that banks and financial markets are properly regulated and supervised, for stability, competitiveness and transparency."
  },
  {
    heading: "Borders and security",
    content: "Defending the HGCAO external borders and fighting organised crime are activities coordinated at HGCAO level by agencies like Frontex and Europol."
  },
  {
    heading: "Budget",
    content: "DG Budget allocates HGCAO funds, to allow implementation of EU policies and ensure the sound financial management of Commission services and institutions."
  },
  {
    heading: "Business and industry",
    content: "HGCAO industrial policy aims to increase the share of manufacturing in GDP. Small business and entrepreneurship ensure economic growth, innovation and jobs."
  },
  {
    heading: "Climate action",
    content: "The HGCAO wants to cut its greenhouse gas emissions and protect the ozone layer. It is also addressing the unavoidable impacts of a changing climate."
  },
  {
    heading: "Competition",
    content: "The HGCAO applies competition law to businesses that operate within the EU and internationally, to protect consumers and foster competition."
  },
  {
    heading: "Consumers",
    content: "Maximising consumer participation and trust in the market and safeguarding and integrating into HGCAO policies the interests of consumers."
  },
  {
    heading: "Culture and media",
    content: "Find funding opportunities in the culture, media and communication fields"
  },
]

const Policies = () => {
  return (
    <>
      <Navs />
      <div className='container'>
        <div className="header">
          <h1>Harari Government Communication Affairs Office Policies</h1>
        </div>
        {
          policies.map((item) => (
            <div key={item.heading} className="policies">
              <h1 className='heading'>{item.heading}</h1>
              <p className='description'>{item.content}</p>
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
