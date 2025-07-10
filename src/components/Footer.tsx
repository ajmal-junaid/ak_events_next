import React from 'react';
import Link from 'next/link';
import { Crown, Facebook, Instagram, Twitter, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <Crown className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">AK Events Deli</h1>
                <p className="text-sm text-amber-400 font-medium">Luxury Rentals by Firoz Padinhar</p>
              </div>
            </Link>
            
            <p className="text-gray-400 leading-relaxed max-w-md">
              Your premier destination for luxury event rentals in Kasaragod, Kerala. We transform celebrations into extraordinary 
              experiences with our carefully curated collection of premium items and professional service.
            </p>
            
            <div className="space-y-2 text-sm text-gray-400">
              <p><strong className="text-amber-400">Location:</strong> Melparamba, Kasaragod, Kerala</p>
              <p><strong className="text-amber-400">Founder:</strong> Firoz Padinhar</p>
              <p><strong className="text-amber-400">Serving:</strong> Kasaragod, Mangalore, Kannur</p>
            </div>
            
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="w-5 h-5" />, color: "hover:bg-blue-600", href: "https://facebook.com/akevents.deli" },
                { icon: <Instagram className="w-5 h-5" />, color: "hover:bg-pink-600", href: "https://instagram.com/akevents_deli" },
                { icon: <Twitter className="w-5 h-5" />, color: "hover:bg-blue-400", href: "https://twitter.com/akevents_deli" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gray-800 p-3 rounded-xl ${social.color} transition-all duration-300 hover:scale-110 shadow-lg`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-amber-400">Quick Links</h4>
            <div className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '#services' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Sound Partners', href: '#our-network' },
                { name: 'About Us', href: '#about' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-amber-400 transition-colors hover:translate-x-1 duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold text-amber-400">Our Services</h4>
            <div className="space-y-3">
              {[
                'Luxury Wedding Rentals',
                'Corporate Event Setup', 
                'Birthday Celebrations',
                'Cultural Ceremonies',
                'Sound System (Shalimar)',
                'Custom Event Packages',
                'Decoration Services',
                'Furniture Rental'
              ].map((service) => (
                <span
                  key={service}
                  className="block text-gray-400 hover:text-amber-400 transition-colors hover:translate-x-1 duration-300 cursor-pointer"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm flex items-center space-x-2">
              <span>© 2025 AK Events Deli. All rights reserved.</span>
              <Crown className="w-4 h-4 text-amber-500" />
              <span>• Founded by Firoz Padinhar</span>
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms & Conditions', 'Sitemap'].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Serving premium events across Kasaragod, Kerala • Shalimar Sounds Partnership • Professional Event Management
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}