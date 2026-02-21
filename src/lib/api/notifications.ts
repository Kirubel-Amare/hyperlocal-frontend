import { Notification } from '@/types/notification';

export const notificationsApi = {
    fetchNotifications: async (): Promise<Notification[]> => {
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

    markAsRead: async (id: string): Promise<{ success: boolean }> => {
        return { success: true };
    }
};
