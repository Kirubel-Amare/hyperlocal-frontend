import { Quote } from '@/types/quote';

export const quotesApi = {
    submitQuote: async (quoteData: Partial<Quote>): Promise<{ success: boolean }> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve({ success: true }), 2000);
        });
    },

    fetchQuotes: async (providerId: string): Promise<Quote[]> => {
        return [
            {
                id: 'Q-001',
                jobId: 'job-1',
                providerId,
                pitch: 'I have 5 years of experience in emergency plumbing.',
                price: '$350',
                timeline: '2 hours',
                status: 'pending',
                createdAt: new Date().toISOString()
            }
        ];
    }
};
