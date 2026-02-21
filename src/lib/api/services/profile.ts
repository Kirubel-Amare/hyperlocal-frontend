import { providerDashboardData } from '@/lib/mock-dashboards'

/**
 * Profile Service
 * Handles user and provider profile data fetching.
 */

export const profileService = {
    async getProviderProfile(id: string) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500))
        // Currently returning user from providerDashboardData as mock
        return providerDashboardData.user
    },

    async updateProfile(id: string, data: any) {
        await new Promise(resolve => setTimeout(resolve, 800))
        return { success: true, data }
    }
}
