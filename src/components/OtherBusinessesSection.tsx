import React from 'react';
import { Volume2, Music, Building, Phone, MapPin, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function OtherBusinessesSection() {
  const businesses = [
    {
      name: "Shalimar Sounds",
      location: "Thalangara",
      description: "Professional sound systems and crystal-clear audio equipment for premium events across Kasaragod",
      icon: <Volume2 className="w-14 h-14" />,
      services: ["Premium Sound Systems", "Wireless Microphones", "DJ Equipment", "Live Audio Setup"],
      contact: "+91 98765 43211",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      features: ["Professional Grade", "Event Coverage", "Setup Included"]
    },
    {
      name: "Marthaba Sounds",
      location: "Melparamba", 
      description: "Elite audio solutions and professional sound engineering services for luxury events",
      icon: <Music className="w-14 h-14" />,
      services: ["Live Sound Engineering", "Professional Recording", "Audio Mixing", "Event Sound Design"],
      contact: "+91 98765 43212",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      features: ["Expert Engineers", "Latest Equipment", "Quality Assured"]
    }
  ];

  return (
    <section id="our-network" className="py-24 bg-white relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-amber-50/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center space-y-6 mb-20 ">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full text-amber-800 text-sm font-medium">
            <Building className="w-4 h-4" />
            <span>Our Sound Partners in Kasaragod</span>
          </div>
          <h3 className="text-5xl font-bold text-gray-900">Professional Audio Network</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Complete event solutions through our network of premium sound service providers across Kerala
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {businesses.map((business, index) => (
            <AnimatedSection key={index} delay={index * 200} className="group">
              <div className={`relative overflow-hidden bg-gradient-to-br ${business.bgGradient} rounded-3xl p-8 border border-gray-100 hover:border-amber-200 transition-all duration-500 hover:shadow-2xl group-hover:-translate-y-2`}>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${business.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-6">
                    <div className={`bg-gradient-to-r ${business.gradient} p-4 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {business.icon}
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <h4 className="text-2xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">{business.name}</h4>
                          <div className="flex items-center space-x-1 text-amber-600 bg-amber-100 px-2 py-1 rounded-full">
                            <MapPin className="w-3 h-3" />
                            <span className="text-xs font-bold">{business.location}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{business.description}</p>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-3">
                        {business.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-center space-x-2 group/item">
                            <div className={`w-2 h-2 bg-gradient-to-r ${business.gradient} rounded-full group-hover/item:scale-125 transition-transform`}></div>
                            <span className="text-gray-700 text-sm font-medium group-hover/item:text-amber-700 transition-colors">{service}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {business.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="text-xs bg-white/80 text-gray-700 px-2 py-1 rounded-full font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center space-x-2 text-gray-600 bg-white/80 px-3 py-2 rounded-xl">
                          <Phone className="w-4 h-4 text-amber-600" />
                          <span className="text-sm font-bold">{business.contact}</span>
                        </div>
                        <button className={`relative overflow-hidden bg-gradient-to-r ${business.gradient} text-white px-6 py-2 rounded-xl font-bold hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                          <span className="relative z-10">Contact Now</span>
                          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating decoration */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity animate-pulse"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400} className="text-center">
          <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-white shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20"></div>
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-amber-400 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`
                  }}
                ></div>
              ))}
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl mx-auto flex items-center justify-center shadow-xl">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-3xl font-bold">Complete Event Ecosystem in Kasaragod</h4>
              <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
                From luxury furniture at AK Events Deli to professional sound systems by Shalimar Sounds and Marthaba Sounds, 
                we provide seamless end-to-end event solutions across Kerala.
              </p>
              <button className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <span className="flex items-center space-x-2">
                  <span>Explore Our Network</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}