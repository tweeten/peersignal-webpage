
import React, { useState } from 'react';

export const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "For individual analysts and small teams",
      monthlyPrice: 299,
      annualPrice: 2990,
      features: [
        "Up to 50 company scores/month",
        "Basic peer benchmarking",
        "Email alerts",
        "Standard support",
        "API access (limited)"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "For active investment teams",
      monthlyPrice: 799,
      annualPrice: 7990,
      features: [
        "Up to 500 company scores/month",
        "Advanced peer analytics",
        "Real-time alerts",
        "Priority support",
        "Full API access",
        "Custom reports",
        "Team collaboration tools"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large firms and institutions",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      features: [
        "Unlimited scoring",
        "White-label options",
        "Dedicated success manager",
        "Custom integrations",
        "Advanced analytics",
        "Priority data feeds",
        "SLA guarantees"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-900 mb-6">
            Simple, Transparent{' '}
            <span className="font-semibold">Pricing</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Choose the plan that fits your analysis needs. All plans include our core SignalScore™ technology.
          </p>

          <div className="flex items-center justify-center space-x-4">
            <span className={`font-medium ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-medium ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="text-sm bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full font-medium">
                Save 17%
              </span>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 p-8 ${
                plan.popular
                  ? 'border-blue-500 shadow-xl scale-105'
                  : 'border-slate-200 shadow-lg hover:shadow-xl transition-shadow'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-slate-900">{plan.name}</h3>
                  <p className="text-slate-600">{plan.description}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline space-x-1">
                    {typeof plan.monthlyPrice === 'number' ? (
                      <>
                        <span className="text-4xl font-bold text-slate-900">
                          ${isAnnual ? Math.round(plan.annualPrice / 12) : plan.monthlyPrice}
                        </span>
                        <span className="text-slate-600">/month</span>
                      </>
                    ) : (
                      <span className="text-4xl font-bold text-slate-900">{plan.monthlyPrice}</span>
                    )}
                  </div>
                  {isAnnual && typeof plan.annualPrice === 'number' && (
                    <p className="text-sm text-slate-500">
                      Billed annually (${plan.annualPrice.toLocaleString()})
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:opacity-90'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            Compare all features →
          </button>
        </div>
      </div>
    </section>
  );
};
