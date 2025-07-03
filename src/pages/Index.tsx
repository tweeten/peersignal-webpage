
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { SignalScoreOverview } from '@/components/SignalScoreOverview';
import { UseCaseGrid } from '@/components/UseCaseGrid';
import { PricingSection } from '@/components/PricingSection';
import { FounderSection } from '@/components/FounderSection';
import { Footer } from '@/components/Footer';
import { EmailModal } from '@/components/EmailModal';

const Index = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <HeroSection onViewSample={() => setShowEmailModal(true)} />
      <SignalScoreOverview />
      <UseCaseGrid />
      <PricingSection />
      <FounderSection />
      <Footer />
      <EmailModal 
        isOpen={showEmailModal} 
        onClose={() => setShowEmailModal(false)} 
      />
    </div>
  );
};

export default Index;
