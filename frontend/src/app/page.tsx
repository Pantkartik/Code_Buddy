'use client';

import Link from 'next/link';
import { ArrowRight, Terminal, Github, GitPullRequest, Combine, Zap, Shield, Cpu, Activity, MoveRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import {useeffect,usestate} from 
export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-[#000000] text-zinc-300 font-sans selection:bg-zinc-800 overflow-x-hidden">
      
      {/* Structural Minimal Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Crisp Linear-Style Navigation */}
        <header className="w-full max-w-7xl mx-auto p-6 flex flex-col md:flex-row justify-between items-center z-50">
          <div className="flex items-center gap-3 font-semibold text-white tracking-tight mb-4 md:mb-0">
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

          <div className="flex items-center gap-5">
            <Link href="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200">
              Log in
            </Link>
            <Link
              href="/register"
              className="text-sm font-semibold bg-white text-black px-4 py-2 rounded-md hover:bg-zinc-200 transition-colors duration-200"
            >
              Start Building
            </Link>
          </div>
        </header>

        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-20 pb-32">
          
          {/* Hero Section */}
          <div className={`transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} flex flex-col items-center text-center`}>
            
            <a href="https://github.com/Pantkartik/Code_Buddy" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/40 text-xs font-mono text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 transition-all mb-10">
              <span>CodeBuddy Enterprise is now available</span>
              <MoveRight className="w-3 h-3" />
            </a>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter text-white mb-6 max-w-4xl leading-[1.05]">
              Pair programming for <br className="hidden md:block" />
              high-velocity teams.
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed font-normal">
              A minimalist, brutalist matching engine designed strictly for software engineers. Find elite partners, sync your repositories, and execute together in real-time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/register"
                className="group flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-md text-sm font-semibold transition-all hover:bg-zinc-200"
              >
                Access Platform <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                className="flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 text-white px-6 py-3 rounded-md text-sm font-semibold transition-all hover:bg-zinc-800"
              >
                <Terminal className="w-4 h-4 text-zinc-400" />
                Read the Documentation
              </button>
            </div>
          </div>

          {/* IDE / Terminal Hero Visual */}
          <div className={`mt-24 w-full max-w-4xl mx-auto relative transition-all duration-1000 delay-200 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="rounded-xl border border-zinc-800 bg-[#0A0A0A] shadow-2xl overflow-hidden font-mono text-sm leading-relaxed">
              {/* Header Bar */}
              <div className="h-10 border-b border-zinc-800 flex items-center px-4 bg-[#111111]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                </div>
                <div className="mx-auto text-zinc-500 text-xs">src/core/matching_engine.ts — CodeBuddy</div>
              </div>
              
              {/* Window Body */}
              <div className="p-6 md:p-8 overflow-x-auto text-left whitespace-pre">
                <div className="text-zinc-600 mb-4">{'// Initializing real-time pair session...'}</div>
                
                <div>
                  <span className="text-pink-500">import</span> {'{'} <span className="text-blue-400">connectPeers</span> {'}'} <span className="text-pink-500">from</span> <span className="text-green-400">'@codebuddy/core'</span>;
                </div>
                <div className="mb-4">
                  <span className="text-pink-500">import</span> {'{'} <span className="text-blue-400">WebSocketBridge</span> {'}'} <span className="text-pink-500">from</span> <span className="text-green-400">'@codebuddy/sys'</span>;
                </div>

                <div>
                  <span className="text-pink-500">const</span> <span className="text-yellow-200">session</span> <span className="text-pink-500">=</span> <span className="text-pink-500">await</span> <span className="text-yellow-200">Session</span>.<span className="text-blue-400">init</span>({'{'}
                </div>
                <div>
                  {'  '}requirements: {'['}<span className="text-green-400">'React'</span>, <span className="text-green-400">'WebRTC'</span>, <span className="text-green-400">'Go'</span>{']'},
                </div>
                <div>
                  {'  '}strictMode: <span className="text-purple-400">true</span>,
                </div>
                <div>
                  {'  '}timeout: <span className="text-purple-400">5000</span>
                </div>
                <div>{'}'});</div>
                
                <div className="my-4 text-zinc-600">{'// Resolving matching pool based on skill matrix'}</div>
                
                <div className="flex items-center">
                  <span className="text-blue-400 mr-2">➜</span> 
                  <span className="text-zinc-300">Searching global network</span>
                  <span className="animate-[bounce_1.5s_infinite] ml-1">.</span>
                  <span className="animate-[bounce_1.5s_infinite_0.2s] ml-1">.</span>
                  <span className="animate-[bounce_1.5s_infinite_0.4s] ml-1">.</span>
                </div>
                <div className="mt-1 text-emerald-400">
                  <span className="text-emerald-500">✓</span> Matched with <strong>@engineer_49</strong> (Latency: 14ms)
                </div>
                <div className="mt-1 text-zinc-400">
                  Establishing secure tunneling to IDE environment... Done.
                </div>
              </div>
            </div>
          </div>

          {/* Core Architecture Grid */}
          <div className="mt-32 pt-20 border-t border-zinc-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pl-px">
            {[
              {
                icon: <GitPullRequest className="w-5 h-5 text-zinc-100" />,
                title: "Repository Sync",
                desc: "Clone architectures globally. Your environments securely mirror across instances in under 120ms."
              },
              {
                icon: <Cpu className="w-5 h-5 text-zinc-100" />,
                title: "Algorithmic Matching",
                desc: "No more random pairings. The engine checks skill graphs and timezones to output precise peer connections."
              },
              {
                icon: <Combine className="w-5 h-5 text-zinc-100" />,
                title: "Live PR Review",
                desc: "Jump straight into pull requests together. Highlight, annotate, and resolve merge conflicts interactively."
              },
              {
                icon: <Shield className="w-5 h-5 text-zinc-100" />,
                title: "Enterprise Grade",
                desc: "End-to-end encrypted web-socket tunnels. Your proprietary codebase data never actually touches our servers."
              }
            ].map((ft, i) => (
              <div key={i} className="flex flex-col">
                <div className="w-10 h-10 rounded-md border border-zinc-800 bg-zinc-900 flex items-center justify-center mb-5">
                  {ft.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{ft.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{ft.desc}</p>
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}
