
import React from 'react';

export const UseCaseGrid = () => {
  const useCases = [
    {
      persona: "Hedge Fund Analysts",
      title: "Alpha Signal Sourcing",
      description: "Identify undervalued opportunities and market inefficiencies through composite scoring that reveals hidden value drivers.",
      features: ["Peer comparison analysis", "Signal strength indicators", "Historical performance context"],
      color: "soft-blue"
    },
    {
      persona: "Boutique Fund PMs",
      title: "Rapid Thesis Validation",
      description: "Validate investment hypotheses quickly with comprehensive scoring that cuts through market noise.",
      features: ["Multi-factor validation", "Risk-adjusted insights", "Sector benchmarking"],
      color: "sage-green"
    },
    {
      persona: "CFOs & Finance Teams",
      title: "Competitive Intelligence",
      description: "Monitor competitive positioning and industry health with real-time scoring updates and trend analysis.",
      features: ["Industry positioning", "Competitive benchmarks", "Strategic insights"],
      color: "brass"
    },
    {
      persona: "Back Office Operations",
      title: "Portfolio Screening",
      description: "Streamline due diligence and portfolio monitoring with automated scoring and alert systems.",
      features: ["Automated screening", "Risk monitoring", "Compliance reporting"],
      color: "charcoal"
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-charcoal mb-6">
            Built for Financial{' '}
            <span className="text-charcoal">Professionals</span>
          </h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
            Tailored intelligence for every role in the investment decision-making process.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="group">
              <div className={`bg-white rounded-sm p-8 shadow-lg border-l-4 ${
                useCase.color === 'soft-blue' ? 'border-soft-blue' :
                useCase.color === 'sage-green' ? 'border-sage-green' :
                useCase.color === 'brass' ? 'border-brass' : 'border-charcoal'
              } hover:shadow-xl transition-all duration-300 h-full`}>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-charcoal/60 uppercase tracking-wide">
                      {useCase.persona}
                    </div>
                    <h3 className={`text-2xl font-semibold font-playfair ${
                      useCase.color === 'soft-blue' ? 'text-soft-blue' :
                      useCase.color === 'sage-green' ? 'text-sage-green' :
                      useCase.color === 'brass' ? 'text-brass' : 'text-charcoal'
                    }`}>
                      {useCase.title}
                    </h3>
                  </div>

                  <p className="text-charcoal/80 leading-relaxed">
                    {useCase.description}
                  </p>

                  <div className="space-y-3">
                    {useCase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          useCase.color === 'soft-blue' ? 'bg-soft-blue' :
                          useCase.color === 'sage-green' ? 'bg-sage-green' :
                          useCase.color === 'brass' ? 'bg-brass' : 'bg-charcoal'
                        }`}></div>
                        <span className="text-charcoal">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button className={`text-sm font-medium transition-opacity hover:opacity-80 ${
                      useCase.color === 'soft-blue' ? 'text-soft-blue' :
                      useCase.color === 'sage-green' ? 'text-sage-green' :
                      useCase.color === 'brass' ? 'text-brass' : 'text-charcoal'
                    }`}>
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
