
import React from 'react';

export const UseCaseGrid = () => {
  const useCases = [
    {
      persona: "Hedge Fund Analysts",
      title: "Alpha Signal Sourcing",
      description: "Identify undervalued opportunities and market inefficiencies through composite scoring that reveals hidden value drivers.",
      features: ["Peer comparison analysis", "Signal strength indicators", "Historical performance context"],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      persona: "Boutique Fund PMs",
      title: "Rapid Thesis Validation",
      description: "Validate investment hypotheses quickly with comprehensive scoring that cuts through market noise.",
      features: ["Multi-factor validation", "Risk-adjusted insights", "Sector benchmarking"],
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      persona: "CFOs & Finance Teams",
      title: "Competitive Intelligence",
      description: "Monitor competitive positioning and industry health with real-time scoring updates and trend analysis.",
      features: ["Industry positioning", "Competitive benchmarks", "Strategic insights"],
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      persona: "Back Office Operations",
      title: "Portfolio Screening",
      description: "Streamline due diligence and portfolio monitoring with automated scoring and alert systems.",
      features: ["Automated screening", "Risk monitoring", "Compliance reporting"],
      gradient: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-900 mb-6">
            Built for Financial{' '}
            <span className="font-semibold">Professionals</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tailored intelligence for every role in the investment decision-making process.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300 h-full">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                      {useCase.persona}
                    </div>
                    <h3 className={`text-2xl font-semibold bg-gradient-to-r ${useCase.gradient} bg-clip-text text-transparent`}>
                      {useCase.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    {useCase.description}
                  </p>

                  <div className="space-y-3">
                    {useCase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${useCase.gradient} rounded-full`}></div>
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button className={`text-sm font-medium bg-gradient-to-r ${useCase.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}>
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
