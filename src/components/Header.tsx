import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-3">
            <img 
              src="/ddslogo1.jpg" 
              alt="Dovepeak Digital Solutions" 
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg"
            />
            <div>
              <h1 className="text-white font-bold text-sm sm:text-lg">DovePeak</h1>
              <p className="text-orange-400 text-xs hidden sm:block">Digital Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-300 hover:text-orange-400 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-orange-400 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-orange-400 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-orange-400 transition-colors"
            >
              Contact
            </button>
            <a 
              href="https://www.dovepeakdigital.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-300 hover:text-orange-400 transition-colors"
            >
              <span>Main Site</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-orange-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800 bg-slate-900/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-300 hover:text-orange-400 transition-colors text-left py-2 px-2 rounded-lg hover:bg-slate-800/50"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-orange-400 transition-colors text-left py-2 px-2 rounded-lg hover:bg-slate-800/50"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-orange-400 transition-colors text-left py-2 px-2 rounded-lg hover:bg-slate-800/50"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-orange-400 transition-colors text-left py-2 px-2 rounded-lg hover:bg-slate-800/50"
              >
                Contact
              </button>
              <a 
                href="https://www.dovepeakdigital.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-gray-300 hover:text-orange-400 transition-colors py-2 px-2 rounded-lg hover:bg-slate-800/50"
              >
                <span>Main Site</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;