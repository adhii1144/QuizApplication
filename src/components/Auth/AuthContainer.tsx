import { useState } from 'react';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';

interface AuthContainerProps {
  onAuthSuccess: () => void;
}

export function AuthContainer({ onAuthSuccess }: AuthContainerProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const handleLogin = async (meetingId: string, password: string) => {
    try {
      await login({ meetingId, password });
      onAuthSuccess();
    } catch (err) {
      setError('Failed to login');
    }
  };

  const handleSignup = async (email: string, password: string, name: string) => {
    try {
      if (email && password && name) {
        setIsLogin(true);
        setError('Account created! Please log in.');
      } else {
        setError('Please fill in all fields');
      }
    } catch (err) {
      setError('Failed to create account');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <AnimatePresence mode="wait">
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence mode="wait">
        {isLogin ? (
          <LoginForm
            key="login"
            onLogin={handleLogin}
            onSwitchToSignup={() => setIsLogin(false)}
          />
        ) : (
          <SignupForm
            key="signup"
            onSignup={handleSignup}
            onSwitchToLogin={() => setIsLogin(true)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}