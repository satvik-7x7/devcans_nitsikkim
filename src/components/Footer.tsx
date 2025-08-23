import { Terminal, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-terminal-bg-lighter/50 border-t border-terminal-green/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Terminal className="text-terminal-green w-8 h-8" />
              <span className="text-2xl font-bold terminal-text">DevCans</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Empowering the next generation of developers at NIT Sikkim through innovation, 
              collaboration, and continuous learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold terminal-text mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-terminal-green transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-terminal-green transition-colors"
                >
                  Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-terminal-green transition-colors"
                >
                  Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-terminal-green transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold terminal-text mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-terminal-green transition-colors">
                  Learning Materials
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-terminal-green transition-colors">
                  Project Gallery
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-terminal-green transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-terminal-green transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-terminal-green/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 DevCans - Coding & Development Club, NIT Sikkim. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="text-terminal-green w-4 h-4 fill-current" />
              <span>by DevCans Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;