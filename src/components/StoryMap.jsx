import React, { useState } from "react";
import Navbar from "./Navbar";

const STORY_MAP_URL = "https://storymaps.arcgis.com/stories/1a4560e6ba664e28aba0eddb63ea0581";

const StoryMapPage = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-600 via-blue-700 to-orange-600">
      <Navbar />
      
      {/* Content dengan background gradient sesuai logo */}
      <main className="flex flex-col items-center justify-center flex-1 py-1 sm:py-8 pt-14 sm:pt-24">
        {/* Background overlay untuk readability */}
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="relative z-10 w-full h-full px-1 sm:px-4 max-w-7xl">
          
          {/* Container untuk Story Map dengan styling responsive */}
          <div className={`bg-white/95 backdrop-blur-sm p-1 sm:p-6 rounded-lg sm:rounded-2xl shadow-2xl border border-white/20 ${isFullScreen ? 'fixed inset-2 z-50' : 'h-full sm:h-auto'}`}>

            <div className="flex justify-between items-center mb-2 sm:hidden">
              {/* <h2 className="text-sm font-semibold text-slate-800">Breueh Island Story Map</h2> */}
              <button
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600 transition-colors"
              >
                {isFullScreen ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                )}
              </button>
            </div>

            {/* Story Map Container */}
            <div className={`w-full rounded-lg sm:rounded-xl overflow-hidden shadow-lg ${
              isFullScreen 
                ? 'h-[calc(100%-3rem)]' 
                : 'h-[calc(100vh-6rem)] sm:h-auto sm:aspect-video'
            }`}>
              <iframe
                src={STORY_MAP_URL}
                title="Breueh Island Story Map"
                width="100%"
                height="100%"
                style={{ 
                  border: 0,
                  minHeight: isFullScreen ? '100%' : 'calc(100vh - 6rem)'
                }}
                className="sm:!min-h-[600px] sm:!h-auto"
                allowFullScreen
                allow="geolocation"
                loading="lazy"
              />
            </div>
            
            {/* Info text - hanya tampil di desktop */}
            <div className="hidden sm:block mt-4 text-center">
              <p className="text-slate-600 text-sm">
                📍 Interactive Story Map of Breueh Island - Explore the conservation efforts and community initiatives
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StoryMapPage;