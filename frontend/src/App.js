import React, { useEffect } from 'react';
import './App.css';
import { ThemeProvider, useTheme } from './components/ThemeProvider';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import CertificationsSection from './components/CertificationsSection';
import ProjectsSection from './components/ProjectsSection';
import BlogsSection from './components/BlogsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const PortfolioContent = () => {
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  useEffect(() => {
    // Fade-in animation for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ProjectsSection />
        <BlogsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}

export default App;