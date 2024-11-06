import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface AuthContextType {
  user: User | null;
  login: (credentials: { meetingId: string; password: string }) => Promise<void>;
  logout: () => void;
  updateProfile: (data: { name: string; email: string }) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (credentials: { meetingId: string; password: string }) => {
    // Mock login - replace with actual API call
    setUser({
      id: '1',
      name: 'Asif Hossain',
      email: 'asif@example.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix'
    });
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = async (data: { name: string; email: string }) => {
    // Mock update - replace with actual API call
    setUser(prev => prev ? { ...prev, ...data } : null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}