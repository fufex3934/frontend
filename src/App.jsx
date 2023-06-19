import CustomApp from './CustomApp'
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './components/body/NavDetailPages/AboutUs';
import Leadership from './components/body/NavDetailPages/Leadership';
import History from './components/body/NavDetailPages/History';
import News from './components/body/NavDetailPages/News';
import Emergency from './components/body/NavDetailPages/Emergency';
import Policies from './components/body/NavDetailPages/Policies';
import Sectors from './components/body/NavDetailPages/Sectors';
import GovernmentStructures from './components/body/NavDetailPages/GovernmentStructures';
import Education from './components/body/NavDetailPages/Education';
import HealthCare from './components/body/NavDetailPages/HealthCare';
import Monuments from './components/body/NavDetailPages/Monuments';
import Museums from './components/body/NavDetailPages/Museums';
import AnimalExhibition from './components/body/NavDetailPages/AnimalExhibition';
import NoMatch from './components/body/NavDetailPages/NoMatch';
import UpcomingEvent1 from './components/body/bodyDetailsPage/UpcomingEvent1';
import UpcomingEvent2 from './components/body/bodyDetailsPage/UpcomingEvent2';
import HomeNewsDetails from './components/body/NavDetailPages/NewsDetails/HomeNewsDetails';
import HarariNewsDetails from './components/body/NavDetailPages/NewsDetails/HarariNewsDetails';
import HararifNews from './components/body/NavDetailPages/News/HararifNews';
import NationalNews from './components/body/NavDetailPages/News/NationalNews';
import NationalNewsDetails from './components/body/NavDetailPages/NewsDetails/NationalNewsDetails';
import AfricaNews from './components/body/NavDetailPages/News/AfricaNews';
import AfricaNewsDetails from './components/body/NavDetailPages/NewsDetails/AfricaNewsDetails';
import InternationalNews from './components/body/NavDetailPages/News/InternationalNews';
import InternationalNewsDetails from './components/body/NavDetailPages/NewsDetails/InternationalNewsDetails';
import Woreda from './components/body/Woreda';
import WoredaDetails from './components/body/bodyDetailsPage/WoredaDetails';
import ContactUs from './components/body/ContactUs';
import Offices from './components/body/Offices';
import OfficesDetails from './components/body/bodyDetailsPage/OfficesDetails';
import Gallery from './components/body/Gallery';
import Geography from './components/body/Geography'
import ServiceDepartment from './components/body/ServiceDepartment';
import CityVistorGuid from './components/body/CityVistorGuid';
import Adminstration from './components/body/Adminstration';
import Services from './components/body/Services';
import SanityAuth from './sanityAuth/SanityAuth';
import CreateAccount from './sanityAuth/createAccount';
const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component is mounted or updated
  }, []);

  return (
    <Routes>
      <Route path='/' element={<CustomApp />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/about-leadership' element={<Leadership />} />
      <Route path='/about-history' element={<History />} />
      <Route path='/timely-news' element={<News />} />
      <Route path='/contact-us' element={<ContactUs />} />
      <Route path='/timely-emergence' element={<Emergency />} />
      <Route path='/economy-policy' element={<Policies />} />
      <Route path='/economy-sectors' element={<Sectors />} />
      <Route path='/politic-gs' element={<GovernmentStructures />} />
      <Route path='/social-edu' element={<Education />} />
      <Route path='/social-health' element={<HealthCare />} />
      <Route path='/tourism-mon' element={<Monuments />} />
      <Route path='/tourism-mus' element={<Museums />} />
      <Route path='/tourism-animal' element={<AnimalExhibition />} />
      <Route path= '/upcoming-detail1' element={<UpcomingEvent1/>}/>
      <Route path= '/upcoming-detail2' element={<UpcomingEvent2/>}/>
      <Route path='/news/:slug' element = {<HomeNewsDetails/>}/>
      <Route path='/harari-news' element = {<HararifNews/>}/>
      <Route path='/harari-news/:slug' element = {<HarariNewsDetails/>}/>
      <Route path='/national-news' element = {<NationalNews/>}/>
      <Route path='/national-news/:slug' element = {<NationalNewsDetails/>}/>
      <Route path='/africa-news' element = {<AfricaNews/>}/>
      <Route path='/africa-news/:slug' element = {<AfricaNewsDetails/>}/>
      <Route path='/international-news' element = {<InternationalNews/>}/>
      <Route path='/international-news/:slug' element = {<InternationalNewsDetails/>}/>
      <Route path='/woreda' element = {<Woreda/>}/>
      <Route path='/woreda-details/:id' element = {<WoredaDetails/>}/>
      <Route path='/offices' element = {<Offices/>}/>
      <Route path='/office-details/:id' element = {<OfficesDetails/>}/>
      <Route path='/gallery' element = {<Gallery/>}/>
      <Route path='/geography' element={<Geography/>}/>
      <Route path='/service' element = {<Services/>}/>
      <Route path='/service-department' element={<ServiceDepartment/>}/>
      <Route path='/city-vistor-guid' element={<CityVistorGuid/>}/>
      <Route path='/city-adminstration' element={<Adminstration/>}/>
      <Route path='/create-account' element = {<CreateAccount/>}/>
      <Route path = '/sanity/*' element ={<SanityAuth/>}/>
      <Route path='*' element={<NoMatch />} />
    </Routes>
  )
}

export default App
