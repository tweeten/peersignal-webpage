
import React from 'react';

interface HeroSectionProps {
  onViewSample: () => void;
}

export const HeroSection = ({ onViewSample }: HeroSectionProps) => {
  return (
    <section className="relative py-20 lg:py-32 bg-cream">
      {/* Wright-inspired geometric grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 h-full">
          {Array.from({ length: 64 }, (_, i) => (
            <div key={i} className="border border-brass/30"></div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-charcoal leading-tight">
                Financial Intelligence,{' '}
                <span className="text-burnt-red">
                  Scored.
                </span>
              </h1>
              
              <p className="text-xl text-charcoal/80 max-w-lg leading-relaxed">
                Proprietary composite benchmarking that transforms complex financial data 
                into actionable intelligence for sophisticated investors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onViewSample}
                className="bg-burnt-red text-cream px-8 py-4 rounded-sm hover:bg-burnt-red/90 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold"
              >
                View Sample Report
              </button>
              <button className="border-2 border-brass text-charcoal px-8 py-4 rounded-sm hover:bg-brass/10 transition-colors font-semibold">
                Schedule Demo
              </button>
            </div>

            <div className="flex items-center space-x-12 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-charcoal font-playfair">500+</div>
                <div className="text-sm text-charcoal/70 font-medium">Firms Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-charcoal font-playfair">99.2%</div>
                <div className="text-sm text-charcoal/70 font-medium">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-charcoal font-playfair">24/7</div>
                <div className="text-sm text-charcoal/70 font-medium">Data Updates</div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="bg-white rounded-sm shadow-2xl p-8 border-l-4 border-burnt-red">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-charcoal font-playfair">SignalScore™ Preview</h3>
                  <div className="px-3 py-1 bg-sage-green/20 text-sage-green rounded-sm text-sm font-medium">
                    Live Data
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-cream">
                    <span className="text-charcoal/70 font-medium">Composite Score</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-16 h-2 bg-gradient-to-r from-sage-green to-soft-blue rounded-full"></div>
                      <span className="font-bold text-charcoal text-lg font-playfair">8.7</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-cream">
                    <span className="text-charcoal/70 font-medium">Market Position</span>
                    <span className="font-semibold text-charcoal">Strong</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-cream">
                    <span className="text-charcoal/70 font-medium">Risk Level</span>
                    <span className="font-semibold text-sage-green">Low</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-3">
                    <span className="text-charcoal/70 font-medium">Trend Direction</span>
                    <span className="font-semibold text-soft-blue">↗ Positive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
