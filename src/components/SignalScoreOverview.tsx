
import React from 'react';

export const SignalScoreOverview = () => {
  return (
    <section id="overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-900 mb-6">
            What is{' '}
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              SignalScore™
            </span>
            ?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A proprietary composite benchmark that synthesizes multiple financial signals 
            into a single, actionable intelligence score for investment decision-making.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Multi-Factor Analysis</h3>
            <p className="text-slate-600">
              Combines fundamental, technical, and sentiment indicators into unified intelligence.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Real-Time Updates</h3>
            <p className="text-slate-600">
              Continuous data ingestion ensures scores reflect current market conditions.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg"></div>
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Peer Benchmarking</h3>
            <p className="text-slate-600">
              Contextual scoring relative to industry peers and market segments.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900">
                Precision Without Complexity
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our algorithmic approach distills complex financial relationships into 
                clear, comparable scores. Each SignalScore™ represents hours of analysis 
                condensed into actionable intelligence that fits your workflow.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-600">Standardized 1-10 scoring scale</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-slate-600">Peer-relative positioning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-600">Trend and momentum indicators</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200/50">
                <div className="space-y-4">
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                    Score Components
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-700">Financial Health</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-12 h-1.5 bg-emerald-500 rounded-full"></div>
                        <span className="text-sm font-medium">9.2</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-slate-700">Market Position</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-10 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium">8.1</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-slate-700">Growth Trajectory</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-11 h-1.5 bg-purple-500 rounded-full"></div>
                        <span className="text-sm font-medium">8.7</span>
                      </div>
                    </div>
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
