
import React from 'react';

export const SignalScoreOverview = () => {
  return (
    <section id="overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-charcoal mb-6">
            What is{' '}
            <span className="text-charcoal">
              SignalScore™
            </span>
            ?
          </h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            A proprietary composite benchmark that synthesizes multiple financial signals 
            into a single, actionable intelligence score for investment decision-making.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-soft-blue/20 rounded-sm flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-soft-blue rounded-sm"></div>
            </div>
            <h3 className="text-xl font-semibold text-charcoal font-playfair">Multi-Factor Analysis</h3>
            <p className="text-charcoal/70">
              Combines fundamental, technical, and sentiment indicators into unified intelligence.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-sage-green/20 rounded-sm flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-sage-green rounded-sm"></div>
            </div>
            <h3 className="text-xl font-semibold text-charcoal font-playfair">Real-Time Updates</h3>
            <p className="text-charcoal/70">
              Continuous data ingestion ensures scores reflect current market conditions.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-brass/20 rounded-sm flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-brass rounded-sm"></div>
            </div>
            <h3 className="text-xl font-semibold text-charcoal font-playfair">Peer Benchmarking</h3>
            <p className="text-charcoal/70">
              Contextual scoring relative to industry peers and market segments.
            </p>
          </div>
        </div>

        <div className="bg-cream rounded-sm p-8 lg:p-12 border-l-4 border-brass">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-charcoal font-playfair">
                Precision Without Complexity
              </h3>
              <p className="text-charcoal/80 leading-relaxed">
                Our algorithmic approach distills complex financial relationships into 
                clear, comparable scores. Each SignalScore™ represents hours of analysis 
                condensed into actionable intelligence that fits your workflow.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-sage-green rounded-full"></div>
                  <span className="text-charcoal/70">Standardized 0-100 scoring scale</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-soft-blue rounded-full"></div>
                  <span className="text-charcoal/70">Peer-relative positioning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-brass rounded-full"></div>
                  <span className="text-charcoal/70">Trend and momentum indicators</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-sm p-6 shadow-lg border-l-4 border-sage-green">
                <div className="space-y-4">
                  <div className="text-sm font-medium text-charcoal/60 uppercase tracking-wide">
                    Score Components
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal font-medium">Revenue Growth</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-12 h-1.5 bg-sage-green rounded-full" style={{width: '92%'}}></div>
                        <span className="text-sm font-semibold font-playfair">92</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal font-medium">ROIC</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-10 h-1.5 bg-soft-blue rounded-full" style={{width: '81%'}}></div>
                        <span className="text-sm font-semibold font-playfair">81</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal font-medium">EBITDA Margin</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-11 h-1.5 bg-brass rounded-full" style={{width: '87%'}}></div>
                        <span className="text-sm font-semibold font-playfair">87</span>
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
