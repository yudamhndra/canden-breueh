import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Quick Links
    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Island', href: '#about' },
        { name: 'Attractions', href: '#attractions' },
        { name: 'Activities', href: '#activities' },
        { name: 'Accommodation', href: '#accommodation' },
        { name: 'Gallery', href: '#gallery' }
    ];

    // Services
    const services = [
        { name: 'Island Tours', href: '#tours' },
        { name: 'Snorkeling & Diving', href: '#diving' },
        { name: 'Boat Rentals', href: '#boat-rental' },
        { name: 'Photography Tours', href: '#photography' },
        { name: 'Cultural Experiences', href: '#culture' },
        { name: 'Adventure Activities', href: '#adventure' }
    ];

    // Information
    const information = [
        { name: 'Travel Guide', href: '#guide' },
        { name: 'Best Time to Visit', href: '#timing' },
        { name: 'Getting There', href: '#transport' },
        { name: 'Local Weather', href: '#weather' },
        { name: 'Safety Tips', href: '#safety' },
        { name: 'FAQ', href: '#faq' }
    ];

    // Social Media Links
    const socialLinks = [
        {
            name: 'Facebook',
            href: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            )
        },
        {
            name: 'Instagram',
            href: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986 6.618 0 11.986-5.368 11.986-11.986C24.003 5.367 18.635.001 12.017.001zM8.449 20.254c-2.266 0-4.097-1.831-4.097-4.096s1.831-4.097 4.097-4.097c2.265 0 4.096 1.832 4.096 4.097s-1.831 4.096-4.096 4.096zm7.124 0c-2.266 0-4.097-1.831-4.097-4.096s1.831-4.097 4.097-4.097c2.265 0 4.096 1.832 4.096 4.097s-1.831 4.096-4.096 4.096z"/>
                </svg>
            )
        },
        {
            name: 'Twitter',
            href: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
            )
        },
        {
            name: 'YouTube',
            href: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
            )
        }
    ];

    return (
        <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-12 sm:py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            {/* Logo */}
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 full flex items-center justify-center mr-3">
                                    <img 
                                        src="src/assets/logo.png" 
                                        alt="Logo" 
                                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 2xl:w-13 2xl:h-13 rounded-full flex-shrink-0"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                        Breueh Island
                                    </h2>
                                    <p className="text-slate-400 text-sm">Paradise Destination</p>
                                </div>
                            </div>
                            
                            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                                Discover the untouched beauty of Breueh Island. Experience pristine beaches, crystal-clear waters, and authentic island culture in one of Indonesia's hidden gems.
                            </p>
                            
                            {/* Contact Info */}
                            <div className="space-y-3">
                                <div className="flex items-center text-slate-300 text-sm">
                                    <svg className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                    <span>Breueh Island, Aceh Besar, Indonesia</span>
                                </div>
                                <div className="flex items-center text-slate-300 text-sm">
                                    <svg className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                    <span>info@breuehisland.com</span>
                                </div>
                                <div className="flex items-center text-slate-300 text-sm">
                                    <svg className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                    <span>+62 812-3456-7890</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href}
                                        className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base flex items-center group"
                                    >
                                        <svg className="w-3 h-3 mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                                        </svg>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.name}>
                                    <a 
                                        href={service.href}
                                        className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base flex items-center group"
                                    >
                                        <svg className="w-3 h-3 mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                                        </svg>
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Information */}
                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">
                            Information
                        </h3>
                        <ul className="space-y-3">
                            {information.map((info) => (
                                <li key={info.name}>
                                    <a 
                                        href={info.href}
                                        className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base flex items-center group"
                                    >
                                        <svg className="w-3 h-3 mr-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                                        </svg>
                                        {info.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Social Media & Bottom Section */}
            <div className="bg-slate-800/50 border-t border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-6 sm:py-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        
                        {/* Social Media Links */}
                        <div className="flex items-center space-x-4 sm:space-x-6">
                            <span className="text-slate-400 text-sm font-medium">Follow Us:</span>
                            <div className="flex space-x-3 sm:space-x-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="text-slate-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Copyright */}
                        <div className="text-slate-400 text-sm text-center sm:text-right">
                            <p>
                                © {currentYear}  KKN Canden Breueh. All rights reserved.
                            </p>
                            {/* <p className="mt-1">
                                Developed by{' '}
                                <span className="text-blue-400 font-medium">yudamhndra</span>
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 z-50"
                aria-label="Back to top"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7"/>
                </svg>
            </button>
        </footer>
    );
};

export default Footer;