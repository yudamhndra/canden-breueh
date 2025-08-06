import React, { useState } from "react";
import Navbar from "./Navbar";
import BreuehIslandMapSection from "./Potential-Maps/BreuehIslandMapSection";
import BlangSitungkohMapSection from "./Potential-Maps/BlangSitungkohMapSection";
import GugopMapSection from "./Potential-Maps/GugopMapSection";
import PalohMapSection from "./Potential-Maps/PalohMapSection";

const PotentialMapPage = () => {
  const [activeSection, setActiveSection] = useState('breueh');

  const sections = [
    {
      id: 'breueh',
      title: 'Pulau Breueh',
      subtitle: 'Breueh Island Overview',
      description: 'Comprehensive mapping and analysis of Breueh Island including fisheries zones and tourism potential',
      icon: '🏝️'
    },
    {
      id: 'blang-situngkoh',
      title: 'Gampong Blang Situngkoh',
      subtitle: 'Agriculture Distribution Mapping',
      description: 'Agricultural land distribution and farming potential analysis in Blang Situngkoh village',
      icon: '🌾'
    },
    {
      id: 'gugop',
      title: 'Gampong Gugop',
      subtitle: 'Land Use Classification',
      description: 'Land use classification and environmental management mapping for Gugop village',
      icon: '🌳'
    },
    {
      id: 'paloh',
      title: 'Gampong Paloh',
      subtitle: 'Infrastructure & Safety Maps',
      description: 'Comprehensive infrastructure mapping including lighting, water sources, land cover, evacuation routes, and 3D models',
      icon: '🏖️'
    }
  ];

  const getCurrentSection = () => {
    return sections.find(section => section.id === activeSection);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background dengan pattern sesuai logo */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-blue-600 to-orange-500"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-orange-400/30 via-transparent to-teal-400/30"></div>
      
      {/* Pattern overlay untuk texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
      
      <Navbar />
      
      <main className="relative z-10 flex flex-col flex-1 pt-20">
        {/* Header Section dengan informasi section aktif */}
        <div className="text-center py-8 px-4">
          <div className="flex justify-center items-center mb-4">
            <span className="text-5xl mr-4">{getCurrentSection()?.icon}</span>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white drop-shadow-2xl">
                {getCurrentSection()?.title}
              </h1>
              <p className="text-lg text-white/90 drop-shadow-lg">
                {getCurrentSection()?.subtitle}
              </p>
            </div>
          </div>
          <p className="text-sm lg:text-base text-white/80 drop-shadow-lg max-w-3xl mx-auto">
            {getCurrentSection()?.description}
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8 px-4">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-2 border border-white/30 max-w-full overflow-x-auto">
            <div className="flex space-x-2 min-w-max">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-4 lg:px-6 py-3 rounded-xl transition-all duration-300 font-medium text-sm lg:text-base whitespace-nowrap ${
                    activeSection === section.id
                      ? 'bg-white text-blue-600 shadow-lg'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{section.icon}</span>
                    <span className="hidden sm:block">{section.title}</span>
                    <span className="sm:hidden">{section.title.split(' ')[section.title.split(' ').length - 1]}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="flex justify-center mb-6 px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
            <div className="flex items-center space-x-2 text-white/80 text-sm">
              <span>🗺️</span>
              <span>Potential Maps</span>
              <span>›</span>
              <span className="text-white font-medium">{getCurrentSection()?.title}</span>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="flex-1 px-4 pb-8">
          {activeSection === 'breueh' && <BreuehIslandMapSection />}
          {activeSection === 'blang-situngkoh' && <BlangSitungkohMapSection />}
          {activeSection === 'gugop' && <GugopMapSection />}
          {activeSection === 'paloh' && <PalohMapSection />}
        </div>
      </main>
    </div>
  );
};

export default PotentialMapPage;