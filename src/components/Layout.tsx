import { Outlet, Link, useLocation } from 'react-router-dom';
import { HardDrive, Download, Mail, Menu, X, ChevronDown, Package } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoImg from '../assets/image/techlite-logo.png';
import { servicesData } from '../data/servicesData';
import Footer from './Footer';

export default function Layout() {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState<boolean>(false);

    // Helper to instantly know if we are on the Home, Services, Products, Downloads, or Contact page
    const isHome = location.pathname === '/';
    const isAboutPage = location.pathname.startsWith('/about');
    const isServicesPage = location.pathname.startsWith('/services');
    const isProductsPage = location.pathname.startsWith('/products');
    const isDownloadsPage = location.pathname.startsWith('/downloads');
    const isContactPage = location.pathname.startsWith('/contact');
    const isFullWidth = isHome || isAboutPage || isServicesPage || isProductsPage || isDownloadsPage || isContactPage;

    // Close mobile menus automatically when clicking a link
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/', icon: <HardDrive className="w-4 h-4" /> },
        { name: 'About Us', path: '/about', icon: <Download className="w-4 h-4" /> },
        { name: 'Products', path: '/products', icon: <Package className="w-4 h-4" /> },
        // "Our Services" is handled dynamically
        { name: 'Downloads', path: '/downloads', icon: <Download className="w-4 h-4" /> },
        { name: 'Contact Us', path: '/contact', icon: <Mail className="w-4 h-4" /> },
    ];

    const animatedUnderlineClasses = "relative flex items-center gap-1 px-1 py-1 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#066291] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100";

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-[#066291] selection:text-white overflow-x-hidden">

            {/* Permanent Sticky Structural Header Block */}
            <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-6 py-4 shadow-sm">
                <div className="max-w-7xl mx-auto flex justify-between items-center">

                    {/* Brand/Shop Identity logo wrapper */}
                    <Link to="/" className="font-extrabold text-3xl text-slate-900 tracking-tight flex items-center gap-1 group">
                        <img
                            src={logoImg}
                            alt="Techlite Group Logo"
                            className="w-12 h-12 object-contain"
                        />
                        <div className="flex flex-col leading-none">
                            <span className="font-manrope text-2xl font-extrabold tracking-tight text-slate-900">
                                Techlite
                            </span>
                            <span className="font-manrope text-[#066291] text-lg font-bold ml-0.5 -mt-2">Group</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation Link Cluster */}
                    <div className="hidden lg:flex gap-6 text-sm font-medium items-center">
                        {navLinks.slice(0, 3).map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`${animatedUnderlineClasses} ${isActive
                                        ? 'text-[#066291] font-semibold after:scale-x-100'
                                        : 'text-slate-600 hover:text-[#066291]'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <Link
                                to="/services"
                                className={`${animatedUnderlineClasses} ${location.pathname.includes('/services')
                                    ? 'text-[#066291] font-semibold after:scale-x-100'
                                    : 'text-slate-600 hover:text-[#066291]'
                                    }`}
                            >
                                Our Services
                                <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                            </Link>

                            <div className="absolute top-full left-0 mt-4 w-64 bg-white border border-slate-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                                <div className="p-2">
                                    {servicesData.map((service) => (
                                        <Link
                                            key={service.id}
                                            to={`/services/${service.slug}`}
                                            className="block px-4 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-[#066291] rounded-lg transition-colors"
                                        >
                                            <div className="font-semibold text-slate-900 mb-0.5">{service.title}</div>
                                            <div className="text-xs text-slate-500 opacity-80">{service.category}</div>
                                        </Link>
                                    ))}
                                </div>
                                <div className="bg-slate-50 p-3 border-t border-slate-100 text-center">
                                    <Link to="/services" className="text-xs font-bold text-[#066291] uppercase tracking-wider hover:opacity-80 transition-opacity">
                                        View All Services &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Downloads and Contact */}
                        {navLinks.slice(3).map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`${animatedUnderlineClasses} ${isActive
                                        ? 'text-[#066291] font-semibold after:scale-x-100'
                                        : 'text-slate-600 hover:text-[#066291]'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Shell Menu Toggle Button Trigger */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg lg:hidden transition-colors"
                        aria-label="Toggle navigation menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Responsive Mobile Navigation Drawer Frame */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4 pt-4 border-t border-slate-100 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200 bg-white">
                        {navLinks.slice(0, 3).map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-blue-50 text-[#066291]' : 'text-slate-600 hover:bg-slate-50 hover:text-[#066291]'}`}
                                >
                                    {link.icon}
                                    {link.name}
                                </Link>
                            );
                        })}

                        <div>
                            <button
                                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${location.pathname.includes('/services') ? 'bg-blue-50 text-[#066291]' : 'text-slate-600 hover:bg-slate-50 hover:text-[#066291]'}`}
                            >
                                <div className="flex items-center gap-3">
                                    <Mail className="w-4 h-4" />
                                    Our Services
                                </div>
                                <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isMobileServicesOpen && (
                                <div className="ml-11 mt-1 space-y-1 border-l-2 border-slate-100 pl-4 py-2">
                                    {servicesData.map((service) => (
                                        <Link
                                            key={service.id}
                                            to={`/services/${service.slug}`}
                                            className="block py-2 text-sm text-slate-500 hover:text-[#066291]"
                                        >
                                            {service.title}
                                        </Link>
                                    ))}
                                    <Link to="/services" className="block py-2 text-sm font-semibold text-[#066291]">
                                        View All Services
                                    </Link>
                                </div>
                            )}
                        </div>

                        {navLinks.slice(3).map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-blue-50 text-[#066291]' : 'text-slate-600 hover:bg-slate-50 hover:text-[#066291]'}`}
                                >
                                    {link.icon}
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>
                )}
            </nav>

            {/* Dynamic Content Frame Wrapper */}
            <div className={`w-full ${!isFullWidth ? 'flex-grow' : ''}`}>
                <main className={`w-full mx-auto animate-in fade-in duration-300 ${!isFullWidth ? 'max-w-7xl p-4 md:p-6 mt-16' : 'p-0'}`}>
                    <Outlet />
                </main>
            </div>

            <Footer />
        </div>
    );
}