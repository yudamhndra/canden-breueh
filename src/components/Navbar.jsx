import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { scroller } from "react-scroll";

const navItems = [
    { name: 'Home', href: '/', isHome: true },
    { name: 'Potential Map', href: '/potential-map' },
    { name: 'Story Map', href: '/story-map' },
    // { name: 'local weather', href: '/local-weather'},
    { name: 'About', href: 'aboutSection', isScroll: true},
    { name: 'Contact', href: 'footer', isScroll: true },
];

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

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

    const handleContactClick = () => {
        if (location.pathname === "/") {
            
            return;
        }

        localStorage.setItem('scrollToContact', 'true');
        navigate("/");
        setMobileMenuOpen(false);
    };

    const handleHomeClick = () => {
        if (location.pathname === "/") {
            // Kalau sudah di halaman utama, scroll ke atas (hero section)
            scroller.scrollTo('hero', {
                smooth: true,
                duration: 500,
                offset: -80
            });
        } else {
            // Kalau bukan di halaman utama, navigate ke home
            navigate("/");
        }
        setMobileMenuOpen(false);
    };

    const renderNavItem = (item) => {
        if (item.isHome) {
            // Untuk Home - selalu gunakan button dengan handler khusus
            return (
                <button
                    key={item.name}
                    type="button"
                    onClick={handleHomeClick}
                    className={`font-normal text-sm xl:text-sm 2xl:text-base hover:font-medium transition-all duration-200 whitespace-nowrap drop-shadow-lg cursor-pointer ${
                        isScrolled 
                            ? 'text-gray-700 hover:text-blue-600' 
                            : 'text-white hover:text-blue-300'
                    } ${location.pathname === item.href ? 'font-bold' : ''}`}
                >
                    {item.name}
                </button>
            );
        } else if (item.isScroll) {
            // Untuk Contact
            return location.pathname === "/" ? (
                <ScrollLink
                    key={item.name}
                    to={item.href}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    className={`font-normal text-sm xl:text-sm 2xl:text-base hover:font-medium transition-all duration-200 whitespace-nowrap drop-shadow-lg cursor-pointer ${
                        isScrolled 
                            ? 'text-gray-700 hover:text-blue-600' 
                            : 'text-white hover:text-blue-300'
                    }`}
                    activeClass="font-bold"
                >
                    {item.name}
                </ScrollLink>
            ) : (
                <button
                    key={item.name}
                    type="button"
                    onClick={handleContactClick}
                    className={`font-normal text-sm xl:text-sm 2xl:text-base hover:font-medium transition-all duration-200 whitespace-nowrap drop-shadow-lg cursor-pointer ${
                        isScrolled 
                            ? 'text-gray-700 hover:text-blue-600' 
                            : 'text-white hover:text-blue-300'
                    }`}
                >
                    {item.name}
                </button>
            );
        } else {
            // Untuk menu lain (Story Map, Local Weather, dll)
            return (
                <Link
                    key={item.name}
                    to={item.href}
                    className={`font-normal text-sm xl:text-sm 2xl:text-base hover:font-medium transition-all duration-200 whitespace-nowrap drop-shadow-lg cursor-pointer ${
                        isScrolled 
                            ? 'text-gray-700 hover:text-blue-600' 
                            : 'text-white hover:text-blue-300'
                    } ${location.pathname === item.href ? 'font-bold' : ''}`}
                >
                    {item.name}
                </Link>
            );
        }
    };

    const renderMobileNavItem = (item) => {
        if (item.isHome) {
            // Untuk Home di mobile
            return (
                <button
                    key={item.name}
                    type="button"
                    onClick={handleHomeClick}
                    className={`font-medium px-3 py-2.5 text-base rounded-lg transition-colors cursor-pointer text-left w-full ${
                        isScrolled 
                            ? 'text-gray-700 hover:bg-gray-100' 
                            : 'text-white hover:bg-white/10'
                    } ${location.pathname === item.href ? 'font-bold' : ''}`}
                >
                    {item.name}
                </button>
            );
        } else if (item.isScroll) {
            // Untuk Contact di mobile
            return location.pathname === "/" ? (
                <ScrollLink
                    key={item.name}
                    to={item.href}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    className={`font-medium px-3 py-2.5 text-base rounded-lg transition-colors cursor-pointer ${
                        isScrolled 
                            ? 'text-gray-700 hover:bg-gray-100' 
                            : 'text-white hover:bg-white/10'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    activeClass="font-bold"
                >
                    {item.name}
                </ScrollLink>
            ) : (
                <button
                    key={item.name}
                    type="button"
                    onClick={handleContactClick}
                    className={`font-medium px-3 py-2.5 text-base rounded-lg transition-colors cursor-pointer text-left w-full ${
                        isScrolled 
                            ? 'text-gray-700 hover:bg-gray-100' 
                            : 'text-white hover:bg-white/10'
                    }`}
                >
                    {item.name}
                </button>
            );
        } else {
            // Untuk menu lain di mobile
            return (
                <Link
                    key={item.name}
                    to={item.href}
                    className={`font-medium px-3 py-2.5 text-base rounded-lg transition-colors cursor-pointer ${
                        isScrolled 
                            ? 'text-gray-700 hover:bg-gray-100' 
                            : 'text-white hover:bg-white/10'
                    } ${location.pathname === item.href ? 'font-bold' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                >
                    {item.name}
                </Link>
            );
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-opacity-20 ${
            isScrolled 
                ? 'bg-white/90 backdrop-blur-md shadow-lg' 
                : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-2 sm:py-3 lg:py-3 xl:py-3 2xl:py-4">
                {/* Logo */}
                <img 
                    src="/logo.png" 
                    alt="Logo" 
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 2xl:w-13 2xl:h-13 rounded-full flex-shrink-0"
                />
                
                {/* Desktop Navigation Menu */}
                <div className="hidden lg:flex items-center space-x-5 xl:space-x-6 2xl:space-x-8 absolute left-1/2 transform -translate-x-1/2">
                    {navItems.map(item => renderNavItem(item))}
                </div>

                {/* Tablet Navigation Menu */}
                <div className="hidden md:flex lg:hidden items-center space-x-4 xl:space-x-4">
                    {navItems.map(item => renderNavItem(item))}
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
                        {navItems.map(item => renderMobileNavItem(item))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;