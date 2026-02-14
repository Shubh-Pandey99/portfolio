import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Award, ExternalLink, Calendar, Shield } from 'lucide-react';
import { portfolioData } from '../data/mockData';

const CertificationsSection = () => {
  const { certifications } = portfolioData;

  const handleVerifyCertificate = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 mb-4">
              <Award className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Certifications & Achievements</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Industry-recognized certifications validating expertise in cloud technologies
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-card/80 backdrop-blur-sm border border-border hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group overflow-hidden shadow-md"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-28 h-28 rounded-lg bg-white p-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-orange-200/30 flex items-center justify-center">
                    <img
                      src={cert.badge}
                      alt={`${cert.name} official badge`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const placeholder = e.target.parentElement;
                        placeholder.innerHTML = '<div class="w-full h-full bg-gradient-to-r from-orange-100 to-red-100 rounded-lg flex items-center justify-center"><span class="text-orange-600 text-xs font-bold">CERT</span></div>';
                      }}
                    />
                  </div>
                  <CardTitle className="text-lg font-bold text-orange-500 leading-tight line-clamp-2">
                    {cert.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div>
                    <p className="font-semibold text-foreground/90">{cert.issuer}</p>
                    <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mt-2">
                      <Calendar className="w-4 h-4" />
                      {cert.validity}
                    </div>
                  </div>

                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium border border-orange-300 dark:border-orange-700 rounded-md text-orange-600 dark:text-orange-400 hover:bg-orange-500 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Verify Certificate
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certification Summary */}
          <div className="mt-12 text-center">
            <Card className="bg-orange-50/50 dark:bg-orange-950/20 border-orange-200/50 dark:border-orange-800/50 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Shield className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-semibold text-orange-500">
                    Certification Journey
                  </h3>
                </div>
                <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
                  Continuously advancing skills through industry-leading certification programs
                  from AWS, Google Cloud, and Microsoft Azure. These certifications validate
                  hands-on experience in cloud architecture, DevOps practices, and system reliability.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200/50 dark:border-orange-800/50">
                    AWS Expert
                  </Badge>
                  <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200/50 dark:border-orange-800/50">
                    Multi-Cloud Certified
                  </Badge>
                  <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-200/50 dark:border-orange-800/50">
                    DevOps Specialist
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;