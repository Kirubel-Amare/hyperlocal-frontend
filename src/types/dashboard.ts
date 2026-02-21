import { CustomerUser, ProviderUser } from './user';

export interface DashboardStats {
    count?: number | string;
    trend?: string;
    trendUp?: boolean;
    subtitle?: string;
    amount?: string | number;
}

export interface Activity {
    id: string;
    title: string;
    subtitle: string;
    amount?: string;
    status: string;
    statusColor?: string;
    avatar: string | null;
    time?: string;
    action?: string;
    type?: string;
}

export interface CustomerDashboardData {
    user: CustomerUser;
    stats: {
        ongoingJobs: DashboardStats;
        pendingQuotes: DashboardStats;
        totalSpent: DashboardStats;
    };
    ongoingServices: Activity[];
    postedJobs: any[];
    serviceHistory: any[];
}

export interface ProviderDashboardData {
    user: ProviderUser;
    stats: {
        totalEarnings: DashboardStats;
        activeJobs: DashboardStats;
        profileViews: DashboardStats;
    };
    newRequests: Array<{
        id: string;
        title: string;
        client: string;
        duration: string;
        distance: string;
        urgency: string;
        urgencyColor?: string;
        image: string;
    }>;
    upcomingToday: Array<{
        id: string;
        time: string;
        title: string;
        location: string;
        client: string;
    }>;
}

export interface AdminDashboardData {
    stats: Array<{
        label: string;
        value: string | number;
        trend: string;
        trendUp: boolean;
        iconType: 'dollar' | 'shopping' | 'lock' | 'alert';
    }>;
    recentActivities: Array<{
        id: string;
        type: string;
        user: string;
        action: string;
        time: string;
        status: 'success' | 'warning' | 'danger';
    }>;
}
