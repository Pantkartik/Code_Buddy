import Link from 'next/link';
import { ArrowRight, Code2, Users, Zap, Github } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-indigo-500/30">
      <div className="relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-emerald-500/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-32">
          {/* Header */}
          <header className="absolute top-0 left-0 right-0 p-6 flex flex-col sm:flex-row justify-between items-center text-zinc-300 z-50">
            <div className="flex items-center gap-2 font-bold text-xl text-white tracking-tight mb-4 sm:mb-0">
              <Code2 className="text-indigo-500" />
              CodeBuddy
            </div>
            
            <nav className="flex items-center gap-6 mb-4 sm:mb-0">
              <Link href="/about" className="text-sm font-medium hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/premium" className="text-sm font-medium hover:text-indigo-400 transition-colors flex items-center gap-1">
                Premium <Zap className="w-3 h-3 text-indigo-400" />
              </Link>
              <a 
                href="https://github.com/Pantkartik/Code_Buddy" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-medium bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full hover:bg-zinc-800 hover:text-white transition-colors"
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
                className="text-sm font-medium bg-white text-zinc-950 px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              >
                Get Started
              </Link>
            </div>
          </header>

          {/* Hero Section */}
          <main className="flex flex-col items-center justify-center text-center mt-20 sm:mt-32">
            <div className="inline-block mb-6 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm text-xs font-medium text-indigo-400">
              <span className="flex items-center gap-2">
                <Zap className="w-3 h-3" /> Introducing CodeBuddy MVP
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mb-6 max-w-3xl leading-tight">
              Pair Programming, <br />
              <span className="text-indigo-500">Elevated.</span>
            </h1>
            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed font-light">
              Connect with fellow developers, build your skills, and crush goals together. 
              The ultimate match-making platform for engineers who love to build.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="group flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-[0_0_20px_rgba(79,70,229,0.3)]"
              >
                Start Matching
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </main>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-3 gap-8 mt-40">
            {[
              {
                icon: <Users className="w-6 h-6 text-emerald-400" />,
                title: 'Smart Matching',
                desc: 'Find developers who complement your skill set and share your tech stack goals.',
              },
              {
                icon: <Code2 className="w-6 h-6 text-purple-400" />,
                title: 'Seamless Collaboration',
                desc: 'Track your paired sessions, maintain streaks, and grow your collaborative network.',
              },
              {
                icon: <Zap className="w-6 h-6 text-indigo-400" />,
                title: 'Level Up Faster',
                desc: 'Learn by doing. Share knowledge, conduct peer reviews, and elevate your code quality.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-800/50 transition-colors"
              >
                <div className="bg-zinc-950 border border-zinc-800 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
