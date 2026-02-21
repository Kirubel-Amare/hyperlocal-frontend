export type NotificationType = 'info' | 'success' | 'warning' | 'error' | 'job_alert';

export interface Notification {
    id: string;
    title: string;
    message: string;
    type: NotificationType;
    read: boolean;
    createdAt: string;
    link?: string;
}
