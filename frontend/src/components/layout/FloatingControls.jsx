import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const FloatingControls = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Show/hide scroll top button
            setShowScrollTop(window.scrollY > 400);

            // Calculate scroll progress
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {/* Scroll Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-transparent">
                <div
                    className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-150"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* Floating Back to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 z-[60] p-3 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 transform ${showScrollTop ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10'
                    }`}
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-6 h-6" />
            </button>
        </>
    );
};

export default FloatingControls;
