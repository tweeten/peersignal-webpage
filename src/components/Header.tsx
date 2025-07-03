
import React from 'react';

export const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-semibold text-slate-900">PeerSignal.io</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="text-slate-600 hover:text-slate-900 transition-colors">
              Overview
            </a>
            <a href="#use-cases" className="text-slate-600 hover:text-slate-900 transition-colors">
              Use Cases
            </a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-slate-600 hover:text-slate-900 transition-colors">
              Sign In
            </button>
            <button className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
