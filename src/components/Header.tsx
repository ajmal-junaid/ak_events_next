import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Crown, Sparkles } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Our Network', href: '#our-network' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-xl' : 'bg-white/90 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Crown className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">AK Events Deli</h1>
              <p className="text-sm text-amber-600 font-medium">Luxury Rentals</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <a 
                key={item.name}
                href={item.href} 
                className="relative text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium group"
                style={{animationDelay: `${index * 100}ms`}}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="relative overflow-hidden bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-white px-6 py-2.5 rounded-xl font-medium group hover:shadow-xl transition-all duration-300">
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Sparkles className="absolute top-1 right-1 w-3 h-3 text-white/70 animate-pulse" />
            </button>
            <div className="flex items-center space-x-2 text-gray-600 bg-gray-50 px-4 py-2 rounded-xl hover:bg-gray-100 transition-colors">
              <Phone className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium">+91 98471 31427</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
              <span className={`absolute w-6 h-0.5 bg-gray-600 top-3 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-96 py-4' : 'max-h-0'}`}>
          <nav className="flex flex-col space-y-4 border-t pt-4">
            {navigation.map((item, index) => (
              <a 
                key={item.name}
                href={item.href} 
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium py-2 border-l-2 border-transparent hover:border-amber-500 pl-4"
                style={{animationDelay: `${index * 50}ms`}}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all mx-4">
              Get Quote
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}