import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { trackContactForm, trackPhoneCall } from '../lib/analytics';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventDate: '',
    eventType: '',
    requirements: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Track form submission
    trackContactForm(formData.eventType || 'general');
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Reset form or show success message
    alert('Thank you! We will contact you soon.');
  };

  const handlePhoneClick = () => {
    trackPhoneCall();
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 bg-amber-500/20 px-4 py-2 rounded-full text-amber-300 text-sm font-medium border border-amber-500/30">
            <Phone className="w-4 h-4" />
            <span>Contact AK Events Deli</span>
          </div>
          <h3 className="text-5xl font-bold">Let's Plan Your Perfect Event in Kasaragod</h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your celebration? Contact Firoz Padinhar and AK Events Deli team for personalized luxury event solutions in Kerala.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          <AnimatedSection className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-amber-500/50 transition-all duration-300 hover:bg-white/15">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-xl mb-3 group-hover:text-amber-300 transition-colors">Call Firoz Padinhar</h4>
                  <a href="tel:+919847131427" onClick={handlePhoneClick} className="block text-gray-300 hover:text-white transition-colors cursor-pointer">+91 98471 31427</a>
                  <a href="tel:+918765432109" onClick={handlePhoneClick} className="block text-gray-300 hover:text-white transition-colors cursor-pointer">+91 87654 32109</a>
                </div>
              </div>

              <div className="group">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:border-amber-500/50 transition-all duration-300 hover:bg-white/15">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-xl mb-3 group-hover:text-amber-300 transition-colors">Email Us</h4>
                  <a href="mailto:info@akevents-deli.com" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">info@akevents-deli.com</a>
                  <a href="mailto:firozpadinhar@gmail.com" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">firozpadinhar@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <MapPin className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-xl mb-3">Visit Our Showroom in Melparamba</h4>
              <p className="text-gray-300 leading-relaxed">
                AK Events Deli<br />
                Melparamba, Kasaragod<br />
                Kerala 671121, India<br />
                {/* <span className="text-amber-300 font-medium">Near Shalimar Sounds</span> */}
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
              <h4 className="font-bold text-xl mb-4 flex items-center space-x-2">
                <Calendar className="w-6 h-6 text-amber-500" />
                <span>Business Hours</span>
              </h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                  <span className="font-medium">Monday - Saturday</span>
                  <span className="text-amber-300">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                  <span className="font-medium">Sunday</span>
                  <span className="text-amber-300">10:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h4 className="text-3xl font-bold mb-6 flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-amber-500" />
              <span>Request Luxury Quote</span>
            </h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-white placeholder-gray-400 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-white placeholder-gray-400 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-white placeholder-gray-400 transition-all"
                />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Event Date</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Event Type</label>
                  <select 
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-white transition-all"
                  >
                    <option value="" className="bg-gray-800">Select event type</option>
                    <option value="wedding" className="bg-gray-800">Wedding</option>
                    <option value="ear-piercing" className="bg-gray-800">Ear Piercing Ceremony</option>
                    <option value="birthday" className="bg-gray-800">Birthday Party</option>
                    <option value="corporate" className="bg-gray-800">Corporate Event</option>
                    <option value="other" className="bg-gray-800">Other Celebration</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Event Requirements</label>
                <textarea
                  rows={4}
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  placeholder="Tell us about your luxury event requirements in Kasaragod..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-white placeholder-gray-400 transition-all resize-none"
                ></textarea>
              </div>
              
              <button type="submit" className="group w-full relative overflow-hidden bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-white py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 text-lg">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Send Luxury Quote Request</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Sparkles className="absolute top-2 right-2 w-5 h-5 text-white/70 animate-pulse" />
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}