export const STATUSES = {
    IN_PROGRESS: 'In Progress',
    PENDING: 'Pending',
    COMPLETED: 'Completed',
    URGENT: 'Urgent',
    NORMAL: 'Normal',
} as const;

export const STATUS_COLORS = {
    [STATUSES.IN_PROGRESS]: 'bg-blue-50 text-blue-600',
    [STATUSES.PENDING]: 'bg-amber-50 text-amber-600',
    [STATUSES.COMPLETED]: 'bg-emerald-50 text-emerald-600',
    [STATUSES.URGENT]: 'bg-red-50 text-red-500',
} as const;
