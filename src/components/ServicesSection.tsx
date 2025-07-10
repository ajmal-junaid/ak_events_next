import React from 'react';
import { Armchair, Utensils, Fan, Wind, ChevronRight, Sparkles, Zap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function ServicesSection() {
  const categories = [
    {
      icon: <Armchair className="w-10 h-10" />,
      title: "Luxury Seating",
      description: "Royal chairs, premium sofas, and elegant seating arrangements for weddings and ceremonies",
      items: "150+ Items",
      color: "from-amber-500 to-yellow-500",
      bgColor: "from-amber-50 to-yellow-50"
    },
    {
      icon: <Utensils className="w-10 h-10" />,
      title: "Grand Buffet Sets",
      description: "Exquisite buffet counters, dining setups, and serving stations for luxury events",
      items: "100+ Items",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      icon: <Fan className="w-10 h-10" />,
      title: "Premium Cooling",
      description: "Decorative fans, luxury coolers, and climate solutions for comfortable celebrations",
      items: "80+ Items",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      icon: <Wind className="w-10 h-10" />,
      title: "Elite Accessories",
      description: "Finest decorative items and exclusive event accessories for perfect ambiance",
      items: "200+ Items",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full text-amber-800 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Our Premium Collections in Kasaragod</span>
          </div>
          <h3 className="text-5xl font-bold text-gray-900">Luxury Categories</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover AK Events Deli's meticulously curated collection of premium items, perfect for creating unforgettable 
            weddings, ceremonies, and grand celebrations across Kerala
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <AnimatedSection key={index} delay={index * 150} className="group">
              <div className={`relative overflow-hidden bg-gradient-to-br ${category.bgColor} p-8 rounded-3xl border border-gray-100 hover:border-amber-200 transition-all duration-500 hover:shadow-2xl group-hover:-translate-y-2`}>
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className={`text-transparent bg-gradient-to-r ${category.color} bg-clip-text mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  {category.icon}
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors duration-300">{category.title}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.items}
                  </span>
                  <div className="flex items-center space-x-2 text-amber-600 group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm font-medium">Explore</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
                
                {/* Floating icon */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-bounce">
                  <Zap className="w-4 h-4 text-amber-500" />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={600} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Complete Event Solutions</h4>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              From intimate ceremonies to grand celebrations, AK Events Deli provides comprehensive rental solutions 
              for every occasion in Kasaragod and surrounding areas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Weddings', 'Corporate Events', 'Birthday Parties', 'Cultural Ceremonies', 'Ear Piercing Events'].map((event, index) => (
                <span key={index} className="bg-white text-amber-700 px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow">
                  {event}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
