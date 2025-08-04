import React, { useState } from "react";
import Navbar from "./Navbar";

const LocalWeatherPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data cuaca 11 tahun terakhir (2014-2024)
  const weatherMaps = [
    { year: 2024, mapUrl: '/weather/weather-2024.jpg', title: 'Weather Distribution 2024' },
    { year: 2023, mapUrl: '/weather/weather-2023.jpg', title: 'Weather Distribution 2023' },
    { year: 2022, mapUrl: '/weather/weather-2022.jpg', title: 'Weather Distribution 2022' },
    { year: 2021, mapUrl: '/weather/weather-2021.jpg', title: 'Weather Distribution 2021' },
    { year: 2020, mapUrl: '/weather/weather-2020.jpg', title: 'Weather Distribution 2020' },
    { year: 2019, mapUrl: '/weather/weather-2019.jpg', title: 'Weather Distribution 2019' },
    { year: 2018, mapUrl: '/weather/weather-2018.jpg', title: 'Weather Distribution 2018' },
    { year: 2017, mapUrl: '/weather/weather-2017.jpg', title: 'Weather Distribution 2017' },
    { year: 2016, mapUrl: '/weather/weather-2016.jpg', title: 'Weather Distribution 2016' },
    { year: 2015, mapUrl: '/weather/weather-2015.jpg', title: 'Weather Distribution 2015' },
    { year: 2014, mapUrl: '/weather/weather-2014.jpg', title: 'Weather Distribution 2014' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % weatherMaps.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + weatherMaps.length) % weatherMaps.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
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
        {/* Header Section */}
        <div className="text-center py-12 px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl mb-4">
            Local Weather Distribution
          </h1>
          <p className="text-xl text-white/90 drop-shadow-lg max-w-3xl mx-auto">
            Weather Pattern Analysis for Breueh Island (2014-2024)
          </p>
        </div>

        {/* Weather Maps Section */}
        <div className="flex-1 px-4 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
              
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-6">
                <h2 className="text-3xl font-bold mb-2 text-center">Weather Distribution Maps</h2>
                <p className="text-blue-100 text-center">Historical Weather Patterns (Last 11 Years)</p>
              </div>

              {/* Year Navigation Bar */}
              <div className="bg-white/50 p-4 border-b border-gray-200">
                <div className="flex flex-wrap justify-center gap-2">
                  {weatherMaps.map((weather, index) => (
                    <button
                      key={weather.year}
                      onClick={() => goToSlide(index)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 font-semibold ${
                        index === currentSlide
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-white/70 text-gray-700 hover:bg-blue-100'
                      }`}
                    >
                      {weather.year}
                    </button>
                  ))}
                </div>
              </div>

              {/* Card Content - 404 */}
              <div className="p-8">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                  <div className="flex items-center justify-center min-h-[500px] bg-gradient-to-br from-red-50 to-orange-50">
                    <div className="text-center px-8">
                      {/* 404 Icon */}
                      <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      
                      {/* 404 Number */}
                      <h3 className="text-6xl font-bold text-red-500 mb-4">
                        404
                      </h3>
                      
                      <h4 className="text-2xl font-bold text-gray-800 mb-4">
                        Weather Maps Not Found
                      </h4>
                      
                      {/* Current Year Info */}
                      <div className="bg-red-100 border border-red-200 rounded-xl p-6 mb-6">
                        <h5 className="text-lg font-semibold text-red-800 mb-2">
                          Requested: {weatherMaps[currentSlide].year} Weather Data
                        </h5>
                        <p className="text-red-600 text-sm">
                          {weatherMaps[currentSlide].title}
                        </p>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed max-w-lg">
                        The weather distribution maps for {weatherMaps[currentSlide].year} are currently not available. Our meteorology team is working on processing the historical data.
                      </p>

                      {/* Status Info */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg p-4">
                          <div className="text-2xl mb-2">⏳</div>
                          <span className="text-xs text-gray-600 font-medium">Processing</span>
                        </div>
                        <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg p-4">
                          <div className="text-2xl mb-2">📊</div>
                          <span className="text-xs text-gray-600 font-medium">Analyzing</span>
                        </div>
                        <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg p-4">
                          <div className="text-2xl mb-2">🗺️</div>
                          <span className="text-xs text-gray-600 font-medium">Mapping</span>
                        </div>
                        <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg p-4">
                          <div className="text-2xl mb-2">🔄</div>
                          <span className="text-xs text-gray-600 font-medium">Validating</span>
                        </div>
                      </div>

                      {/* Error Details */}
                      <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl p-6">
                        <p className="text-gray-500 text-sm">
                          <span className="font-semibold">Error Code:</span> WM404<br/>
                          <span className="font-semibold">Status:</span> Weather maps temporarily unavailable<br/>
                          <span className="font-semibold">Expected:</span> Data processing and validation in progress<br/>
                          <span className="font-semibold">Coverage:</span> 2014-2024 historical weather data
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                        <button
                          onClick={() => window.location.reload()}
                          className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                        >
                          🔄 Refresh Data
                        </button>
                        
                        <button
                          onClick={() => window.location.href = '/'}
                          className="bg-white/70 text-gray-700 border border-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-white transition-all duration-300"
                        >
                          🏠 Back to Home
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="relative">
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
                  style={{ top: '-250px' }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
                  style={{ top: '-250px' }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Summary Statistics */}
              <div className="bg-gray-50 p-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Weather Data Status</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">0/11</div>
                    <div className="text-sm text-gray-600">Maps Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">100%</div>
                    <div className="text-sm text-gray-600">Data Processing</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">4</div>
                    <div className="text-sm text-gray-600">Parameters</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-600">TBD</div>
                    <div className="text-sm text-gray-600">Completion</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LocalWeatherPage;