import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, HeartPulse } from 'lucide-react';

const SystemStatus = ({ className = "" }) => {
    const [status, setStatus] = useState('OPTIMAL');
    const [uptime, setUptime] = useState('99.9%');
    const [ping, setPing] = useState(8);

    useEffect(() => {
        const interval = setInterval(() => {
            setPing(Math.floor(Math.random() * (12 - 5) + 5));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`flex items-center space-x-4 md:space-x-6 px-4 py-1.5 rounded-full bg-muted/50 border border-border/50 text-[10px] font-mono whitespace-nowrap ${className}`}>
            <div className="flex items-center space-x-2">
                <div className="relative">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-500 animate-ping opacity-75"></div>
                </div>
                <span className="text-muted-foreground uppercase tracking-widest hidden sm:inline">Status:</span>
                <span className="text-green-500 font-bold">{status}</span>
            </div>

            <div className="flex items-center space-x-2 border-l border-border pl-4">
                <HeartPulse className="w-3 h-3 text-red-500" />
                <span className="text-muted-foreground uppercase tracking-widest hidden sm:inline">Uptime:</span>
                <span className="text-foreground">{uptime}</span>
            </div>

            <div className="hidden md:flex items-center space-x-2 border-l border-border pl-4">
                <Activity className="w-3 h-3 text-blue-500" />
                <span className="text-muted-foreground uppercase tracking-widest">Latency:</span>
                <span className="text-foreground">{ping}ms</span>
            </div>

            <div className="hidden lg:flex items-center space-x-2 border-l border-border pl-4">
                <ShieldCheck className="w-3 h-3 text-orange-500" />
                <span className="text-muted-foreground uppercase tracking-widest">Sec:</span>
                <span className="text-foreground">STRICT</span>
            </div>
        </div>
    );
};

export default SystemStatus;
