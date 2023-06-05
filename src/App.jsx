import CustomApp from './CustomApp'
import { Routes, Route } from 'react-router-dom';
import AboutUs from './components/body/NavDetailPages/AboutUs';
import Leadership from './components/body/NavDetailPages/Leadership';
import History from './components/body/NavDetailPages/History';
import News from './components/body/NavDetailPages/News';
import Emergency from './components/body/NavDetailPages/Emergency';
import Policies from './components/body/NavDetailPages/Policies';
import Sectors from './components/body/NavDetailPages/Sectors';
import GovernmentOfficials from './components/body/NavDetailPages/GovernmentOfficials';
import GovernmentStructures from './components/body/NavDetailPages/GovernmentStructures';
import PoliticalNews from './components/body/NavDetailPages/PoliticalNews';
import Education from './components/body/NavDetailPages/Education';
import HealthCare from './components/body/NavDetailPages/HealthCare';
import Monuments from './components/body/NavDetailPages/Monuments';
import Museums from './components/body/NavDetailPages/Museums';
import AnimalExhibition from './components/body/NavDetailPages/AnimalExhibition';
import Documentary from './components/body/NavDetailPages/Documentary';
import Testimonials from './components/body/NavDetailPages/Testimonials';
import SuccessStories from './components/body/NavDetailPages/SuccessStories';
import TourismsPromotions from './components/body/NavDetailPages/TourismsPromotions';
import Events from './components/body/NavDetailPages/Events';
import Leaders from './components/body/NavDetailPages/Leaders';
import NoMatch from './components/body/NavDetailPages/NoMatch';
import UpcomingEvent1 from './components/body/bodyDetailsPage/UpcomingEvent1';
import UpcomingEvent2 from './components/body/bodyDetailsPage/UpcomingEvent2';


const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<CustomApp />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/about-leadership' element={<Leadership />} />
      <Route path='/about-history' element={<History />} />
      <Route path='/timely-news' element={<News />} />
      <Route path='/timely-emergence' element={<Emergency />} />
      <Route path='/economy-policy' element={<Policies />} />
      <Route path='/economy-sectors' element={<Sectors />} />
      <Route path='/politic-go' element={<GovernmentOfficials />} />
      <Route path='/politic-gs' element={<GovernmentStructures />} />
      <Route path='/politic-news' element={<PoliticalNews />} />
      <Route path='/social-edu' element={<Education />} />
      <Route path='/social-health' element={<HealthCare />} />
      <Route path='/tourism-mon' element={<Monuments />} />
      <Route path='/tourism-mus' element={<Museums />} />
      <Route path='/tourism-animal' element={<AnimalExhibition />} />
      <Route path='/video-doc' element={<Documentary />} />
      <Route path='/video-test' element={<Testimonials />} />
      <Route path='/video-success' element={<SuccessStories />} />
      <Route path='/video-tour' element={<TourismsPromotions />} />
      <Route path='/video-event' element={<Events />} />
      <Route path= '/upcoming-detail1' element={<UpcomingEvent1/>}/>
      <Route path= '/upcoming-detail2' element={<UpcomingEvent2/>}/>
      <Route path='/leader' element={<Leaders />} />
      <Route path='*' element={<NoMatch />} />
    </Routes>
  )
}

export default App
