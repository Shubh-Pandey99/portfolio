import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>© 2024 Shubh Pandey. Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using React & Tailwind CSS.</span>
          </div>
          <div className="mt-2 text-sm text-muted-foreground">
            DevOps & Site Reliability Engineer
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;