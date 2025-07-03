
import React from 'react';

export const FounderSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <div className="relative">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">JS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-light text-slate-900">
                About the{' '}
                <span className="font-semibold">Founder</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                After spending over a decade analyzing financial markets at top-tier institutions, 
                I recognized a fundamental gap: sophisticated analysis was trapped in complex models 
                that few could interpret quickly. PeerSignal.io bridges that divide.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our mission is to democratize institutional-grade financial intelligence through 
                elegant, accessible scoring that preserves analytical rigor while accelerating 
                decision-making. Every score tells a story—we just make it easier to read.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200/50 shadow-sm">
              <blockquote className="text-slate-700 italic text-lg leading-relaxed">
                "The best analysis is worthless if it arrives too late or too complex to act upon. 
                SignalScore™ represents years of refinement in making sophisticated insights instantly actionable."
              </blockquote>
              <div className="mt-4 flex items-center space-x-4">
                <div>
                  <div className="font-semibold text-slate-900">Jordan Smith</div>
                  <div className="text-sm text-slate-600">Founder & Chief Data Scientist</div>
                </div>
                <div className="flex space-x-2">
                  <a href="#" className="w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-blue-600 text-sm font-bold">in</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-semibold text-slate-900">15+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-slate-900">$2B+</div>
                <div className="text-sm text-slate-600">Assets Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-slate-900">3</div>
                <div className="text-sm text-slate-600">Patents Filed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
