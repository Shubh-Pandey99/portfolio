import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Minus, Square } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/mockData';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', content: 'Welcome to ShubhOS v2.1.0 (Proprietary DevOps Environment)' },
        { type: 'output', content: 'System: Initialized. Security Status: STRICT.' },
        { type: 'output', content: 'Type "help" to see available commands.' },
    ]);
    const terminalRef = useRef(null);
    const inputRef = useRef(null);

    const commands = {
        help: () => 'Available commands:\nwhoami      - Brief summary of professional profile\nls          - List available directories\nskills      - Display technical stack\nexperience  - Show professional journey\nprojects    - List strategic initiatives\nblogs       - Display published technical articles\ncontact     - Show contact information\nclear       - Clear the terminal screen\nhealth      - Show system vitals',
        whoami: () => portfolioData.about.summary,
        ls: () => 'about/  experience/  skills/  projects/  blogs/  certifications/',
        skills: () => {
            try {
                const categories = Object.keys(portfolioData.skills);
                return categories.map(cat => {
                    const skillList = portfolioData.skills[cat].map(s => typeof s === 'string' ? s : s.name).join(', ');
                    return `${cat}:\n  ${skillList}`;
                }).join('\n\n');
            } catch (e) {
                return 'Error parsing skills database. Use contact command for resume.';
            }
        },
        experience: () => {
            return portfolioData.experience.map(exp =>
                `[${exp.period}] ${exp.title} @ ${exp.company}\n- ${exp.responsibilities[0]}`
            ).join('\n\n');
        },
        projects: () => {
            return portfolioData.projects.map(p => `- ${p.title}: ${p.description}`).join('\n');
        },
        blogs: () => {
            return portfolioData.blogs.map(b => `- ${b.title} (${b.readTime})`).join('\n');
        },
        contact: () => `Email: ${portfolioData.contact.email}\nPhone: ${portfolioData.contact.phone}\nLinkedIn: ${portfolioData.contact.linkedin}`,
        health: () => 'System Status: OPTIMAL\nUptime: 99.99%\nLatency: 4ms\nPlatform: AWS EKS (prod-us-east-1)',
        clear: () => {
            setHistory([]);
            return null;
        }
    };

    const executeCommand = (cmdText) => {
        const cmd = cmdText.trim().toLowerCase();
        // Add user input to history
        setHistory(prev => [...prev, { type: 'input', content: cmdText }]);

        // Small delay to simulate system processing
        setTimeout(() => {
            let output = null;
            if (commands[cmd]) {
                output = commands[cmd]();
            } else if (cmd !== '') {
                output = `sh: command not found: ${cmd}. Type "help" for a list of commands.`;
            }

            if (output !== null) {
                setHistory(prev => [...prev, { type: 'output', content: output }]);
            }
        }, 50);

        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            executeCommand(input);
        }
    };

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl mx-auto mt-12 px-4 group"
        >
            <div className="bg-[#0c0c0d] rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/5 relative">
                {/* Terminal Header */}
                <div className="bg-[#1a1a1b] px-5 py-3 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center space-x-3">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.3)]"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.3)]"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.3)]"></div>
                        </div>
                        <span className="text-[10px] text-gray-400 font-mono tracking-widest uppercase ml-4 hidden sm:inline">shubh@devos-$ bash 5.1</span>
                    </div>
                </div>

                {/* Terminal Body */}
                <div
                    ref={terminalRef}
                    className="p-6 h-72 md:h-[450px] overflow-y-auto overflow-x-hidden font-mono text-[11px] md:text-sm space-y-4 text-orange-500/90 bg-[#0c0c0d] scrollbar-thin scrollbar-thumb-white/10"
                    onClick={() => inputRef.current?.focus()}
                >
                    {history.map((item, i) => (
                        <div key={i} className="animate-in fade-in slide-in-from-left-2 duration-300">
                            {item.type === 'input' ? (
                                <div className="flex items-start">
                                    <span className="text-blue-400 mr-2 font-black">➜</span>
                                    <span className="text-purple-400 mr-2 font-black">~</span>
                                    <span className="text-white font-bold">{item.content}</span>
                                </div>
                            ) : (
                                <div className="text-gray-400 leading-relaxed whitespace-pre-wrap pl-6 border-l border-white/5 ml-1 opacity-90">
                                    {item.content}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="flex items-center">
                        <span className="text-blue-400 mr-2 font-black">➜</span>
                        <span className="text-purple-400 mr-2 font-black">~</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="bg-transparent border-none outline-none flex-1 text-white font-bold caret-orange-500 w-full"
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                        />
                    </div>
                </div>
            </div>

            {/* Clickable Hints */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 md:gap-3">
                {['help', 'whoami', 'skills', 'experience', 'projects', 'blogs', 'contact'].map((cmd) => (
                    <button
                        key={cmd}
                        onClick={() => executeCommand(cmd)}
                        className="px-3 md:px-5 py-2 md:py-2.5 bg-background/40 backdrop-blur-md rounded-xl border border-white/5 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all shadow-sm active:scale-95"
                    >
                        {cmd}
                    </button>
                ))}
            </div>
        </motion.div>
    );
};

export default Terminal;
