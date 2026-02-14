import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Laptop, Terminal } from 'lucide-react';
import { useTheme } from '../context/ThemeProvider';
import SystemStatus from './SystemStatus';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme } = useTheme();

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

      // Active section highlighting
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/80 backdrop-blur-lg border-b border-border py-2 shadow-lg'
        : 'bg-transparent py-5'
        }`}
    >
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-4">
          {/* Brand */}
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tighter text-foreground group-hover:text-orange-500 transition-colors">
                SHUBH PANDEY
              </span>
              <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
                DevOps & SRE
              </span>
            </div>
          </div>

          {/* System Status — visible only on xl (≥1280px) */}
          <div className="hidden xl:block flex-shrink-0">
            <SystemStatus />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 min-w-0 items-center justify-center xl:justify-end gap-1 overflow-x-auto no-scrollbar px-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full whitespace-nowrap ${activeSection === item.id
                  ? 'text-orange-500 bg-orange-500/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-full hover:bg-muted transition-colors border border-border/50"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-orange-400" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              className="lg:hidden p-2.5 rounded-full hover:bg-muted transition-colors border border-border/50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                  className={`px-4 py-3 text-left rounded-lg transition-all ${activeSection === item.id
                    ? 'bg-orange-500/10 text-orange-500 font-bold'
                    : 'text-muted-foreground hover:bg-muted'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;