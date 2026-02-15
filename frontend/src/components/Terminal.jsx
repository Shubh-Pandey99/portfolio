import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Minus, Square } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/mockData';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', content: 'Welcome to ShubhOS v2.2.0 (Direct SRE Console)' },
        { type: 'output', content: 'Root access verified. System: STABLE.' },
        { type: 'output', content: 'Type "help" to view master command list.' },
    ]);
    const terminalRef = useRef(null);
    const inputRef = useRef(null);

    const commands = {
        help: () => 'System Commands:\nwhoami      - Identity profile\nls          - List filesystem\nskills      - Tech stack matrix\nexperience  - Professional log\nprojects    - Strategic initiatives\nssh [id]    - Secure entry to project infra\nblogs       - Technical writing\nmetrics     - Operational ROI\nclear       - Flush buffer\nhealth      - Cluster vitals',
        whoami: () => portfolioData.about.summary,
        ls: () => 'drwxr-xr-x  about/\ndrwxr-xr-x  experience/\ndrwxr-xr-x  skills/\ndrwxr-xr-x  projects/\ndrwxr-xr-x  blogs/\ndrwxr-xr-x  certifications/',
        skills: () => {
            try {
                const categories = Object.keys(portfolioData.skills);
                return categories.map(cat => {
                    const skillDetails = portfolioData.skills[cat].map(s =>
                        `${s.name.padEnd(15)} | ${s.proficiency.padEnd(10)} | [${s.tags.join(', ')}]`
                    ).join('\n  ');
                    return `${cat.toUpperCase()}:\n  ${skillDetails}`;
                }).join('\n\n');
            } catch (e) {
                return 'Error: Database read failure.';
            }
        },
        experience: () => {
            return portfolioData.experience.map(exp =>
                `>>> ${exp.period}\n    ROLE: ${exp.title}\n    ORG : ${exp.company}\n    CORE: ${exp.responsibilities[0]}`
            ).join('\n\n');
        },
        projects: () => {
            return portfolioData.projects.map(p =>
                `[INITIATIVE] ${p.title}\n IMPACT: ${p.impact}\n DESC  : ${p.description.slice(0, 80)}...`
            ).join('\n\n');
        },
        ssh: (pName) => {
            if (!pName) return 'Usage: ssh [project_name_fragment]\nTry: ssh teacher, ssh email, ssh mission';
            const project = portfolioData.projects.find(p => p.title.toLowerCase().includes(pName.toLowerCase()));
            if (!project) return `ssh: Could not resolve hostname '${pName}'`;

            return `Connecting to ${project.title} environment...\n[SUCCESS] Auth token accepted.\n\nINFRASTRUCTURE STACK:\n${project.architecture.map(a => ` - ${a}`).join('\n')}\n\nCURRENT METRICS:\n${Object.entries(project.metrics).map(([k, v]) => ` ${k.toUpperCase()}: ${v}`).join('\n')}`;
        },
        metrics: () => {
            return 'FLEET-WIDE IMPACT ANALYSIS:\n---------------------------\nAverage MTTR Reduction   : 85%\nManual Toil Eliminated   : ~750 hrs/year\nCloud Cost Optimization  : 20%\nInfrastructure Coverage  : 100% (IaC Verified)';
        },
        blogs: () => {
            return portfolioData.blogs.map(b => `- ${b.title}\n  Published: ${b.year} | ${b.readTime}`).join('\n\n');
        },
        contact: () => `STRICTLY SECURE CHANNEL\nEmail: ${portfolioData.contact.email}\nLinkedIn: ${portfolioData.contact.linkedin}`,
        health: () => 'CLUSTER STATUS: OPTIMAL\nNODES  : 12 (m5.xlarge)\nREGION : us-east-1\nUPTIME : 243 days\nLATENCY: 1.2ms (Global Edge)\nTHREATS: 0 detected',
        clear: () => {
            setHistory([]);
            return null;
        }
    };

    const executeCommand = (cmdText) => {
        const parts = cmdText.trim().split(' ');
        const cmd = parts[0].toLowerCase();
        const arg = parts.slice(1).join(' ');

        setHistory(prev => [...prev, { type: 'input', content: cmdText }]);

        setTimeout(() => {
            let output = null;
            if (commands[cmd]) {
                output = commands[cmd](arg);
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
