import React, { useState, useEffect } from 'react';
import { Crown, Calendar, Heart, Award, ArrowRight, Sparkles } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=300&h=400&fit=crop",
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=400&fit=crop"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-amber-50/30 to-orange-50/20 pt-20">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-20"></div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full text-amber-800 text-sm font-medium border border-amber-200">
                <Crown className="w-4 h-4" />
                <span>Premium Event Solutions in Kasaragod</span>
                <Sparkles className="w-4 h-4 animate-pulse" />
              </div>
              
              <h2 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Luxury</span>
                <br />
                <span className="bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-600 bg-clip-text text-transparent">Event </span>
                <span className="text-gray-900">Rentals</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Transform your special occasions with AK Events Deli's exquisite collection. 
                From luxury weddings in Melparamba to grand ceremonies across Kasaragod - Firoz Padinhar and team deliver perfection.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative overflow-hidden bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500 text-white px-8 py-4 rounded-xl font-medium hover:shadow-2xl transition-all duration-300 flex items-center space-x-2">
                <span>Explore Collection</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group border-2 border-amber-600 text-amber-700 px-8 py-4 rounded-xl font-medium hover:bg-amber-600 hover:text-white transition-all duration-300 flex items-center space-x-2 relative overflow-hidden">
                <Calendar className="w-5 h-5" />
                <span>Schedule Visit</span>
                <div className="absolute inset-0 bg-amber-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <span className="relative z-10 flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Visit</span>
                </span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { number: "500+", label: "Premium Items", icon: <Crown className="w-6 h-6" /> },
                { number: "1000+", label: "Happy Events", icon: <Heart className="w-6 h-6" /> },
                { number: "5+", label: "Years in Kerala", icon: <Award className="w-6 h-6" /> }
              ].map((stat, index) => (
                <AnimatedSection key={index} delay={200 + index * 100} className="text-center group">
                  <div className="text-amber-600 mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300} className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative group">
                  <img 
                    src={images[currentImage]}
                    alt="Luxury Event Setup by AK Events Deli Kasaragod"
                    className="w-full h-64 object-cover rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                </div>
                
                <div className="relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=300&h=300&fit=crop"
                    alt="Elegant Furniture Rental Melparamba"
                    className="w-full h-48 object-cover rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent rounded-3xl"></div>
                </div>
              </div>
              
              <div className="space-y-6 pt-12">
                <div className="relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=300&h=300&fit=crop"
                    alt="Buffet Setup by Firoz Padinhar"
                    className="w-full h-48 object-cover rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent rounded-3xl"></div>
                </div>
                
                <div className="relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=400&fit=crop"
                    alt="Luxury Seating Arrangements Kerala"
                    className="w-full h-64 object-cover rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-3xl"></div>
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Available Now</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium">4.9 Rating</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
