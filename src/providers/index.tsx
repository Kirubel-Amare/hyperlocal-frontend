'use client'

import React from 'react'
import AuthProvider from './AuthProvider'
import ThemeProvider from './ThemeProvider'
import { ToastProvider } from './ToastProvider'

export function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <AuthProvider>
                <ToastProvider>
                    {children}
                </ToastProvider>
            </AuthProvider>
        </ThemeProvider>
    )
}
