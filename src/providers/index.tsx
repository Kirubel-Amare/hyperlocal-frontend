'use client'

import React from 'react'
import AuthProvider from './AuthProvider'
import ThemeProvider from './ThemeProvider'
import { ToastProvider } from './ToastProvider'
import { LanguageProvider } from '@/i18n/LanguageContext'

export function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            <ThemeProvider>
                <AuthProvider>
                    <ToastProvider>
                        {children}
                    </ToastProvider>
                </AuthProvider>
            </ThemeProvider>
        </LanguageProvider>
    )
}
