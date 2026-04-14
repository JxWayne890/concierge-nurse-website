import { Navigate } from 'react-router-dom';
import { useAuth } from '../lib/AuthContext';

export default function ProtectedRoute({ children }) {
  const session = useAuth();

  // Still loading
  if (session === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <p className="text-slate text-sm">Loading...</p>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
