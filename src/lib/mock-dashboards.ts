export const customerDashboardData = {
    user: {
        name: "Alex",
        fullName: "Alex Rivera",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AlexR",
        upcomingJobsCount: 4,
    },
    stats: {
        ongoingJobs: {
            count: 4,
            trend: "+1 this week",
            trendUp: true,
        },
        pendingQuotes: {
            count: 12,
            subtitle: "3 require action",
        },
        totalSpent: {
            amount: "$1,240",
            subtitle: "Past 30 days",
        },
    },
    ongoingServices: [
        {
            id: "os-1",
            title: "Emergency Pipe Repair",
            status: "In Progress",
            type: "Kitchen Sink",
            provider: {
                name: "Sarah Jenkins",
                role: "Pro-Rated Plumber",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SarahJ",
            },
            timing: {
                label: "EST. COMPLETION",
                value: "Today, 4:30 PM",
            },
            actionText: "Message",
            secondaryActionText: "View Details",
        },
        {
            id: "os-2",
            title: "Full House Deep Clean",
            status: "Pending",
            type: "3 Bedroom Apt",
            provider: {
                name: "Awaiting Provider",
                role: "8 Bids Received",
                avatar: null, // Shows gray placeholder
            },
            timing: {
                label: "BUDGET",
                value: "$180 - $220",
            },
            actionText: "Review Bids (8)",
            secondaryActionText: "Manage Job",
            isPending: true,
        },
        {
            id: "os-3",
            title: "Garden Landscaping",
            status: "Scheduled",
            statusColor: "bg-purple-100 text-purple-700",
            type: "Backyard",
            provider: {
                name: "Marcus Thorne",
                role: "Top Rated Landscaper",
                avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusT",
            },
            timing: {
                label: "STARTS",
                value: "Tomorrow, 9:00 AM",
            },
            fee: "Service Fee: $120.00",
            feeStatus: "Paid",
            actionText: "Message",
            secondaryActionText: "Invoice",
        },
    ],
    postedJobs: [] as any[],
    serviceHistory: [] as any[],
};

export const providerDashboardData = {
    user: {
        name: "Alex Johnson",
        role: "Premier Cleaning Pro",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AlexJ",
        newRequestsCount: 3,
    },
    stats: {
        totalEarnings: {
            amount: "$2,450.00",
            trend: "+12.5%",
            trendUp: true,
        },
        activeJobs: {
            count: "4 Ongoing",
            subtitle: "Next appointment in 2h",
            trend: null,
        },
        profileViews: {
            count: "128",
            trend: "+5.2%",
            trendUp: true,
        },
    },
    newRequests: [
        {
            id: "nr-1",
            title: "Deep Kitchen Cleaning",
            client: "Sarah Miller",
            duration: "2 hours estimated",
            distance: "2.4 miles away",
            urgency: "URGENT",
            image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&h=300&fit=crop",
        },
        {
            id: "nr-2",
            title: "Standard Weekly Tidying",
            client: "James Wilson",
            duration: "3 hours estimated",
            distance: "0.8 miles away",
            urgency: "REPEAT CLIENT",
            urgencyColor: "bg-[#E8F4F4] text-[#166566]",
            image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=300&fit=crop",
        },
    ],
    upcomingToday: [
        {
            id: "ut-1",
            time: "10 AM",
            title: "Bathroom Detailing",
            location: "122 Oak Street",
            client: "Sarah M.",
        },
        {
            id: "ut-2",
            time: "02 PM",
            title: "Window Cleaning",
            location: "45 Park Lane",
            client: "David K.",
        },
    ],
};
