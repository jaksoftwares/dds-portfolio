import React from 'react';
import { ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/ddslogo1.jpg" 
                alt="Dovepeak Digital Solutions" 
                className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg"
              />
              <div>
                <h3 className="text-white font-bold text-base sm:text-lg">DovePeak</h3>
                <p className="text-orange-400 text-xs sm:text-sm">Digital Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting innovative digital solutions that drive business growth and success. 
              Your trusted partner in web development and digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-white font-semibold text-sm sm:text-base">Quick Links</h4>
            <div className="space-y-1 sm:space-y-2">
              <button
                onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-orange-400 transition-colors text-sm"
              >
                Home
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-orange-400 transition-colors text-sm"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-orange-400 transition-colors text-sm"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-orange-400 transition-colors text-sm"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-white font-semibold text-sm sm:text-base">Services</h4>
            <div className="space-y-1 sm:space-y-2 text-sm text-gray-400">
              <p>Web Development</p>
              <p>Mobile Applications</p>
              <p>E-commerce Solutions</p>
              <p>Custom Software</p>
              <p>UI/UX Design</p>
              <p>Maintenance & Support</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-white font-semibold text-sm sm:text-base">Contact Info</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-gray-400">info@dovepeakdigital.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-gray-400">+254 700 000 000</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-gray-400">Nairobi, Kenya</span>
              </div>
              <a
                href="https://www.dovepeakdigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-gray-400 hover:text-orange-400 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Main Website</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} DovePeak Digital Solutions. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;