import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Lock, User, ArrowRight, Zap, Shield, Rocket, CheckCircle2, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt with:', { email, password });
    };

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-background overflow-hidden">
            {/* Left Side: Product Showcase & Brand (Hidden on Mobile) */}
            <div className="hidden lg:flex relative bg-black flex-col justify-center p-20 overflow-hidden">
                {/* Background Decorations */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-10 max-w-xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-12"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500 to-red-600 flex items-center justify-center shadow-lg">
                            <Terminal className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-white">SHUBH-OS</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-6xl font-black text-white leading-[1.1] mb-8"
                    >
                        The Future of <span className="text-orange-500 italic">Cloud Reliability</span> is here.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-zinc-400 mb-12 leading-relaxed"
                    >
                        Automate your repetitive tasks, monitor your infrastructure in real-time, and scale with confidence using our suite of SRE tools.
                    </motion.p>

                    {/* Feature Highlight Cards */}
                    <div className="grid grid-cols-1 gap-6">
                        {[
                            { icon: <Zap className="w-5 h-5" />, title: "Hyper-Automation", desc: "Reduce toil by 40% with smart workflows." },
                            { icon: <Shield className="w-5 h-5" />, title: "Bank-Grade Security", desc: "E2E encryption and SOC2 compliance." },
                            { icon: <Rocket className="w-5 h-5" />, title: "Instant Deployment", desc: "Ship to production in milliseconds." }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 + (i * 0.1) }}
                                className="flex gap-4 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{feature.title}</h4>
                                    <p className="text-zinc-500 text-sm">{feature.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="absolute bottom-12 left-20 right-20 flex justify-between border-t border-white/10 pt-8 mt-auto">
                    <div>
                        <p className="text-2xl font-black text-white">99.9%</p>
                        <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Uptime</p>
                    </div>
                    <div>
                        <p className="text-2xl font-black text-white">100k+</p>
                        <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Requests/sec</p>
                    </div>
                    <div>
                        <p className="text-2xl font-black text-white">2k+</p>
                        <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Global Clusters</p>
                    </div>
                </div>
            </div>

            {/* Right Side: Authentication Form */}
            <div className="flex flex-col justify-center items-center p-8 lg:p-20 bg-background relative">
                {/* Mobile Header */}
                <div className="lg:hidden absolute top-8 left-8 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                        <Terminal className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-black text-lg">SHUBH-OS</span>
                </div>

                <div className="w-full max-w-md space-y-10">
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl font-black tracking-tight mb-3">Welcome Back</h2>
                        <p className="text-muted-foreground font-medium">Please enter your details to sign in.</p>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-muted/50 border border-border/50 hover:bg-muted transition-all font-bold text-sm">
                            <Github className="w-5 h-5" />
                            GitHub
                        </button>
                        <button className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-muted/50 border border-border/50 hover:bg-muted transition-all font-bold text-sm">
                            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
                            Google
                        </button>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-border/50" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-4 text-muted-foreground font-bold tracking-widest">or continue with email</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-muted-foreground px-1" htmlFor="email">
                                Email Address
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-orange-500 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    className="w-full pl-12 pr-4 py-4 bg-muted/30 border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium placeholder:text-muted-foreground/40"
                                    placeholder="hello@shubh.os"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between px-1">
                                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground" htmlFor="password">
                                    Password
                                </label>
                                <a href="#" className="text-[10px] font-black uppercase tracking-widest text-orange-500 hover:text-orange-600 transition-colors">
                                    Forgot Password?
                                </a>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-orange-500 transition-colors">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    required
                                    className="w-full pl-12 pr-4 py-4 bg-muted/30 border border-border/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium placeholder:text-muted-foreground/40"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 px-1">
                            <input
                                type="checkbox"
                                id="remember"
                                className="w-4 h-4 rounded border-border text-orange-500 focus:ring-orange-500/20"
                            />
                            <label htmlFor="remember" className="text-sm font-medium text-muted-foreground">
                                Remember me for 30 days
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl shadow-lg shadow-orange-500/20 transition-all flex items-center justify-center gap-2 group"
                        >
                            Log In to Command Center
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="text-center pt-4">
                        <p className="text-sm text-muted-foreground font-medium">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-orange-500 font-black hover:text-orange-600 transition-colors">
                                Create an account
                            </Link>
                        </p>
                    </div>

                    {/* Simple Bottom Links */}
                    <div className="flex justify-center gap-6 text-[10px] uppercase font-black tracking-widest text-muted-foreground/40 pt-10">
                        <a href="#" className="hover:text-foreground">Privacy</a>
                        <a href="#" className="hover:text-foreground">Terms</a>
                        <a href="#" className="hover:text-foreground">Help</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
