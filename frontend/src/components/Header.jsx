import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Terminal, LogIn } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import SystemStatus from './SystemStatus';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

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

      if (!isAuthPage) {
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
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAuthPage]);

  const scrollToSection = (id) => {
    if (isAuthPage) {
      navigate(`/#${id}`);
      return;
    }

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isAuthPage
        ? 'bg-background/80 backdrop-blur-lg border-b border-border py-2 shadow-lg'
        : 'bg-transparent py-5'
        }`}
    >
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-4">
          {/* Brand */}
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => location.pathname === '/' ? scrollToSection('home') : navigate('/')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500 to-red-600 flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter text-foreground group-hover:text-orange-500 transition-colors">
                SHUBH-OS
              </span>
              <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">
                RELIABILITY FIRST
              </span>
            </div>
          </div>

          {/* System Status — visible only on xl (≥1280px) and not on Auth Pages */}
          {!isAuthPage && (
            <div className="hidden xl:block flex-shrink-0">
              <SystemStatus />
            </div>
          )}

          {/* Desktop Navigation */}
          {!isAuthPage && (
            <div className="hidden lg:flex flex-1 min-w-0 items-center justify-center xl:justify-end gap-1 overflow-x-auto no-scrollbar px-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-bold transition-all duration-300 rounded-full whitespace-nowrap ${activeSection === item.id
                    ? 'text-orange-500 bg-orange-500/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}

          {/* Controls & Auth */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-xl hover:bg-muted transition-colors border border-border/50 hidden sm:flex"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-orange-400" /> : <Moon className="w-5 h-5" />}
            </button>

            <div className="h-8 w-[1px] bg-border/50 mx-1 hidden sm:block" />

            <button
              onClick={() => navigate('/login')}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-foreground hover:text-orange-500 transition-colors"
            >
              Log In
            </button>

            <button
              onClick={() => navigate('/signup')}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 active:scale-95"
            >
              Sign Up
            </button>

            <button
              className="lg:hidden p-2.5 rounded-xl hover:bg-muted transition-colors border border-border/50"
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
              <div className="pt-4 border-t border-border/50 grid grid-cols-2 gap-4">
                <button onClick={() => navigate('/login')} className="py-3 text-center rounded-xl bg-muted font-bold text-sm">Log In</button>
                <button onClick={() => navigate('/signup')} className="py-3 text-center rounded-xl bg-orange-500 text-white font-bold text-sm">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;