import React from "react";

const LandUseSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6">
          <h2 className="text-3xl font-bold mb-2 text-center">Land Use Classification</h2>
          <p className="text-orange-100 text-center">Environmental Management and Conservation</p>
        </div>

        {/* Card Content - Coming Soon */}
        <div className="p-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Coming Soon Content */}
            <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-orange-50 to-red-50">
              <div className="text-center px-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Classification Maps in Process
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
                  Satellite imagery analysis and field surveys are being conducted to generate detailed land use classification.
                </p>

                <div className="flex justify-center space-x-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🌳</div>
                    <span className="text-xs text-gray-500 font-medium">Current Use</span>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🛡️</div>
                    <span className="text-xs text-gray-500 font-medium">Conservation</span>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">📋</div>
                    <span className="text-xs text-gray-500 font-medium">Management</span>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-500 text-sm">
                    <span className="font-semibold">Status:</span> Satellite imagery interpretation and field validation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandUseSection;