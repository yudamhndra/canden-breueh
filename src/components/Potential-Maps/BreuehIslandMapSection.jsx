import React, { useState } from "react";
import { useMapStatus } from "./UseMapsStatus";
import { mapPaths } from "./MapConfig";

const BreuehIslandMapSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const mapStatus = useMapStatus('breueh', 'fisheries');

  const breuehMap = {
    title: 'Peta Zona Perikanan Pulau Breueh',
    subtitle: 'Kecamatan Pulo Aceh, Kabupaten Aceh Besar',
    path: mapPaths.breueh.fisheries,
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
      { color: 'bg-red-300', label: 'Ikan Tongkol', type: 'point' },
      { color: 'bg-teal-300', label: 'Ikan Kakap', type: 'point' },
      { color: 'bg-lime-300', label: 'Lobster', type: 'point' },
      { color: 'bg-amber-300', label: 'Teripang', type: 'point' }
    ],
    coordinates: {
      x: ['730000', '732000', '734000', '736000', '738000 mT'],
      y: ['860000 mU', '858000', '856000', '854000 mU']
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6">
          <h2 className="text-3xl font-bold mb-2 text-center">🏝️ Pulau Breueh Fisheries Zone</h2>
          <p className="text-blue-100 text-center">Marine Resources & Fishing Areas Mapping</p>
          
          {/* Status Indicator */}
          <div className="flex justify-center mt-4">
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              mapStatus.loading ? 'bg-yellow-200 text-yellow-800' :
              mapStatus.exists ? 'bg-green-200 text-green-800' : 
              'bg-red-200 text-red-800'
            }`}>
              {mapStatus.loading ? '🔄 Checking...' :
               mapStatus.exists ? '✅ Map Available' : 
               '⏳ Coming Soon'}
            </div>
          </div>
        </div>

        {/* Main Map Area */}
        <div className="p-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            
            {/* Map Description */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 border-b border-gray-200">
              <h3 className="font-bold text-gray-800 mb-1 text-lg">{breuehMap.title}</h3>
              <p className="text-sm text-gray-600">{breuehMap.subtitle}</p>
              <p className="text-xs text-gray-500 mt-1">Scale: {breuehMap.scale}</p>
            </div>

            {/* Map Container */}
            <div className="relative w-full aspect-[4/3] lg:aspect-[1/1.414] bg-gray-100 border-2 border-gray-300">
              
              {/* Coordinate Grid */}
              <div className="absolute top-2 left-8 right-8 flex justify-between text-xs text-gray-500 font-mono z-10">
                {breuehMap.coordinates.x.map((coord, index) => (
                  <span key={index} className="bg-white/80 px-1 rounded">{coord}</span>
                ))}
              </div>

              {mapStatus.loading ? (
                /* Loading State */
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 z-20">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-600">Checking map availability...</p>
                  </div>
                </div>
              ) : mapStatus.exists ? (
                /* Map Available */
                <>
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 z-20">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-gray-600">Loading Breueh Island fisheries map...</p>
                      </div>
                    </div>
                  )}
                  
                  <img
                    src={mapStatus.path}
                    alt={`${breuehMap.title} - ${breuehMap.subtitle}`}
                    className={`w-full h-full object-contain transition-opacity duration-500 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={handleImageLoad}
                    loading="lazy"
                  />

                  {/* Interactive elements when loaded */}
                  {imageLoaded && (
                    <>
                      <div className="absolute top-4 right-4 z-30">
                        <button 
                          onClick={() => window.open(mapStatus.path, '_blank')}
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
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 z-20">
                  <div className="text-center px-8">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-3xl">🐟</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Fisheries Zone Map in Development
                    </h3>
                    
                    <p className="text-gray-600 mb-6 text-sm">
                      Marine resource mapping and fisheries zone analysis is currently in progress for Breueh Island.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl mb-2">🎣</div>
                        <span className="text-xs text-gray-500 font-medium">Fishing Zones</span>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-2">🐠</div>
                        <span className="text-xs text-gray-500 font-medium">Marine Species</span>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-2">🦞</div>
                        <span className="text-xs text-gray-500 font-medium">Crustaceans</span>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-2">🌊</div>
                        <span className="text-xs text-gray-500 font-medium">Coastal Areas</span>
                      </div>
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg p-4">
                      <p className="text-gray-500 text-sm">
                        <span className="font-semibold">Expected:</span> Map akan tersedia setelah survey selesai
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Legend & Info Footer - Only show when map exists and loaded */}
            {mapStatus.exists && imageLoaded && (
              <div className="bg-gray-50 border-t border-gray-200">
                <div className="p-4 border-b border-gray-200">
                  <h4 className="font-semibold mb-3 text-gray-800">ZONA PERIKANAN (FISHERIES ZONES):</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {breuehMap.legend.map((item, index) => (
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

                <div className="p-4">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs text-gray-600">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">DATA SOURCE:</h4>
                      <div className="space-y-1">
                        <div>• DEMNAS InaGeoportal</div>
                        <div>• Data Batas Desa InaGeoportal</div>
                        <div>• Marine Survey 2024</div>
                        <div>• Fisheries Data KKP 2024</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">TECHNICAL INFO:</h4>
                      <div className="space-y-1">
                        <div>Proyeksi: Transverse Mercator</div>
                        <div>Sistem Grid: Grid Geografik</div>
                        <div>Datum: WGS 1984 - Zone 46N</div>
                        <div>Scale: {breuehMap.scale}</div>
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

export default BreuehIslandMapSection;