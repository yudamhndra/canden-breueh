import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    // Simplified animation on mount - hanya untuk fade in
    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative h-screen w-full min-h-[600px] overflow-hidden">
            {/* Background Image - Static tanpa parallax */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/assets/ilalang-4.png"
                    alt="Breueh Island Aerial View"
                    className="w-full h-full object-cover object-center"
                />
                
                {/* Simplified overlay - hanya 1 gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-transparent to-orange-900/20"></div>
                
                {/* Reduced particles - hanya 3 dan animasi lebih pelan */}
                <div className="absolute inset-0">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"
                            style={{
                                left: `${30 + i * 20}%`,
                                top: `${40 + i * 10}%`,
                                animationDelay: `${i * 1}s`,
                                animationDuration: `4s`
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Simplified wave pattern - static */}
            <div className="absolute bottom-0 left-0 right-0 opacity-20 pointer-events-none">
                <svg className="w-full h-16" viewBox="0 0 1200 120" fill="none">
                    <path d="M0,96L48,80C96,64 192,32 288,42.7C384,53 480,107 576,128C672,149 768,139 864,122.7C960,107 1056,85 1152,90.7C1248,96 1344,128 1392,144L1440,160L1440,320L1392,320C1344,320 1248,320 1152,320C1056,320 960,320 864,320C768,320 672,320 576,320C480,320 384,320 288,320C192,320 96,320 48,320L0,320Z" fill="white" fillOpacity="0.1"/>
                </svg>
            </div>

            {/* Main Content - Animasi sederhana */}
            <div className="relative z-10 flex flex-col items-center justify-center xl:items-start xl:justify-center h-full px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-32 pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-24 2xl:pt-32">
                <div className={`max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-lg 2xl:max-w-5xl text-center xl:text-left transition-opacity duration-1000 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                }`}>
                    
                    {/* Subtitle with Icon */}
                    <div className="flex items-center justify-center xl:justify-start mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-3">
                        <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-5 lg:px-6 xl:px-3 py-2 sm:py-3 xl:py-1.5 border border-white/20">
                            <span className="text-orange-300 text-lg sm:text-xl lg:text-2xl xl:text-sm mr-2 sm:mr-3 xl:mr-1.5">🏝️</span>
                            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-sm 2xl:text-2xl font-medium drop-shadow-lg">
                                Explore the Soul of
                            </p>
                        </div>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-white font-extrabold mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-3 2xl:mb-10 leading-tight">
                        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-3xl 2xl:text-9xl drop-shadow-2xl" style={{textShadow: '4px 4px 12px rgba(0,0,0,0.9)'}}>
                            Breueh
                        </span>
                        <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-2xl 2xl:text-8xl text-teal-300 drop-shadow-2xl mt-2 xl:mt-0.5" style={{textShadow: '3px 3px 10px rgba(0,0,0,0.8)'}}>
                            Island
                        </span>
                    </h1>

                    {/* Action Buttons - Animasi hover sederhana */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-3 items-center xl:items-start">
                        <a 
                            href="#about"
                            className="group relative inline-flex items-center justify-center px-8 sm:px-10 lg:px-12 xl:px-4 py-4 sm:py-5 lg:py-6 xl:py-2 text-lg sm:text-xl lg:text-2xl xl:text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full shadow-2xl hover:from-teal-700 hover:to-teal-800 transition-colors duration-300 backdrop-blur-sm border border-white/20"
                        >
                            <span className="mr-2 sm:mr-3 xl:mr-1.5 text-xl sm:text-2xl xl:text-sm">🌊</span>
                            Explore Paradise
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-3 xl:h-3 ml-2 sm:ml-3 xl:ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>

                        <a 
                            href="#activities"
                            className="group inline-flex items-center justify-center px-8 sm:px-10 lg:px-12 xl:px-4 py-4 sm:py-5 lg:py-6 xl:py-2 text-lg sm:text-xl lg:text-2xl xl:text-sm font-semibold text-white bg-white/10 backdrop-blur-sm rounded-full border-2 border-white/30 hover:bg-white/20 transition-colors duration-300 shadow-xl"
                        >
                            <span className="mr-2 sm:mr-3 xl:mr-1.5 text-xl sm:text-2xl xl:text-sm">📸</span>
                            View Gallery
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;