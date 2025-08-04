import React, { useState } from "react";
import Navbar from "./Navbar";
import EconomicPotentialSection from "./EconomicPotentialMapSection";
import LandUseSection from "./LandUseMapSection";

const PotentialMapPage = () => {
  const [activeSection, setActiveSection] = useState('economic');

  const sections = [
    {
      id: 'economic',
      title: 'Economic Potential',
      subtitle: 'Economic Potential Maps for Agriculture and Fisheries',
      description: 'Analysis of economic potential in agriculture and fisheries sectors in Breueh Island'
    },
    {
      id: 'landuse',
      title: 'Land Use Classification',
      subtitle: 'Land Use Classification',
      description: 'Land use mapping for environmental management and conservation'
    }
  ];

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
        {/* Header Section */}
        <div className="text-center py-12 px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl mb-4">
            Potential Maps
          </h1>
          <p className="text-xl text-white/90 drop-shadow-lg max-w-3xl mx-auto">
            Breueh Island Potential and Land Classification Maps
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8 px-4">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-2 border border-white/30">
            <div className="flex space-x-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                    activeSection === section.id
                      ? 'bg-white text-blue-600 shadow-lg'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="flex-1 px-4 pb-8">
          {activeSection === 'economic' && <EconomicPotentialSection />}
          {activeSection === 'landuse' && <LandUseSection />}
        </div>
      </main>
    </div>
  );
};

export default PotentialMapPage;