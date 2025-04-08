'use client'
import { AuthProvider } from '@/context/AuthContext';
import React, { ReactNode } from 'react'

interface ProvidersProps {
    children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
}