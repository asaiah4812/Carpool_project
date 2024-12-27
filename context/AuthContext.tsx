'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext } from 'react';
import useCurrentUser from '@/hooks/use-current-user.hook';
import '../flow-config'; // Import the flow-config to ensure the configuration is applied

interface AuthContextType {
    user: any;
    loggedIn: any;
    logIn: any;
    logOut: any;
    error: any;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [user, loggedIn, logIn, logOut, error] = useCurrentUser();

    return (
        <AuthContext.Provider value={{ user, loggedIn, logIn, logOut, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);