import { useState } from 'react';
import Dashboard from './components/Dashboard';
import { AuthContainer } from './components/Auth/AuthContainer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <AuthContainer onAuthSuccess={() => setIsAuthenticated(true)} />
      )}
    </div>
  );
}

export default App;