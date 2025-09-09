import React from 'react';
import { Button } from './ui/button';
import { Download, Mail } from 'lucide-react';
import { portfolioData } from '../data/mockData';

const HeroSection = () => {
  const { hero } = portfolioData;

  const handleDownloadResume = () => {
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-violet-800 to-indigo-900 opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-12">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-white">{hero.name}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400 mt-2">
                  {hero.title}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-violet-200 font-light">
                {hero.subheading}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-4 text-lg border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleGetInTouch}
                className="border-2 border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white px-8 py-4 text-lg backdrop-blur-sm bg-white/10 transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Professional Headshot */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm">
                <img 
                  src={hero.headshot} 
                  alt="Shubh Pandey - Professional Headshot"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const placeholder = e.target.parentElement;
                    placeholder.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center"><span class="text-white text-6xl font-bold">SP</span></div>';
                  }}
                />
              </div>
              {/* Gradient ring effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;