import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Animation on mount
    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Mouse parallax effect
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 20;
        const y = (clientY / innerHeight - 0.5) * 20;
        setMousePosition({ x, y });
    };

    return (
        <section 
            className="relative h-screen w-full min-h-[600px] overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Background Image with Parallax */}
            <div className="absolute inset-0 z-0">
                <div 
                    className="w-full h-full transform transition-transform duration-1000 ease-out scale-110"
                    style={{
                        transform: `scale(1.1) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
                    }}
                >
                    <img 
                        src="/canden-breueh/assets/ilalang-4.png"
                        alt="Breueh Island Aerial View"
                        className="w-full h-full object-cover object-center"
                    />
                </div>
                
                {/* Dynamic Gradient Overlays */}
                {/* <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30"></div> */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-transparent to-orange-900/20"></div>
                
                {/* Animated Particles */}
                <div className="absolute inset-0">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-white/30 rounded-full animate-pulse"
                            style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + i * 10}%`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: `${3 + i * 0.5}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 z-5 pointer-events-none">
                {/* Palm Leaf Silhouettes */}
                {/* <div className="absolute top-32 lg:top-40 xl:top-48 right-10 opacity-20 animate-pulse">
                    <svg className="w-16 h-16 lg:w-24 lg:h-24 xl:w-16 xl:h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.5 2 6 4.5 6 8c0 2 1 4 2 5.5L12 22l4-8.5c1-1.5 2-3.5 2-5.5 0-3.5-2.5-6-6-6z"/>
                    </svg>
                </div> */}
                
                {/* Wave Pattern */}
                <div className="absolute bottom-0 left-0 right-0 opacity-30">
                    <svg className="w-full h-24" viewBox="0 0 1200 120" fill="none">
                        <path d="M0,96L48,80C96,64 192,32 288,42.7C384,53 480,107 576,128C672,149 768,139 864,122.7C960,107 1056,85 1152,90.7C1248,96 1344,128 1392,144L1440,160L1440,320L1392,320C1344,320 1248,320 1152,320C1056,320 960,320 864,320C768,320 672,320 576,320C480,320 384,320 288,320C192,320 96,320 48,320L0,320Z" fill="white" fillOpacity="0.1"/>
                        <path d="M0,160L48,170.7C96,181 192,203 288,192C384,181 480,139 576,133.3C672,128 768,160 864,165.3C960,171 1056,149 1152,138.7C1248,128 1344,128 1392,128L1440,128L1440,320L1392,320C1344,320 1248,320 1152,320C1056,320 960,320 864,320C768,320 672,320 576,320C480,320 384,320 288,320C192,320 96,320 48,320L0,320Z" fill="white" fillOpacity="0.05"/>
                    </svg>
                </div>
            </div>

            {/* Main Content - Typography sangat diperkecil */}
            <div className="relative z-10 flex flex-col items-center justify-center xl:items-start xl:justify-center h-full px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 2xl:px-32 pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-24 2xl:pt-32">
                <div className={`max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-lg 2xl:max-w-5xl text-center xl:text-left transform transition-all duration-1000 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    
                    {/* Subtitle with Icon - Sangat diperkecil */}
                    <div className="flex items-center justify-center xl:justify-start mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-3">
                        <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-5 lg:px-6 xl:px-3 py-2 sm:py-3 xl:py-1.5 border border-white/20">
                            <span className="text-orange-300 text-lg sm:text-xl lg:text-2xl xl:text-sm mr-2 sm:mr-3 xl:mr-1.5">🏝️</span>
                            <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-sm 2xl:text-2xl font-medium drop-shadow-lg">
                                Explore the Soul of
                            </p>
                        </div>
                    </div>

                    {/* Main Title - Drastis diperkecil */}
                    <h1 className="text-white font-extrabold mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-3 2xl:mb-10 leading-tight">
                        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-3xl 2xl:text-9xl drop-shadow-2xl" style={{textShadow: '4px 4px 12px rgba(0,0,0,0.9)'}}>
                            Breueh
                        </span>
                        <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-2xl 2xl:text-8xl text-teal-300 drop-shadow-2xl mt-2 xl:mt-0.5" style={{textShadow: '3px 3px 10px rgba(0,0,0,0.8)'}}>
                            Island
                        </span>
                    </h1>

                    {/* Description - Sangat diperkecil */}
                    {/* <p className={`text-white/90 text-base sm:text-lg md:text-xl lg:text-xl xl:text-sm 2xl:text-3xl font-light mb-6 sm:mb-8 md:mb-8 lg:mb-10 xl:mb-4 2xl:mb-14 leading-relaxed max-w-3xl xl:max-w-sm 2xl:max-w-4xl transition-all duration-1000 delay-300 ${
                        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`} style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
                        Discover pristine beaches, vibrant coral reefs, and authentic island culture in Indonesia's hidden paradise
                    </p> */}

                    {/* Action Buttons - Sangat diperkecil */}
                    <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-3 items-center xl:items-start transition-all duration-1000 delay-500 ${
                        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        <a 
                            href="#about"
                            className="group relative inline-flex items-center justify-center px-8 sm:px-10 lg:px-12 xl:px-4 py-4 sm:py-5 lg:py-6 xl:py-2 text-lg sm:text-xl lg:text-2xl xl:text-sm font-bold text-white bg-gradient-to-r from-teal-600 to-teal-700 rounded-full shadow-2xl hover:from-teal-700 hover:to-teal-800 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
                        >
                            <span className="mr-2 sm:mr-3 xl:mr-1.5 text-xl sm:text-2xl xl:text-sm">🌊</span>
                            Explore Paradise
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-3 xl:h-3 ml-2 sm:ml-3 xl:ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>

                        <a 
                            href="#activities"
                            className="group inline-flex items-center justify-center px-8 sm:px-10 lg:px-12 xl:px-4 py-4 sm:py-5 lg:py-6 xl:py-2 text-lg sm:text-xl lg:text-2xl xl:text-sm font-semibold text-white bg-white/10 backdrop-blur-sm rounded-full border-2 border-white/30 hover:bg-white/20 transform hover:scale-105 transition-all duration-300 shadow-xl"
                        >
                            <span className="mr-2 sm:mr-3 xl:mr-1.5 text-xl sm:text-2xl xl:text-sm">📸</span>
                            View Gallery
                        </a>
                    </div>

                    {/* Quick Info Cards - Sangat diperkecil */}
                    {/* <div className={`grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-2 mt-8 sm:mt-12 md:mt-12 lg:mt-16 xl:mt-6 transition-all duration-1000 delay-700 ${
                        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 xl:p-2 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-lg 2xl:text-5xl font-bold mb-1 sm:mb-2 xl:mb-0.5">12</div>
                            <div className="text-xs sm:text-sm lg:text-base xl:text-xs text-white/80">Beaches</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 xl:p-2 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-lg 2xl:text-5xl font-bold mb-1 sm:mb-2 xl:mb-0.5">200+</div>
                            <div className="text-xs sm:text-sm lg:text-base xl:text-xs text-white/80">Species</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 xl:p-2 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                            <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-lg 2xl:text-5xl font-bold mb-1 sm:mb-2 xl:mb-0.5">45km²</div>
                            <div className="text-xs sm:text-sm lg:text-base xl:text-xs text-white/80">Area</div>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* Enhanced Scroll Indicator */}
            {/* <div className="absolute bottom-8 xl:bottom-10 2xl:bottom-12 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
                <div className="flex flex-col items-center space-y-2">
                    <span className="text-white/80 text-sm lg:text-base xl:text-xs font-medium">Scroll Down</span>
                    <div className="animate-bounce">
                        <div className="w-6 h-10 lg:w-7 lg:h-12 xl:w-5 xl:h-8 border-2 border-white/50 rounded-full flex justify-center">
                            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Weather Info - Sangat diperkecil */}
            {/* <div className="absolute top-32 lg:top-36 xl:top-28 right-6 sm:right-12 lg:right-16 xl:right-12 2xl:right-24 z-10 hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 lg:p-4 xl:p-1.5 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center space-x-2 lg:space-x-3 xl:space-x-1.5">
                        <span className="text-xl lg:text-2xl xl:text-sm 2xl:text-3xl">🌤️</span>
                        <div>
                            <div className="text-white font-semibold text-sm lg:text-base xl:text-xs 2xl:text-lg">28°C</div>
                            <div className="text-white/70 text-xs lg:text-sm xl:text-xs">Perfect Day</div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    );
};

export default Hero;