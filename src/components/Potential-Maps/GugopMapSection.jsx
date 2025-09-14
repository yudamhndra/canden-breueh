import React, { useState } from "react";
import { useMapStatus } from "./UseMapsStatus";
import { mapPaths } from "./MapConfig";

const GugopMapSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const mapStatus = useMapStatus('gugop', 'landUse');

  const gugopMap = {
    title: 'Peta Klasifikasi Penggunaan Lahan Desa Gugop',
    subtitle: 'Kecamatan Pulo Aceh, Kabupaten Aceh Besar',
    path: mapPaths.gugop.landUse,
    scale: '1:25.000 pada ukuran A3',
    legend: [
      { color: 'bg-green-600', label: 'Kebun Campuran', description: 'Mixed garden/plantation areas' },
      { color: 'bg-yellow-400', label: 'Semak Belukar', description: 'Shrubland and bushes' },
      { color: 'bg-red-500', label: 'Pemukiman', description: 'Settlement areas' },
      { color: 'bg-gray-800', label: 'Batas Admin Desa', description: 'Village administrative boundary', type: 'line' }
    ],
    coordinates: {
      x: ['725000', '726000', '727000', '728000', '729000', '730000', '731000'],
      y: ['6280000', '6279000', '6278000']
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6">
          <h2 className="text-3xl font-bold mb-2 text-center">🌳 Gampong Gugop</h2>
          <p className="text-emerald-100 text-center">Land Use Classification & Environmental Management</p>
          
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
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-4 border-b border-gray-200">
              <h3 className="font-bold text-gray-800 mb-1 text-lg">{gugopMap.title}</h3>
              <p className="text-sm text-gray-600">{gugopMap.subtitle}</p>
              <p className="text-xs text-gray-500 mt-1">Scale: {gugopMap.scale}</p>
            </div>

            {/* Map Container */}
            <div className="relative w-full aspect-[4/3] lg:aspect-[1/1.414] bg-gray-100 border-2 border-gray-300">
              
              {/* Coordinate Grid */}
              <div className="absolute top-2 left-8 right-8 flex justify-between text-xs text-gray-500 font-mono z-10">
                {gugopMap.coordinates.x.map((coord, index) => (
                  <span key={index} className="bg-white/80 px-1 rounded">{coord}</span>
                ))}
              </div>

              {mapStatus.loading ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-green-50 z-20">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-600">Checking map availability...</p>
                  </div>
                </div>
              ) : mapStatus.exists ? (
                <>
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-green-50 z-20">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-gray-600">Loading Gugop land use classification map...</p>
                      </div>
                    </div>
                  )}
                  
                  <img
                    src={mapStatus.path}
                    alt={`${gugopMap.title} - ${gugopMap.subtitle}`}
                    className={`w-full h-full object-contain transition-opacity duration-500 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={handleImageLoad}
                    loading="lazy"
                  />

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
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-green-50 z-20">
                  <div className="text-center px-8">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                      <span className="text-3xl">🌳</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Land Use Classification Map in Development
                    </h3>
                    
                    <p className="text-gray-600 mb-6 text-sm">
                      Land use classification and environmental management mapping is currently in progress for Gampong Gugop.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl mb-2">🌳</div>
                        <span className="text-xs text-gray-500 font-medium">Mixed Gardens</span>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-2">🌿</div>
                        <span className="text-xs text-gray-500 font-medium">Shrublands</span>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-2">🏘️</div>
                        <span className="text-xs text-gray-500 font-medium">Settlements</span>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-2">🛡️</div>
                        <span className="text-xs text-gray-500 font-medium">Conservation</span>
                      </div>
                    </div>

                    <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg p-3">
                      <p className="text-gray-500 text-xs">
                        <span className="font-semibold">Status:</span> Field survey and data collection in progress
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Legend & Info */}
            {mapStatus.exists && imageLoaded && (
              <div className="bg-gray-50 border-t border-gray-200">
                {/* <div className="p-4 border-b border-gray-200">
                  <h4 className="font-semibold mb-3 text-gray-800">KLASIFIKASI PENGGUNAAN LAHAN:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {gugopMap.legend.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        {item.type === 'line' ? (
                          <div className={`w-6 h-0.5 ${item.color.replace('bg-', 'bg-')} border-t-2 ${item.color.replace('bg-', 'border-')}`}></div>
                        ) : (
                          <div className={`w-4 h-4 ${item.color} border border-gray-400`}></div>
                        )}
                        <div>
                          <span className="text-sm font-medium text-gray-800">{item.label}</span>
                          {item.description && (
                            <p className="text-xs text-gray-500">{item.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}

                <div className="p-4">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs text-gray-600">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">SUMBER PETA:</h4>
                      <div className="space-y-1">
                        <div>• SAS Planet</div>
                        <div>• Peta RBI 1:25.000</div>
                        <div>• Administrasi Desa Indonesia</div>
                        <div>• Field Survey 2025</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">TECHNICAL INFO:</h4>
                      <div className="space-y-1">
                        <div>Proyeksi: Transverse Mercator</div>
                        <div>Sistem Grid: Grid Geografik</div>
                        <div>Datum: WGS 1984 - Zone 46N</div>
                        <div>Scale: {gugopMap.scale}</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">PUBLISHED BY:</h4>
                      <div className="space-y-1">
                        {/* <div>Regita Azalia Nur Fadhila</div>
                        <div>22/505989/PTK/18200</div> */}
                        <div className="font-medium mt-2">Program Studi Ilmu Tanah</div>
                        <div>Departemen Tanah</div>
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

export default GugopMapSection;