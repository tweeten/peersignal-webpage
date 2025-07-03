
import React, { useState } from 'react';

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "For insight on a specific industry",
      quarterlyPrice: 99,
      annualPrice: 299,
      features: [
        "One industry report per quarter",
        "Basic peer benchmarking",
        "Stored report access for up to 2 years",
        "Standard support",
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "For individual analysts and small teams",
      monthlyPrice: 499,
      annualPrice: 1499,
      features: [
        "Up to 20 industry reports per quarter",
        "Custom report narratives for 5 industries",
        "Advanced peer analytics",
        "Stored report access for lifetime",
        "Priority support",
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For medium to large firms and investment teams",
      monthlyPrice: "Contact Us",
      annualPrice: "Contact Us",
      features: [
        "Complete S&P 500 industry report coverage",
        "Custom report narratives for all industries",
        "Stored report access for lifetime plus shared access across company",
        "Premium support",
        "Additional custom industry reports available to meet internal use cases",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-charcoal mb-6">
            Simple, Transparent{' '}
            <span className="text-burnt-red">Pricing</span>
          </h2>
          <p className="text-xl text-charcoal/80 max-w-2xl mx-auto mb-8">
            Choose the plan that fits your analysis needs. All plans include our core SignalScore™ technology.
          </p>

          <div className="flex items-center justify-center space-x-4">
            <span className={`font-medium ${!isAnnual ? 'text-charcoal' : 'text-charcoal/60'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-cream transition-colors focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-burnt-red transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium ${isAnnual ? 'text-charcoal' : 'text-charcoal/60'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="text-sm bg-sage-green/20 text-sage-green px-2 py-1 rounded-sm font-medium">
                Save 17%
              </span>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-sm border-2 p-8 ${
                plan.popular
                  ? 'border-burnt-red shadow-xl scale-105'
                  : 'border-cream shadow-lg hover:shadow-xl transition-shadow'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-burnt-red text-cream px-4 py-2 rounded-sm text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-charcoal font-playfair">{plan.name}</h3>
                  <p className="text-charcoal/70">{plan.description}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline space-x-1">
                    {typeof plan.monthlyPrice === 'number' ? (
                      <>
                        <span className="text-4xl font-bold text-charcoal font-playfair">
                          ${isAnnual ? Math.round(plan.annualPrice as number / 12) : plan.monthlyPrice}
                        </span>
                        <span className="text-charcoal/70">/month</span>
                      </>
                    ) : (
                      <span className="text-4xl font-bold text-charcoal font-playfair">{plan.monthlyPrice}</span>
                    )}
                  </div>
                  {isAnnual && typeof plan.annualPrice === 'number' && (
                    <p className="text-sm text-charcoal/60">
                      Billed annually (${plan.annualPrice.toLocaleString()})
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-sage-green/20 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-sage-green rounded-full"></div>
                      </div>
                      <span className="text-charcoal">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-sm font-medium transition-colors ${
                    plan.popular
                      ? 'bg-burnt-red text-cream hover:bg-burnt-red/90'
                      : 'bg-cream text-charcoal hover:bg-brass/20 border border-brass'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-charcoal/70 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <button className="text-burnt-red hover:text-burnt-red/80 font-medium">
            Compare all features →
          </button>
        </div>
      </div>
    </section>
  );
};
