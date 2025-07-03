
import React, { useState } from 'react';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmailModal = ({ isOpen, onClose }: EmailModalProps) => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email signup:', { email, company, role });
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
      setCompany('');
      setRole('');
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-charcoal/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-cream rounded-sm max-w-md w-full shadow-2xl">
        <div className="p-8">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-charcoal mb-2 font-playfair">
                  Access Sample Report
                </h3>
                <p className="text-charcoal/70">
                  Get instant access to a comprehensive SignalScore™ analysis report.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-brass/30 rounded-sm focus:ring-2 focus:ring-burnt-red focus:border-transparent bg-white"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-charcoal mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-brass/30 rounded-sm focus:ring-2 focus:ring-burnt-red focus:border-transparent bg-white"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-charcoal mb-2">
                    Role *
                  </label>
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-brass/30 rounded-sm focus:ring-2 focus:ring-burnt-red focus:border-transparent bg-white"
                  >
                    <option value="">Select your role</option>
                    <option value="analyst">Analyst</option>
                    <option value="portfolio-manager">Portfolio Manager</option>
                    <option value="cfo">CFO</option>
                    <option value="researcher">Researcher</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-4 py-3 border-2 border-brass text-charcoal rounded-sm hover:bg-brass/10 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-burnt-red text-cream rounded-sm hover:bg-burnt-red/90 transition-opacity font-medium"
                  >
                    Get Sample Report
                  </button>
                </div>
              </form>

              <p className="text-xs text-charcoal/60 text-center mt-4">
                By submitting, you agree to receive communication from PeerSignal.io
              </p>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-sage-green/20 rounded-sm flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-sage-green rounded-sm flex items-center justify-center">
                  <span className="text-cream text-sm">✓</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2 font-playfair">
                Report Sent!
              </h3>
              <p className="text-charcoal/70">
                Check your email for the sample SignalScore™ report.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
