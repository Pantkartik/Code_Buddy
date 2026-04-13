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
    <div className="min-h-screen flex bg-zinc-950 text-white font-sans selection:bg-indigo-500/30">
      {/* Left visual pane - visible on desktop */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-zinc-900 border-r border-zinc-800 flex-col justify-between p-12">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-900/40 via-zinc-900/10 to-zinc-950 pointer-events-none" />
        <div className="absolute -left-40 -bottom-40 w-96 h-96 bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 flex items-center gap-2 font-bold text-2xl tracking-tight">
          <Code2 className="text-indigo-500 w-8 h-8" />
          CodeBuddy
        </div>

        <div className="relative z-10 mb-20 max-w-lg">
          <h2 className="text-4xl font-bold tracking-tight mb-6 leading-tight">
            Resume your journey to mastery.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed mb-10">
            Log back in to view your personalized dashboard, track your streaks, and seamlessly connect with top-tier developers. The codebase awaits.
          </p>
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
               <div key={i} className="w-12 h-12 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center overflow-hidden">
                 <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" />
               </div>
            ))}
             <div className="w-12 h-12 rounded-full border-2 border-zinc-900 bg-indigo-600 flex items-center justify-center text-xs font-bold z-10">
               +2k
             </div>
          </div>
          <p className="text-sm font-medium text-zinc-500 mt-4">Join 2000+ developers online right now.</p>
        </div>
      </div>

      {/* Right login form pane */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-32 relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-500/5 via-zinc-900/0 to-zinc-950 pointer-events-none" />
        
        <div className="mx-auto w-full max-w-sm relative z-10">
          <div className="lg:hidden mb-12 flex items-center gap-2 font-bold text-2xl tracking-tight justify-center">
            <Code2 className="text-indigo-500 w-8 h-8" />
            CodeBuddy
          </div>

          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Welcome back</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Please enter your details to sign in.
            </p>
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-1 gap-3">
              <button className="flex items-center justify-center gap-3 w-full border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 transition-all rounded-xl px-4 py-3 text-sm font-medium shadow-sm">
                <Github className="w-4 h-4" /> Sign in with GitHub
              </button>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-zinc-800" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-zinc-950 text-zinc-500">Or continue with</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm flex items-center justify-between animate-in fade-in slide-in-from-top-2">
                    {error}
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1.5" htmlFor="email">
                    Email Address
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-indigo-400 transition-colors">
                      <Mail className="h-4 w-4" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 bg-zinc-900/30 border border-zinc-800 rounded-xl focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white placeholder-zinc-600 outline-none transition-all hover:border-zinc-700"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="block text-sm font-medium text-zinc-300" htmlFor="password">
                      Password
                    </label>
                    <Link href="#" className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-indigo-400 transition-colors">
                      <Lock className="h-4 w-4" />
                    </div>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 bg-zinc-900/30 border border-zinc-800 rounded-xl focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white placeholder-zinc-600 outline-none transition-all hover:border-zinc-700"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-[0_0_15px_rgba(79,70,229,0.2)] text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-zinc-950 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02]"
                  >
                    {isLoading ? (
                      <Loader2 className="animate-spin h-5 w-5" />
                    ) : (
                      <>
                        Sign In
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              <p className="mt-8 text-center text-sm tracking-wide text-zinc-400">
                Don't have an account?{' '}
                <Link href="/register" className="font-semibold text-white hover:text-indigo-400 transition-colors">
                  Sign up for free
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
