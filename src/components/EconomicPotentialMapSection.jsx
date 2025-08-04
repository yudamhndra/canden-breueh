import React from "react";

const EconomicPotentialSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-6">
          <h2 className="text-3xl font-bold mb-2 text-center">Economic Potential Maps</h2>
          <p className="text-teal-100 text-center">Agriculture, Fisheries, and Tourism</p>
        </div>

        {/* Card Content - Coming Soon */}
        <div className="p-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* Coming Soon Content */}
            <div className="flex items-center justify-center min-h-[400px] bg-gradient-to-br from-teal-50 to-blue-50">
              <div className="text-center px-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Maps in Development
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
                  Our team is processing geospatial data to generate accurate and informative economic potential maps.
                </p>

                <div className="flex justify-center space-x-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🌾</div>
                    <span className="text-xs text-gray-500 font-medium">Agriculture</span>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🐟</div>
                    <span className="text-xs text-gray-500 font-medium">Fisheries</span>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🏖️</div>
                    <span className="text-xs text-gray-500 font-medium">Tourism</span>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-500 text-sm">
                    <span className="font-semibold">Status:</span> Field data collection in progress
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

export default EconomicPotentialSection;