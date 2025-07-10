import React from 'react';
import { Award, Users, Calendar, Crown, Star, Sparkles } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function AboutSection() {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Unmatched Quality",
      description: "Every piece handpicked by Firoz Padinhar and maintained to luxury standards",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Curation",
      description: "Professional team ensures perfect setup and delivery across Kasaragod",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Flexible Booking",
      description: "Easy scheduling with customizable luxury packages for any event size",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Premium Experience",
      description: "Competitive rates with transparent, no-hidden-fee pricing in Kerala",
      color: "from-orange-500 to-red-500"
    }
  ];

  const achievements = [
    { number: "1000+", label: "Events Completed", description: "Successful celebrations across Kerala" },
    { number: "500+", label: "Premium Items", description: "Carefully curated luxury collection" },
    { number: "5+", label: "Years Experience", description: "Trusted service in Kasaragod region" },
    { number: "4.9/5", label: "Customer Rating", description: "Consistently excellent reviews" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 via-amber-50/20 to-orange-50/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <AnimatedSection className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full text-amber-800 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>About AK Events Deli</span>
              </div>
              <h3 className="text-5xl font-bold text-gray-900 leading-tight">
                Creating
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"> Magical </span>
                Moments in Kerala
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Founded by <strong className="text-amber-700">Firoz Padinhar</strong> in Melparamba, AK Events Deli has become 
                Kasaragod's premier destination for luxury event rentals. With over 5 years of excellence, we've transformed thousands of 
                celebrations into unforgettable experiences across Kerala.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 100} className="group">
                  <div className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/80 transition-all duration-300 hover:shadow-lg">
                    <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {feature.icon}
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold text-gray-900 group-hover:text-amber-700 transition-colors">{feature.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-amber-100">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Our Achievements</h4>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center space-y-1">
                    <div className="text-2xl font-bold text-amber-600">{achievement.number}</div>
                    <div className="text-sm font-medium text-gray-900">{achievement.label}</div>
                    <div className="text-xs text-gray-600">{achievement.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-6 pt-6">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold">
                    <Crown className="w-4 h-4" />
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">1000+ Happy Clients</div>
                <div className="text-xs text-gray-600">Join our satisfied customers across Kerala</div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300} className="relative">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=700&fit=crop"
                alt="Luxury Event Setup by AK Events Deli in Kasaragod"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl"></div>
              
              {/* Overlay content */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                  <h4 className="text-2xl font-bold mb-2">Perfection in Every Detail</h4>
                  <p className="text-lg opacity-90 mb-3">Serving Kasaragod with excellence since 2019</p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                    </div>
                    <span className="text-sm font-medium">5.0 Average Rating</span>
                  </div>
                  <div className="mt-2 text-sm opacity-80">
                    Trusted by families across Melparamba, Kasaragod & beyond
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
                <Crown className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                <Sparkles className="w-6 h-6 text-white animate-pulse" />
              </div>

              {/* Founder highlight */}
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">FP</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">Firoz Padinhar</div>
                    <div className="text-xs text-gray-600">Founder & CEO</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Mission Statement */}
        <AnimatedSection delay={500} className="mt-20">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 text-white text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(15)].map((_, i) => (
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
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl mx-auto flex items-center justify-center shadow-xl">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-3xl font-bold">Our Mission</h4>
              <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                "To make every celebration in Kerala a masterpiece of elegance and joy. At AK Events Deli, 
                we don't just rent furniture - we craft experiences that families treasure forever."
              </p>
              <div className="text-lg text-amber-300 font-medium">
                - Firoz Padinhar, Founder
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
