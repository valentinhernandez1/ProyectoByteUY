import Hero from './sections/Hero';
import Services from './sections/Services';
import Differentiation from './sections/Differentiation';
import SaaSPreview from './sections/SaaSPreview';
import WhatsAppCTA from './sections/WhatsAppCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Differentiation />
      <SaaSPreview />
      <WhatsAppCTA />
      <Footer />
    </div>
  );
}

export default App;
