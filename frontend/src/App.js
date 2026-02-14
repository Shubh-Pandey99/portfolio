import React from 'react';
import './App.css';
import { ThemeProvider } from './components/ThemeProvider';
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
import FloatingControls from './components/FloatingControls';
import Reveal from './components/Reveal';
import CommandMenu from './components/CommandMenu';

const PortfolioContent = () => {
    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-orange-500/30">
            <CommandMenu />
            <FloatingControls />
            <Header />

            <main>
                <section id="home">
                    <HeroSection />
                </section>

                <Reveal delay={0.2}>
                    <AboutSection />
                </Reveal>

                <Reveal delay={0.2}>
                    <SkillsSection />
                </Reveal>

                <Reveal delay={0.2}>
                    <ExperienceSection />
                </Reveal>

                <Reveal delay={0.2}>
                    <EducationSection />
                </Reveal>

                <Reveal delay={0.2}>
                    <CertificationsSection />
                </Reveal>

                <Reveal delay={0.2}>
                    <ProjectsSection />
                </Reveal>

                <Reveal delay={0.2}>
                    <BlogsSection />
                </Reveal>

                <Reveal delay={0.2}>
                    <ContactSection />
                </Reveal>
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
