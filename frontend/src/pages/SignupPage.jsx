import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Lock, User, ArrowRight, Zap, Shield, Rocket, CheckCircle2, Terminal, Globe, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signup attempt with:', { name, email, password });
    };

    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-background overflow-hidden selection:bg-orange-500/30">
            {/* Left Side: Product Showcase (Brand Advertising) */}
            <div className="hidden lg:flex relative bg-zinc-950 flex-col justify-center p-24 overflow-hidden">
                {/* Visual Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />

                <div className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-500 to-red-600 flex items-center justify-center shadow-2xl mb-12 shadow-orange-500/20"
                    >
                        <Terminal className="w-7 h-7 text-white" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-6xl font-black text-white leading-[1.05] mb-8">
                            Start building your <span className="text-orange-500">Cloud Empire</span> today.
                        </h1>
                        <p className="text-xl text-zinc-400 mb-12 leading-relaxed max-w-lg">
                            Join over 5,000 SREs and DevOps enthusiasts using Shubh-OS to manage complex systems with ease.
                        </p>
                    </motion.div>

                    {/* Value Props Grid */}
                    <div className="grid grid-cols-2 gap-8 mb-16">
                        {[
                            { icon: <Globe className="w-5 h-5" />, title: "Edge Proxy", text: "Global delivery." },
                            { icon: <Cpu className="w-5 h-5" />, title: "Auto-Scale", text: "Elastics nodes." },
                            { icon: <Shield className="w-5 h-5" />, title: "IAM Roles", text: "Granular ACLs." },
                            { icon: <Zap className="w-5 h-5" />, title: "CI/CD Ops", text: "Zero-Downtime." }
                        ].map((prop, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + (i * 0.1) }}
                                className="space-y-2"
                            >
                                <div className="text-orange-500">{prop.icon}</div>
                                <h5 className="text-white font-black text-sm uppercase tracking-wider">{prop.title}</h5>
                                <p className="text-zinc-500 text-xs font-medium">{prop.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Testimonial Lite */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md max-w-md"
                    >
                        <div className="flex gap-1 text-orange-500 mb-4">
                            {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
                        </div>
                        <p className="text-white italic text-lg leading-snug mb-4">
                            "Shubh-OS changed how we handle incident management. The automation is unmatched."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center font-black text-orange-500 text-xs">JD</div>
                            <div>
                                <p className="text-white font-bold text-sm">Alex Rivera</p>
                                <p className="text-zinc-500 text-xs">Director of Engineering, TechFlow</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Right Side: Signup Form */}
            <div className="flex flex-col justify-center items-center p-8 lg:p-24 bg-background relative">
                {/* Floating Decoration for Mobile */}
                <div className="lg:hidden absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500" />

                <div className="w-full max-w-md space-y-10">
                    <div className="text-center lg:text-left">
                        <h2 className="text-4xl font-black tracking-tight mb-3">Create an Account</h2>
                        <p className="text-muted-foreground font-medium">Join the community of modern engineers.</p>
                    </div>

                    {/* Social Buttons */}
                    <div className="flex flex-col gap-3">
                        <button className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-muted/50 border border-border/50 hover:bg-muted transition-all font-black text-sm shadow-sm group">
                            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5 group-hover:scale-110 transition-transform" alt="Google" />
                            Sign up with Google
                        </button>
                        <button className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-muted/50 border border-border/50 hover:bg-muted transition-all font-black text-sm shadow-sm group">
                            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Sign up with GitHub
                        </button>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-border/50" />
                        </div>
                        <div className="relative flex justify-center text-[10px] uppercase font-black">
                            <span className="bg-background px-4 text-muted-foreground/60 tracking-widest">or use email</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 px-1">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter your name"
                                    className="w-full pl-12 pr-4 py-4 bg-muted/30 border border-border/50 rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none font-bold placeholder:font-medium transition-all"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 px-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <input
                                    type="email"
                                    required
                                    placeholder="name@company.com"
                                    className="w-full pl-12 pr-4 py-4 bg-muted/30 border border-border/50 rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none font-bold placeholder:font-medium transition-all"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 px-1 text-left block">Secure Password</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <input
                                    type="password"
                                    required
                                    placeholder="Create a password"
                                    className="w-full pl-12 pr-4 py-4 bg-muted/30 border border-border/50 rounded-2xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none font-bold placeholder:font-medium transition-all"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <p className="text-[10px] text-muted-foreground px-1 font-medium">Must be at least 8 characters with one special symbol.</p>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl shadow-xl shadow-orange-500/20 transition-all flex items-center justify-center gap-2 mt-4 group"
                        >
                            Create Free Account
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="text-center">
                        <p className="text-sm text-muted-foreground font-medium">
                            Already have an account?{' '}
                            <Link to="/login" className="text-orange-500 font-black hover:underline underline-offset-4">
                                Sign In
                            </Link>
                        </p>
                    </div>

                    <div className="text-[10px] text-muted-foreground/60 text-center leading-relaxed">
                        By signing up, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>. We'll send you occasional product updates.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
