'use client'

import { useState, useEffect } from 'react'
import { dashboardService } from '@/lib/api/services/dashboard'
import { ROLES, Role } from '@/constants/roles'

/**
 * useDashboard Hook
 * Manages dashboard state, loading, and errors.
 */

export function useDashboard<T>(role: Role) {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                let result: any
                if (role === ROLES.CUSTOMER) {
                    result = await dashboardService.getCustomerData()
                } else if (role === ROLES.PROVIDER) {
                    result = await dashboardService.getProviderData()
                } else if (role === ROLES.ADMIN) {
                    result = await dashboardService.getAdminData()
                }

                if (result) {
                    setData(result as T)
                }
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Unknown error'))
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [role])

    return { data, loading, error, refresh: () => { } }
}
