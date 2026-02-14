import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Terminal } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import SystemStatus from './SystemStatus';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Blogs', id: 'blogs' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section logic
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (!section) return;
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-background/80 backdrop-blur-lg border-b border-border py-2'
      : 'bg-transparent py-4'
      }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-red-600 flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter uppercase whitespace-nowrap">Shubh Pandey</span>
              <span className="text-[10px] font-bold text-orange-500 tracking-[0.2em] uppercase leading-none">DevOps & SRE</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${activeSection === item.id
                  ? 'bg-orange-500/10 text-orange-500'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <SystemStatus className="hidden xl:flex mr-4" />

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl hover:bg-muted transition-colors border border-border/50 bg-background/50 shadow-sm group"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-orange-400 group-hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700 group-hover:-rotate-12 transition-transform" />
              )}
            </button>

            <button
              className="lg:hidden p-2.5 rounded-xl hover:bg-muted transition-colors border border-border/50 bg-background/50 shadow-sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-md font-bold transition-all ${activeSection === item.id
                    ? 'bg-orange-500/10 text-orange-500'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
