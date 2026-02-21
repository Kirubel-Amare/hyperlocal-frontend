'use client'

import { useState, useEffect } from 'react'
import { profileService } from '@/lib/api/services/profile'

/**
 * useProfile Hook
 * Manages profile state, loading, and updates.
 */

export function useProfile(id: string) {
    const [profile, setProfile] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const fetchProfile = async () => {
            setLoading(true)
            try {
                const result = await profileService.getProviderProfile(id)
                setProfile(result)
            } catch (err) {
                setError(err instanceof Error ? err : new Error('Failed to fetch profile'))
            } finally {
                setLoading(false)
            }
        }

        fetchProfile()
    }, [id])

    const updateProfile = async (data: any) => {
        try {
            const result = await profileService.updateProfile(id, data)
            if (result.success) {
                setProfile({ ...profile, ...data })
            }
            return result
        } catch (err) {
            throw err
        }
    }

    return { profile, loading, error, updateProfile }
}
