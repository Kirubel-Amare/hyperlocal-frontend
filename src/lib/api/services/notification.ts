import { Notification } from '@/types/notification';

/**
 * Notification Service
 * Standardized service for managing user and system notifications.
 */
export const notificationService = {
    async fetchNotifications(): Promise<Notification[]> {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 300));

        return [
            {
                id: '1',
                title: 'New Service Request',
                message: 'A new plumbing request was posted in your area.',
                type: 'info',
                read: false,
                createdAt: new Date().toISOString()
            },
            {
                id: '2',
                title: 'Quote Accepted',
                message: 'Your quote for "Kitchen Deep Clean" was accepted!',
                type: 'success',
                read: true,
                createdAt: new Date(Date.now() - 86400000).toISOString()
            }
        ];
    },

    async markAsRead(id: string): Promise<{ success: boolean }> {
        await new Promise(resolve => setTimeout(resolve, 200));
        return { success: true };
    }
};
