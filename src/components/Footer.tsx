import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Star, Shield, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">PowerPro Electric</h3>
                <p className="text-gray-400 text-sm">Licensed & Insured</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Professional electrical services you can trust. Serving residential and commercial clients with excellence since 2010.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-xs text-gray-300">Licensed</span>
              </div>
              <div className="flex items-center space-x-1">
                <Award className="h-4 w-4 text-yellow-400" />
                <span className="text-xs text-gray-300">Certified</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-xs text-gray-300">5-Star Rated</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <a href="tel:+15551234567" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>(555) 123-4567</span>
              </a>
              <a href="mailto:info@powerpro-electric.com" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>info@powerpro-electric.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <span>123 Electric Ave<br />Your City, State 12345</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Business Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-sm">Emergency: 24/7</span>
              </div>
              <div className="text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Emergency Only</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/services" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Our Services
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link to="/testimonials" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Customer Reviews
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Get Quote
              </Link>
              <a href="tel:+15551234567" className="block text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                Emergency Service
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 PowerPro Electric. All rights reserved. Licensed #EL-12345
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Fully Insured & Bonded</span>
              <span className="text-gray-400 text-sm">|</span>
              <span className="text-gray-400 text-sm">BBB Accredited</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;