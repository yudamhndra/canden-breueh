import React from "react";
import Navbar from "./Navbar";

const STORY_MAP_URL = "https://storymaps.arcgis.com/stories/8f10de24bab640eba0998c4e0345eabd"; // Ganti dengan URL Story Map kamu

const StoryMapPage = () => (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-teal-600 via-blue-700 to-orange-600">
    <Navbar />
    
    {/* Content dengan background gradient sesuai logo */}
    <main className="flex flex-col items-center justify-center flex-1 py-8 pt-24">
      {/* Background overlay untuk readability */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>
      
      <div className="relative z-10 w-full max-w-6xl px-4">
        
        {/* Container untuk Story Map dengan styling yang lebih menarik */}
        <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/20">
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={STORY_MAP_URL}
              title="ArcGIS Story Map"
              width="100%"
              height="100%"
              style={{ minHeight: 600, border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default StoryMapPage;