import React, { useState } from "react";

const LandUseSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Data untuk peta klasifikasi penggunaan lahan
  const landUseMap = {
    title: 'Peta Klasifikasi Penggunaan Lahan',
    subtitle: 'Desa Gugop',
    location: 'Kecamatan Pulo Aceh, Kabupaten Aceh Besar',
    path: '/assets/maps/Klasifikasi Penggunaan Lahan.jpg',
    scale: '1:25,000 pada ukuran A3',
    legend: [
      { color: 'bg-green-600', label: 'Kebun Campuran', description: 'Mixed garden/plantation areas' },
      { color: 'bg-yellow-400', label: 'Semak Belukar', description: 'Shrubland and bushes' },
      { color: 'bg-red-500', label: 'Pemukiman', description: 'Settlement areas' },
      { color: 'bg-gray-800', label: 'Batas Admin Desa', description: 'Village administrative boundary', type: 'line' }
    ],
    coordinates: {
      x: ['725000', '726000', '727000', '728000', '729000', '730000', '731000'],
      y: ['6280000', '6279000', '6278000']
    },
    scale_bar: {
      segments: ['0', '0.2', '0.4', '0.8', '1.2', '1.6', 'KM']
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
          <h2 className="text-3xl font-bold mb-2 text-center">Land Use Classification</h2>
          <p className="text-green-100 text-center">Environmental Management and Conservation</p>
        </div>

        {/* Main Map Area */}
        <div className="p-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            
            {/* Map Description */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 border-b border-gray-200">
              <h3 className="font-bold text-gray-800 mb-1 text-lg">{landUseMap.title}</h3>
              <h4 className="font-semibold text-gray-700 mb-2">{landUseMap.subtitle}</h4>
              <p className="text-sm text-gray-600">{landUseMap.location}</p>
              <p className="text-xs text-gray-500 mt-1">Scale: {landUseMap.scale}</p>
            </div>

            {/* Map Container dengan coordinate grid */}
            <div className="relative w-full aspect-[4/3] lg:aspect-[1/1.414] bg-gray-100 border-2 border-gray-300">
              
              {/* Coordinate Labels - Top */}
              <div className="absolute top-2 left-8 right-8 flex justify-between text-xs text-gray-500 font-mono z-10">
                {landUseMap.coordinates.x.map((coord, index) => (
                  <span key={index} className="bg-white/80 px-1 rounded">{coord}</span>
                ))}
              </div>
              
              {/* Coordinate Labels - Bottom */}
              <div className="absolute bottom-2 left-8 right-8 flex justify-between text-xs text-gray-500 font-mono z-10">
                {landUseMap.coordinates.x.map((coord, index) => (
                  <span key={index} className="bg-white/80 px-1 rounded">{coord}</span>
                ))}
              </div>

              {/* Coordinate Labels - Left */}
              <div className="absolute top-8 bottom-8 left-2 flex flex-col justify-between text-xs text-gray-500 font-mono z-10">
                {landUseMap.coordinates.y.map((coord, index) => (
                  <span key={index} className="transform -rotate-90 bg-white/80 px-1 rounded whitespace-nowrap">{coord}</span>
                ))}
              </div>

              {/* Coordinate Labels - Right */}
              <div className="absolute top-8 bottom-8 right-2 flex flex-col justify-between text-xs text-gray-500 font-mono z-10">
                {landUseMap.coordinates.y.map((coord, index) => (
                  <span key={index} className="transform rotate-90 bg-white/80 px-1 rounded whitespace-nowrap">{coord}</span>
                ))}
              </div>

              {!imageError ? (
                <>
                  {/* Loading state */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 z-20">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-4 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-gray-600">Loading land use classification map...</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Map Image */}
                  <img
                    src={landUseMap.path}
                    alt={`${landUseMap.title} - ${landUseMap.subtitle}, ${landUseMap.location}`}
                    className={`w-full h-full object-contain transition-opacity duration-500 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    loading="lazy"
                  />
                </>
              ) : (
                /* Error state - fallback to coming soon */
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50 z-20">
                  <div className="text-center px-8">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Land Use Map Not Found
                    </h3>
                    
                    <p className="text-gray-600 mb-6 text-sm">
                      File: <code className="bg-gray-200 px-2 py-1 rounded text-xs">{landUseMap.path}</code>
                    </p>

                    <div className="flex justify-center space-x-4 lg:space-x-6 mb-6">
                      <div className="text-center">
                        <div className="text-xl lg:text-2xl mb-2">🌳</div>
                        <span className="text-xs text-gray-500 font-medium">Current Use</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xl lg:text-2xl mb-2">🛡️</div>
                        <span className="text-xs text-gray-500 font-medium">Conservation</span>
                      </div>
                      <div className="text-center">
                        <div className="text-xl lg:text-2xl mb-2">📋</div>
                        <span className="text-xs text-gray-500 font-medium">Management</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => {
                        setImageError(false);
                        setImageLoaded(false);
                      }}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      🔄 Retry Loading
                    </button>
                  </div>
                </div>
              )}

              {/* Zoom button */}
              {imageLoaded && !imageError && (
                <div className="absolute top-4 right-4 z-30">
                  <button 
                    onClick={() => window.open(landUseMap.path, '_blank')}
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
              {imageLoaded && !imageError && (
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
              )}

              {/* Scale Bar */}
              {imageLoaded && !imageError && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
                  <div className="bg-white/90 p-2 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-1">
                      <div className="flex">
                        {landUseMap.scale_bar.segments.slice(0, -1).map((segment, index) => (
                          <div key={index} className="relative">
                            <div className={`w-4 h-2 border border-gray-800 ${
                              index % 2 === 0 ? 'bg-white' : 'bg-gray-800'
                            }`}></div>
                            <span className="absolute -bottom-4 left-0 text-xs transform -translate-x-1/2">{segment}</span>
                          </div>
                        ))}
                      </div>
                      <span className="text-xs font-medium ml-2">{landUseMap.scale_bar.segments[landUseMap.scale_bar.segments.length - 1]}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Legend & Map Info Footer */}
            {imageLoaded && !imageError && (
              <div className="bg-gray-50 border-t border-gray-200">
                {/* Legend */}
                <div className="p-4 border-b border-gray-200">
                  <h4 className="font-semibold mb-3 text-gray-800">KETERANGAN (LEGEND):</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {landUseMap.legend.map((item, index) => (
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
                </div>

                {/* Technical Info */}
                <div className="p-4">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs text-gray-600">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">SUMBER PETA:</h4>
                      <div className="space-y-1">
                        <div>• SAS Planet</div>
                        <div>• Peta RBI 1:25,000</div>
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
                        <div>Scale: {landUseMap.scale}</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">DIBUAT OLEH:</h4>
                      <div className="space-y-1">
                        <div>Regita Azalia Nur Fadhila</div>
                        <div>22/505989/PTK/18200</div>
                        <div className="font-medium mt-2">Program Studi Ilmu Tanah</div>
                        <div>Departemen Tanah</div>
                        <div>Fakultas Pertanian</div>
                        <div>Universitas Gadjah Mada</div>
                        <div className="font-medium">2025</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="bg-yellow-50 border-t border-yellow-200 p-4">
                  <h4 className="font-semibold mb-2 text-yellow-800">DISCLAIMER:</h4>
                  <div className="text-xs text-yellow-700 space-y-1">
                    <div>• Data pada peta ini bersifat sementara dan dapat berubah sewaktu-waktu.</div>
                    <div>• Peta ini disusun berdasarkan sumber data yang tersedia pada saat pembuatan.</div>
                    <div>• Peta ini tidak dimaksudkan sebagai acuan resmi untuk pengambilan keputusan.</div>
                    <div>• Tingkat akurasi data dalam peta ini tidak dijamin keakuratannya.</div>
                    <div>• Pengguna disarankan untuk melakukan verifikasi lapangan atau konsultasi lanjutan.</div>
                    <div>• Pembuat peta tidak bertanggung jawab atas penggunaan data ini di luar konteks informatif.</div>
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

export default LandUseSection;