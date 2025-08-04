import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background dengan pattern sesuai logo */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-blue-600 to-orange-500"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-orange-400/30 via-transparent to-teal-400/30"></div>
      
      {/* Pattern overlay untuk texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl lg:text-9xl font-bold text-white/90 drop-shadow-2xl mb-4">
              404
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-orange-400 mx-auto rounded-full"></div>
          </div>
          
          {/* Error Message */}
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Page Not Found
            </h2>
            <p className="text-xl text-white/90 drop-shadow-md mb-6 leading-relaxed">
              Sorry, the page you are looking for is under development or not available.
            </p>
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
              <p className="text-white/80 text-lg">
                📍 <strong>Breueh Island</strong> - Maps and content are currently being created
              </p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              🏠 Back to Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              ← Previous Page
            </button>
          </div>
          
          {/* Additional Info */}
          <div className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <h3 className="text-white font-semibold text-lg mb-4">🚧 Under Development</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-white/80">
              <div className="flex items-center space-x-2">
                <span>📊</span>
                <span>Economic Potential Maps</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🗺️</span>
                <span>Land Classification</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🌤️</span>
                <span>Local Weather Data</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📖</span>
                <span>Interactive Story Map</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;