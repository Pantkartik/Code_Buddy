// Application common types

export interface User {
  _id: string;
  name: string;
  email: string;
  skills: string[];
  level?: string;
  goals?: string[];
  availability?: string;
  bio?: string;
  streak: number;
}

export interface Activity {
  _id: string;
  userId: string;
  date: string;
  status: 'completed' | 'missed';
}

export interface Match {
  _id: string;
  users: string[] | User[];
  requester: string | User;
  status: 'pending' | 'accepted' | 'rejected';
}
