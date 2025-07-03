
import React from 'react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-semibold">PeerSignal.io</span>
            </div>
            
            <p className="text-slate-300 max-w-md leading-relaxed">
              Transforming complex financial data into actionable intelligence for 
              sophisticated investors worldwide.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-slate-400">Email:</span>
                <a href="mailto:hello@peersignal.io" className="text-white hover:text-blue-400 transition-colors">
                  hello@peersignal.io
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-slate-400">Sales:</span>
                <a href="mailto:sales@peersignal.io" className="text-white hover:text-blue-400 transition-colors">
                  sales@peersignal.io
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <div className="space-y-3">
              <a href="#overview" className="block text-slate-300 hover:text-white transition-colors">
                SignalScore™ Overview
              </a>
              <a href="#use-cases" className="block text-slate-300 hover:text-white transition-colors">
                Use Cases
              </a>
              <a href="#pricing" className="block text-slate-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">
                API Documentation
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <div className="space-y-3">
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">
                Blog
              </a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">
                Careers
              </a>
              <a href="#" className="block text-slate-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Data Security
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-slate-400 text-sm">
                © 2024 PeerSignal.io. All rights reserved.
              </span>
              <div className="flex space-x-2">
                <a href="#" className="w-8 h-8 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-colors">
                  <span className="text-slate-300 text-sm font-bold">in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
