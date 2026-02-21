export interface ServiceRequest {
    id: string;
    customerName: string;
    customerAvatar?: string;
    title: string;
    description: string;
    category: string;
    urgency: 'low' | 'medium' | 'high' | 'urgent';
    budget: string;
    location: string;
    postedAt: string;
    connectsRequired: number;
    status: 'open' | 'closed' | 'in-progress';
}

export interface Quote {
    id: string;
    requestId: string;
    providerId: string;
    pitch: string;
    price: string;
    timeline: string;
    status: 'pending' | 'accepted' | 'rejected';
    createdAt: string;
}
