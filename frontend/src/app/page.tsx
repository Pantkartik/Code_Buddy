'use client';

import Link from 'next/link';
import { ArrowRight, Terminal, Github, GitPullRequest, Combine, Zap, Shield, Cpu, Activity, MoveRight, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-[#000000] text-zinc-300 font-sans selection:bg-zinc-800 overflow-x-hidden">
      
      {/* Structural Minimal Stitched Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Crisp Linear-Style Navigation */}
        <header className="w-full max-w-7xl mx-auto p-6 flex flex-col md:flex-row justify-between items-center z-50 border-b border-dashed border-zinc-800">
          <div className="flex items-center gap-3 font-semibold text-white tracking-tight mb-4 md:mb-0 relative">
            {/* Stitched crosshair anchor */}
            <Plus className="w-3 h-3 text-zinc-600 absolute -left-4 top-1/2 -translate-y-1/2 hidden md:block" />
            
            <div className="bg-white text-black p-1 rounded-sm">
              <Terminal className="w-4 h-4" strokeWidth={3} />
            </div>
            CodeBuddy
          </div>
          
          <nav className="flex items-center gap-8 mb-4 md:mb-0">
            <Link href="/about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200">
              Platform
            </Link>
            <Link href="/premium" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200">
              Changelog
            </Link>
            <a 
              href="https://github.com/Pantkartik/Code_Buddy" 
              target="_blank" 
              rel="noreferrer"
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
            >
              GitHub
            </a>
          </nav>

          <div className="flex items-center gap-5 relative">
            <Link href="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200">
              Log in
            </Link>
            <Link
              href="/register"
              className="text-sm font-semibold bg-white text-black px-4 py-2 hover:bg-zinc-200 transition-colors duration-200 border border-white"
            >
              Start Building
            </Link>
            {/* Stitched crosshair anchor */}
            <Plus className="w-3 h-3 text-zinc-600 absolute -right-6 top-1/2 -translate-y-1/2 hidden md:block" />
          </div>
        </header>

        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-20 pb-32 border-x border-dashed border-zinc-800 relative">
          
          {/* Stitched Crosshairs for the main body boundaries */}
          <Plus className="w-4 h-4 text-zinc-600 absolute -left-2 top-0" />
          <Plus className="w-4 h-4 text-zinc-600 absolute -right-2 top-0" />
          <Plus className="w-4 h-4 text-zinc-600 absolute -left-2 bottom-0" />
          <Plus className="w-4 h-4 text-zinc-600 absolute -right-2 bottom-0" />

          {/* Hero Section */}
          <div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} flex flex-col items-center text-center`}>
            
            <a href="https://github.com/Pantkartik/Code_Buddy" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1 rounded-none border border-dashed border-zinc-700 bg-[#0A0A0A] text-xs font-mono text-zinc-400 hover:border-zinc-500 hover:text-white transition-all mb-10">
              <span>CodeBuddy Enterprise is now available</span>
              <MoveRight className="w-3 h-3" />
            </a>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter text-white mb-6 max-w-4xl leading-[1.05]">
              Pair programming for <br className="hidden md:block" />
              high-velocity teams.
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed font-normal p-4 border-l-2 border-dashed border-zinc-800">
              A minimalist, brutalist matching engine designed strictly for software engineers. Find elite partners, sync your repositories, and execute together in real-time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
              <Link
                href="/register"
                className="group flex items-center justify-center gap-2 bg-white text-black px-6 py-3 text-sm font-semibold transition-all hover:bg-zinc-200 border border-white"
              >
                Access Platform <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                className="flex items-center justify-center gap-2 bg-[#0A0A0A] border border-dashed border-zinc-700 text-white px-6 py-3 text-sm font-semibold transition-all hover:bg-zinc-900 hover:border-zinc-500"
              >
                <Terminal className="w-4 h-4 text-zinc-400" />
                Read the Documentation
              </button>
            </div>
          </div>

          {/* IDE / Terminal Hero Visual */}
          <div className={`mt-24 w-full max-w-4xl mx-auto relative transition-all duration-1000 delay-200 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="border border-zinc-800 bg-[#060606] shadow-2xl relative">
              {/* Corner stitches */}
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-zinc-500" />
              <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-zinc-500" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-zinc-500" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-zinc-500" />

              {/* Header Bar */}
              <div className="h-10 border-b border-dashed border-zinc-800 flex items-center px-4 bg-[#0A0A0A]">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-none bg-zinc-700" />
                  <div className="w-2 h-2 rounded-none bg-zinc-700" />
                  <div className="w-2 h-2 rounded-none bg-zinc-700" />
                </div>
                <div className="mx-auto text-zinc-500 text-xs font-mono tracking-widest">src/core/matching_engine.ts</div>
              </div>
              
              {/* Window Body */}
              <div className="p-6 md:p-8 overflow-x-auto text-left whitespace-pre font-mono text-sm leading-relaxed">
                <div className="text-zinc-600 mb-4">{'// Initializing real-time pair session...'}</div>
                
                <div>
                  <span className="text-zinc-500">import</span> {'{'} <span className="text-zinc-200">connectPeers</span> {'}'} <span className="text-zinc-500">from</span> <span className="text-zinc-400">'@codebuddy/core'</span>;
                </div>
                <div className="mb-4">
                  <span className="text-zinc-500">import</span> {'{'} <span className="text-zinc-200">WebSocketBridge</span> {'}'} <span className="text-zinc-500">from</span> <span className="text-zinc-400">'@codebuddy/sys'</span>;
                </div>

                <div>
                  <span className="text-zinc-500">const</span> <span className="text-zinc-200">session</span> <span className="text-zinc-500">=</span> <span className="text-zinc-500">await</span> <span className="text-zinc-200">Session</span>.<span className="text-white font-semibold">init</span>({'{'}
                </div>
                <div>
                  {'  '}requirements: {'['}<span className="text-zinc-400">'React'</span>, <span className="text-zinc-400">'WebRTC'</span>, <span className="text-zinc-400">'Go'</span>{']'},
                </div>
                <div>
                  {'  '}strictMode: <span className="text-white">true</span>,
                </div>
                <div>
                  {'  '}timeout: <span className="text-white">5000</span>
                </div>
                <div>{'}'});</div>
                
                <div className="my-4 text-zinc-600 border-t border-dashed border-zinc-800 pt-4">{'// Resolving matching pool based on skill matrix'}</div>
                
                <div className="flex items-center">
                  <span className="text-white mr-2">➜</span> 
                  <span className="text-zinc-300">Searching global network</span>
                  <span className="animate-[bounce_1.5s_infinite] ml-1">.</span>
                  <span className="animate-[bounce_1.5s_infinite_0.2s] ml-1">.</span>
                  <span className="animate-[bounce_1.5s_infinite_0.4s] ml-1">.</span>
                </div>
                <div className="mt-2 text-zinc-300 flex items-center gap-2">
                  <div className="w-2 h-2 bg-white animate-pulse" /> Matched with <strong>@engineer_49</strong> <span className="text-zinc-600">[Latency: 14ms]</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Architecture Grid - Stitched boundaries */}
          <div className="mt-32 border-t border-dashed border-zinc-800 relative">
            <Plus className="w-4 h-4 text-zinc-600 absolute -left-2 -top-2" />
            <Plus className="w-4 h-4 text-zinc-600 absolute -right-2 -top-2" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
              {[
                {
                  icon: <GitPullRequest className="w-5 h-5 text-white" />,
                  title: "Repository Sync",
                  desc: "Clone architectures globally. Your environments securely mirror across instances in under 120ms."
                },
                {
                  icon: <Cpu className="w-5 h-5 text-white" />,
                  title: "Algorithmic Matching",
                  desc: "No more random pairings. The engine checks skill graphs and timezones to output precise connections."
                },
                {
                  icon: <Combine className="w-5 h-5 text-white" />,
                  title: "Live PR Review",
                  desc: "Jump straight into pull requests together. Highlight, annotate, and resolve merge conflicts interactively."
                },
                {
                  icon: <Shield className="w-5 h-5 text-white" />,
                  title: "Enterprise Grade",
                  desc: "End-to-end encrypted web-socket tunnels. Your proprietary codebase data never touches our servers."
                }
              ].map((ft, i) => (
                <div key={i} className={`p-8 flex flex-col border-b border-dashed border-zinc-800 ${i !== 3 && i !== 1 ? 'lg:border-r lg:border-dashed lg:border-zinc-800' : ''} ${i === 0 || i === 2 ? 'md:border-r md:border-dashed md:border-zinc-800' : ''}`}>
                  <div className="w-10 h-10 border border-zinc-700 bg-zinc-900 flex items-center justify-center mb-6 shadow-inner">
                    {ft.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white mb-3 tracking-tight">{ft.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed font-light">{ft.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Marquee Section */}
          <section className="mt-32 relative">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-dashed border-t border-dashed border-zinc-800" />
              <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em]">Developer Insights</h2>
              <div className="h-px flex-1 bg-dashed border-t border-dashed border-zinc-800" />
            </div>

            <div className="relative overflow-hidden py-10">
              <div className="flex animate-marquee whitespace-nowrap gap-8 py-4">
                {[...testimonials, ...testimonials].map((t, i) => (
                  <div 
                    key={i} 
                    className="inline-block w-80 p-6 bg-[#050505] border border-dashed border-zinc-800 group hover:border-zinc-600 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[10px] text-zinc-400 font-mono">
                        {t.initials}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white uppercase tracking-wider">{t.name}</div>
                        <div className="text-[10px] text-zinc-500 font-mono">{t.role}</div>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed font-mono italic">"{t.quote}"</p>
                  </div>
                ))}
              </div>
              
              {/* Gradient overlays for the fade effect */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
            </div>
          </section>

        </main>

        {/* Technical Footer */}
        <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 mt-32 relative">
          <div className="border border-dashed border-zinc-800 bg-[#050505] p-12 relative overflow-hidden">
            <Plus className="w-4 h-4 text-zinc-600 absolute -left-2 -top-2" />
            <Plus className="w-4 h-4 text-zinc-600 absolute -right-2 -top-2" />
            <Plus className="w-4 h-4 text-zinc-600 absolute -left-2 -bottom-2" />
            <Plus className="w-4 h-4 text-zinc-600 absolute -right-2 -bottom-2" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 font-semibold text-white tracking-tight mb-6">
                  <div className="bg-white text-black p-0.5 rounded-sm">
                    <Terminal className="w-3 h-3" strokeWidth={3} />
                  </div>
                  CodeBuddy
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed mb-6 font-mono">
                  Engineered for velocity. Built for the modern engineer.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
                  <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-6">Platform</h4>
                <ul className="space-y-4">
                  <li><Link href="#" className="text-xs text-zinc-400 hover:text-white transition-colors">Features</Link></li>
                  <li><Link href="#" className="text-xs text-zinc-400 hover:text-white transition-colors">Security</Link></li>
                  <li><Link href="#" className="text-xs text-zinc-400 hover:text-white transition-colors">Enterprise</Link></li>
                  <li><Link href="#" className="text-xs text-zinc-400 hover:text-white transition-colors">Pricing</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-6">Resources</h4>
                <ul className="space-y-4">
                  <li><Link href="#" className="text-xs text-zinc-400 hover:text-white transition-colors">Documentation</Link></li>
                  <li><Link href="#" className="text-xs text-zinc-400 hover:text-white transition-colors">API Reference</Link></li>
                  <li><Link href="#" className="text-xs text-zinc-400 hover:text-white transition-colors">Changelog</Link></li>
                  <li><Link href="#" className="text-xs text-zinc-400 hover:text-white transition-colors">Status</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-6">Company</h4>
                <ul className="space-y-4">
                  <li><Link href="#" className="text-xs text-zinc-400 hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="#" className="text-xs text-zinc-400 hover:text-white transition-colors">Privacy</Link></li>
                  <li><Link href="#" className="text-xs text-zinc-400 hover:text-white transition-colors">Terms</Link></li>
                  <li><button className="text-[10px] font-mono border border-dashed border-zinc-700 px-2 py-1 flex items-center gap-2 hover:border-zinc-500 transition-all">
                    <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" /> Systems Operational
                  </button></li>
                </ul>
              </div>
            </div>

            <div className="mt-20 pt-8 border-t border-dashed border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-[10px] font-mono text-zinc-600">
                © 2024 CODEBUDDY_SYS. SHIPPED_FROM_SF.
              </div>
              <div className="flex gap-8">
                <div className="text-[10px] font-mono text-zinc-600 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-zinc-800" /> Latency: 14ms
                </div>
                <div className="text-[10px] font-mono text-zinc-600 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-zinc-800" /> Uptime: 99.98%
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Global CSS for Marquee */}
        <style jsx global>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </div>
  );
}

const testimonials = [
  { initials: 'JD', name: 'John Doe', role: 'Fullstack Dev @ Vercel', quote: 'Finding a partner for specific Go-backend fixes became instantaneous. CodeBuddy is essential for my workflow.' },
  { initials: 'SK', name: 'Sarah Kim', role: 'Staff Engineer @ Linear', quote: 'The repository sync is flawless. It feels like we are coding on the same local machine.' },
  { initials: 'MR', name: 'Marcus Rojas', role: 'CTO @ Flux', quote: 'Our team velocity increased by 30% after integrating CodeBuddy peer reviews into our process.' },
  { initials: 'AL', name: 'Ava Lee', role: 'Open Source Maintainer', quote: 'Finally, a tool that respects the engineering mindset. Stitched together perfectly.' },
  { initials: 'BW', name: 'Ben Wright', role: 'Frontend Lead', quote: 'Minimalist, brutalist, and intensely functional. This is how developer tools should look.' },
];
