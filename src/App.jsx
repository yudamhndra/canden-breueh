import './index.css'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Introduction from "./components/Introduction.jsx";
import VideoPlayer from "./components/VideoPlayer.jsx";
import Footer from "./components/Footer.jsx";
import Cards from "./components/Cards.jsx";
import SliderPanel from "./components/SliderPanel.jsx";
import { Element } from "react-scroll";
import ActivitiesSection from './components/ActivitiesSection.jsx';
import AboutSection from './components/AboutSection';

function App() {
    return (
        <div>
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
            {/* <Element name="activitiesSection">
                <ActivitiesSection />
            </Element> */}
            {/* <Element name="cards">
                <Cards />
            </Element> */}
            <Footer />
        </div>
    );
}

export default App
