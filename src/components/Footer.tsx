
import React from 'react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-burnt-red rounded-sm flex items-center justify-center">
                <span className="text-cream font-bold text-sm font-playfair">P</span>
              </div>
              <span className="text-xl font-semibold font-playfair">PeerSignal.io</span>
            </div>
            
            <p className="text-cream/80 max-w-md leading-relaxed">
              Transforming complex financial data into actionable intelligence for 
              sophisticated investors worldwide.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-cream/60">Email:</span>
                <a href="mailto:hello@peersignal.io" className="text-cream hover:text-soft-blue transition-colors">
                  hello@peersignal.io
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-cream/60">Sales:</span>
                <a href="mailto:sales@peersignal.io" className="text-cream hover:text-soft-blue transition-colors">
                  sales@peersignal.io
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">Product</h3>
            <div className="space-y-3">
              <a href="#overview" className="block text-cream/80 hover:text-cream transition-colors">
                SignalScore™ Overview
              </a>
              <a href="#use-cases" className="block text-cream/80 hover:text-cream transition-colors">
                Use Cases
              </a>
              <a href="#pricing" className="block text-cream/80 hover:text-cream transition-colors">
                Pricing
              </a>
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors">
                API Documentation
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-playfair">Company</h3>
            <div className="space-y-3">
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors">
                About
              </a>
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors">
                Blog
              </a>
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors">
                Careers
              </a>
              <a href="#" className="block text-cream/80 hover:text-cream transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="text-cream/60 hover:text-cream transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-cream/60 hover:text-cream transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-cream/60 hover:text-cream transition-colors text-sm">
                Data Security
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-cream/60 text-sm">
                © 2024 PeerSignal.io. All rights reserved.
              </span>
              <div className="flex space-x-2">
                <a href="#" className="w-8 h-8 bg-cream/10 hover:bg-cream/20 rounded-sm flex items-center justify-center transition-colors">
                  <span className="text-cream/80 text-sm font-bold">in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
