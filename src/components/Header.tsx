
import React from 'react';

export const Header = () => {
  return (
    <header className="bg-cream/95 backdrop-blur-sm border-b border-brass/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-burnt-red rounded-sm flex items-center justify-center">
              <span className="text-cream font-bold text-sm font-playfair">P</span>
            </div>
            <span className="text-xl font-semibold text-charcoal font-playfair">PeerSignal.io</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="text-charcoal/70 hover:text-burnt-red transition-colors font-medium">
              Overview
            </a>
            <a href="#use-cases" className="text-charcoal/70 hover:text-burnt-red transition-colors font-medium">
              Use Cases
            </a>
            <a href="#pricing" className="text-charcoal/70 hover:text-burnt-red transition-colors font-medium">
              Pricing
            </a>
            <a href="#contact" className="text-charcoal/70 hover:text-burnt-red transition-colors font-medium">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-charcoal/70 hover:text-burnt-red transition-colors font-medium">
              Sign In
            </button>
            <button className="bg-burnt-red text-cream px-4 py-2 rounded-sm hover:bg-burnt-red/90 transition-colors font-medium">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
