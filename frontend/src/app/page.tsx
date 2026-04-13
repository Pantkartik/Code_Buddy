'use client';

import Link from 'next/link';
import { ArrowRight, Terminal, Github, GitPullRequest, Combine, Zap, Shield, Cpu, Activity, MoveRight, Plus, Quote, Layers, Code, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    { text: "CodeBuddy cut my PR review time by 40%. The matching logic is scary accurate.", author: "Sarah L.", role: "Senior Engineer @ Vercel" },
    { text: "Finding a Go partner used to take weeks. Now it's instantaneous.", author: "Marcus K.", role: "Fullstack Dev" },
    { text: "The brutalist design speaks to my soul. No fluff, just pure performance.", author: "Alex D.", role: "CTO @ Linear" },
    { text: "Finally an open-source alternative to proprietary pairing tools.", author: "Elena R.", role: "OSS Contributor" },
  ];

  const techStack = ["TypeScript", "Next.js", "Node.js", "Go", "Rust", "Python", "Kubernetes", "WebRTC", "PostgreSQL", "Redis"];

  return (
    <div className="min-h-screen bg-[#000000] text-zinc-300 font-sans selection:bg-zinc-800 overflow-x-hidden">
      
      {/* Structural Minimal Stitched Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Crisp Linear-Style Navigation */}
        <header className="w-full max-w-7xl mx-auto p-6 flex flex-col md:flex-row justify-between items-center z-50 border-b border-dashed border-zinc-800">
          <div className="flex items-center gap-3 font-semibold text-white tracking-tight mb-4 md:mb-0 relative">
            <Plus className="w-3 h-3 text-zinc-600 absolute -left-4 top-1/2 -translate-y-1/2 hidden md:block" />
            <div className="bg-white text-black p-1 rounded-sm">
              <Terminal className="w-4 h-4" strokeWidth={3} />
            </div>
            CodeBuddy
          </div>
          
          <nav className="flex items-center gap-8 mb-4 md:mb-0 md:bg-zinc-900/50 md:backdrop-blur-md px-6 py-2 rounded-full border border-zinc-800">
            <Link href="/about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200">
              Platform
            </Link>
            <Link href="/premium" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200">
              Pricing
            </Link>
            <a href="https://github.com/Pantkartik/Code_Buddy" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200">
              GitHub
            </a>
          </nav>

          <div className="flex items-center gap-5 relative">
            <Link href="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200">
              Log in
            </Link>
            <Link href="/register" className="text-sm font-semibold bg-white text-black px-4 py-2 hover:bg-zinc-200 transition-colors duration-200 border border-white">
              Start Building
            </Link>
            <Plus className="w-3 h-3 text-zinc-600 absolute -right-6 top-1/2 -translate-y-1/2 hidden md:block" />
          </div>
        </header>

        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col pt-20 pb-32 border-x border-dashed border-zinc-800 relative">
          
          <Plus className="w-4 h-4 text-zinc-600 absolute -left-2 top-0" />
          <Plus className="w-4 h-4 text-zinc-600 absolute -right-2 top-0" />

          {/* Hero Section */}
          <div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} flex flex-col items-center text-center`}>
            <a href="#" className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-dashed border-zinc-700 bg-[#0A0A0A] text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 hover:border-zinc-500 hover:text-white transition-all mb-10">
              <span>System Update 2.4.0 — Now Online</span>
              <MoveRight className="w-3 h-3" />
            </a>

            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter text-white mb-6 max-w-5xl leading-[0.9] text-shadow-sm italic">
              SHIP <span className="text-zinc-600 not-italic">CODE</span> <br />
              FASTER <span className="text-zinc-500">TOGETHER.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed font-normal p-4 border-l-2 border-dashed border-zinc-800 relative">
              The high-performance matching engine for software engineers. No fluff, no social networking, just pure collaborative execution.
              <Plus className="w-3 h-3 text-zinc-800 absolute -top-1.5 -left-1.5" />
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <Link href="/register" className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:bg-zinc-200 border border-white">
                Initialize <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="flex items-center justify-center gap-2 bg-[#0A0A0A] border border-dashed border-zinc-700 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all hover:bg-zinc-900">
                Documentation
              </button>
            </div>
          </div>

          {/* IDE Hero Visual */}
          <div className={`mt-32 w-full max-w-5xl mx-auto relative transition-all duration-1000 delay-200 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="border border-zinc-800 bg-[#060606] relative shadow-[0_0_100px_rgba(255,255,255,0.02)]">
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-zinc-500" />
              <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-zinc-500" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-zinc-500" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-zinc-500" />

              <div className="h-12 border-b border-dashed border-zinc-800 flex items-center px-6 bg-[#0A0A0A] justify-between">
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 border border-zinc-700" />
                  <div className="w-1.5 h-1.5 border border-zinc-700" />
                  <div className="w-1.5 h-1.5 border border-zinc-700" />
                </div>
                <div className="text-zinc-600 text-[10px] font-mono tracking-widest uppercase">system_kernel / match_worker.rs</div>
                <div className="px-2 py-0.5 border border-zinc-800 text-[9px] font-mono text-zinc-500 uppercase">Live</div>
              </div>
              
              <div className="p-8 md:p-12 overflow-x-auto text-left whitespace-pre font-mono text-sm leading-relaxed scrollbar-hide">
                <div className="flex items-center gap-2 text-zinc-500 mb-6 border-b border-zinc-900 pb-2">
                  <Code className="w-3 h-3" /> <span>Matching Core v4.1 initialized...</span>
                </div>
                
                <div className="space-y-1">
                  <div><span className="text-zinc-600">01</span> <span className="text-zinc-400">fn</span> <span className="text-zinc-100">calculate_latency</span>(origin: <span className="text-zinc-400">&str</span>) {'->'} <span className="text-zinc-400">u64</span> {'{'}</div>
                  <div><span className="text-zinc-600">02</span>   <span className="text-zinc-400">let</span> <span className="text-zinc-100">node_pool</span> = <span className="text-zinc-100">Global::get_nearest</span>(origin);</div>
                  <div><span className="text-zinc-600">03</span>   <span className="text-zinc-100">node_pool</span>.iter().filter(|n| n.load {'<'} <span className="text-zinc-100">0.8</span>).min_by_key(|n| n.ping).unwrap()</div>
                  <div><span className="text-zinc-600">04</span> {'}'}</div>
                </div>

                <div className="mt-8 border-t border-dashed border-zinc-900 pt-8">
                  <div className="flex items-center text-zinc-400">
                    <span className="text-zinc-100 mr-2 opacity-50 tracking-tighter">❯❯❯</span> 
                    <span className="text-white">Scanning global skill shards...</span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="border border-zinc-800 p-3 bg-zinc-900/30 flex items-center justify-between group cursor-crosshair">
                        <div className="w-1.5 h-1.5 bg-zinc-600 group-hover:bg-zinc-100 transition-colors" />
                        <span className="text-[10px] uppercase font-bold tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">Node_{i}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Marquee */}
          <div className="mt-40 reveal relative z-10">
            <div className="flex flex-col items-center mb-16 px-4">
              <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-600 mb-4 px-3 py-1 border border-zinc-800">Field Reports</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">TRUSTED BY BUILDERS.</h2>
            </div>
            
            <div className="relative border-y border-dashed border-zinc-800 py-12 overflow-hidden group">
              <div className="animate-marquee flex gap-12 whitespace-nowrap">
                {[...testimonials, ...testimonials].map((t, i) => (
                  <div key={i} className="min-w-[400px] border border-zinc-800 p-8 bg-zinc-900/20 backdrop-blur-sm relative transition-all hover:bg-zinc-900/40 hover:border-zinc-600 group/card">
                    <Quote className="w-8 h-8 text-zinc-800 absolute top-4 right-4 group-hover/card:text-zinc-500 transition-colors" />
                    <p className="text-zinc-300 text-lg font-medium leading-relaxed mb-6 whitespace-normal">"{t.text}"</p>
                    <div className="flex items-center gap-4 border-t border-dashed border-zinc-800 pt-4">
                      <div className="w-10 h-10 bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-xs uppercase">{t.author[0]}</div>
                      <div>
                        <div className="text-sm font-bold text-white uppercase tracking-wider">{t.author}</div>
                        <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Architecture Grid */}
          <div className="mt-40 border-t border-dashed border-zinc-800 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
              {[
                {
                  icon: <GitPullRequest className="w-5 h-5" />,
                  title: "INFRASTRUCTURE_SYNC",
                  desc: "Synchronize local environments with millisecond precision. Your code remains local, your connection is global."
                },
                {
                  icon: <Cpu className="w-5 h-5" />,
                  title: "NEURAL_MATCHING",
                  desc: " Proprietary skill-graph analysis ensures you are paired with engineers who fill your direct knowledge gaps."
                },
                {
                  icon: <Globe className="w-5 h-5" />,
                  title: "GLOBAL_NETWORK",
                  desc: "Instantly discover peer-level engineers across 40+ timezones, indexed by stack expertise and velocity."
                },
                {
                  icon: <Shield className="w-5 h-5" />,
                  title: "SECURITY_VAULT",
                  desc: "E2E encrypted peer-to-peer tunnels. CodeBuddy does not store your source code. Privacy is architectural."
                }
              ].map((ft, i) => (
                <div key={i} className={`reveal p-12 flex flex-col border-b border-dashed border-zinc-800 ${i % 2 === 0 ? 'md:border-r md:border-dashed md:border-zinc-800' : ''} ${i % 4 !== 3 ? 'lg:border-r lg:border-dashed lg:border-zinc-800' : ''} group hover:bg-[#030303] transition-colors duration-500`}>
                  <div className="w-12 h-12 border border-zinc-800 bg-zinc-900 flex items-center justify-center mb-8 shadow-inner group-hover:border-zinc-400 transition-colors">
                    {ft.icon}
                  </div>
                  <h3 className="text-xs font-black text-white mb-4 tracking-[0.2em] uppercase">{ft.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-light">{ft.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Marquee (Implicit Footer Element) */}
          <div className="mt-40 border-t border-dashed border-zinc-800 py-10 opacity-20 hover:opacity-100 transition-opacity">
            <div className="flex gap-16 animate-marquee whitespace-nowrap items-center">
              {[...techStack, ...techStack].map((tech, i) => (
                <span key={i} className="text-3xl font-black text-zinc-800 tracking-tighter hover:text-white transition-colors cursor-default uppercase">{tech}</span>
              ))}
            </div>
          </div>

        </main>

        {/* Minimal Bottom Footer */}
        <footer className="w-full max-w-7xl mx-auto p-12 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 font-mono tracking-[0.3em] uppercase">
          <div>© 2026 CodeBuddy_Core_Systems</div>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Status: [Operational]</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
