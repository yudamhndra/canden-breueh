import React, { useState, useEffect } from 'react';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Potential', href: '#potential' },
    { name: 'Story Map', href: '#story-map' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Detect scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-opacity-20${
            isScrolled 
                ? 'bg-white/90 backdrop-blur-md shadow-lg' 
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-2 sm:py-3 lg:py-3 xl:py-3 2xl:py-4">
                {/* Logo */}
                <img 
                    src="src/assets/logo.png" 
                    alt="Logo" 
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 2xl:w-13 2xl:h-13 rounded-full flex-shrink-0"
                />
                
                {/* Desktop Navigation Menu - Centered */}
                <div className="hidden lg:flex items-center space-x-5 xl:space-x-6 2xl:space-x-8 absolute left-1/2 transform -translate-x-1/2">
                    {navItems.map((item) => (
                        <a 
                            key={item.name}
                            href={item.href}
                            className={`font-normal text-sm xl:text-sm 2xl:text-base hover:font-medium transition-all duration-200 whitespace-nowrap drop-shadow-lg ${
                                isScrolled 
                                    ? 'text-gray-700 hover:text-blue-600' 
                                    : 'text-white hover:text-blue-300'
                            }`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Tablet Navigation Menu */}
                <div className="hidden md:flex lg:hidden items-center space-x-4 xl:space-x-4">
                    {navItems.map((item) => (
                        <a 
                            key={item.name}
                            href={item.href}
                            className={`font-normal text-sm hover:font-medium transition-all duration-200 drop-shadow-lg ${
                                isScrolled 
                                    ? 'text-gray-700 hover:text-blue-600' 
                                    : 'text-white hover:text-blue-300'
                            }`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`p-2 rounded-md transition-all duration-200 ${
                            isScrolled 
                                ? 'text-gray-700 hover:bg-gray-100' 
                                : 'text-white hover:bg-white/10'
                        }`}
                        aria-label="Toggle mobile menu"
                    >
                        <svg className="w-5 h-5 sm:w-5 sm:h-5 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2}
                                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                            />
                        </svg>
                    </button>
                </div>

                {/* Spacer untuk menjaga keseimbangan layout - hanya di desktop */}
                <div className="hidden lg:block w-8 xl:w-10 2xl:w-12 flex-shrink-0"></div>
            </div>
            
            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
                <div className={`md:hidden backdrop-blur-md border-t transition-all duration-200 ${
                    isScrolled 
                        ? 'bg-white/95 border-gray-200' 
                        : 'bg-black/80 border-white/20'
                }`}>
                    <div className="flex flex-col px-4 py-3 space-y-1">
                        {navItems.map((item) => (
                            <a 
                                key={item.name}
                                href={item.href}
                                className={`font-medium px-3 py-2.5 text-base rounded-lg transition-colors ${
                                    isScrolled 
                                        ? 'text-gray-700 hover:bg-gray-100' 
                                        : 'text-white hover:bg-white/10'
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;