export interface Client {
    id: string;
    name: string;
    location: string;
    rating: number;
    reviewsCount: number;
    totalSpent: string;
    memberSince: string;
    paymentVerified: boolean;
    activeJobs: number;
    history: string;
}

export interface Job {
    id: string;
    title: string;
    category: string;
    postedTime: string;
    description: string;
    image?: string;
    budget: {
        type: 'Fixed-price' | 'Hourly';
        amount?: string;
        minRate?: string;
        maxRate?: string;
    };
    duration: string;
    experienceLevel: 'Entry' | 'Intermediate' | 'Expert';
    skills: string[];
    client: Client;
    proposalsRange: string;
    locationType: 'On-site' | 'Remote';
    specificLocation?: string;
    distance?: string;
    coordinates?: { lat: number; lng: number };
}
