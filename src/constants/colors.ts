export const COLORS = {
    primary: '#1E7B7C',
    primaryDark: '#166566',
    primaryLight: '#E8F4F4',
    secondary: '#F59E0B', // Amber
    success: '#10B981',   // Emerald
    danger: '#EF4444',    // Red
    info: '#3B82F6',      // Blue
    white: '#FFFFFF',
    gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        400: '#9CA3AF',
        500: '#6B7280',
        900: '#111827',
    }
} as const;

export const GRADIENTS = {
    primary: 'from-[#1E7B7C] to-[#166566]',
    glass: 'bg-white/60 backdrop-blur-md',
} as const;
