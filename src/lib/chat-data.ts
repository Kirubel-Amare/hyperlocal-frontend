export interface Message {
    id: string;
    senderId: string;
    text: string;
    timestamp: string;
    isRead: boolean;
}

export interface ChatThread {
    id: string;
    participant: {
        id: string;
        name: string;
        avatar?: string;
        role: 'Client' | 'Professional';
        isOnline: boolean;
        lastActive: string;
    };
    lastMessage: string;
    lastTimestamp: string;
    unreadCount: number;
    messages: Message[];
}

export const mockChatThreads: ChatThread[] = [
    {
        id: "thread-1",
        participant: {
            id: "client-1",
            name: "Residential Property Mgmt",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
            role: 'Client',
            isOnline: true,
            lastActive: "Now"
        },
        lastMessage: "The building is at 45 Main St. When can you arrive?",
        lastTimestamp: "10:45 AM",
        unreadCount: 1,
        messages: [
            {
                id: "m1",
                senderId: "client-1",
                text: "Hi, I saw your proposal for the pipe burst emergency.",
                timestamp: "10:30 AM",
                isRead: true
            },
            {
                id: "m2",
                senderId: "me",
                text: "Yes, I can be there in 30 minutes. What's the exact address?",
                timestamp: "10:35 AM",
                isRead: true
            },
            {
                id: "m3",
                senderId: "client-1",
                text: "The building is at 45 Main St. When can you arrive?",
                timestamp: "10:45 AM",
                isRead: false
            }
        ]
    },
    {
        id: "thread-2",
        participant: {
            id: "client-3",
            name: "David Chen",
            role: 'Client',
            isOnline: false,
            lastActive: "2h ago"
        },
        lastMessage: "Thanks for the quote, David!",
        lastTimestamp: "Yesterday",
        unreadCount: 0,
        messages: [
            {
                id: "m4",
                senderId: "me",
                text: "I've sent over the estimate for the kitchen cabinets.",
                timestamp: "Yesterday",
                isRead: true
            },
            {
                id: "m5",
                senderId: "client-3",
                text: "Thanks for the quote, David!",
                timestamp: "Yesterday",
                isRead: true
            }
        ]
    }
];
