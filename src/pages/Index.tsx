import MatrixBackground from '@/components/MatrixBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EventsSection from '@/components/EventsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-terminal-bg text-foreground overflow-x-hidden">
      <MatrixBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
