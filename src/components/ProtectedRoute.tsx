import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/components/AuthProvider';
import { Loader2 } from 'lucide-react';

interface ProtectedRouteProps {
  children: ReactNode;
  requiredUserType?: 'client' | 'provider' | 'admin';
}

const ProtectedRoute = ({ children, requiredUserType }: ProtectedRouteProps) => {
  const { user, profile, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!user || !profile) {
        navigate('/login');
        return;
      }

      if (requiredUserType && profile.user_type !== requiredUserType) {
        // Redirect to appropriate dashboard based on user type
        const route = profile.user_type === 'client' ? '/client/dashboard' : '/provider/dashboard';
        navigate(route);
        return;
      }
    }
  }, [user, profile, loading, requiredUserType, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !profile) {
    return null;
  }

  if (requiredUserType && profile.user_type !== requiredUserType) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;