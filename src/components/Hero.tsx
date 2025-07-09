import React from 'react';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Digital Solutions
                <span className="block text-orange-400">Portfolio</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                Showcasing innovative web applications, mobile solutions, and digital platforms 
                crafted by DovePeak Digital Solutions. From e-commerce to healthcare, 
                education to fintech - we build the future.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
              >
                Explore Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900 font-semibold rounded-lg transition-all duration-300"
              >
                Get Quote
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 rounded-lg mb-2 sm:mb-3">
                  <Code className="w-4 h-4 sm:w-6 sm:h-6 text-orange-400" />
                </div>
                <h3 className="text-white font-semibold text-sm sm:text-base">30+</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Projects Delivered</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 rounded-lg mb-2 sm:mb-3">
                  <Palette className="w-4 h-4 sm:w-6 sm:h-6 text-orange-400" />
                </div>
                <h3 className="text-white font-semibold text-sm sm:text-base">10+</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Industries Served</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 rounded-lg mb-2 sm:mb-3">
                  <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-orange-400" />
                </div>
                <h3 className="text-white font-semibold text-sm sm:text-base">100%</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Digital Innovation" 
                className="w-full max-w-sm sm:max-w-md mx-auto rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;