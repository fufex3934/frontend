import React, { useState } from 'react'
import { GoLaw } from 'react-icons/go'
import { TbBusinessplan } from 'react-icons/tb'
import { SiCultura } from 'react-icons/si'
import { IoBusiness } from 'react-icons/io5'
import { MdPark, MdLocalPolice } from 'react-icons/md'
import Navs from '../navbars/navs'
import Footer from './Footer'
import './css/ServiceDepartment.css'
import { useTranslation } from 'react-i18next'
const ServiceDepartment = () => {
  const {t} = useTranslation();
  const departments=[
    {
      image: 'law.jpeg', icon: <GoLaw className='icon'/>, header:`${t('serviceDepartments.lawHeader')}`,description:`${t('serviceDepartments.lawdesc')}`,
    },
    {
      image: 'art.jpeg', icon: <SiCultura className='icon text-center' />, header: `${t('serviceDepartments.artHeader')}`, description: `${t('serviceDepartments.artdesc')}`
    },
    {
      image: '1.jpeg', icon: <TbBusinessplan className='icon' />, header: `${t('serviceDepartments.financeHeader')}`, description:`${t('serviceDepartments.financedesc')}`
    },
    {
      image: 'bs.jpeg', icon: <IoBusiness className='icon' />, header: `${t('serviceDepartments.businessHeader')}`, description:`${t('serviceDepartments.businessdesc')}`
    },
    {
      image: 'police.jpeg', icon: <MdLocalPolice className='icon' />, header: `${t('serviceDepartments.policeHeader')}`, description: `${t('serviceDepartments.policedesc')}`
    },
    {
      image: 'visit.jpeg', icon: <MdPark className='icon' />, header: `${t('serviceDepartments.parkHeader')}`, description:`${t('serviceDepartments.parkdesc')}`
    }
  ]
  return (
    <>
      <Navs />
      <div className='communication'>
        <h1>{t('serviceDepartments.header')}</h1>
      </div>
      <div className="desc">
        <h1>{t('serviceDepartments.header2')}</h1>
        <p>{t('serviceDepartments.p')}</p>
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