import React, { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import { Search, Home, User, Code, Briefcase, Rocket, Book, Mail, Github, Linkedin, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CommandMenu = () => {
    const [open, setOpen] = useState(false);

    // Toggle the menu when ⌘K is pressed
    useEffect(() => {
        const down = (e) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setOpen(false);
    };

    return (
        <>
            {/* Keyboard Shortcut Indicator in Footer or Floating */}
            <div className="fixed bottom-8 left-8 z-[60] hidden md:block">
                <button
                    onClick={() => setOpen(true)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/80 backdrop-blur-md border border-border/50 text-[10px] font-bold text-muted-foreground hover:text-orange-500 hover:border-orange-500/30 transition-all shadow-sm group"
                >
                    <Terminal className="w-3 h-3 group-hover:rotate-12 transition-transform" />
                    <span>Press</span>
                    <kbd className="px-1.5 py-0.5 rounded bg-background border border-border font-mono">⌘K</kbd>
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="w-full max-w-xl bg-card rounded-2xl border border-border shadow-2xl overflow-hidden pointer-events-auto"
                        >
                            <Command className="w-full">
                                <div className="flex items-center border-b border-border px-4 py-3 gap-3">
                                    <Search className="w-5 h-5 text-muted-foreground" />
                                    <Command.Input
                                        placeholder="Search sections or commands..."
                                        className="w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-sm py-1"
                                    />
                                    <div className="text-[10px] font-bold text-muted-foreground/50 border border-border/50 px-1.5 py-0.5 rounded">ESC</div>
                                </div>

                                <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-orange-500/20">
                                    <Command.Empty className="py-6 text-center text-sm text-muted-foreground">No results found.</Command.Empty>

                                    <Command.Group heading={<span className="px-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mb-2 block">Navigation</span>}>
                                        <CommandItem onSelect={() => scrollToSection('home')} icon={<Home className="w-4 h-4" />} label="Home" />
                                        <CommandItem onSelect={() => scrollToSection('about')} icon={<User className="w-4 h-4" />} label="About Me" />
                                        <CommandItem onSelect={() => scrollToSection('skills')} icon={<Code className="w-4 h-4" />} label="Technical Skills" />
                                        <CommandItem onSelect={() => scrollToSection('experience')} icon={<Briefcase className="w-4 h-4" />} label="Experience Timeline" />
                                        <CommandItem onSelect={() => scrollToSection('projects')} icon={<Rocket className="w-4 h-4" />} label="Featured Projects" />
                                        <CommandItem onSelect={() => scrollToSection('blogs')} icon={<Book className="w-4 h-4" />} label="Medium Blogs" />
                                        <CommandItem onSelect={() => scrollToSection('contact')} icon={<Mail className="w-4 h-4" />} label="Get In Touch" />
                                    </Command.Group>

                                    <Command.Separator className="h-px bg-border my-2 mx-2" />

                                    <Command.Group heading={<span className="px-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mb-2 block">Connect</span>}>
                                        <CommandItem onSelect={() => window.open('https://github.com/Shubh-Pandey99', '_blank')} icon={<Github className="w-4 h-4" />} label="View GitHub Profile" shorthand="G H" />
                                        <CommandItem onSelect={() => window.open('https://linkedin.com/in/shubhpandey9', '_blank')} icon={<Linkedin className="w-4 h-4" />} label="View LinkedIn Profile" shorthand="L I" />
                                    </Command.Group>
                                </Command.List>

                                <div className="flex items-center justify-between px-4 py-3 bg-muted/30 border-t border-border mt-1">
                                    <div className="flex items-center gap-4 text-[10px] text-muted-foreground font-medium">
                                        <div className="flex items-center gap-1.5"><kbd className="px-1 py-0.5 rounded border border-border bg-background">↑↓</kbd> <span>Navigate</span></div>
                                        <div className="flex items-center gap-1.5"><kbd className="px-1 py-0.5 rounded border border-border bg-background">↵</kbd> <span>Select</span></div>
                                    </div>
                                    <div className="text-[10px] font-mono font-bold text-orange-500/80">SHUBH-OS v2.0</div>
                                </div>
                            </Command>
                        </motion.div>
                        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm -z-10 pointer-events-auto" onClick={() => setOpen(false)} />
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

const CommandItem = ({ icon, label, onSelect, shorthand }) => (
    <Command.Item
        onSelect={onSelect}
        className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl cursor-pointer aria-selected:bg-orange-500/10 aria-selected:text-orange-500 hover:bg-orange-500/5 transition-all text-sm group"
    >
        <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-muted text-muted-foreground group-aria-selected:bg-orange-500 group-aria-selected:text-white transition-all">
                {icon}
            </div>
            <span className="font-bold">{label}</span>
        </div>
        {shorthand && <span className="text-[9px] font-mono bg-muted px-1.5 py-0.5 rounded text-muted-foreground group-aria-selected:hidden">{shorthand}</span>}
    </Command.Item>
);

export default CommandMenu;
