import { customerDashboardData, providerDashboardData } from '@/lib/mock-dashboards'
import { CustomerDashboardData, ProviderDashboardData, AdminDashboardData } from '@/types/dashboard'

/**
 * Dashboard Service
 * Currently returns mock data, but structured to use the API client once endpoints are ready.
 */

export const dashboardService = {
    async getCustomerData(): Promise<CustomerDashboardData> {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500))
        return customerDashboardData as unknown as CustomerDashboardData
    },

    async getProviderData(): Promise<ProviderDashboardData> {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500))
        return providerDashboardData as unknown as ProviderDashboardData
    },

    async getAdminData(): Promise<AdminDashboardData> {
        await new Promise(resolve => setTimeout(resolve, 500))
        return {
            stats: [
                { label: 'Total Revenue', value: '$124,592.00', trend: '+12.5%', trendUp: true, iconType: 'dollar' },
                { label: 'Active Providers', value: '1,284', trend: '+5.2%', trendUp: true, iconType: 'shopping' },
                { label: 'Funds in Escrow', value: '$18,420.00', trend: '+2.4%', trendUp: true, iconType: 'lock' },
                { label: 'Active Disputes', value: '12', trend: '-2.4%', trendUp: false, iconType: 'alert' },
            ],
            recentActivities: [
                { id: '1', type: 'registration', user: 'Mark Wilson', action: 'registered as a Provider', time: '2 mins ago', status: 'success' },
                { id: '2', type: 'payment', user: 'Sarah Miller', action: 'received a $250.00 payment', time: '15 mins ago', status: 'success' },
                { id: '3', type: 'dispute', user: 'John Doe', action: 'opened a dispute for Job #8492', time: '1 hour ago', status: 'warning' },
                { id: '4', type: 'job', user: 'Emma Davis', action: 'completed "Deep House Cleaning"', time: '3 hours ago', status: 'success' },
                { id: '5', type: 'review', user: 'Michael Chen', action: 'left a 5-star review for Sparkle Cleaners', time: '5 hours ago', status: 'success' },
            ]
        }
    }
}
