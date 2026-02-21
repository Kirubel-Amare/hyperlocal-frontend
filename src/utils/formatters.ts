/**
 * Currency Formatter
 * @param amount - Number or string amount
 * @returns Formatted currency string (e.g., $1,240.00)
 */
export const formatCurrency = (amount: number | string): string => {
    const value = typeof amount === 'string' ? parseFloat(amount.replace(/[^0-9.-]+/g, "")) : amount;
    if (isNaN(value)) return '$0.00';
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(value);
};

/**
 * Date Formatter (e.g., "Jan 12, 2024")
 */
export const formatDate = (date: Date | string | number): string => {
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    }).format(new Date(date));
};

/**
 * Relative Time Formatter (e.g., "2 hours ago")
 */
export const formatRelativeTime = (date: Date | string | number): string => {
    const now = new Date();
    const diff = now.getTime() - new Date(date).getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 7) return formatDate(date);
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'Just now';
};

/**
 * Distance Formatter (e.g., "0.8 mi")
 */
export const formatDistance = (miles: number): string => {
    return `${miles.toFixed(1)} mi`;
};
