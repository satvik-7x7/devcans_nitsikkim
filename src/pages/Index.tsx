import FaultyTerminal from '@/components/FaultyTerminal';
import DigitalRain from '@/components/DigitalRain';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EventsSection from '@/components/EventsSection';
import RegisterSection from '@/components/RegisterSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-terminal-bg text-foreground overflow-x-hidden">
      <FaultyTerminal 
        scale={1.2}
        gridMul={[2, 1]}
        digitSize={1.5}
        timeScale={0.3}
        scanlineIntensity={0.4}
        glitchAmount={1.2}
        flickerAmount={0.8}
        noiseAmp={1.2}
        chromaticAberration={0.002}
        dither={true}
        curvature={0.15}
        tint="#00ff00"
        mouseReact={true}
        mouseStrength={0.3}
        pageLoadAnimation={true}
        brightness={1.1}
      />
      
      {/* Digital Rain Effect */}
      <DigitalRain />
      
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <RegisterSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
