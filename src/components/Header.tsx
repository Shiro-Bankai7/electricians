import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Zap, AlertTriangle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Booking', href: '/booking' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText('(555) 123-4567');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <header className="relative backdrop-blur-md bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a0a23] shadow-lg sticky top-0 z-50 animate-fade-in overflow-hidden">
      {/* Electric animated SVG effect */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="electric" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#38bdf8" />
            <stop offset="1" stopColor="#fbbf24" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <polyline
          points="0,30 100,50 200,20 300,60 400,30 500,50 600,10 700,60 800,30"
          stroke="url(#electric)"
          strokeWidth="4"
          fill="none"
          filter="url(#glow)"
          opacity="0.7"
        >
          <animate attributeName="points" dur="2s" repeatCount="indefinite"
            values="
              0,30 100,50 200,20 300,60 400,30 500,50 600,10 700,60 800,30;
              0,40 100,30 200,30 300,50 400,40 500,40 600,20 700,50 800,40;
              0,30 100,50 200,20 300,60 400,30 500,50 600,10 700,60 800,30
            "
          />
        </polyline>
      </svg>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      {/* Emergency Banner */}
      <div className="relative z-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-2 shadow-md animate-slide-down border-b border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 text-sm font-medium">
            <span className="hidden sm:inline flex items-center gap-1 animate-pulse">
              <AlertTriangle className="h-4 w-4 text-yellow-300 animate-bounce" />
              24/7 Emergency Service Available
            </span>
            <button 
              onClick={handleCopy}
              className="flex items-center space-x-2 bg-blue-700 hover:bg-yellow-400 hover:text-blue-900 px-4 py-1 rounded-full transition-colors relative group focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg border border-blue-400"
              aria-label="Copy phone number"
            >
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
              <span className={`absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-black bg-opacity-80 text-white transition-opacity duration-200 pointer-events-none ${copied ? 'opacity-100' : 'opacity-0'}`}>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>
      </div>
      {/* Main Header */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-700 via-blue-500 to-yellow-400 p-2 rounded-lg shadow-md border-2 border-blue-400">
              <Zap className="h-8 w-8 text-white animate-spin-slow glow" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight drop-shadow-lg text-blue-200 glow">PowerPro Electric</h1>
              <p className="text-sm text-blue-100">Licensed & Insured</p>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-yellow-400 border-b-2 border-yellow-400 pb-1 bg-blue-900/60 rounded shadow-md glow'
                    : 'text-blue-100 hover:text-yellow-400 hover:bg-blue-900/40 rounded transition'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+15551234567"
              className="bg-yellow-400 hover:bg-blue-700 hover:text-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-yellow-400 border-2 border-blue-400 glow"
            >
              Schedule a Service Call
            </a>
          </div>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-blue-100 hover:text-yellow-400 hover:bg-blue-900/40 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="relative z-20 md:hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700/90 border-t border-blue-800 animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-yellow-400 bg-blue-900/60 shadow-md glow'
                    : 'text-blue-100 hover:text-yellow-400 hover:bg-blue-900/40'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.7s cubic-bezier(.4,0,.2,1); }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down { animation: slide-down 0.5s cubic-bezier(.4,0,.2,1); }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .glow {
          text-shadow: 0 0 8px #38bdf8, 0 0 16px #fbbf24;
          filter: drop-shadow(0 0 6px #38bdf8) drop-shadow(0 0 12px #fbbf24);
        }
      `}</style>
    </header>
  );
};

export default Header;