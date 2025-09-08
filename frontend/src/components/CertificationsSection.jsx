import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Award, ExternalLink, Calendar } from 'lucide-react';
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0070C0]/10 mb-4">
              <Award className="w-8 h-8 text-[#0070C0]" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-[#0070C0] mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Industry-recognized certifications validating expertise in cloud technologies
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="bg-card/80 backdrop-blur-sm border border-border hover:border-[#0070C0]/50 transition-all duration-300 hover:shadow-lg group overflow-hidden"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-24 h-24 rounded-full bg-white p-2 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    <img 
                      src={cert.badge} 
                      alt={`${cert.name} badge`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const placeholder = e.target.parentElement;
                        placeholder.innerHTML = '<div class="w-full h-full bg-[#0070C0]/10 rounded-full flex items-center justify-center"><span class="text-[#0070C0] text-xs font-bold">CERT</span></div>';
                      }}
                    />
                  </div>
                  <CardTitle className="text-lg font-bold text-[#0070C0] leading-tight">
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
                  
                  {cert.verifyUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleVerifyCertificate(cert.verifyUrl)}
                      className="w-full border-[#0070C0] text-[#0070C0] hover:bg-[#0070C0] hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Verify Certificate
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certification Summary */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-[#0070C0]/5 to-[#0070C0]/10 border-[#0070C0]/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-[#0070C0]">
                  Certification Journey
                </h3>
                <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
                  Continuously advancing skills through industry-leading certification programs 
                  from AWS, Google Cloud, and Microsoft Azure. These certifications validate 
                  hands-on experience in cloud architecture, DevOps practices, and system reliability.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary" className="bg-[#0070C0]/10 text-[#0070C0]">
                    AWS Expert
                  </Badge>
                  <Badge variant="secondary" className="bg-[#0070C0]/10 text-[#0070C0]">
                    Multi-Cloud Certified
                  </Badge>
                  <Badge variant="secondary" className="bg-[#0070C0]/10 text-[#0070C0]">
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