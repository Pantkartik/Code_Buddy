import api from '../lib/axios';
import { User, Activity, Match } from '../types';

export const authService = {
  login: async (credentials: any) => {
    const { data } = await api.post('/users/login', credentials);
    return data;
  },
  register: async (userData: any) => {
    const { data } = await api.post('/users', userData);
    return data;
  },
  getProfile: async () => {
    const { data } = await api.get<User>('/users/profile');
    return data;
  }
};

export const activityService = {
  logActivity: async (activityData: any) => {
    const { data } = await api.post<Activity>('/activities', activityData);
    return data;
  },
  getActivities: async () => {
    const { data } = await api.get<Activity[]>('/activities');
    return data;
  }
};

export const matchService = {
  createMatch: async (targetUserId: string) => {
    const { data } = await api.post<Match>('/matches', { targetUserId });
    return data;
  },
  getMatches: async () => {
    const { data } = await api.get<Match[]>('/matches');
    return data;
  },
  updateMatchStatus: async (id: string, status: 'accepted' | 'rejected') => {
    const { data } = await api.put<Match>(`/matches/${id}`, { status });
    return data;
  }
};
