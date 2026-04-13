'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { authService } from '../../services/api';
import { useAuthStore } from '../../store/authStore';
import { Mail, Lock, Loader2, ArrowRight, Code2, Github } from 'lucide-react';

export default function LoginPage() {
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
      const data = await authService.login({ email, password });
      login(
        {
          _id: data._id,
          name: data.name,
          email: data.email,
          skills: data.skills || [],
          streak: data.streak || 0,
        },
        data.token
      );
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Invalid credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isClient) return null;

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#030303] text-zinc-100 selection:bg-indigo-500/30 overflow-hidden font-sans">
      
      {/* Dynamic Ambient Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse transition-transform duration-[10000ms] -translate-x-1/2 -top-40" />
        <div className="absolute w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen opacity-50 translate-x-1/3 bottom-0" />
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-12 py-12">
        
        {/* Left Marketing / Branding Section */}
        <div className="flex-1 text-center lg:text-left flex flex-col justify-center">
          <Link href="/" className="inline-flex items-center justify-center lg:justify-start gap-2 mb-8 group transition-opacity hover:opacity-80">
            <div className="bg-indigo-500/10 p-2 rounded-xl border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-colors">
              <Code2 className="w-6 h-6 text-indigo-400" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white shadow-indigo-500/20 drop-shadow-md">
              CodeBuddy
            </span>
          </Link>
          
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-zinc-500">
            Welcome back to the collective.
          </h1>
          <p className="text-lg lg:text-xl text-zinc-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light mb-10">
            Re-enter your personalized dashboard, connect with peer engineers, and resume shipping beautiful code together.
          </p>

          {/* Social Proof Mini Component */}
          <div className="hidden lg:flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-xl w-max">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#030303] overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="avatar" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-sm font-medium">
              <span className="text-white">Active Pairing</span>
              <p className="text-indigo-400">Join 3,204 online</p>
            </div>
          </div>
        </div>

        {/* Right Form Section (Glassmorphism) */}
        <div className="w-full max-w-md lg:max-w-lg">
          <div className="bg-zinc-900/40 backdrop-blur-3xl border border-white/10 p-8 sm:p-10 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            {/* Subtle inner reflection */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <div className="mb-10 text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Sign In</h2>
              <p className="text-sm text-zinc-400 mt-2">Log in via external provider or email securely.</p>
            </div>

            <button className="flex items-center justify-center gap-3 w-full bg-white text-zinc-950 font-semibold rounded-xl px-4 py-3 hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5 active:scale-[0.98]">
              <Github className="w-5 h-5" /> Continue with GitHub
            </button>

            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 border-t border-zinc-800"></div>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Or</span>
              <div className="flex-1 border-t border-zinc-800"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm flex items-center justify-between animate-in fade-in zoom-in-95 duration-300">
                  {error}
                </div>
              )}

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
                <div className="flex justify-between items-center px-1">
                  <label className="text-sm font-medium text-zinc-300" htmlFor="password">
                    Password
                  </label>
                  <Link href="#" className="text-xs font-medium text-zinc-500 hover:text-indigo-400 transition-colors">
                    Forgot password?
                  </Link>
                </div>
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
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="relative group w-full flex justify-center items-center py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-zinc-950 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-[0.98] overflow-hidden"
              >
                {/* Button Inner Glow */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {isLoading ? (
                  <Loader2 className="animate-spin h-5 w-5" />
                ) : (
                  <>
                    <span className="relative z-10">Access Dashboard</span>
                    <ArrowRight className="relative z-10 ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-zinc-500">
              New to CodeBuddy?{' '}
              <Link href="/register" className="font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
                Create an account
              </Link>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
