export const ROUTES = {
    HOME: '/',
    AUTH: {
        LOGIN: '/login',
        REGISTER: '/register',
    },
    CUSTOMER: {
        DASHBOARD: '/customer/dashboard',
        REQUEST: '/customer/request',
        PROFILE: '/customer/profile',
    },
    PROVIDER: {
        DASHBOARD: '/provider/dashboard',
        PROFILE: '/provider/profile',
        EDIT_PROFILE: '/provider/profile/edit',
    },
    ADMIN: {
        DASHBOARD: '/admin/dashboard',
    },
    JOBS: '/jobs',
    MESSAGES: '/messages',
} as const;
