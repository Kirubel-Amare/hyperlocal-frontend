export type QuoteStatus = 'pending' | 'accepted' | 'rejected' | 'withdrawn';

export interface Quote {
    id: string;
    jobId: string;
    providerId: string;
    pitch: string;
    price: string;
    timeline: string;
    status: QuoteStatus;
    createdAt: string;
}
