import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface User {
    ID: number;
    Username: string;
    Email: string;
    Active: boolean;
    CreatedAt: Date;
    UpdatedAt: Date;
}

interface AuthState {
    isAuthenticated: boolean;
    accessToken?: string;
    error: Error | null;
    user?: User;
    isLoading: Boolean;
}

interface AuthContextType {
    authState: AuthState;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [accessToken, setAccessToken] = useState<string | undefined>();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const storedAccessToken = localStorage.getItem('token');
        if (storedAccessToken) {
            setAccessToken(storedAccessToken);
        } else {
            setAccessToken("UNDEFINED")
        }
    }, []);

    const { data, isLoading: _isLoading, isFetching, error } = useQuery<{ user: User, error: string }, Error>({
        queryKey: ['checkAuth', accessToken],
        queryFn: async () => {
            const response = await axios.get<{ user: User, error: string }>(
                'http://localhost:8080/api/v1/auth/logged-in',
                {
                    headers: {
                        'Authorization': `Bearer ${accessToken?.trim()}`,
                    },
                }
            );
            if (!response.data.user) {
                throw new Error(response.data.error || 'Authentication failed');
            }
            return response.data;
        },
        enabled: !!accessToken
    });

    useEffect(() => {
        if (accessToken) {
            setIsLoading(_isLoading)
        }
    }, [_isLoading, accessToken])


    const isAuthenticated = data?.user ? true : false;

    useEffect(() => {
        console.log("IS_LOADING", isLoading, isFetching)
    }, [isLoading])

    return (
        <AuthContext.Provider value={{
            authState: {
                isAuthenticated,
                accessToken,
                error: error || null,
                user: data?.user,
                isLoading: isLoading
            }
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
