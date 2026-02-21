import { Transaction, PaymentMethod } from '@/types/payment';

export const paymentsApi = {
    fetchTransactions: async (): Promise<Transaction[]> => {
        // Return mock data
        return [
            { id: 'TRX-9932', date: 'Oct 28, 2026', title: 'Plumbing Repair', type: 'payment', amount: '$120.00', status: 'completed', receiptNumber: 'RCP-55221' },
            { id: 'TRX-9931', date: 'Oct 24, 2026', title: 'Deep Cleaning', type: 'payment', amount: '$150.00', status: 'completed', receiptNumber: 'RCP-55222' },
            { id: 'TRX-9930', date: 'Oct 15, 2026', title: 'Refund - Cancelled Booking', type: 'payment', amount: '$45.00', status: 'refunded', receiptNumber: 'RCP-55223' },
        ];
    },

    processPayment: async (amount: string, connects: number): Promise<{ success: boolean }> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve({ success: true }), 1500);
        });
    },

    linkPaymentMethod: async (method: Partial<PaymentMethod>): Promise<{ success: boolean }> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve({ success: true }), 2000);
        });
    }
};
