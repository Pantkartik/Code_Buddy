'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { authService } from '../../services/api';
import { useAuthStore } from '../../store/authStore';
import { Mail, Lock, User, Loader2, ArrowRight, Code2, Github, CheckCircle2 } from 'lucide-react';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login, isAuthenticated } = useAuthStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (isAuthenticated) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const data = await authService.register({ name, email, password });
      login(
        {
          _id: data._id,
          name: data.name,
          email: data.email,
          skills: [],
          streak: 0,
        },
        data.token
      );
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Failed to register. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isClient) return null;

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#030303] text-zinc-100 selection:bg-indigo-500/30 overflow-hidden font-sans">
      
      {/* Dynamic Ambient Background - Flipped for Register but matching core brand */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse transition-transform duration-[10000ms] translate-x-1/2 -top-40" />
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen opacity-50 -translate-x-1/3 bottom-0" />
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-12 py-12">
        
        {/* Left Marketing / Value Prop Section */}
        <div className="flex-1 text-center lg:text-left flex flex-col justify-center order-2 lg:order-1">
          <div className="hidden lg:flex w-full justify-start mb-8">
            <Link href="/" className="inline-flex items-center gap-2 group transition-opacity hover:opacity-80">
              <div className="bg-indigo-500/10 p-2 rounded-xl border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
                <Code2 className="w-6 h-6 text-indigo-400" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white shadow-indigo-500/20 drop-shadow-md">
                CodeBuddy
              </span>
            </Link>
          </div>

          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-zinc-500 max-w-lg mx-auto lg:mx-0">
            Build incredible software, together.
          </h1>
          
          <div className="space-y-6 max-w-lg mx-auto lg:mx-0">
             {[
               "Smart matching based on tech stack & skill level",
               "Real-time pair programming requests",
               "Develop streaks to keep yourself motivated",
               "Expand your open-source network easily"
             ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 border border-white/5 p-4 rounded-2xl backdrop-blur-sm">
                  <div className="bg-indigo-500/10 p-1.5 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span className="text-zinc-300 font-medium">{feature}</span>
                </div>
             ))}
          </div>
        </div>

        {/* Right Form Section (Glassmorphism) */}
        <div className="w-full max-w-md lg:max-w-lg order-1 lg:order-2">
          
          <div className="lg:hidden flex items-center justify-center gap-2 mb-8 group transition-opacity">
            <div className="bg-indigo-500/10 p-2 rounded-xl border border-indigo-500/20">
              <Code2 className="w-6 h-6 text-indigo-400" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              CodeBuddy
            </span>
          </div>

          <div className="bg-zinc-900/40 backdrop-blur-3xl border border-white/10 p-8 sm:p-10 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Create Account</h2>
              <p className="text-sm text-zinc-400 mt-2">Start finding your perfect pair programming partners.</p>
            </div>

            <button className="flex items-center justify-center gap-3 w-full bg-white text-zinc-950 font-semibold rounded-xl px-4 py-3 hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5 active:scale-[0.98]">
              <Github className="w-5 h-5" /> Sign up with GitHub
            </button>

            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 border-t border-zinc-800"></div>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Or Register With</span>
              <div className="flex-1 border-t border-zinc-800"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm flex items-center justify-between animate-in fade-in zoom-in-95 duration-300">
                  {error}
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-zinc-300 px-1" htmlFor="name">
                  Full Name
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-indigo-400 transition-colors">
                    <User className="h-4 w-4" />
                  </div>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3.5 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 text-white placeholder-zinc-600 outline-none transition-all hover:border-white/20 sm:text-sm"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-zinc-300 px-1" htmlFor="email">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-indigo-400 transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3.5 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 text-white placeholder-zinc-600 outline-none transition-all hover:border-white/20 sm:text-sm"
                    placeholder="you@email.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-zinc-300 px-1" htmlFor="password">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-indigo-400 transition-colors">
                    <Lock className="h-4 w-4" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3.5 bg-black/20 border border-white/10 rounded-xl focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-400 text-white placeholder-zinc-600 outline-none transition-all hover:border-white/20 sm:text-sm tracking-widest"
                    placeholder="••••••••"
                    required
                    minLength={6}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="relative group w-full flex justify-center items-center py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-zinc-950 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-[0.98] overflow-hidden mt-8"
              >
                {/* Button Inner Glow */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {isLoading ? (
                  <Loader2 className="animate-spin h-5 w-5" />
                ) : (
                  <>
                    <span className="relative z-10">Sign Up Now</span>
                    <ArrowRight className="relative z-10 ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-zinc-500">
              Already have an account?{' '}
              <Link href="/login" className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
                Sign in securely
              </Link>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
