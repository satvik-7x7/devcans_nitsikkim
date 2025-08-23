import { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'hero', label: 'Home', type: 'scroll' },
    { id: 'about', label: 'About', type: 'scroll' },
    { id: 'events', label: 'Events', type: 'scroll' },
    { id: 'teams', label: 'Team', type: 'link', href: '/teams' },
    { id: 'contact', label: 'Contact', type: 'scroll' }
  ];

  const handleNavClick = (item: any) => {
    if (item.type === 'link') {
      window.location.href = item.href;
    } else {
      if (window.location.pathname !== '/') {
        window.location.href = `/#${item.id}`;
        return;
      }
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollSections = navItems.filter(item => item.type === 'scroll').map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of scrollSections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-terminal-bg/90 backdrop-blur-md border-b border-terminal-green/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Terminal className="text-terminal-green w-8 h-8" />
            <span className="text-xl font-bold terminal-text">DevCans</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.type === 'link' ? (
                <a
                  key={item.id}
                  href={item.href}
                  className="nav-link"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-terminal-green"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-terminal-green/20">
            {navItems.map((item) => (
              item.type === 'link' ? (
                <a
                  key={item.id}
                  href={item.href}
                  className="block w-full text-left py-2 nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left py-2 nav-link"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;