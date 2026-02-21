'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import { CheckCircle2, AlertCircle, X, Info, AlertTriangle } from 'lucide-react'

type ToastType = 'success' | 'error' | 'info' | 'warning'

interface Toast {
    id: string
    message: string
    title?: string
    type: ToastType
}

interface ToastContextType {
    showToast: (message: string, type?: ToastType, title?: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([])

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }, [])

    const showToast = useCallback((message: string, type: ToastType = 'info', title?: string) => {
        const id = Math.random().toString(36).substr(2, 9)
        setToasts((prev) => [...prev, { id, message, type, title }])

        // Auto remove after 5 seconds
        setTimeout(() => removeToast(id), 5000)
    }, [removeToast])

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <div className="fixed bottom-8 right-8 z-[200] flex flex-col gap-3 pointer-events-none">
                {toasts.map((toast) => (
                    <ToastCard
                        key={toast.id}
                        toast={toast}
                        onClose={() => removeToast(toast.id)}
                    />
                ))}
            </div>
        </ToastContext.Provider>
    )
}

function ToastCard({ toast, onClose }: { toast: Toast, onClose: () => void }) {
    const icons = {
        success: <CheckCircle2 className="text-emerald-500" size={20} />,
        error: <AlertCircle className="text-red-500" size={20} />,
        info: <Info className="text-blue-500" size={20} />,
        warning: <AlertTriangle className="text-amber-500" size={20} />,
    }

    const bgColors = {
        success: 'border-emerald-500/20 bg-emerald-50/50',
        error: 'border-red-500/20 bg-red-50/50',
        info: 'border-blue-500/20 bg-blue-50/50',
        warning: 'border-amber-500/20 bg-amber-50/50',
    }

    return (
        <div className={`
      pointer-events-auto min-w-[320px] max-w-md
      backdrop-blur-xl border p-4 rounded-3xl shadow-2xl
      flex items-start gap-4 animate-in slide-in-from-right-full duration-500
      ${bgColors[toast.type]}
    `}>
            <div className="mt-0.5">
                {icons[toast.type]}
            </div>
            <div className="flex-1 pr-4">
                {toast.title && <h4 className="font-black text-gray-900 text-sm mb-0.5">{toast.title}</h4>}
                <p className="text-sm font-bold text-gray-600 line-clamp-2">{toast.message}</p>
            </div>
            <button
                onClick={onClose}
                className="p-1 hover:bg-gray-200/50 rounded-lg transition-colors text-gray-400 hover:text-gray-900"
            >
                <X size={16} />
            </button>
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
