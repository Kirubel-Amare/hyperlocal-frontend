'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { User } from '@/types/user'
import { ROLES } from '@/constants/roles'

interface AuthContextType {
    user: User | null
    isAuthenticated: boolean
    isLoading: boolean
    login: (role: string) => Promise<void>
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate checking for existing session
        const checkAuth = async () => {
            await new Promise(resolve => setTimeout(resolve, 500))
            // For now, no user by default
            setIsLoading(false)
        }
        checkAuth()
    }, [])

    const login = async (role: string) => {
        setIsLoading(true)
        // Simulate login
        await new Promise(resolve => setTimeout(resolve, 800))
        const mockUser: User = {
            id: 'u-1',
            name: 'Alex',
            fullName: 'Alex Rivera',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexR',
            role: role
        }
        setUser(mockUser)
        setIsLoading(false)
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
