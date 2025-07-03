
import React from 'react';

interface HeroSectionProps {
  onViewSample: () => void;
}

export const HeroSection = ({ onViewSample }: HeroSectionProps) => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
      
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 144 }, (_, i) => (
            <div key={i} className="border border-slate-300"></div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-light text-slate-900 leading-tight">
                Financial Intelligence,{' '}
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  Scored.
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                Proprietary composite benchmarking that transforms complex financial data 
                into actionable intelligence for sophisticated investors.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onViewSample}
                className="bg-slate-900 text-white px-8 py-4 rounded-lg hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View Sample Report
              </button>
              <button className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:bg-slate-50 transition-colors">
                Schedule Demo
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-semibold text-slate-900">500+</div>
                <div className="text-sm text-slate-600">Firms Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-slate-900">99.2%</div>
                <div className="text-sm text-slate-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-slate-900">24/7</div>
                <div className="text-sm text-slate-600">Data Updates</div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200/50">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">SignalScore™ Preview</h3>
                  <div className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                    Live Data
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-slate-100">
                    <span className="text-slate-600">Composite Score</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
                      <span className="font-semibold text-slate-900">8.7</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-slate-100">
                    <span className="text-slate-600">Market Position</span>
                    <span className="font-medium text-slate-900">Strong</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-3 border-b border-slate-100">
                    <span className="text-slate-600">Risk Level</span>
                    <span className="font-medium text-emerald-600">Low</span>
                  </div>
                  
                  <div className="flex items-center justify-between py-3">
                    <span className="text-slate-600">Trend Direction</span>
                    <span className="font-medium text-blue-600">↗ Positive</span>
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
