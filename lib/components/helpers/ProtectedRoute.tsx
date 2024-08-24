import { ReactNode, useEffect } from 'react';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { SignInPage } from '../SignIn';
import LoadingPage from './LoadingPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface ProtectedRouteProps {
    children: ReactNode;
    loginUrl?: string
}

const _ProtectedRoute = ({ children, loginUrl = "/" }: ProtectedRouteProps) => {
    const { authState } = useAuth();
    useEffect(() => {
        console.log(authState)
    }, [authState])

    // Check if the user is authenticated
    if (authState.isLoading) {
        return <LoadingPage />; // Optionally show a loading state
    }

    if (!authState.isAuthenticated) {
        if (loginUrl) {
            window.location.href = window.location.origin + loginUrl
        } else {
            return <SignInPage callbackUrl='callback' />
        }
    }

    // Render the children if authenticated
    return <>{children}</>;
};


export const ProtectedRoute = ({ children, loginUrl }: ProtectedRouteProps) => {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <_ProtectedRoute children={children} loginUrl={loginUrl} />
            </AuthProvider>
        </QueryClientProvider>
    );
}
