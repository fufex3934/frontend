import React from 'react'
import { BsTelephoneInboundFill } from 'react-icons/bs'
import Navs from '../navbars/navs'
import Footer from './Footer'
import './css/CityVistorGuid.css'

const visits = [
    { src: 'v1.jpeg', header: 'TRADITIONAL HOUSE IN HARAR', description: 'What makes Harar unique? You might wonder how the interior design of houses are more than decoration.', phone:'+251-25-666-00-00'},
    { src: 'v2.png', header: 'RAS TAFARIS HOUSE', description: 'Welcome to private collection of artefacts and information that witness culture and history of Harar', phone:'+251-25-666-00-00'},
    { src: 'harar_musuem.jpeg', header: 'SHERIF PRIVATE MUSEUM', description: 'Welcome to the only private museum in Harar Ethiopia to meet the culture Of Harari People', phone:'+251-25-666-00-00'},
    { src: 'images/hararicity.jpg', header: 'THE FIVE GATES OF JUGOL', description: 'Come and visit five gates of jugel: Shoa Gate, Buda Gate, Erer Gate, Sanga Gate and Fallana Gate', phone:'+251-25-666-00-00'},
    { src: 'v3.jpg', header: 'ENJOY A BEER AT HARAR BREWERY', description: 'Enjoy a cold draught Harar beer in the beer garden of the famous Harar Brewery. ', phone: '+251-25-666-00-00' },
    { src: 'v4.jpeg', header: 'HAND FEED HYENAS OF HARAR', description: 'One of the major tourist attractions of Harar is an up close encounter with a pack of wild hyenas. ', phone:'+251-25-666-00-00'},
]
const CityVistorGuid = () => {
  return (
    <>
        <Navs/>
        <div className="vistor">
            <h1>Free City Vistor Guid</h1>
            <p>Great Info Stright To Your Door</p>
        </div>
        <div className='layout'>
            {
                visits.map((visit) => (
                    <div className="visits">
                        <div className="img">
                            <img src={visit.src} alt=""/>
                        </div>
                        <div className="description">
                            <h1>{visit.header}</h1>
                            <p className='text-xl font-mono'>{visit.description}</p>
                        </div>
                        <div className='call'>
                            <span className='text-2xl font-mono'>Call For Guide</span>
                            <div className='icon'>
                                <span><BsTelephoneInboundFill className='mt-1 mr-2 text-xl text-green-600'/></span>
                                <a className='text-gray-700' href='tel:+251-25-666-00-00'>{visit.phone}</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <Footer/>
    </>
  )
}

export default CityVistorGuid