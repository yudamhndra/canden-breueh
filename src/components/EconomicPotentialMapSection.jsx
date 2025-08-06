import React, { useState } from "react";

const EconomicPotentialSection = () => {
  const [currentMap, setCurrentMap] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});
  const [imageError, setImageError] = useState({});

  // Data untuk kedua peta
  const maps = [
    {
      id: 'agriculture',
      title: 'Peta Persebaran Pertanian',
      subtitle: 'Desa Blang Situngkoh',
      path: '/assets/maps/Peta Persebaran Pertanian.jpg',
      description: 'Peta persebaran pertanian di Desa Blang Situngkoh, Kecamatan Pulo Aceh, Kabupaten Aceh Besar',
      scale: '1:5,000 pada ukuran A2',
      legend: [
        { color: 'bg-green-600', label: 'Batas Desa', type: 'line' },
        { color: 'bg-gray-600', label: 'Batas Dusun', type: 'line' },
        { color: 'bg-yellow-400', label: 'Padi', type: 'area' },
        { color: 'bg-red-500', label: 'Cabai', type: 'area' }
      ],
      coordinates: {
        x: ['731500 mT', '732000', '732500', '732600 mT'],
        y: ['860600 mU', '860400', '860200', '860000', '859800 mU']
      }
    },
    {
      id: 'fisheries',
      title: 'Peta Zona Perikanan',
      subtitle: 'Pulau Breueh',
      path: '/assets/maps/Peta Zona Perikanan.jpg', 
      description: 'Peta zona perikanan Pulau Breueh, Kecamatan Pulo Aceh, Kabupaten Aceh Besar',
      scale: '1:50,000 pada ukuran A2',
      legend: [
        { color: 'bg-gray-600', label: 'Batas Administrasi', type: 'line' },
        { color: 'bg-blue-600', label: 'Batas Desa', type: 'line' },
        { color: 'bg-blue-300', label: 'Zona 1 - Ikan Karang', type: 'area' },
        { color: 'bg-yellow-300', label: 'Zona 2 - Ikan Tuna', type: 'area' },
        { color: 'bg-green-300', label: 'Ikan Kerapu', type: 'point' },
        { color: 'bg-purple-300', label: 'Ikan Layur', type: 'point' },
        { color: 'bg-pink-300', label: 'Ikan Rambe', type: 'point' },
        { color: 'bg-orange-300', label: 'Ikan Cakalang', type: 'point' },
        { color: 'bg-indigo-300', label: 'Ikan Bayam', type: 'point' },
        { color: 'bg-red-300', label: 'Ikan Tongkol', type: 'point' },
        { color: 'bg-teal-300', label: 'Ikan Kakap', type: 'point' },
        { color: 'bg-cyan-300', label: 'Ikan Kelap', type: 'point' },
        { color: 'bg-lime-300', label: 'Lobster', type: 'point' },
        { color: 'bg-amber-300', label: 'Teripang', type: 'point' }
      ],
      coordinates: {
        x: ['730000', '732000', '734000', '736000', '738000 mT'],
        y: ['860000 mU', '858000', '856000', '854000 mU']
      }
    }
  ];

  const handleImageLoad = (mapId) => {
    setImageLoaded(prev => ({ ...prev, [mapId]: true }));
    setImageError(prev => ({ ...prev, [mapId]: false }));
  };

  const handleImageError = (mapId) => {
    setImageError(prev => ({ ...prev, [mapId]: true }));
    setImageLoaded(prev => ({ ...prev, [mapId]: false }));
  };

  const changeMap = (index) => {
    setCurrentMap(index);
  };

  const currentMapData = maps[currentMap];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-6">
          <h2 className="text-3xl font-bold mb-2 text-center">Agricultural & Fisheries Maps</h2>
          <p className="text-teal-100 text-center">Breueh Island Resource Distribution</p>
        </div>

        {/* Map Selection Tabs */}
        <div className="bg-white/50 p-4 border-b border-gray-200">
          <div className="flex flex-wrap justify-center gap-2">
            {maps.map((map, index) => (
              <button
                key={map.id}
                onClick={() => changeMap(index)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 font-semibold text-sm ${
                  index === currentMap
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-white/70 text-gray-700 hover:bg-teal-100'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {index === 0 ? (
                    <span>🌾</span>
                  ) : (
                    <span>🐟</span>
                  )}
                  <span>{map.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Map Area */}
        <div className="p-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            
            {/* Map Description */}
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-4 border-b border-gray-200">
              <h3 className="font-bold text-gray-800 mb-1 text-lg">{currentMapData.title}</h3>
              <h4 className="font-semibold text-gray-700 mb-2">{currentMapData.subtitle}</h4>
              <p className="text-sm text-gray-600">{currentMapData.description}</p>
              <p className="text-xs text-gray-500 mt-1">Scale: {currentMapData.scale}</p>
            </div>

            {/* Map Container dengan coordinate grid */}
            <div className="relative w-full aspect-[4/3] lg:aspect-[1/1.414] bg-gray-100 border-2 border-gray-300">
              
              {/* Coordinate Labels - Top */}
              <div className="absolute top-2 left-8 right-8 flex justify-between text-xs text-gray-500 font-mono z-10">
                {currentMapData.coordinates.x.map((coord, index) => (
                  <span key={index} className="bg-white/80 px-1 rounded">{coord}</span>
                ))}
              </div>
              
              {/* Coordinate Labels - Bottom */}
              <div className="absolute bottom-2 left-8 right-8 flex justify-between text-xs text-gray-500 font-mono z-10">
                {currentMapData.coordinates.x.map((coord, index) => (
                  <span key={index} className="bg-white/80 px-1 rounded">{coord}</span>
                ))}
              </div>

              {/* Coordinate Labels - Left */}
              <div className="absolute top-8 bottom-8 left-2 flex flex-col justify-between text-xs text-gray-500 font-mono z-10">
                {currentMapData.coordinates.y.map((coord, index) => (
                  <span key={index} className="transform -rotate-90 bg-white/80 px-1 rounded whitespace-nowrap">{coord}</span>
                ))}
              </div>

              {/* Coordinate Labels - Right */}
              <div className="absolute top-8 bottom-8 right-2 flex flex-col justify-between text-xs text-gray-500 font-mono z-10">
                {currentMapData.coordinates.y.map((coord, index) => (
                  <span key={index} className="transform rotate-90 bg-white/80 px-1 rounded whitespace-nowrap">{coord}</span>
                ))}
              </div>

              {!imageError[currentMapData.id] ? (
                <>
                  {/* Loading state */}
                  {!imageLoaded[currentMapData.id] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-teal-50 to-blue-50 z-20">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-gray-600">Loading {currentMapData.title.toLowerCase()}...</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Map Image */}
                  <img
                    src={currentMapData.path}
                    alt={`${currentMapData.title} - ${currentMapData.subtitle}`}
                    className={`w-full h-full object-contain transition-opacity duration-500 ${
                      imageLoaded[currentMapData.id] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(currentMapData.id)}
                    onError={() => handleImageError(currentMapData.id)}
                    loading="lazy"
                  />
                </>
              ) : (
                /* Error state */
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 z-20">
                  <div className="text-center px-8">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {currentMapData.title} Not Found
                    </h3>
                    
                    <p className="text-gray-600 mb-6 text-sm">
                      File: <code className="bg-gray-200 px-2 py-1 rounded text-xs">{currentMapData.path}</code>
                    </p>

                    <button 
                      onClick={() => {
                        setImageError(prev => ({ ...prev, [currentMapData.id]: false }));
                        setImageLoaded(prev => ({ ...prev, [currentMapData.id]: false }));
                      }}
                      className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
                    >
                      🔄 Retry Loading
                    </button>
                  </div>
                </div>
              )}

              {/* Zoom button */}
              {imageLoaded[currentMapData.id] && !imageError[currentMapData.id] && (
                <div className="absolute top-4 right-4 z-30">
                  <button 
                    onClick={() => window.open(currentMapData.path, '_blank')}
                    className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-lg shadow-lg transition-all duration-300 text-sm flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <span>View Full Size</span>
                  </button>
                </div>
              )}

              {/* North Arrow */}
              {imageLoaded[currentMapData.id] && !imageError[currentMapData.id] && (
                <div className="absolute bottom-4 left-4 z-30">
                  <div className="bg-white/90 p-2 rounded-lg shadow-lg">
                    <div className="flex flex-col items-center">
                      <div className="text-lg font-bold">N</div>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EconomicPotentialSection;