import React from 'react';
import { Award, Users, Clock, Target, Code2, Palette, Zap, Shield } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { icon: Code2, label: 'Projects Completed', value: '30+' },
    { icon: Users, label: 'Happy Clients', value: '25+' },
    { icon: Clock, label: 'Years Experience', value: '5+' },
    { icon: Award, label: 'Industries Served', value: '10+' }
  ];

  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that provide exceptional user experiences.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast applications optimized for speed and efficiency.'
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Robust security measures and ongoing maintenance for peace of mind.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-orange-400">DovePeak</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading digital solutions company specializing in creating innovative 
            web applications and digital platforms that drive business growth and success.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-orange-500/20 rounded-xl mb-3 sm:mb-4">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Crafting Digital Excellence Since 2019
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              DovePeak Digital Solutions has been at the forefront of digital innovation, 
              delivering cutting-edge web applications and digital platforms across various 
              industries. Our team of experienced developers and designers work tirelessly 
              to bring your vision to life.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              From e-commerce platforms to healthcare management systems, from educational 
              tools to fintech solutions, we have the expertise and experience to handle 
              projects of any scale and complexity.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-gray-300 text-sm sm:text-base">Custom Web Application Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-gray-300 text-sm sm:text-base">Mobile-First Responsive Design</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-gray-300 text-sm sm:text-base">Cloud Infrastructure & DevOps</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-gray-300 text-sm sm:text-base">Ongoing Support & Maintenance</span>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional Development Team" 
                className="w-full rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
            Our <span className="text-orange-400">Services</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-700/30 border border-slate-600 rounded-xl p-4 sm:p-6 hover:border-orange-500/50 transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 rounded-lg mb-3 sm:mb-4 group-hover:bg-orange-500/30 transition-colors">
                  <service.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">{service.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;