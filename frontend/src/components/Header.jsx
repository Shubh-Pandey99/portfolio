import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Terminal } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import SystemStatus from './SystemStatus';
import { motion, AnimatePresence } from 'framer-motion';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
      ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 py-3 shadow-2xl shadow-black/5'
      : 'bg-transparent py-5 md:py-8'
      }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo - More mobile responsive */}
          <div
            className="flex items-center space-x-2 md:space-x-3 cursor-pointer group shrink-0"
            onClick={() => scrollToSection('home')}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-tr from-orange-500 to-red-600 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all duration-500">
              <Terminal className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-[15px] md:text-xl tracking-tighter uppercase whitespace-nowrap leading-none mb-0.5">Shubh Pandey</span>
              <span className="text-[7px] md:text-[9px] font-bold text-orange-500 tracking-[0.2em] uppercase leading-none opacity-80">DevOps & SRE</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center bg-muted/30 backdrop-blur-md rounded-full px-1.5 py-1.5 border border-border/50">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 xl:px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${activeSection === item.id
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Controls */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Hidden on standard laptops/mobile/tablet to prevent clutter. Show only on ultra-wide screens. */}
            <SystemStatus className="hidden 2xl:flex" />

            <button
              onClick={toggleTheme}
              className="p-2.5 md:p-3 rounded-xl hover:bg-orange-500/10 transition-all border border-border/50 bg-background/50 shadow-sm group active:scale-95"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 md:w-5 md:h-5 text-orange-400 group-hover:rotate-90 transition-transform duration-500" />
              ) : (
                <Moon className="w-4 h-4 md:w-5 md:h-5 text-slate-700 group-hover:-rotate-12 transition-transform duration-500" />
              )}
            </button>

            <button
              className="lg:hidden p-2.5 md:p-3 rounded-xl hover:bg-orange-500/10 transition-all border border-border/50 bg-background/50 shadow-sm active:scale-95"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-4 h-4 md:w-5 md:h-5" /> : <Menu className="w-4 h-4 md:w-5 md:h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="mt-4 pb-4 bg-background/95 backdrop-blur-2xl border border-border shadow-2xl rounded-[2rem] p-3 flex flex-col space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${activeSection === item.id
                      ? 'bg-orange-500 text-white shadow-xl shadow-orange-500/20'
                      : 'text-muted-foreground hover:bg-muted'
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
