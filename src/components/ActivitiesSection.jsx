import React, { useState } from 'react';

const ActivitiesSection = () => {
    // Activities data
    const activities = [
        {
            id: 1,
            title: "Snorkeling Adventure",
            category: "Marine",
            difficulty: "Beginner",
            duration: "2-3 Hours",
            price: "From $25",
            image: "src/assets/activities/snorkeling.jpg",
            description: "Explore vibrant coral reefs and tropical fish in crystal-clear waters. Perfect for beginners with equipment provided.",
            highlights: ["Equipment included", "Professional guide", "Coral reef exploration", "Fish photography"],
            icon: "🤿",
            featured: true
        },
        {
            id: 2,
            title: "Island Hopping",
            category: "Adventure",
            difficulty: "Easy",
            duration: "Full Day",
            price: "From $45",
            image: "src/assets/activities/island-hopping.jpg",
            description: "Visit multiple pristine islands around Breueh. Discover hidden beaches and secluded lagoons.",
            highlights: ["Multiple islands", "Beach picnic", "Swimming stops", "Local boat captain"],
            icon: "⛵",
            featured: true
        },
        {
            id: 3,
            title: "Jungle Trekking",
            category: "Adventure",
            difficulty: "Moderate",
            duration: "3-4 Hours",
            price: "From $30",
            image: "src/assets/activities/jungle-trek.jpg",
            description: "Trek through lush tropical rainforest to discover hidden waterfalls and exotic wildlife.",
            highlights: ["Waterfall discovery", "Wildlife spotting", "Local guide", "Photography spots"],
            icon: "🥾",
            featured: false
        },
        {
            id: 4,
            title: "Cultural Village Tour",
            category: "Culture",
            difficulty: "Easy",
            duration: "2-3 Hours",
            price: "From $20",
            image: "src/assets/activities/village-tour.jpg",
            description: "Experience authentic island life, meet local fishermen, and learn traditional crafts.",
            highlights: ["Local interaction", "Traditional crafts", "Fishing village", "Cultural insights"],
            icon: "🏘️",
            featured: false
        },
        {
            id: 5,
            title: "Scuba Diving",
            category: "Marine",
            difficulty: "Advanced",
            duration: "4-5 Hours",
            price: "From $65",
            image: "src/assets/activities/scuba-diving.jpg",
            description: "Deep sea diving experience with certified instructors. Explore underwater caves and marine life.",
            highlights: ["Certified instructors", "Deep sea exploration", "Underwater caves", "Marine life encounters"],
            icon: "🏊‍♂️",
            featured: true
        },
        {
            id: 6,
            title: "Sunset Photography",
            category: "Scenery",
            difficulty: "Easy",
            duration: "2 Hours",
            price: "From $35",
            image: "src/assets/activities/sunset-photo.jpg",
            description: "Capture stunning sunset moments at the best viewpoints with professional photography guidance.",
            highlights: ["Best viewpoints", "Photography tips", "Golden hour timing", "Edited photos included"],
            icon: "📸",
            featured: false
        },
        {
            id: 7,
            title: "Kayaking Adventure",
            category: "Adventure",
            difficulty: "Beginner",
            duration: "2-3 Hours",
            price: "From $28",
            image: "src/assets/activities/kayaking.jpg",
            description: "Paddle through mangrove forests and explore hidden lagoons in stable kayaks.",
            highlights: ["Mangrove exploration", "Hidden lagoons", "Stable kayaks", "Nature photography"],
            icon: "🛶",
            featured: false
        },
        {
            id: 8,
            title: "Traditional Fishing",
            category: "Culture",
            difficulty: "Easy",
            duration: "3-4 Hours",
            price: "From $22",
            image: "src/assets/activities/fishing.jpg",
            description: "Learn traditional fishing methods from local fishermen and enjoy your fresh catch.",
            highlights: ["Traditional methods", "Local fishermen", "Fresh catch cooking", "Cultural exchange"],
            icon: "🎣",
            featured: false
        }
    ];

    // Categories for filtering
    const categories = [
        { name: 'All', icon: '🌟', count: activities.length },
        { name: 'Marine', icon: '🌊', count: activities.filter(a => a.category === 'Marine').length },
        { name: 'Adventure', icon: '⛰️', count: activities.filter(a => a.category === 'Adventure').length },
        { name: 'Culture', icon: '🏛️', count: activities.filter(a => a.category === 'Culture').length },
        { name: 'Scenery', icon: '🌅', count: activities.filter(a => a.category === 'Scenery').length }
    ];

    // Difficulty levels
    const difficultyColors = {
        'Easy': 'bg-green-100 text-green-800',
        'Beginner': 'bg-blue-100 text-blue-800',
        'Moderate': 'bg-yellow-100 text-yellow-800',
        'Advanced': 'bg-red-100 text-red-800'
    };

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [hoveredActivity, setHoveredActivity] = useState(null);

    // Filter activities based on selected category
    const filteredActivities = selectedCategory === 'All' 
        ? activities 
        : activities.filter(activity => activity.category === selectedCategory);

    // Get featured activities for highlight section
    const featuredActivities = activities.filter(activity => activity.featured);

    return (
        <section className="py-12 sm:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
                
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-10 lg:mb-12 xl:mb-14 2xl:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-6">
                        Island Activities & Experiences
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-lg 2xl:text-xl text-gray-600 max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto mb-6 sm:mb-8 lg:mb-10">
                        Discover unforgettable adventures and authentic experiences that make Breueh Island a truly special destination
                    </p>

                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() => setSelectedCategory(category.name)}
                                className={`flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                                    selectedCategory === category.name
                                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                                        : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg'
                                }`}
                            >
                                <span className="text-lg">{category.icon}</span>
                                <span>{category.name}</span>
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                    selectedCategory === category.name 
                                        ? 'bg-white/20 text-white' 
                                        : 'bg-gray-200 text-gray-500'
                                }`}>
                                    {category.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Featured Activities Banner */}
                {selectedCategory === 'All' && (
                    <div className="mb-12 lg:mb-16">
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 text-white">
                            <div className="flex flex-col lg:flex-row items-center justify-between">
                                <div className="mb-6 lg:mb-0 lg:mr-8">
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
                                        🌟 Featured Experiences
                                    </h3>
                                    <p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                                        Don't miss these highly recommended activities during your visit
                                    </p>
                                    <div className="flex flex-wrap gap-2 sm:gap-3">
                                        {featuredActivities.slice(0, 3).map((activity) => (
                                            <span key={activity.id} className="bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                                                {activity.icon} {activity.title}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex-shrink-0">
                                    <button className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                                        View All Featured
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Activities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
                    {filteredActivities.map((activity) => (
                        <div
                            key={activity.id}
                            className="group relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            onMouseEnter={() => setHoveredActivity(activity.id)}
                            onMouseLeave={() => setHoveredActivity(null)}
                        >
                            {/* Activity Image */}
                            <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                                <img
                                    src={activity.image}
                                    alt={activity.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                                {/* Featured Badge */}
                                {activity.featured && (
                                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                                        <span className="bg-yellow-500 text-black text-xs font-bold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg">
                                            ⭐ Featured
                                        </span>
                                    </div>
                                )}

                                {/* Price Tag */}
                                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg">
                                        {activity.price}
                                    </span>
                                </div>

                                {/* Activity Icon */}
                                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-lg sm:text-xl">
                                        {activity.icon}
                                    </div>
                                </div>

                                {/* Quick Info on Hover */}
                                <div className={`absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                                    hoveredActivity === activity.id ? 'opacity-100' : 'opacity-0'
                                }`}>
                                    <button className="bg-white text-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold shadow-lg hover:bg-gray-50 transition-colors duration-200 transform hover:scale-105">
                                        View Details
                                    </button>
                                </div>
                            </div>

                            {/* Activity Content */}
                            <div className="p-4 sm:p-5 lg:p-6">
                                <div className="flex items-center justify-between mb-2 sm:mb-3">
                                    <span className="text-xs sm:text-sm font-medium text-blue-600 bg-blue-50 px-2 sm:px-3 py-1 rounded-full">
                                        {activity.category}
                                    </span>
                                    <span className={`text-xs font-medium px-2 sm:px-3 py-1 rounded-full ${difficultyColors[activity.difficulty]}`}>
                                        {activity.difficulty}
                                    </span>
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                    {activity.title}
                                </h3>

                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                                    {activity.description}
                                </p>

                                {/* Duration */}
                                <div className="flex items-center text-gray-500 text-sm mb-4">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                    </svg>
                                    <span>{activity.duration}</span>
                                </div>

                                {/* Highlights */}
                                <div className="mb-4 sm:mb-6">
                                    <div className="flex flex-wrap gap-1 sm:gap-2">
                                        {activity.highlights.slice(0, 2).map((highlight, index) => (
                                            <span key={index} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                                ✓ {highlight}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex space-x-2 sm:space-x-3">
                                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-200 shadow-md hover:shadow-lg">
                                        Book Now
                                    </button>
                                    <button className="px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 text-gray-600 hover:text-blue-600 hover:border-blue-600 rounded-lg transition-colors duration-200">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredActivities.length === 0 && (
                    <div className="text-center py-12 sm:py-16 lg:py-20">
                        <div className="text-gray-400 mb-4">
                            <svg className="w-16 h-16 sm:w-20 sm:h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                            </svg>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-2">No activities found</h3>
                        <p className="text-gray-500">Try selecting a different category</p>
                    </div>
                )}

                {/* Call to Action */}
                <div className="text-center mt-12 sm:mt-16 lg:mt-20">
                    <div className="bg-gray-50 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
                            Can't Find What You're Looking For?
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                            We offer custom experiences tailored to your interests. Contact us to create your perfect island adventure.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
                            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                                Custom Experience
                            </button>
                            <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ActivitiesSection;