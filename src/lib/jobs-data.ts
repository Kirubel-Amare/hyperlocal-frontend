export type { Client, Job } from '@/types/job';
export type { UserAccount } from '@/types/user';

export const mockUserAccount: UserAccount = {
    name: "Kirubel Amare",
    quotesLeft: 45,
    membershipType: "Pro Member",
    totalEarnings: "$4,250",
    activeProposals: 3,
    rating: 4.9
};

export const mockJobsData: Record<string, Job> = {
    "job-1": {
        id: "job-1",
        title: "Emergency Pipe Burst - Kitchen Flood",
        category: "Plumbing",
        postedTime: "15 minutes ago",
        image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=400&fit=crop",
        description: "Urgently need a licensed plumber to fix a burst pipe under the kitchen sink. Water is currently turned off but need immediate repair to restore kitchen use. \n\nLooking for someone who can arrive within the next 2 hours. Must have tools and replacement piping.",
        budget: {
            type: "Fixed-price",
            amount: "$350"
        },
        duration: "Less than 1 day",
        experienceLevel: "Expert",
        skills: ["Plumbing Repair", "Emergency Service", "Leak Detection", "Pipe Installation"],
        proposalsRange: "0 to 5",
        locationType: "On-site",
        specificLocation: "Downtown, Manhattan",
        distance: "0.2 miles away",
        coordinates: { lat: 40.7128, lng: -74.0060 },
        client: {
            id: "client-1",
            name: "Residential Property Mgmt",
            location: "New York, NY",
            rating: 4.9,
            reviewsCount: 156,
            totalSpent: "$50k+",
            memberSince: "Jan 2020",
            paymentVerified: true,
            activeJobs: 4,
            history: "140 jobs posted, 95% hire rate"
        }
    },
    "job-2": {
        id: "job-2",
        title: "Full Garden Restoration & Landscaping",
        category: "Gardening",
        postedTime: "3 hours ago",
        image: "https://images.unsplash.com/photo-1592150621344-8245559903e4?w=800&h=400&fit=crop",
        description: "Seeking a professional landscaper to revitalize a large backyard. The job includes weed removal, lawn seeding, hedge trimming, and planting new seasonal flowers. \n\nWe would also like advice on installing a small rock garden or water feature.",
        budget: {
            type: "Hourly",
            minRate: "$40",
            maxRate: "$65"
        },
        duration: "1 to 2 weeks",
        experienceLevel: "Intermediate",
        skills: ["Landscaping", "Garden Design", "Hedge Trimming", "Planting", "Power Washing"],
        proposalsRange: "10 to 15",
        locationType: "On-site",
        specificLocation: "Greenwich, CT",
        distance: "5.4 miles away",
        coordinates: { lat: 41.0262, lng: -73.6282 },
        client: {
            id: "client-2",
            name: "The Miller Family",
            location: "Greenwich, CT",
            rating: 5.0,
            reviewsCount: 8,
            totalSpent: "$2.5k+",
            memberSince: "May 2023",
            paymentVerified: true,
            activeJobs: 1,
            history: "5 jobs posted, 100% hire rate"
        }
    },
    "job-3": {
        id: "job-3",
        title: "Deep Cleaning for 3-Bedroom Apartment",
        category: "Cleaning",
        postedTime: "5 hours ago",
        description: "Looking for a detailed-oriented cleaner for a move-out deep clean. \n\nTasks include:\n- Inside oven and fridge\n- Windows and blinds\n- Steam cleaning carpets\n- Scrubbing bathrooms\n\nPlease bring your own eco-friendly cleaning supplies.",
        budget: {
            type: "Fixed-price",
            amount: "$280"
        },
        duration: "1 day",
        experienceLevel: "Intermediate",
        skills: ["Deep Cleaning", "Eco-friendly Products", "Steam Cleaning", "Attention to Detail"],
        proposalsRange: "15 to 20",
        locationType: "On-site",
        specificLocation: "Williamsburg, Brooklyn",
        distance: "1.8 miles away",
        coordinates: { lat: 40.7128, lng: -73.9626 },
        client: {
            id: "client-3",
            name: "David Chen",
            location: "Brooklyn, NY",
            rating: 4.7,
            reviewsCount: 22,
            totalSpent: "$8k+",
            memberSince: "Nov 2021",
            paymentVerified: true,
            activeJobs: 0,
            history: "18 jobs posted, 85% hire rate"
        }
    },
    "job-4": {
        id: "job-4",
        title: "Tesla Wall Connector Installation",
        category: "Electrical",
        postedTime: "1 hour ago",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=400&fit=crop",
        description: "Looking for a certified electrician to install a Tesla Gen 3 Wall Connector in my garage. The circuit panel has space, but will require a new 60A breaker and about 20ft of conduit routing. \n\nPlease provide licensing info in your proposal.",
        budget: {
            type: "Fixed-price",
            amount: "$450"
        },
        duration: "1 day",
        experienceLevel: "Expert",
        skills: ["EV Charger Installation", "Electrical Panel", "Conduit Routing", "Safety Inspection"],
        proposalsRange: "5 to 10",
        locationType: "On-site",
        specificLocation: "Santa Monica, CA",
        distance: "12.5 miles away",
        coordinates: { lat: 34.0195, lng: -118.4912 },
        client: {
            id: "client-4",
            name: "Sarah Jenkins",
            location: "Santa Monica, CA",
            rating: 5.0,
            reviewsCount: 3,
            totalSpent: "$1.2k+",
            memberSince: "Feb 2024",
            paymentVerified: true,
            activeJobs: 1,
            history: "3 jobs posted, 100% hire rate"
        }
    },
    "job-5": {
        id: "job-5",
        title: "Living Room & Entryway Interior Painting",
        category: "Painting",
        postedTime: "6 hours ago",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=400&fit=crop",
        description: "Need two coats of paint for a standard living room and entryway. Total area is approximately 450 sq ft. We have already purchased the paint (Benjamin Moore Regal Select). \n\nLooking for someone who is meticulous with taping and floor protection.",
        budget: {
            type: "Fixed-price",
            amount: "$600"
        },
        duration: "2 to 3 days",
        experienceLevel: "Intermediate",
        skills: ["Interior Painting", "Wall Preparation", "Surface Protection", "Trim Painting"],
        proposalsRange: "10 to 15",
        locationType: "On-site",
        specificLocation: "Austin, TX",
        distance: "3.2 miles away",
        coordinates: { lat: 30.2672, lng: -97.7431 },
        client: {
            id: "client-5",
            name: "Mark Thompson",
            location: "Austin, TX",
            rating: 4.8,
            reviewsCount: 12,
            totalSpent: "$4k+",
            memberSince: "Sep 2022",
            paymentVerified: true,
            activeJobs: 0,
            history: "10 jobs posted, 90% hire rate"
        }
    },
    "job-6": {
        id: "job-6",
        title: "Central AC Annual Maintenance & Filter Swap",
        category: "HVAC",
        postedTime: "8 hours ago",
        description: "Seeking an HVAC technician to perform seasonal maintenance on a Carrier central air system. \n\nTasks include:\n- Cleaning condenser coils\n- Checking refrigerant levels\n- Replacing primary and secondary filters\n- Checking thermostat calibration",
        budget: {
            type: "Hourly",
            minRate: "$80",
            maxRate: "$120"
        },
        duration: "Less than 1 day",
        experienceLevel: "Intermediate",
        skills: ["HVAC Maintenance", "Cooling Systems", "Troubleshooting", "System Performance"],
        proposalsRange: "2 to 5",
        locationType: "On-site",
        specificLocation: "Miami, FL",
        distance: "8.7 miles away",
        coordinates: { lat: 25.7617, lng: -80.1918 },
        client: {
            id: "client-6",
            name: "Coconut Grove Estates",
            location: "Miami, FL",
            rating: 4.6,
            reviewsCount: 45,
            totalSpent: "$25k+",
            memberSince: "Oct 2019",
            paymentVerified: true,
            activeJobs: 2,
            history: "35 jobs posted, 80% hire rate"
        }
    },
    "job-7": {
        id: "job-7",
        title: "Daily Mid-day Dog Walking (Golden Retriever)",
        category: "Pet Care",
        postedTime: "12 hours ago",
        image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&h=400&fit=crop",
        description: "Looking for a reliable dog walker for our 2-year-old Golden Retriever, Cooper. \n\nNeed 30-45 minute walks every weekday between 12:00 PM and 2:00 PM. Cooper is very friendly but energetic. Someone with experience with large breeds preferred.",
        budget: {
            type: "Hourly",
            minRate: "$25",
            maxRate: "$35"
        },
        duration: "Ongoing",
        experienceLevel: "Entry",
        skills: ["Dog Walking", "Pet Behavior", "Large Breed Experience", "Punctuality"],
        proposalsRange: "20+",
        locationType: "On-site",
        specificLocation: "Lincoln Park, Chicago",
        distance: "2.1 miles away",
        coordinates: { lat: 41.9214, lng: -87.6513 },
        client: {
            id: "client-7",
            name: "Emily Watson",
            location: "Chicago, IL",
            rating: 5.0,
            reviewsCount: 5,
            totalSpent: "$800",
            memberSince: "Dec 2023",
            paymentVerified: true,
            activeJobs: 0,
            history: "4 jobs posted, 100% hire rate"
        }
    }
};
