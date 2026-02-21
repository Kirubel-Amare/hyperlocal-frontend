'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import {
    CheckCircle2,
    AlertCircle,
    X,
    Info,
    AlertTriangle,
    MessageSquare,
    ShieldCheck,
    CreditCard
} from 'lucide-react'

export type ToastType = 'success' | 'error' | 'info' | 'warning' | 'message' | 'security' | 'payment'

interface Toast {
    id: string
    message: string
    title?: string
    type: ToastType
    duration?: number
}

interface ToastContextType {
    showToast: (message: string, type?: ToastType, title?: string, duration?: number) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([])

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, [])

    const showToast = useCallback((message: string, type: ToastType = 'info', title?: string, duration: number = 5000) => {
        const id = Math.random().toString(36).substr(2, 9)
        setToasts((prev) => [...prev, { id, message, type, title, duration }].slice(-5)) // Keep last 5

        setTimeout(() => removeToast(id), duration)
    }, [removeToast])

    return (
        <NotificationContextWrapper showToast={showToast}>
            {children}
            <div className="fixed bottom-8 right-8 z-[9999] flex flex-col gap-3 pointer-events-none w-full max-w-sm">
                {toasts.map((toast) => (
                    <ToastCard
                        key={toast.id}
                        toast={toast}
                        onClose={() => removeToast(toast.id)}
                    />
                ))}
            </div>
        </NotificationContextWrapper>
    )
}

// Internal wrapper to avoid circular reference if ever needed, but here just providing the context
function NotificationContextWrapper({ children, showToast }: { children: React.ReactNode, showToast: any }) {
    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
        </ToastContext.Provider>
    )
}

function ToastCard({ toast, onClose }: { toast: Toast, onClose: () => void }) {
    const icons = {
        success: <CheckCircle2 className="text-emerald-500" size={20} />,
        error: <AlertCircle className="text-red-500" size={20} />,
        info: <Info className="text-blue-500" size={20} />,
        warning: <AlertTriangle className="text-amber-500" size={20} />,
        message: <MessageSquare className="text-indigo-500" size={20} />,
        security: <ShieldCheck className="text-emerald-600" size={20} />,
        payment: <CreditCard className="text-purple-600" size={20} />,
    }

    const bgColors = {
        success: 'border-emerald-500/10 bg-emerald-50/80 backdrop-blur-xl',
        error: 'border-red-500/10 bg-red-50/80 backdrop-blur-xl',
        info: 'border-blue-500/10 bg-blue-50/80 backdrop-blur-xl',
        warning: 'border-amber-500/10 bg-amber-50/80 backdrop-blur-xl',
        message: 'border-indigo-500/10 bg-indigo-50/80 backdrop-blur-xl',
        security: 'border-emerald-600/10 bg-emerald-50 shadow-emerald-500/5',
        payment: 'border-purple-500/10 bg-purple-50/80 backdrop-blur-xl',
    }

    return (
        <div className={`
            pointer-events-auto group relative overflow-hidden
            border p-5 rounded-[2rem] shadow-2xl shadow-gray-200/20
            flex items-start gap-4 animate-in slide-in-from-right-full duration-500
            ${bgColors[toast.type]}
        `}>
            <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                {icons[toast.type]}
            </div>
            <div className="flex-1 pr-4">
                {toast.title && <h4 className="font-black text-gray-900 text-sm mb-0.5 tracking-tight uppercase tracking-widest text-[10px]">{toast.title}</h4>}
                <p className="text-xs font-bold text-gray-600 leading-relaxed">{toast.message}</p>
            </div>
            <button
                onClick={onClose}
                className="p-1 hover:bg-white rounded-lg transition-all text-gray-300 hover:text-gray-900"
            >
                <X size={16} />
            </button>

            {/* Progress line */}
            <div className="absolute bottom-0 left-0 h-1 bg-current opacity-10 w-full">
                <div
                    className="h-full bg-current opacity-30 animate-[notification-progress_linear_forwards]"
                    style={{ animationDuration: `${toast.duration || 5000}ms` }}
                />
            </div>
        </div>
    )
}

export function useToast() {
    const context = useContext(ToastContext)
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider')
    }
    return context
}
