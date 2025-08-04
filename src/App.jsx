import './index.css'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Introduction from "./components/Introduction.jsx";
import Footer from "./components/Footer.jsx";
import Cards from "./components/Cards.jsx";
import SliderPanel from "./components/SliderPanel.jsx";
import { Element } from "react-scroll";
import ActivitiesSection from './components/ActivitiesSection.jsx';
import AboutSection from './components/AboutSection';
import StoryMapPage from './components/StoryMap.jsx';
import PotentialMapPage from './components/PotentialMap.jsx'; // Import baru

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import NotFoundPage from './components/additionalCondition/NotFoundPage.jsx';
import LocalWeatherPage from './components/LocalWeatherMapSection.jsx';

function MainPage() {
  useEffect(() => {
    if (localStorage.getItem('scrollToContact') === 'true') {
      setTimeout(() => {
        scroller.scrollTo('footer', {
          smooth: true,
          duration: 500,
          offset: -80
        });
        localStorage.removeItem('scrollToContact');
      }, 100);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="introduction">
        <Introduction />
      </Element>
      <Element name="sliderPanel">
        <SliderPanel />
      </Element>
      <Element name="aboutSection">
        <AboutSection />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/story-map" element={<StoryMapPage />} />
        <Route path="/potential-map" element={<PotentialMapPage />} />
        <Route path="/local-weather" element={<LocalWeatherPage />} />
      </Routes>
    </Router>
  );
}

export default App