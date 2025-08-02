import React, { useState, useEffect } from 'react';

const AboutSection = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [visibleStats, setVisibleStats] = useState(false);
    const [animatedStats, setAnimatedStats] = useState({
        area: 0,
        beaches: 0,
        species: 0,
        visitors: 0
    });

    // Island statistics
    const stats = [
        {
            id: 'area',
            value: 45,
            suffix: 'km²',
            label: 'Total Area',
            icon: '🏝️',
            description: 'Pristine island territory'
        },
        {
            id: 'beaches',
            value: 12,
            suffix: '',
            label: 'Beautiful Beaches',
            icon: '🏖️',
            description: 'Crystal clear waters'
        },
        {
            id: 'species',
            value: 200,
            suffix: '+',
            label: 'Marine Species',
            icon: '🐠',
            description: 'Diverse marine life'
        },
        {
            id: 'visitors',
            value: 5000,
            suffix: '+',
            label: 'Happy Visitors',
            icon: '👥',
            description: 'Annual visitors'
        }
    ];

    // Tabs content
    const tabs = [
        {
            id: 'overview',
            label: 'Overview',
            icon: '🌴'
        },
        {
            id: 'history',
            label: 'History',
            icon: '📜'
        },
        {
            id: 'nature',
            label: 'Nature',
            icon: '🌿'
        },
        {
            id: 'culture',
            label: 'Culture',
            icon: '🎭'
        }
    ];

    // Features highlights
    const features = [
        {
            icon: '🌊',
            title: 'Crystal Clear Waters',
            description: 'Pristine waters with visibility up to 30 meters, perfect for diving and snorkeling adventures.',
            color: 'teal' // Assign color theme
        },
        {
            icon: '🌺',
            title: 'Tropical Paradise',
            description: 'Lush tropical vegetation with exotic flora and fauna in their natural habitat.',
            color: 'orange'
        },
        {
            icon: '🏛️',
            title: 'Rich Heritage',
            description: 'Authentic local culture preserved through generations of island communities.',
            color: 'navy'
        },
        {
            icon: '🛡️',
            title: 'Protected Marine Reserve',
            description: 'Officially designated marine protected area ensuring sustainable tourism.',
            color: 'teal'
        },
        {
            icon: '🌅',
            title: 'Spectacular Views',
            description: 'Breathtaking sunrise and sunset views from multiple vantage points.',
            color: 'orange'
        },
        {
            icon: '🎣',
            title: 'Sustainable Tourism',
            description: 'Eco-friendly practices that preserve the island for future generations.',
            color: 'navy'
        }
    ];

    // Color schemes based on logo
    const colorSchemes = {
        teal: {
            bg: 'bg-teal-50',
            text: 'text-teal-800',
            accent: 'text-teal-700',
            border: 'border-teal-200',
            hover: 'hover:bg-teal-100'
        },
        orange: {
            bg: 'bg-orange-50',
            text: 'text-orange-800',
            accent: 'text-orange-700',
            border: 'border-orange-200',
            hover: 'hover:bg-orange-100'
        },
        navy: {
            bg: 'bg-slate-50',
            text: 'text-slate-800',
            accent: 'text-slate-700',
            border: 'border-slate-200',
            hover: 'hover:bg-slate-100'
        }
    };

    // Animate stats when visible
    useEffect(() => {
        if (visibleStats) {
            stats.forEach(stat => {
                let start = 0;
                const end = stat.value;
                const duration = 2000;
                const increment = end / (duration / 16);

                const timer = setInterval(() => {
                    start += increment;
                    if (start >= end) {
                        start = end;
                        clearInterval(timer);
                    }
                    setAnimatedStats(prev => ({
                        ...prev,
                        [stat.id]: Math.floor(start)
                    }));
                }, 16);
            });
        }
    }, [visibleStats]);

    // Intersection Observer for stats animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisibleStats(true);
                }
            },
            { threshold: 0.5 }
        );

        const statsElement = document.getElementById('stats-section');
        if (statsElement) {
            observer.observe(statsElement);
        }

        return () => observer.disconnect();
    }, []);

    const getTabContent = () => {
        switch(activeTab) {
            case 'overview':
                return (
                    <div className="space-y-6">
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            Breueh Island, located off the coast of Aceh Besar, Indonesia, is a hidden gem in the Indian Ocean. 
                            This pristine tropical paradise offers visitors an authentic island experience with its untouched beaches, 
                            vibrant coral reefs, and rich marine biodiversity.
                        </p>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            The island spans approximately 45 square kilometers of pure natural beauty, featuring diverse ecosystems 
                            from coastal mangroves to tropical rainforests. Its strategic location provides easy access while 
                            maintaining the serenity that makes it a perfect escape from modern life.
                        </p>
                        <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 sm:p-6">
                            <h4 className="font-semibold text-teal-800 mb-2">Did You Know?</h4>
                            <p className="text-teal-700 text-sm sm:text-base">
                                Breueh Island is home to one of the most diverse coral reef systems in the region, 
                                with over 200 species of fish and countless varieties of coral formations.
                            </p>
                        </div>
                    </div>
                );
            case 'history':
                return (
                    <div className="space-y-6">
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            The history of Breueh Island dates back centuries, when it served as a crucial stopover 
                            for traders traveling the ancient spice routes. Local legends speak of the island's name 
                            originating from the Acehnese word meaning "place of abundance."
                        </p>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            During the colonial period, the island remained relatively untouched due to its remote location 
                            and the fierce independence of its inhabitants. This isolation helped preserve both its natural 
                            environment and traditional way of life.
                        </p>
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 sm:p-6">
                            <h4 className="font-semibold text-orange-800 mb-2">Historical Timeline</h4>
                            <ul className="text-orange-700 text-sm sm:text-base space-y-1">
                                <li>• 15th Century: First recorded mentions in trading logs</li>
                                <li>• 17th Century: Established as fishing community</li>
                                <li>• 1960s: Designated as marine protected area</li>
                                <li>• 2000s: Sustainable tourism development begins</li>
                            </ul>
                        </div>
                    </div>
                );
            case 'nature':
                return (
                    <div className="space-y-6">
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            Breueh Island boasts incredible biodiversity both above and below water. The island's marine 
                            ecosystem is particularly rich, featuring pristine coral reefs that serve as nurseries for 
                            countless species of tropical fish, sea turtles, and other marine life.
                        </p>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            On land, the island features lush tropical rainforests home to various bird species, 
                            butterflies, and indigenous plants. The careful balance between conservation and tourism 
                            ensures these ecosystems remain protected for future generations.
                        </p>
                        <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 sm:p-6">
                            <h4 className="font-semibold text-teal-800 mb-2">Wildlife Highlights</h4>
                            <div className="grid grid-cols-2 gap-2 text-teal-700 text-sm sm:text-base">
                                <div>• Sea Turtles</div>
                                <div>• Tropical Birds</div>
                                <div>• Coral Gardens</div>
                                <div>• Exotic Butterflies</div>
                                <div>• Mangrove Trees</div>
                                <div>• Tropical Fish</div>
                            </div>
                        </div>
                    </div>
                );
            case 'culture':
                return (
                    <div className="space-y-6">
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            The cultural heritage of Breueh Island reflects the rich traditions of the Acehnese people. 
                            The local fishing communities have maintained their traditional ways of life for generations, 
                            passing down knowledge of sustainable fishing practices and deep respect for the ocean.
                        </p>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            Visitors can experience authentic cultural exchanges through traditional boat making, 
                            local cooking classes, and participation in daily fishing activities. The warm hospitality 
                            of the island's inhabitants creates meaningful connections between visitors and local culture.
                        </p>
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 sm:p-6">
                            <h4 className="font-semibold text-slate-800 mb-2">Cultural Experiences</h4>
                            <ul className="text-slate-700 text-sm sm:text-base space-y-1">
                                <li>• Traditional fishing techniques</li>
                                <li>• Local cuisine cooking classes</li>
                                <li>• Handicraft workshops</li>
                                <li>• Cultural storytelling sessions</li>
                                <li>• Traditional music and dance</li>
                            </ul>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-gradient-to-br from-slate-50 via-teal-50 to-orange-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
                
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-slate-800 mb-3 sm:mb-4 lg:mb-6">
                        About Breueh Island
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-lg 2xl:text-xl text-slate-600 max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto">
                        Discover the story, heritage, and natural wonders of one of Indonesia's most pristine island destinations
                    </p>
                </div>

                {/* Hero Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 mb-12 sm:mb-16 lg:mb-20 items-start">
                    
                    {/* Image */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative h-[500px] sm:h-[580px] lg:h-[600px] xl:h-[650px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="src/assets/williams-torrent.png"
                                alt="Breueh Island Overview"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                            
                            {/* Floating Card */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-teal-200">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-sm sm:text-base">Location</h3>
                                        <p className="text-slate-600 text-xs sm:text-sm">Aceh Besar, Indonesia</p>
                                    </div>
                                    <div className="text-right">
                                        <h3 className="font-bold text-slate-800 text-sm sm:text-base">Coordinates</h3>
                                        <p className="text-slate-600 text-xs sm:text-sm">5°32'N 95°17'E</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Tabs */}
                    <div className="order-1 lg:order-2 flex flex-col h-[500px] sm:h-[580px] lg:h-[600px] xl:h-[650px]">
                        {/* Tab Navigation */}
                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 flex-shrink-0">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 ${
                                        activeTab === tab.id
                                            ? 'bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-lg transform scale-105'
                                            : 'bg-white text-slate-600 hover:bg-teal-50 hover:text-teal-700 shadow-md hover:shadow-lg border border-teal-100'
                                    }`}
                                >
                                    <span className="text-lg">{tab.icon}</span>
                                    <span>{tab.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Tab Content - Flex Grow untuk mengisi sisa ruang */}
                        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-teal-100 flex-1 flex flex-col justify-start overflow-y-auto">
                            <div className="h-full">
                                {getTabContent()}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Statistics Section */}
                <div id="stats-section" className="mb-12 sm:mb-16 lg:mb-20">
                    <div className="bg-gradient-to-r from-slate-800 via-teal-700 to-slate-800 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-2xl">
                        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                                Island by Numbers
                            </h3>
                            <p className="text-teal-100 text-sm sm:text-base lg:text-lg">
                                Fascinating facts about our beautiful island paradise
                            </p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                            {stats.map((stat) => (
                                <div key={stat.id} className="text-center group">
                                    <div className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
                                        {stat.icon}
                                    </div>
                                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 text-orange-300">
                                        {animatedStats[stat.id]}{stat.suffix}
                                    </div>
                                    <div className="text-teal-100 font-medium text-sm sm:text-base mb-1">
                                        {stat.label}
                                    </div>
                                    <div className="text-teal-200 text-xs sm:text-sm">
                                        {stat.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mb-12 sm:mb-16 lg:mb-20">
                    <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-3 sm:mb-4">
                            What Makes Breueh Special
                        </h3>
                        <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                            Discover the unique features that set our island apart as a world-class destination
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {features.map((feature, index) => {
                            const colorScheme = colorSchemes[feature.color];
                            return (
                                <div
                                    key={index}
                                    className={`group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:${colorScheme.border}`}
                                >
                                    <div className={`text-3xl sm:text-4xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 ${colorScheme.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto`}>
                                        {feature.icon}
                                    </div>
                                    <h4 className={`text-lg sm:text-xl font-bold text-slate-800 mb-3 sm:mb-4 group-hover:${colorScheme.text} transition-colors duration-300`}>
                                        {feature.title}
                                    </h4>
                                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className="bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl max-w-4xl mx-auto border border-teal-100">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-3 sm:mb-4">
                            Ready to Explore Breueh Island?
                        </h3>
                        <p className="text-slate-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                            Join us for an unforgettable journey to one of Indonesia's most pristine and beautiful islands. 
                            Experience the perfect blend of adventure, culture, and natural beauty.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
                            <button className="flex-1 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                                Plan Your Visit
                            </button>
                            <button className="flex-1 border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200">
                                Download Guide
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;