import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Minus, Square } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/mockData';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', content: 'Welcome to ShubhOS v1.2.0 (Testing Everything)' },
        { type: 'output', content: 'Type "help" to see available commands.' },
    ]);
    const terminalRef = useRef(null);
    const inputRef = useRef(null);

    const commands = {
        help: () => 'Available commands: whoami, ls, skills, clear, help, health, terraform-apply',
        whoami: () => portfolioData.about.summary,
        ls: () => 'about  experience  skills  projects  blogs  certifications',
        skills: () => 'Cloud: ' + portfolioData.skills['Cloud Platforms'].join(', ') + '\nInfra: ' + portfolioData.skills['Infrastructure & Automation'].join(', '),
        health: () => 'System Status: OPTIMAL\nUptime: 100%\nLatency: 8ms\nLoad Average: 0.12, 0.08, 0.05',
        'terraform-apply': () => 'Terraform v1.5.0\nInitializing provider plugins...\nPlan: 1 to add, 0 to change, 0 to destroy.\nApply complete! Resources: 1 added, 0 changed, 0 destroyed.\nResult: Career growth initiated.',
        clear: () => {
            setHistory([]);
            return null;
        }
    };

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            const newHistory = [...history, { type: 'input', content: input }];

            if (commands[cmd]) {
                const result = commands[cmd]();
                if (result) {
                    newHistory.push({ type: 'output', content: result });
                }
            } else if (cmd !== '') {
                newHistory.push({ type: 'output', content: `Command not found: ${cmd}. Type "help" for a list of commands.` });
            }

            setHistory(newHistory);
            setInput('');
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
            className="w-full max-w-4xl mx-auto mt-12 px-4"
        >
            <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-2xl border border-white/10 relative">
                {/* Terminal Header */}
                <div className="bg-[#323233] px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <TerminalIcon className="w-4 h-4 text-gray-400" />
                        <span className="text-xs text-gray-300 font-mono">shubh -- bash -- 82x24</span>
                    </div>
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 flex items-center justify-center">
                            <Minus className="w-2 h-2 text-yellow-500" />
                        </div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20 flex items-center justify-center">
                            <Square className="w-1.5 h-1.5 text-green-500" />
                        </div>
                        <div className="w-3 h-3 rounded-full bg-red-500/20 flex items-center justify-center">
                            <X className="w-2 h-2 text-red-500" />
                        </div>
                    </div>
                </div>

                {/* Terminal Body */}
                <div
                    ref={terminalRef}
                    className="p-4 h-64 md:h-80 overflow-y-auto overflow-x-hidden font-mono text-xs sm:text-sm space-y-2 text-green-400 bg-black/90 selection:bg-green-500/30"
                    onClick={() => inputRef.current?.focus()}
                >
                    {history.map((item, i) => (
                        <div key={i} className="whitespace-pre-wrap">
                            {item.type === 'input' ? (
                                <div className="flex">
                                    <span className="text-blue-400 mr-2">➜</span>
                                    <span className="text-purple-400 mr-2">~</span>
                                    <span>{item.content}</span>
                                </div>
                            ) : (
                                <div className="text-gray-300">{item.content}</div>
                            )}
                        </div>
                    ))}
                    <div className="flex items-center">
                        <span className="text-blue-400 mr-2">➜</span>
                        <span className="text-purple-400 mr-2">~</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleCommand}
                            className="bg-transparent border-none outline-none flex-1 text-green-400 caret-white"
                            autoFocus
                        />
                    </div>
                </div>
            </div>
            
            {/* Command Hints */}
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs md:text-sm text-muted-foreground font-mono">
                <span>Try running:</span>
                {['help', 'whoami', 'skills', 'experience', 'contact'].map((cmd) => (
                    <button 
                        key={cmd}
                        onClick={() => {
                            setInput(cmd);
                            inputRef.current?.focus();
                        }}
                        className="px-2 py-1 bg-muted/50 rounded border border-border/50 hover:bg-orange-500/10 hover:text-orange-500 hover:border-orange-500/50 transition-colors"
                    >
                        {cmd}
                    </button>
                ))}
            </div>
        </motion.div>
    );
};

export default Terminal;
