import React, { useState } from 'react';
import { Heart, Star, Crown, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function GallerySection() {
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const toggleLike = (itemId: number) => {
    const newLikedItems = new Set(likedItems);
    if (newLikedItems.has(itemId)) {
      newLikedItems.delete(itemId);
    } else {
      newLikedItems.add(itemId);
    }
    setLikedItems(newLikedItems);
  };

  const featuredItems = [
    {
      id: 1,
      name: "Royal Wedding Thrones",
      category: "Luxury Seating",
      price: "₹250/day",
      originalPrice: "₹300/day",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 127,
      available: true,
      badge: "Most Popular",
      description: "Elegant throne-style chairs perfect for wedding ceremonies"
    },
    {
      id: 2,
      name: "Crystal Buffet Counter",
      category: "Dining Excellence",
      price: "₹1200/day",
      originalPrice: "₹1400/day",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 89,
      available: true,
      badge: "Premium",
      description: "Luxury buffet setup with crystal accents and lighting"
    },
    {
      id: 3,
      name: "Imperial Sofa Collection",
      category: "Luxury Seating",
      price: "₹800/day",
      originalPrice: "₹950/day",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 203,
      available: false,
      badge: "Exclusive",
      description: "Premium sofa sets for VIP lounge areas"
    },
    {
      id: 4,
      name: "Vintage Cooling Fans",
      category: "Climate Control",
      price: "₹300/day",
      originalPrice: "₹350/day",
      image: "https://images.unsplash.com/photo-1541558869434-2840d308329a?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 156,
      available: true,
      badge: "Trending",
      description: "Decorative ceiling fans with vintage brass finishing"
    },
    {
      id: 5,
      name: "Golden Buffet Ensemble",
      category: "Dining Excellence",
      price: "₹1800/day",
      originalPrice: "₹2000/day",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      rating: 5.0,
      reviews: 74,
      available: true,
      badge: "New Arrival",
      description: "Complete gold-themed buffet setup with serving stations"
    },
    {
      id: 6,
      name: "Heritage Cooler Systems",
      category: "Climate Control",
      price: "₹450/day",
      originalPrice: "₹500/day",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 92,
      available: true,
      badge: "Featured",
      description: "Traditional style air coolers with modern cooling technology"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-gray-50 via-amber-50/20 to-orange-50/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full text-amber-800 text-sm font-medium">
            <Crown className="w-4 h-4" />
            <span>Featured Collection by AK Events Deli</span>
          </div>
          <h3 className="text-5xl font-bold text-gray-900">Handpicked Luxury Items</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each piece in our Kasaragod showroom is carefully selected by Firoz Padinhar to ensure your event radiates elegance and sophistication
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 100} className="group">
              <div 
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3 relative"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={`${item.name} - ${item.description}`}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {item.badge}
                    </span>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button
                      onClick={() => toggleLike(item.id)}
                      className={`p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ${
                        likedItems.has(item.id)
                          ? 'bg-red-500 text-white scale-110'
                          : 'bg-white/90 text-gray-600 hover:text-red-500 hover:bg-white'
                      }`}
                      aria-label={`${likedItems.has(item.id) ? 'Unlike' : 'Like'} ${item.name}`}
                    >
                      <Heart className={`w-5 h-5 ${likedItems.has(item.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                  
                  {/* Availability status */}
                  {!item.available && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center backdrop-blur-sm">
                      <div className="bg-red-500 text-white px-6 py-3 rounded-xl font-bold shadow-xl">
                        Currently Rented
                      </div>
                    </div>
                  )}
                  
                  {/* Quick view on hover */}
                  {hoveredItem === item.id && item.available && (
                    <div className="absolute bottom-4 left-4 right-4">
                      <button className="w-full bg-white/90 backdrop-blur-sm text-gray-900 py-2 rounded-xl font-medium hover:bg-white transition-colors">
                        Quick View Details
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-bold text-gray-900">{item.rating}</span>
                      <span className="text-xs text-gray-500">({item.reviews})</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">{item.name}</h4>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900">{item.price}</span>
                        <span className="text-sm text-gray-400 line-through">{item.originalPrice}</span>
                      </div>
                      <div className="text-xs text-green-600 font-medium">
                        Save ₹{parseInt(item.originalPrice.replace('₹', '').replace('/day', '')) - parseInt(item.price.replace('₹', '').replace('/day', ''))}/day
                      </div>
                    </div>
                    
                    <button 
                      className={`relative overflow-hidden px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                        item.available
                          ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-xl hover:scale-105'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!item.available}
                      aria-label={`Book ${item.name}`}
                    >
                      {item.available ? (
                        <>
                          <span className="relative z-10">Book Now</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </>
                      ) : (
                        'Not Available'
                      )}
                    </button>
                  </div>
                  
                  {/* Features */}
                  <div className="mt-4 flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>Free Setup</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>Quality Assured</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span>Kasaragod Delivery</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={600} className="text-center mt-16">
          <button className="group relative overflow-hidden bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500 text-white px-10 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 text-lg">
            <span className="relative z-10 flex items-center space-x-2">
              <span>View Complete AK Events Collection</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Sparkles className="absolute top-2 right-2 w-4 h-4 text-white/70 animate-pulse" />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}