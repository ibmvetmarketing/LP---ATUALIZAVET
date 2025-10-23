import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import RotatingText from './components/RotatingText';
import ResultsSection from './components/ResultsSection';
import LeadForm from './components/LeadForm';
import Schedule from './components/Schedule';
import AddressSection from './components/AddressSection';
import StickyButton from './components/StickyButton';
import VideosSection from './components/VideosSection';
import SponsorSection from './components/SponsorSection';
import TopPromoBar from './components/TopPromoBar';
// import CongressLogo from './components/CongressLogo';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Timer para mostrar o pop-up após 5 segundos
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen bg-primary">
      <TopPromoBar />
      {/* <CongressLogo /> */}
      <Hero />
      <SponsorSection />
      <VideosSection />
      <RotatingText />
      <ResultsSection />
      <Schedule />
      <AddressSection />
      <StickyButton />
      
      {/* Pop-up do formulário */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
          <LeadForm onClose={closePopup} />
        </div>
      )}
    </div>
  );
}

export default App;