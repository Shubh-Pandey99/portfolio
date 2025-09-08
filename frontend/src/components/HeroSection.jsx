import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Download, Mail } from 'lucide-react';
import { portfolioData } from '../data/mockData';

const HeroSection = () => {
  const [counters, setCounters] = useState({});
  const { hero } = portfolioData;

  useEffect(() => {
    const animateCounters = () => {
      hero.stats.forEach((stat, index) => {
        const numericValue = stat.value.match(/[\d.]+/);
        if (numericValue) {
          const target = parseFloat(numericValue[0]);
          let current = 0;
          const increment = target / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            const formattedValue = stat.value.includes('.') 
              ? current.toFixed(1) 
              : Math.floor(current).toString();
            setCounters(prev => ({
              ...prev,
              [index]: formattedValue + stat.value.replace(/[\d.]+/, '')
            }));
          }, 40);
        } else {
          // For non-numeric values, just set them directly
          setCounters(prev => ({
            ...prev,
            [index]: stat.value
          }));
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const heroElement = document.getElementById('home');
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownloadResume = () => {
    // Create a temporary link to download the resume
    const link = document.createElement('a');
    link.href = hero.resumeUrl;
    link.download = 'Shubh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGetInTouch = () => {
    window.location.href = `mailto:${hero.email}`;
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="space-y-6 mb-12">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="block">Hi, I'm</span>
                <span className="block text-[#0070C0]">{hero.name}</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                {hero.title}
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                {hero.subheading}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={handleDownloadResume}
                className="bg-[#0070C0] hover:bg-[#005799] text-white px-8 py-3 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleGetInTouch}
                className="border-[#0070C0] text-[#0070C0] hover:bg-[#0070C0] hover:text-white px-8 py-3 text-lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hero.stats.map((stat, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-[#0070C0]/50 transition-colors duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-[#0070C0] mb-2">
                    {counters[index] || stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;