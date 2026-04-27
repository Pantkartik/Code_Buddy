'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '../../store/authStore';
import { Code2, LogOut, Flame, Activity, Users } from 'lucide-react';

export default function Dashboard() {
  const { user, isAuthenticated, logout } = useAuthStore();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isClient || !isAuthenticated || !user) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-zinc-400">
        Loading...
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
              <Code2 className="text-indigo-500" />
              CodeBuddy
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-orange-400 font-medium bg-orange-400/10 px-3 py-1.5 rounded-full border border-orange-400/20">
                <Flame className="w-4 h-4" />
                {user.streak} Day Streak
              </div>
              <button
                onClick={handleLogout}
                className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-indigo-500/20 rounded-2xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none" />
          <h1 className="text-3xl font-bold mb-2 tracking-tight">Welcome back, {user.name}! 👋</h1>
          <p className="text-indigo-200/70 max-w-2xl">
            You are currently on a {user.streak}-day pairing streak. Keep up the great work and browse for your next coding session.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Profile Quick View */}
          <div className="col-span-1 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center text-2xl font-bold text-indigo-400 border border-zinc-700">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{user.name}</h3>
                <p className="text-zinc-500 text-sm">{user.email}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Skills</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {user.skills?.length > 0 ? (
                    user.skills.map((skill: string) => (
                      <span key={skill} className="bg-zinc-800 border border-zinc-700 text-zinc-300 px-2.5 py-1 rounded-md text-xs">
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-zinc-600">No skills added yet.</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Activity / Matches Placeholder */}
          <div className="col-span-1 md:col-span-2 grid gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
               <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
                 <Users className="w-6 h-6 text-indigo-400" />
               </div>
               <h3 className="text-lg font-medium mb-2">Find a Match</h3>
               <p className="text-zinc-500 text-sm max-w-sm mb-4">
                 Browse through developers looking to pair program based on your current tech stack.
               </p>
               <button className="bg-white text-zinc-950 font-medium px-4 py-2 rounded-lg hover:bg-zinc-200 transition-colors">
                 Browse Developers
               </button>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h3 className="font-medium flex items-center gap-2 mb-4">
                <Activity className="w-4 h-4 text-emerald-400" /> Recent Activity
              </h3>
              <div className="text-sm text-zinc-500 py-8 text-center border border-dashed border-zinc-800 rounded-xl">
                No recent activity to show.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
