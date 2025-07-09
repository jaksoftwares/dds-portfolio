import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, DollarSign } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: 'quote',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        type: 'quote',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-orange-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Get a quote or ask us any questions. 
            We're here to help bring your digital vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Let's Start a Conversation</h3>
              <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                Whether you need a custom web application, want to discuss a project idea, 
                or have questions about our services, we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">Email Us</h4>
                  <p className="text-gray-400 text-sm sm:text-base">info@dovepeakdigital.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">Call Us</h4>
                  <p className="text-gray-400 text-sm sm:text-base">+254 700 000 000</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm sm:text-base">Visit Us</h4>
                  <p className="text-gray-400 text-sm sm:text-base">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8 border-t border-slate-700">
              <h4 className="text-white font-semibold text-sm sm:text-base">Quick Actions</h4>
              <div className="space-y-2 sm:space-y-3">
                <a
                  href="https://www.dovepeakdigital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base"
                >
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Visit our main website</span>
                </a>
                <button
                  onClick={() => {
                    setFormData(prev => ({ ...prev, type: 'quote' }));
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base"
                >
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Request a project quote</span>
                </button>
                <button
                  onClick={() => {
                    setFormData(prev => ({ ...prev, type: 'question' }));
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base"
                >
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Ask a question</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 sm:p-6 lg:p-8 mt-8 lg:mt-0">
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Form Type */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  What can we help you with?
                </label>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, type: 'quote' }))}
                    className={`flex items-center justify-center space-x-2 p-2 sm:p-3 rounded-lg border transition-all text-sm sm:text-base ${
                      formData.type === 'quote'
                        ? 'bg-orange-500/20 border-orange-500 text-orange-400'
                        : 'bg-slate-700/30 border-slate-600 text-gray-300 hover:border-slate-500'
                    }`}
                  >
                    <DollarSign className="w-4 h-4" />
                    <span>Get Quote</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, type: 'question' }))}
                    className={`flex items-center justify-center space-x-2 p-2 sm:p-3 rounded-lg border transition-all text-sm sm:text-base ${
                      formData.type === 'question'
                        ? 'bg-orange-500/20 border-orange-500 text-orange-400'
                        : 'bg-slate-700/30 border-slate-600 text-gray-300 hover:border-slate-500'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Ask Question</span>
                  </button>
                </div>
              </div>

              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors text-sm sm:text-base"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors text-sm sm:text-base"
                  placeholder="Your company name (optional)"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors text-sm sm:text-base"
                  placeholder={formData.type === 'quote' ? 'Project quote request' : 'Your question about...'}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors resize-none text-sm sm:text-base"
                  placeholder={
                    formData.type === 'quote'
                      ? 'Please describe your project requirements, timeline, and any specific features you need...'
                      : 'What would you like to know about our services or projects?'
                  }
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50 text-white font-semibold rounded-lg transition-colors text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{formData.type === 'quote' ? 'Request Quote' : 'Send Message'}</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-3 sm:p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center text-sm sm:text-base">
                  Thank you! We'll get back to you within 24 hours.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-3 sm:p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center text-sm sm:text-base">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;