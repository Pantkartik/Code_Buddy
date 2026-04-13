'use client';

import Link from 'next/link';
import { ArrowRight, Code2, Users, Zap, Github, Terminal, Compass, Star, ChevronRight, Activity } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-50 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 p-6 flex flex-col md:flex-row justify-between items-center text-zinc-300 z-50 transition-all duration-500">
          <div className="flex items-center gap-2 font-bold text-xl text-white tracking-tight mb-4 md:mb-0">
            <div className="bg-indigo-500/10 p-2 rounded-xl border border-indigo-500/20">
              <Code2 className="w-5 h-5 text-indigo-400" />
            </div>
            CodeBuddy
          </div>
          
          <nav className="flex items-center gap-6 bg-white/5 border border-white/10 px-6 py-2.5 rounded-full backdrop-blur-md mb-4 md:mb-0">
            <Link href="/about" className="text-sm font-medium hover:text-white transition-colors">
              About
            </Link>
            <Link href="/premium" className="text-sm font-medium hover:text-indigo-400 transition-colors flex items-center gap-1">
              Premium <Zap className="w-3 h-3 text-indigo-400" />
            </Link>
            <div className="w-px h-4 bg-white/10 mx-2" />
            <a 
              href="https://github.com/Pantkartik/Code_Buddy" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              Open Source
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-white transition-colors">
              Sign in
            </Link>
            <Link
              href="/register"
              className="text-sm font-medium bg-white text-zinc-950 px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-95"
            >
              Start Building
            </Link>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-48 pb-32">
          
          {/* Hero Section */}
          <div className={`flex flex-col items-center text-center transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a href="https://github.com/Pantkartik/Code_Buddy" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm text-xs font-medium text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all mb-8 cursor-pointer">
              <Star className="w-3.5 h-3.5 text-indigo-400" /> 
              <span>Star us on GitHub</span>
              <div className="w-px h-3 bg-indigo-500/30 mx-1" />
              <span className="flex items-center">v1.0 is Live <ChevronRight className="w-3 h-3 ml-0.5" /></span>
            </a>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500 mb-8 max-w-5xl leading-[1.1]">
              Find your next <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-gradient-x">
                pair programming
              </span> partner.
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed font-light px-4">
              CodeBuddy is an open-source matching engine for developers. Connect instantly, track your coding streaks, and ship better architecture together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/register"
                className="group relative flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_rgba(79,70,229,0.4)]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <span className="relative flex items-center gap-2">
                  Launch Dashboard <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/about"
                className="group flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all backdrop-blur-sm"
              >
                <Terminal className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
                View Documentation
              </Link>
            </div>
          </div>

          {/* Hero Interface Mockup */}
          <div className={`mt-24 lg:mt-32 relative mx-auto w-full max-w-5xl transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-b from-indigo-500/20 to-purple-500/0 blur-xl opacity-50" />
            <div className="relative rounded-[2rem] bg-zinc-950/80 border border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden">
              
              {/* Fake Window Header */}
              <div className="h-12 border-b border-white/10 flex items-center px-6 gap-2 bg-white/[0.02]">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-4 px-3 py-1 rounded-md bg-white/5 text-[10px] text-zinc-500 font-mono tracking-wider flex items-center gap-2 border border-white/5">
                  <Lock className="w-3 h-3" /> codebuddy.io/dashboard
                </div>
              </div>

              {/* Fake Dashboard Content */}
              <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 h-[400px]">
                <div className="col-span-1 md:col-span-2 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">Algorithm Matrix</h3>
                      <p className="text-sm text-zinc-400">Finding the perfect engineers...</p>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold animate-pulse">
                      Searching
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between group hover:border-indigo-500/30 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?img=${i + 30}`} alt="" className="object-cover w-full h-full" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">Developer Profile #{i * 142}</p>
                            <p className="text-xs text-zinc-500 font-mono">React • Node.js • TypeScript</p>
                          </div>
                        </div>
                        <button className="px-3 py-1.5 rounded-lg bg-indigo-600 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          Connect
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-span-1 hidden md:flex flex-col gap-6">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Your Streak</h4>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">14</span>
                      <span className="text-zinc-400 mb-1 font-medium">Days</span>
                    </div>
                    <div className="mt-4 flex gap-1">
                      {[1,1,1,1,1,1,0].map((v, idx) => (
                        <div key={idx} className={`h-8 flex-1 rounded-sm ${v ? 'bg-orange-500' : 'bg-white/10'}`} />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-1 p-5 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-2xl rounded-full" />
                    <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-2 relative z-10">Premium Ready</h4>
                    <p className="text-sm text-zinc-300 relative z-10 mb-4">Unlock advanced algorithm filters and priority matching.</p>
                    <button className="text-xs font-semibold text-white bg-indigo-500 px-4 py-2 rounded-lg relative z-10">
                      Upgrade Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-32 lg:mt-48 relative relative z-10">
            <div className="absolute inset-0 bg-zinc-900/50 blur-3xl rounded-full opacity-20 pointer-events-none" />
            {[
              {
                icon: <Compass className="w-6 h-6 text-emerald-400" />,
                title: 'Algorithmic Discovery',
                desc: 'Stop wasting time interviewing random partners. Our engine analyzes your skill gaps and tech stack to surface the optimal pair.',
              },
              {
                icon: <Activity className="w-6 h-6 text-orange-400" />,
                title: 'Velocity Tracking',
                desc: 'Maintain extreme coding velocity. Visually track your daily pairing streaks and log collaborative sessions natively.',
              },
              {
                icon: <Code2 className="w-6 h-6 text-indigo-400" />,
                title: 'Seamless Workflows',
                desc: 'Engineered for the absolute best developer experience. Drop-in, match, share your IDE link, and begin building.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl hover:bg-zinc-800/60 hover:border-white/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-white/5 border border-white/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-light">{feature.desc}</p>
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}
