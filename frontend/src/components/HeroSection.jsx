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
      {/* Dark Background with Orange Accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>

      {/* Orange geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-orange-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-red-500/20 rounded-full blur-lg"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-12 lg:gap-16">

          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="text-lg text-orange-500 font-medium">Hello,</div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-white">I'm {hero.name.split(' ')[1]}</span>
                <div className="w-16 h-1 bg-orange-500 mt-4 mb-6"></div>
                <span className="block text-white text-4xl md:text-5xl lg:text-6xl mt-2">
                  {hero.title}
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 font-light max-w-lg">
                {hero.subheading}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={hero.resumeUrl}
                download="Shubh_Resume.pdf"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                My resume
              </a>

              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg backdrop-blur-sm bg-transparent transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Got a project?
              </Button>
            </div>
          </div>

          {/* Professional Headshot with Orange Circle */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Orange circular background */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-orange-500 to-red-500 p-2">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                  <img
                    src={hero.headshot}
                    alt="Shubh Pandey - Professional Headshot"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const placeholder = e.target.parentElement;
                      placeholder.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center"><span class="text-white text-6xl font-bold">SP</span></div>';
                    }}
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-orange-500 rotate-45"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-orange-500 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;