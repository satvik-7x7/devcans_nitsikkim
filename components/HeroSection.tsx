import { useState, useEffect } from 'react';
import { ChevronDown, Github, Code, Users } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Welcome to DevCans';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="mb-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex items-center space-x-2 mb-4">
            <Code className="text-terminal-green w-12 h-12" />
            <span className="text-6xl md:text-8xl font-bold terminal-text glitch">
              {'<DevCans/>'}
            </span>
          </div>
        </div>

        <div className="mb-8 fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h1 className="text-2xl md:text-4xl font-mono mb-4">
            <span className="typing-animation" style={{ width: `${displayText.length}ch` }}>
              {displayText}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-terminal-green-dim max-w-2xl mx-auto leading-relaxed">
            Coding & Development Club of NIT Sikkim
          </p>
          <p className="text-md md:text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Where innovation meets implementation. Join us to build the future, one line of code at a time.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={scrollToAbout}
            className="btn-primary rounded-lg"
          >
            Explore Our Journey
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-terminal rounded-lg"
          >
            Join DevCans
          </button>
        </div>

        <div className="flex justify-center space-x-8 mb-12 fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="text-center">
            <Users className="text-terminal-green w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold terminal-text">50+</div>
            <div className="text-sm text-muted-foreground">Active Members</div>
          </div>
          <div className="text-center">
            <Code className="text-terminal-green w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold terminal-text">100+</div>
            <div className="text-sm text-muted-foreground">Projects Built</div>
          </div>
          <div className="text-center">
            <Github className="text-terminal-green w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold terminal-text">25+</div>
            <div className="text-sm text-muted-foreground">Events Hosted</div>
          </div>
        </div>

        <div className="animate-bounce">
          <ChevronDown 
            className="text-terminal-green w-8 h-8 mx-auto cursor-pointer hover:text-terminal-green-bright transition-colors"
            onClick={scrollToAbout}
          />
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-terminal-bg/50 pointer-events-none" />
    </section>
  );
};

export default HeroSection;