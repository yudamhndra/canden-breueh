import React, { useState, useEffect } from 'react';

const SliderPanel = () => {
    const cards = [
        {
            id: 1,
            src: "src/assets/slider/meulingge.jpg",
            alt: "Beautiful Beach View",
            title: "Crystal Clear Waters",
            location: "Gampong Meulingge",
            description: "Pristine beaches with turquoise waters perfect for swimming and snorkeling. Experience the untouched beauty of nature.",
            category: "Beach"
        },
        {
            id: 2,
            src: "src/assets/ilalang.jpg", 
            alt: "Tropical Forest",
            title: "Lush Green Paradise",
            location: "Hutan Tropis Breueh",
            description: "Dense tropical rainforest with exotic flora and fauna. Discover rare species and breathtaking biodiversity.",
            category: "Nature"
        },
        {
            id: 3,
            src: "src/assets/slider/ujung-geunting.jpg",
            alt: "Sunset at Breueh",
            title: "Golden Hour Magic",
            location: "Ujung Geunting",
            description: "Breathtaking sunset views that paint the sky in vibrant colors. Perfect romantic spot for couples.",
            category: "Scenery"
        },
        {
            id: 4,
            src: "src/assets/ilalang.jpg",
            alt: "Coral Reef",
            title: "Underwater Wonder",
            location: "Terumbu Karang Breueh",
            description: "Vibrant coral reefs teeming with marine life. Best diving and snorkeling spot in the region.",
            category: "Marine"
        },
        {
            id: 5,
            src: "src/assets/slider/Teupin.jpg",
            alt: "Local Village",
            title: "Island Life",
            location: "Kampung Nelayan",
            description: "Traditional village life showcasing local culture and heritage. Experience authentic island traditions.",
            category: "Culture"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);
    const [isPausedByHover, setIsPausedByHover] = useState(false);

    // Fixed: Autoplay functionality with proper dependencies
    useEffect(() => {
        // Exit early if autoplay is disabled, paused by hover, or transitioning
        if (!isAutoPlay || isPausedByHover || isTransitioning) {
            return;
        }

        // console.log('Setting up autoplay interval'); // Debug log

        const interval = setInterval(() => {
            // console.log('Autoplay tick'); // Debug log
            nextCard();
        }, 2500);

        return () => {
            // console.log('Clearing autoplay interval'); // Debug log
            clearInterval(interval);
        };
    }, [isAutoPlay, isPausedByHover, isTransitioning]); // Fixed dependencies

    const nextCard = () => {
        if (isTransitioning) {
            // console.log('Blocked: Already transitioning'); // Debug log
            return;
        }
        // console.log('Moving to next card'); // Debug log
        setIsTransitioning(true);
        setActiveIndex((prev) => {
            const newIndex = (prev + 1) % cards.length;
            // console.log(`Moving from ${prev} to ${newIndex}`); // Debug log
            return newIndex;
        });
        setTimeout(() => {
            setIsTransitioning(false);
            // console.log('Transition completed'); // Debug log
        }, 600);
    };

    const prevCard = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
        setTimeout(() => setIsTransitioning(false), 600);
    };

    const goToCard = (index) => {
        if (isTransitioning || index === activeIndex) return;
        setIsTransitioning(true);
        setActiveIndex(index);
        setTimeout(() => setIsTransitioning(false), 600);
    };

    const toggleAutoPlay = () => {
        const newAutoPlayState = !isAutoPlay;
        // console.log(`Autoplay toggled: ${newAutoPlayState}`); // Debug log
        setIsAutoPlay(newAutoPlayState);
    };

    // Handle hover pause
    const handleCardMouseEnter = (index) => {
        // console.log(`Mouse enter card ${index}, active: ${activeIndex}`); // Debug log
        setHoveredCard(index);
        if (index === activeIndex) {
            // console.log('Pausing autoplay due to hover'); // Debug log
            setIsPausedByHover(true);
        }
    };

    const handleCardMouseLeave = () => {
        // console.log('Mouse leave, resuming autoplay'); // Debug log
        setHoveredCard(null);
        setIsPausedByHover(false);
    };

    // Calculate card positions
    const getCardStyle = (index) => {
        const diff = (index - activeIndex + cards.length) % cards.length;
        const isActive = diff === 0;
        
        if (isActive) {
            return {
                transform: 'translateX(-50%) translateZ(0px) rotateY(0deg) scale(1)',
                zIndex: 10,
                opacity: 1,
                filter: 'brightness(1)'
            };
        } else if (diff === 1 || diff === -4) {
            return {
                transform: 'translateX(-30%) translateZ(-120px) rotateY(-25deg) scale(0.85)',
                zIndex: 5,
                opacity: 0.7,
                filter: 'brightness(0.8)'
            };
        } else if (diff === 4 || diff === -1) {
            return {
                transform: 'translateX(-70%) translateZ(-120px) rotateY(25deg) scale(0.85)',
                zIndex: 5,
                opacity: 0.7,
                filter: 'brightness(0.8)'
            };
        } else if (diff === 2 || diff === -3) {
            return {
                transform: 'translateX(-10%) translateZ(-240px) rotateY(-45deg) scale(0.7)',
                zIndex: 2,
                opacity: 0.4,
                filter: 'brightness(0.6)'
            };
        } else {
            return {
                transform: 'translateX(-90%) translateZ(-240px) rotateY(45deg) scale(0.7)',
                zIndex: 2,
                opacity: 0.4,
                filter: 'brightness(0.6)'
            };
        }
    };

    return (
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-6">
                        Discover Breueh Island
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-lg 2xl:text-xl text-gray-600 max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto">
                        Experience the breathtaking beauty and diverse landscapes of our pristine island paradise
                    </p>
                </div>

                {/* Debug Info - Remove in production */}
                {/* <div className="text-center mb-4 text-xs text-gray-500">
                    Debug: Active={activeIndex}, AutoPlay={isAutoPlay.toString()}, Paused={isPausedByHover.toString()}, Transitioning={isTransitioning.toString()}
                </div> */}

                {/* Carousel Container */}
                <div className="relative h-96 sm:h-[28rem] lg:h-[32rem] xl:h-[36rem] 2xl:h-[40rem] mb-8 sm:mb-12 lg:mb-16">
                    {/* 3D Perspective Container */}
                    <div 
                        className="relative w-full h-full"
                        style={{ 
                            perspective: '1000px',
                            perspectiveOrigin: 'center center'
                        }}
                    >
                        {/* Cards Stack */}
                        {cards.map((card, index) => (
                            <div
                                key={card.id}
                                className={`absolute left-1/2 top-4 w-72 sm:w-80 md:w-96 lg:w-[26rem] xl:w-[30rem] 2xl:w-[34rem] h-80 sm:h-96 lg:h-[26rem] xl:h-[30rem] 2xl:h-[34rem] cursor-pointer transition-all duration-700 ease-out group ${
                                    index === activeIndex ? 'pointer-events-auto' : 'pointer-events-none'
                                }`}
                                style={getCardStyle(index)}
                                onClick={() => index !== activeIndex && goToCard(index)}
                                onMouseEnter={() => handleCardMouseEnter(index)}
                                onMouseLeave={handleCardMouseLeave}
                            >
                                {/* Full Image Card */}
                                <div className="relative w-full h-full rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden transform-gpu">
                                    {/* Background Image - Full Card */}
                                    <img
                                        src={card.src}
                                        alt={card.alt}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full shadow-lg border border-white/20">
                                            {card.category}
                                        </span>
                                    </div>

                                    {/* Active Indicator with Pause Status */}
                                    {index === activeIndex && (
                                        <div className="absolute top-4 right-4 z-20 flex items-center space-x-2">
                                            <div className={`w-3 h-3 rounded-full shadow-lg border-2 border-white ${
                                                isPausedByHover 
                                                    ? 'bg-yellow-400' 
                                                    : isAutoPlay 
                                                        ? 'bg-green-400 animate-pulse'
                                                        : 'bg-red-400'
                                            }`}></div>
                                            {isPausedByHover && (
                                                <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                                                    Paused
                                                </span>
                                            )}
                                        </div>
                                    )}

                                    {/* Default Gradient Overlay (Always visible) */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                                    {/* Default Title & Location (Always visible at bottom) */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6 z-10">
                                        <h3 className="text-white text-lg sm:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold mb-1 sm:mb-2 drop-shadow-lg">
                                            {card.title}
                                        </h3>
                                        <p className="text-white/90 text-sm sm:text-base lg:text-lg flex items-center drop-shadow-md">
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                            </svg>
                                            {card.location}
                                        </p>
                                    </div>

                                    {/* Hover Overlay - Description & Details */}
                                    <div className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-all duration-500 ease-out flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8 text-center ${
                                        hoveredCard === index && index === activeIndex 
                                            ? 'opacity-100 visible' 
                                            : 'opacity-0 invisible'
                                    }`}>
                                        {/* Content on Hover */}
                                        <div className="transform transition-all duration-500 ease-out delay-100">
                                            <div className="mb-4 sm:mb-6">
                                                <span className="inline-block bg-blue-500/20 backdrop-blur-sm text-blue-200 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-400/30 mb-3 sm:mb-4">
                                                    {card.category}
                                                </span>
                                            </div>
                                            
                                            <h3 className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold mb-3 sm:mb-4">
                                                {card.title}
                                            </h3>
                                            
                                            <div className="flex items-center justify-center mb-4 sm:mb-6">
                                                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-red-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                                </svg>
                                                <span className="text-white/90 text-base sm:text-lg lg:text-xl font-medium">
                                                    {card.location}
                                                </span>
                                            </div>
                                            
                                            <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mx-auto mb-6 sm:mb-8">
                                                {card.description}
                                            </p>
                                            
                                            {/* <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold border border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                                Explore Location
                                            </button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Controls */}
                    <button
                        onClick={prevCard}
                        disabled={isTransitioning}
                        className="absolute left-4 sm:left-8 lg:left-12 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-3 sm:p-4 shadow-xl transition-all duration-200 disabled:opacity-50 z-20 group"
                        aria-label="Previous card"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={nextCard}
                        disabled={isTransitioning}
                        className="absolute right-4 sm:right-8 lg:right-12 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-3 sm:p-4 shadow-xl transition-all duration-200 disabled:opacity-50 z-20 group"
                        aria-label="Next card"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Auto-play Control */}
                    {/* <button
                        onClick={toggleAutoPlay}
                        className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-xl transition-all duration-200 z-20 group"
                        aria-label={isAutoPlay ? "Pause autoplay" : "Start autoplay"}
                    >
                        {isAutoPlay ? (
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                            </svg>
                        ) : (
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        )}
                    </button> */}
                </div>

                {/* Card Indicators */}
                {/* <div className="flex justify-center items-center space-x-3 sm:space-x-4">
                    {cards.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToCard(index)}
                            disabled={isTransitioning}
                            className={`transition-all duration-300 disabled:opacity-50 hover:scale-110 ${
                                index === activeIndex
                                    ? 'w-8 sm:w-10 h-2 sm:h-2.5 bg-blue-600 rounded-full shadow-lg'
                                    : 'w-2 sm:w-3 h-2 sm:h-3 bg-gray-300 hover:bg-gray-400 rounded-full'
                            }`}
                            aria-label={`Go to card ${index + 1}`}
                        />
                    ))}
                </div> */}

                {/* Card Info Display with Pause Indicator */}
                {/* <div className="text-center mt-6 sm:mt-8 lg:mt-10">
                    <div className="inline-flex items-center space-x-4 sm:space-x-6 bg-white/50 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg">
                        <span className="text-sm sm:text-base text-gray-600">
                            {activeIndex + 1} of {cards.length}
                        </span>
                        <div className="w-px h-4 bg-gray-300"></div>
                        <span className={`text-sm sm:text-base ${
                            isPausedByHover ? 'text-yellow-600 font-semibold' : 'text-gray-600'
                        }`}>
                            {isPausedByHover ? 'Paused' : (isAutoPlay ? 'Auto (2.5s)' : 'Manual')}
                        </span>
                        <div className="w-px h-4 bg-gray-300"></div>
                        <span className="text-sm sm:text-base font-medium text-blue-600">
                            {cards[activeIndex].category}
                        </span>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default SliderPanel;