'use client';

import { useState } from 'react';
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
  const login = useAuthStore((state) => state.login);

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
      setError(err.response?.data?.message || 'Failed to register. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-zinc-950 text-white font-sans selection:bg-indigo-500/30">
      
      {/* Right signup form pane */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-32 relative order-1 lg:order-none z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-500/5 via-zinc-900/0 to-zinc-950 pointer-events-none" />
        
        <div className="mx-auto w-full max-w-sm relative z-10">
          <div className="lg:hidden mb-12 flex items-center gap-2 font-bold text-2xl tracking-tight justify-center">
            <Code2 className="text-indigo-500 w-8 h-8" />
            CodeBuddy
          </div>

          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Create an account</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Start finding your perfect pair programming partners.
            </p>
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-1 gap-3">
              <button className="flex items-center justify-center gap-3 w-full border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 transition-all rounded-xl px-4 py-3 text-sm font-medium shadow-sm">
                <Github className="w-4 h-4" /> Sign up with GitHub
              </button>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-zinc-800" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-zinc-950 text-zinc-500">Or register with email</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-sm flex items-center justify-between animate-in fade-in slide-in-from-top-2">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1.5" htmlFor="name">
                    Full Name
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-indigo-400 transition-colors">
                      <User className="h-4 w-4" />
                    </div>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="block w-full pl-10 pr-3 py-3 bg-zinc-900/30 border border-zinc-800 rounded-xl focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white placeholder-zinc-600 outline-none transition-all hover:border-zinc-700"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

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
                  <label className="block text-sm font-medium text-zinc-300 mb-1.5" htmlFor="password">
                    Password
                  </label>
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
                      placeholder="Create a password"
                      required
                      minLength={6}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl shadow-[0_0_15px_rgba(79,70,229,0.2)] text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-zinc-950 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02]"
                  >
                    {isLoading ? (
                      <Loader2 className="animate-spin h-5 w-5" />
                    ) : (
                      <>
                        Create Account
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              <p className="mt-8 text-center text-sm tracking-wide text-zinc-400">
                Already have an account?{' '}
                <Link href="/login" className="font-semibold text-white hover:text-indigo-400 transition-colors">
                  Log in instead
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Left visual pane - visible on desktop */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-zinc-900 border-l border-zinc-800 flex-col justify-between p-12 order-2">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-zinc-900/10 to-zinc-950 pointer-events-none" />
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 flex w-full justify-end">
          <div className="flex items-center gap-2 font-bold text-2xl tracking-tight">
            <Code2 className="text-indigo-500 w-8 h-8" />
            CodeBuddy
          </div>
        </div>

        <div className="relative z-10 mb-20">
          <h2 className="text-4xl font-bold tracking-tight mb-8 leading-tight max-w-lg">
            Build incredible software, together.
          </h2>
          
          <div className="space-y-6">
             {[
               "Smart matching based on tech stack & skill level",
               "Real-time pair programming requests",
               "Develop streaks to keep yourself motivated",
               "Expand your open-source network easily"
             ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="text-zinc-300 text-lg">{feature}</span>
                </div>
             ))}
          </div>

        </div>
      </div>

    </div>
  );
}
