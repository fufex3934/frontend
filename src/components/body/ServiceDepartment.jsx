import React from 'react'
import { GoLaw } from 'react-icons/go'
import { TbBusinessplan } from 'react-icons/tb'
import { SiCultura } from 'react-icons/si'
import { IoBusiness } from 'react-icons/io5'
import { MdPark, MdLocalPolice } from 'react-icons/md'
import Navs from '../navbars/navs'
import Footer from './Footer'
import './css/ServiceDepartment.css'
const departments=[
  {
    image: 'law.jpeg', icon: <GoLaw className='icon'/>, header:'Constution and Law',description:'Aim for Nation Building and defining national flag anthem and other symbols'
  },
  {
    image: 'art.jpeg', icon: <SiCultura className='icon text-center' />, header: 'Art and Culture', description: 'If it is worth doing, we have got it. Find the center of tours and recreations'
  },
  {
    image: '1.jpeg', icon: <TbBusinessplan className='icon' />, header: 'Finance and Economy', description:'Where we focus on how companies and investors evaluate risk and return'
  },
  {
    image: 'bs.jpeg', icon: <IoBusiness className='icon' />, header: 'Business & Industry', description:'Whole economic companies, people, and organizations are in production field'
  },
  {
    image: 'police.jpeg', icon: <MdLocalPolice className='icon' />, header: 'Policing and Crime', description: 'Maintain and protect citizens from crimes and dangerous incidents that are unlawful'
  },
  {
    image: 'visit.jpeg', icon: <MdPark className='icon' />, header: 'Park and Recreation', description:'Our resources and services for the leisure, entertainment, and recreational pursuits'
  }
]
const ServiceDepartment = () => {
  return (
    <>
      <Navs />
      <div className='communication'>
        <h1>Government Communication Departments</h1>
      </div>
      <div className="desc">
        <h1>Our Goverment Departments</h1>
        <p>We are offering the following information's about us that what we actually.</p>
      </div>
      <div className='layout'>
      {
        departments.map((department)=>(
          <div className="departments">
            <div className="img">
              <img src={ department.image} alt="" />
            </div>
            <div className="icon-container">{department.icon}</div>
            <div className="description">
              <h1>{ department.header}</h1>
              <p>{ department.description}</p>
            </div>
          </div>
        ))
      }
      </div>
      <Footer />
    </>
  )
}

export default ServiceDepartment