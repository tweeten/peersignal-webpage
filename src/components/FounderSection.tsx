
import React from 'react';

export const FounderSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <div className="relative">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-muted-orange/30 to-brass/30 rounded-sm flex items-center justify-center">
                <div className="w-24 h-24 bg-burnt-red rounded-sm flex items-center justify-center">
                  <span className="text-cream text-2xl font-bold font-playfair">JS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-playfair font-bold text-charcoal">
                About the{' '}
                <span className="text-burnt-red">Founder</span>
              </h2>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                After spending over a decade analyzing financial markets at top-tier institutions, 
                I recognized a fundamental gap: sophisticated analysis was trapped in complex models 
                that few could interpret quickly. PeerSignal.io bridges that divide.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                Our mission is to democratize institutional-grade financial intelligence through 
                elegant, accessible scoring that preserves analytical rigor while accelerating 
                decision-making. Every score tells a story—we just make it easier to read.
              </p>
            </div>

            <div className="bg-white rounded-sm p-6 border-l-4 border-brass shadow-sm">
              <blockquote className="text-charcoal/80 italic text-lg leading-relaxed">
                "The best analysis is worthless if it arrives too late or too complex to act upon. 
                SignalScore™ represents years of refinement in making sophisticated insights instantly actionable."
              </blockquote>
              <div className="mt-4 flex items-center space-x-4">
                <div>
                  <div className="font-semibold text-charcoal font-playfair">Jordan Smith</div>
                  <div className="text-sm text-charcoal/70">Founder & Chief Data Scientist</div>
                </div>
                <div className="flex space-x-2">
                  <a href="#" className="w-8 h-8 bg-soft-blue/20 hover:bg-soft-blue/30 rounded-sm flex items-center justify-center transition-colors">
                    <span className="text-soft-blue text-sm font-bold">in</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-semibold text-charcoal font-playfair">15+</div>
                <div className="text-sm text-charcoal/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-charcoal font-playfair">$2B+</div>
                <div className="text-sm text-charcoal/70">Assets Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-charcoal font-playfair">3</div>
                <div className="text-sm text-charcoal/70">Patents Filed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
