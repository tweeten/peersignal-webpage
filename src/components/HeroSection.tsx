
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
                <span className="text-charcoal">
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
                className="bg-charcoal text-cream px-8 py-4 rounded-sm hover:bg-charcoal/90 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold"
              >
                View Sample Report
              </button>
              <button className="border-2 border-brass text-charcoal px-8 py-4 rounded-sm hover:bg-brass/10 transition-colors font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="bg-white rounded-sm shadow-2xl p-8 border-l-4 border-charcoal">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-charcoal font-playfair">SignalScore™ Preview</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-cream">
                    <span className="text-charcoal/70 font-medium">SignalScore</span>
                    <div className="flex items-center space-x-3">
                      {/* Circle with score like in the uploaded image */}
                      <div className="relative w-16 h-16">
                        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="#e5e7eb"
                            strokeWidth="6"
                            fill="none"
                          />
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="#87A96B"
                            strokeWidth="6"
                            fill="none"
                            strokeDasharray={`${(87/100) * 175.93} 175.93`}
                            strokeLinecap="round"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-lg font-bold text-charcoal font-playfair">87</span>
                        </div>
                      </div>
                      <span className="text-xs text-charcoal/60">out of 100</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-cream">
                    <span className="text-charcoal/70 font-medium">Industry</span>
                    <span className="font-semibold text-charcoal">Software (SaaS)</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-cream">
                    <span className="text-charcoal/70 font-medium">Industry Rank</span>
                    <span className="font-semibold text-sage-green">#2</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-3">
                    <span className="text-charcoal/70 font-medium">Trend Direction</span>
                    <span className="font-semibold text-sage-green">↗ Positive</span>
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
