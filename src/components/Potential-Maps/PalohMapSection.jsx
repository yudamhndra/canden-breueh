import React, { useState } from "react";
import { useMapStatus } from "./UseMapsStatus";
import { mapPaths } from "./MapConfig";

const PalohMapSection = () => {
  const [currentMap, setCurrentMap] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});

  // Data untuk semua peta Paloh
  const palohMaps = [
    {
      id: 'lampu',
      title: 'Peta Persebaran Lampu',
      subtitle: 'Gampong Paloh',
      path: mapPaths.paloh.lampu,
      description: 'Pemetaan distribusi dan coverage penerangan jalan di Gampong Paloh',
      scale: '1:5,000 pada ukuran A2',
      icon: '💡',
      theme: 'from-yellow-600 to-amber-600',
      bgTheme: 'from-yellow-50 to-amber-50',
      legend: [
        { color: 'bg-yellow-400', label: 'Lampu Jalan Utama', type: 'point' },
        { color: 'bg-orange-400', label: 'Lampu Jalan Gang', type: 'point' },
        { color: 'bg-red-400', label: 'Area Gelap', type: 'area' },
        { color: 'bg-green-400', label: 'Area Terang', type: 'area' },
        { color: 'bg-blue-600', label: 'Lampu Dermaga', type: 'point' },
        { color: 'bg-gray-600', label: 'Jalan', type: 'line' },
        { color: 'bg-black', label: 'Batas Desa', type: 'line' }
      ]
    },
    {
      id: 'air',
      title: 'Peta Persebaran Sumber Air',
      subtitle: 'Gampong Paloh',
      path: mapPaths.paloh.air,
      description: 'Pemetaan sumber air bersih dan sistem distribusi air di Gampong Paloh',
      scale: '1:5,000 pada ukuran A2',
      icon: '💧',
      theme: 'from-cyan-600 to-blue-600',
      bgTheme: 'from-cyan-50 to-blue-50',
      legend: [
        { color: 'bg-blue-600', label: 'Sumur Umum', type: 'point' },
        { color: 'bg-cyan-400', label: 'Sumur Pribadi', type: 'point' },
        { color: 'bg-green-400', label: 'Sumber Mata Air', type: 'point' },
        { color: 'bg-purple-400', label: 'Tangki Air', type: 'point' },
        { color: 'bg-blue-300', label: 'Pipa Distribusi', type: 'line' },
        { color: 'bg-red-400', label: 'Area Kekurangan Air', type: 'area' },
        { color: 'bg-gray-600', label: 'Batas Desa', type: 'line' }
      ]
    },
    {
      id: 'tutupanLahan',
      title: 'Peta Tutupan Lahan',
      subtitle: 'Gampong Paloh',
      path: mapPaths.paloh.tutupanLahan,
      description: 'Klasifikasi tutupan lahan dan penggunaan lahan di Gampong Paloh',
      scale: '1:10,000 pada ukuran A2',
      icon: '🌍',
      theme: 'from-green-600 to-emerald-600',
      bgTheme: 'from-green-50 to-emerald-50',
      legend: [
        { color: 'bg-green-600', label: 'Hutan/Vegetasi Lebat', type: 'area' },
        { color: 'bg-lime-400', label: 'Kebun/Perkebunan', type: 'area' },
        { color: 'bg-yellow-400', label: 'Lahan Terbuka', type: 'area' },
        { color: 'bg-red-500', label: 'Pemukiman', type: 'area' },
        { color: 'bg-blue-400', label: 'Badan Air', type: 'area' },
        { color: 'bg-gray-400', label: 'Jalan/Infrastruktur', type: 'area' },
        { color: 'bg-amber-400', label: 'Pantai/Pasir', type: 'area' }
      ]
    },
    {
      id: 'evakuasi',
      title: 'Peta Jalur Evakuasi',
      subtitle: 'Gampong Paloh',
      path: mapPaths.paloh.evakuasi,
      description: 'Pemetaan jalur evakuasi dan titik kumpul untuk bencana di Gampong Paloh',
      scale: '1:5,000 pada ukuran A2',
      icon: '🚨',
      theme: 'from-red-600 to-orange-600',
      bgTheme: 'from-red-50 to-orange-50',
      legend: [
        { color: 'bg-red-600', label: 'Jalur Evakuasi Utama', type: 'line' },
        { color: 'bg-orange-500', label: 'Jalur Evakuasi Alternatif', type: 'line' },
        { color: 'bg-green-500', label: 'Titik Kumpul Aman', type: 'point' },
        { color: 'bg-blue-500', label: 'Pos Komando', type: 'point' },
        { color: 'bg-purple-500', label: 'Shelter Darurat', type: 'point' },
        { color: 'bg-yellow-500', label: 'Area Bahaya Tinggi', type: 'area' },
        { color: 'bg-red-300', label: 'Zona Evakuasi', type: 'area' }
      ]
    },
    {
      id: 'model3d',
      title: 'Peta Model 3D',
      subtitle: 'Gampong Paloh',
      path: mapPaths.paloh.model3d,
      description: 'Model 3D topografi dan infrastruktur Gampong Paloh',
      scale: '1:2,500 pada ukuran A1',
      icon: '🏔️',
      theme: 'from-purple-600 to-indigo-600',
      bgTheme: 'from-purple-50 to-indigo-50',
      legend: [
        { color: 'bg-amber-600', label: 'Elevasi Tinggi (>50m)', type: 'area' },
        { color: 'bg-amber-400', label: 'Elevasi Sedang (25-50m)', type: 'area' },
        { color: 'bg-yellow-400', label: 'Elevasi Rendah (10-25m)', type: 'area' },
        { color: 'bg-green-400', label: 'Dataran (<10m)', type: 'area' },
        { color: 'bg-red-500', label: 'Bangunan Tinggi', type: 'area' },
        { color: 'bg-orange-400', label: 'Bangunan Rendah', type: 'area' },
        { color: 'bg-blue-400', label: 'Perairan', type: 'area' }
      ]
    }
  ];

  // Use multiple map status hooks
  const mapStatuses = {
    lampu: useMapStatus('paloh', 'lampu'),
    air: useMapStatus('paloh', 'air'),
    tutupanLahan: useMapStatus('paloh', 'tutupanLahan'),
    evakuasi: useMapStatus('paloh', 'evakuasi'),
    model3d: useMapStatus('paloh', 'model3d')
  };

  const currentMapData = palohMaps[currentMap];
  const currentMapStatus = mapStatuses[currentMapData.id];

  const handleImageLoad = (mapId) => {
    setImageLoaded(prev => ({ ...prev, [mapId]: true }));
  };

  const changeMap = (index) => {
    setCurrentMap(index);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
        {/* Header */}
        <div className={`bg-gradient-to-r ${currentMapData.theme} text-white p-6`}>
          <div className="flex items-center justify-center mb-2">
            <span className="text-4xl mr-3">{currentMapData.icon}</span>
            <h2 className="text-3xl font-bold text-center">{currentMapData.title}</h2>
          </div>
          <p className="text-center opacity-90">{currentMapData.subtitle} - Infrastructure & Safety Mapping</p>
          
          {/* Status Indicator */}
          <div className="flex justify-center mt-4">
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              currentMapStatus.loading ? 'bg-yellow-200 text-yellow-800' :
              currentMapStatus.exists ? 'bg-green-200 text-green-800' : 
              'bg-red-200 text-red-800'
            }`}>
              {currentMapStatus.loading ? '🔄 Checking...' :
               currentMapStatus.exists ? '✅ Map Available' : 
               '⏳ Coming Soon'}
            </div>
          </div>
        </div>

        {/* Map Selection Tabs */}
        <div className="bg-white/50 p-4 border-b border-gray-200">
          <div className="flex flex-wrap justify-center gap-2 max-w-full overflow-x-auto">
            {palohMaps.map((map, index) => {
              const mapStatus = mapStatuses[map.id];
              return (
                <button
                  key={map.id}
                  onClick={() => changeMap(index)}
                  className={`px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 font-medium text-xs lg:text-sm whitespace-nowrap relative ${
                    index === currentMap
                      ? 'bg-white text-gray-800 shadow-lg'
                      : 'bg-white/70 text-gray-700 hover:bg-white/90'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{map.icon}</span>
                    <span className="hidden sm:block">{map.title.replace('Peta ', '')}</span>
                    <span className="sm:hidden">{map.title.split(' ')[2]}</span>
                    
                    {/* Status indicator */}
                    <div className={`w-2 h-2 rounded-full ${
                      mapStatus.loading ? 'bg-yellow-400' :
                      mapStatus.exists ? 'bg-green-400' : 'bg-red-400'
                    }`}></div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Map Area */}
        <div className="p-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            
            {/* Map Description */}
            <div className={`bg-gradient-to-r ${currentMapData.bgTheme} p-4 border-b border-gray-200`}>
              <h3 className="font-bold text-gray-800 mb-1 text-lg">{currentMapData.title}</h3>
              <h4 className="font-semibold text-gray-700 mb-2">{currentMapData.subtitle}</h4>
              <p className="text-sm text-gray-600">{currentMapData.description}</p>
              <p className="text-xs text-gray-500 mt-1">Scale: {currentMapData.scale}</p>
            </div>

            {/* Map Container */}
            <div className="relative w-full aspect-[4/3] lg:aspect-[1/1.414] bg-gray-100 border-2 border-gray-300">
              
              {/* Coordinate grid placeholder */}
              <div className="absolute top-2 left-8 right-8 flex justify-between text-xs text-gray-500 font-mono z-10">
                <span className="bg-white/80 px-1 rounded">730000</span>
                <span className="bg-white/80 px-1 rounded">731000</span>
                <span className="bg-white/80 px-1 rounded">732000</span>
                <span className="bg-white/80 px-1 rounded">733000 mT</span>
              </div>

              {currentMapStatus.loading ? (
                /* Loading State */
                <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${currentMapData.bgTheme} z-20`}>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-600">Checking {currentMapData.title.toLowerCase()} availability...</p>
                  </div>
                </div>
              ) : currentMapStatus.exists ? (
                /* Map Available */
                <>
                  {!imageLoaded[currentMapData.id] && (
                    <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${currentMapData.bgTheme} z-20`}>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-gray-600">Loading {currentMapData.title.toLowerCase()}...</p>
                      </div>
                    </div>
                  )}
                  
                  <img
                    src={currentMapStatus.path}
                    alt={`${currentMapData.title} - ${currentMapData.subtitle}`}
                    className={`w-full h-full object-contain transition-opacity duration-500 ${
                      imageLoaded[currentMapData.id] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(currentMapData.id)}
                    loading="lazy"
                  />

                  {/* Interactive elements when loaded */}
                  {imageLoaded[currentMapData.id] && (
                    <>
                      <div className="absolute top-4 right-4 z-30">
                        <button 
                          onClick={() => window.open(currentMapStatus.path, '_blank')}
                          className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-lg shadow-lg transition-all duration-300 text-sm flex items-center space-x-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                          <span>View Full Size</span>
                        </button>
                      </div>

                      <div className="absolute bottom-4 left-4 z-30">
                        <div className="bg-white/90 p-3 rounded-lg shadow-lg">
                          <div className="flex flex-col items-center">
                            <div className="text-lg font-bold mb-1">N</div>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </>
              ) : (
                /* Coming Soon State */
                <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${currentMapData.bgTheme} z-20`}>
                  <div className="text-center px-8">
                    <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${currentMapData.theme} rounded-full flex items-center justify-center`}>
                      <span className="text-3xl text-white">{currentMapData.icon}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {currentMapData.title} in Development
                    </h3>
                    
                    <p className="text-gray-600 mb-6 text-sm">
                      {currentMapData.description} is currently in progress.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {currentMapData.id === 'lampu' && (
                        <>
                          <div className="text-center">
                            <div className="text-2xl mb-2">🏮</div>
                            <span className="text-xs text-gray-500 font-medium">Street Lights</span>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl mb-2">🌃</div>
                            <span className="text-xs text-gray-500 font-medium">Coverage Area</span>
                          </div>
                        </>
                      )}
                      {currentMapData.id === 'air' && (
                        <>
                          <div className="text-center">
                            <div className="text-2xl mb-2">🚰</div>
                            <span className="text-xs text-gray-500 font-medium">Water Sources</span>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl mb-2">🔧</div>
                            <span className="text-xs text-gray-500 font-medium">Distribution</span>
                          </div>
                        </>
                      )}
                      {currentMapData.id === 'tutupanLahan' && (
                        <>
                          <div className="text-center">
                            <div className="text-2xl mb-2">🌳</div>
                            <span className="text-xs text-gray-500 font-medium">Vegetation</span>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl mb-2">🏘️</div>
                            <span className="text-xs text-gray-500 font-medium">Land Use</span>
                          </div>
                        </>
                      )}
                      {currentMapData.id === 'evakuasi' && (
                        <>
                          <div className="text-center">
                            <div className="text-2xl mb-2">🚶‍♂️</div>
                            <span className="text-xs text-gray-500 font-medium">Evacuation Routes</span>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl mb-2">🏃‍♀️</div>
                            <span className="text-xs text-gray-500 font-medium">Safe Points</span>
                          </div>
                        </>
                      )}
                      {currentMapData.id === 'model3d' && (
                        <>
                          <div className="text-center">
                            <div className="text-2xl mb-2">🏔️</div>
                            <span className="text-xs text-gray-500 font-medium">Topography</span>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl mb-2">🏗️</div>
                            <span className="text-xs text-gray-500 font-medium">3D Buildings</span>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg p-3">
                      <p className="text-gray-500 text-xs">
                        <span className="font-semibold">Expected:</span> Map akan tersedia setelah data collection selesai
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Legend & Map Info Footer - Only show when map exists and loaded */}
            {currentMapStatus.exists && imageLoaded[currentMapData.id] && (
              <div className="bg-gray-50 border-t border-gray-200">
                {/* Legend */}
                <div className="p-4 border-b border-gray-200">
                  <h4 className="font-semibold mb-3 text-gray-800">KETERANGAN (LEGEND):</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {currentMapData.legend.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        {item.type === 'area' && (
                          <div className={`w-4 h-3 ${item.color} border border-gray-400`}></div>
                        )}
                        {item.type === 'line' && (
                          <div className={`w-4 h-0.5 ${item.color.replace('bg-', 'bg-')} border-t-2 ${item.color.replace('bg-', 'border-')}`}></div>
                        )}
                        {item.type === 'point' && (
                          <div className={`w-3 h-3 ${item.color} rounded-full border border-gray-400`}></div>
                        )}
                        <span className="text-xs text-gray-700">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Info */}
                <div className="p-4">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs text-gray-600">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">DATA SOURCE:</h4>
                      <div className="space-y-1">
                        <div>• Field Survey 2025</div>
                        <div>• Drone Mapping 2024</div>
                        <div>• Satellite Imagery</div>
                        <div>• Village Government Data</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">TECHNICAL INFO:</h4>
                      <div className="space-y-1">
                        <div>Proyeksi: Transverse Mercator</div>
                        <div>Sistem Grid: Grid Geografik</div>
                        <div>Datum: WGS 1984 - Zone 46N</div>
                        <div>Scale: {currentMapData.scale}</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">PUBLISHED BY:</h4>
                      <div className="space-y-1">
                        <div>Program Studi Teknik Geodesi</div>
                        <div>Departemen Teknik Geodesi</div>
                        <div>Fakultas Pertanian</div>
                        <div>Universitas Gadjah Mada</div>
                        <div className="font-medium">2025</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PalohMapSection;