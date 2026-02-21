export interface User {
    id: string;
    name: string;
    fullName?: string;
    avatar: string | null;
    role: string;
}

export interface CustomerUser extends User {
    upcomingJobsCount: number;
}

export interface ProviderUser extends User {
    role: string; // e.g., "Premier Cleaning Pro"
    newRequestsCount: number;
}

// Legacy support (to be refactored)
export interface UserAccount {
    name: string;
    avatar?: string;
    quotesLeft: number;
    membershipType: string;
    totalEarnings: string;
    activeProposals: number;
    rating: number;
}
