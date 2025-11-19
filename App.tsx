import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Pricing from './components/Pricing';
import Trainers from './components/Trainers';
import Contact from './components/Contact';
import RegistrationModal from './components/RegistrationModal';

const App: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelection = (planName: string) => {
    setSelectedPlan(planName);
  };

  const closeRegistration = () => {
    setSelectedPlan(null);
  };

  return (
    <div className="min-h-screen bg-iron-black text-white font-sans selection:bg-iron-red selection:text-white relative">
      <Header />
      <main>
        <Hero />
        <Pricing onSelectPlan={handlePlanSelection} />
        {/* Trainers movido para a 3ª posição */}
        <Trainers />
        <About />
      </main>
      
      <Contact />

      {/* Modal de Matrícula */}
      <AnimatePresence>
        {selectedPlan && (
          <RegistrationModal 
            planName={selectedPlan} 
            onClose={closeRegistration} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;