export type TransactionType = 'deposit' | 'withdrawal' | 'fee' | 'payment';
export type TransactionStatus = 'completed' | 'processing' | 'failed' | 'refunded';

export interface Transaction {
    id: string;
    title: string;
    type: TransactionType;
    date: string;
    amount: string;
    status: TransactionStatus;
    paymentMethod?: string;
    receiptNumber: string;
    taxAmount?: string;
    platformFee?: string;
}

export interface PaymentMethod {
    id: string;
    type: string;
    last4: string;
    expiry: string;
    isDefault: boolean;
    brand: 'visa' | 'mastercard' | 'amex' | 'bank';
}
