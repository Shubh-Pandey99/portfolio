import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, Linkedin, Send, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/mockData';

const ContactSection = () => {
  const { contact } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleEmailMe = () => {
    window.location.href = `mailto:${contact.email}`;
  };

  const handleConnectLinkedIn = () => {
    window.open(contact.linkedin, '_blank');
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0070C0]/10 mb-4">
              <MessageCircle className="w-8 h-8 text-[#0070C0]" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-[#0070C0] mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Let's discuss how we can work together to build reliable, scalable systems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#0070C0]">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in discussing new opportunities, 
                  challenging projects, and innovative solutions in DevOps and cloud infrastructure. 
                  Feel free to reach out!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="bg-card/50 border-border hover:border-[#0070C0]/50 transition-colors duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#0070C0]/10 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-[#0070C0]" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground">{contact.email}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border hover:border-[#0070C0]/50 transition-colors duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#0070C0]/10 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-[#0070C0]" />
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-muted-foreground">{contact.phone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-border hover:border-[#0070C0]/50 transition-colors duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#0070C0]/10 flex items-center justify-center">
                        <Linkedin className="w-6 h-6 text-[#0070C0]" />
                      </div>
                      <div>
                        <p className="font-semibold">LinkedIn</p>
                        <p className="text-muted-foreground">Connect with me</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={handleEmailMe}
                  className="bg-[#0070C0] hover:bg-[#005799] text-white px-6 py-3"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </Button>
                <Button
                  variant="outline"
                  onClick={handleConnectLinkedIn}
                  className="border-[#0070C0] text-[#0070C0] hover:bg-[#0070C0] hover:text-white px-6 py-3"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-card/80 backdrop-blur-sm border border-border">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-[#0070C0]">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-border focus:border-[#0070C0] focus:ring-[#0070C0]"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-border focus:border-[#0070C0] focus:ring-[#0070C0]"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="border-border focus:border-[#0070C0] focus:ring-[#0070C0] resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#0070C0] hover:bg-[#005799] text-white py-3"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;