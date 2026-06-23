import React from 'react';
import { ThemeProvider } from './components/shared/ThemeProvider';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import EducationSection from './components/sections/EducationSection';
import CertificationsSection from './components/sections/CertificationsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import BlogsSection from './components/sections/BlogsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import FloatingControls from './components/layout/FloatingControls';
import Reveal from './components/shared/Reveal';
import CommandMenu from './components/terminal/CommandMenu';

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
