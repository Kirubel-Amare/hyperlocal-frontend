import { ReactNode } from "react"

export interface Review {
  id: string
  author: string
  authorInitials?: string
  authorAvatar?: string // Added for consistency with ReviewsSection
  rating: number
  comment?: string // Original had comment
  text?: string    // New mock uses text
  date: string
  avatar?: string  // Keeping for backward compatibility
  helpful?: number
  verified?: boolean
}

export interface Service {
  location?: ReactNode
  distance?: number
  id: string
  name: string
  provider: string
  rating: number
  totalReviews: number
  price: number
  image: string
  category: string
  description: string
  fullDescription: string
  role?: string
  availability: string[]
  reviews: Review[]
  providerImage: string
  providerBio: string
  tags: string[]
}

export const servicesData: Record<string, Service[]> = {
  all: [
    {
      id: 'all-1',
      name: 'Sarah Jenkins',
      role: 'MASTER PLUMBER & PIPE SPECIALIST',
      provider: 'Sarah Jenkins',
      rating: 4.9,
      totalReviews: 128,
      price: 45,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop',
      category: 'plumbing',
      description: 'Expert residential plumbing, emergency repairs, and full bathroom remodels.',
      fullDescription: 'Expert residential plumbing, emergency repairs, and full bathroom remodels.',
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahJ',
      providerBio: 'Licensed master plumber with 15 years experience.',
      tags: ['Licensed', 'Emergency Service'],
      reviews: [],
      distance: 1.2
    },
    {
      id: 'all-2',
      name: 'Marcus Chen',
      role: 'IT & TECH SUPPORT SPECIALIST',
      provider: 'Marcus Chen',
      rating: 5.0,
      totalReviews: 84,
      price: 60,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop',
      category: 'technical-help',
      description: 'On-site computer repair, Wi-Fi optimization, and smart home setup.',
      fullDescription: 'On-site computer repair, Wi-Fi optimization, and smart home setup.',
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
      providerBio: 'Tech support specialist.',
      tags: ['IT Support', 'Smart Home'],
      reviews: [],
      distance: 0.8
    },
    {
      id: 'all-3',
      name: 'Elena Rodriguez',
      role: 'DEEP CLEANING PROFESSIONAL',
      provider: 'Elena Rodriguez',
      rating: 4.7,
      totalReviews: 210,
      price: 35,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop',
      category: 'cleaning',
      description: 'Eco-friendly home cleaning specializing in move-in/move-out.',
      fullDescription: 'Eco-friendly home cleaning.',
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena',
      providerBio: 'Professional cleaner.',
      tags: ['Eco-friendly', 'Deep Cleaning'],
      reviews: [],
      distance: 2.5
    },
    {
      id: 'all-4',
      name: 'David Wilson',
      role: 'ELECTRICIAN & ENERGY CONSULTANT',
      provider: 'David Wilson',
      rating: 4.8,
      totalReviews: 56,
      price: 55,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop',
      category: 'electrical',
      description: 'Circuit repair, lighting installation, and energy efficiency audits for homes.',
      fullDescription: 'Circuit repair, lighting installation, and energy efficiency audits for homes.',
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
      providerBio: 'Licensed electrician.',
      tags: ['Licensed', 'Energy Audits'],
      reviews: [],
      distance: 4.1
    },
    {
      id: 'all-5',
      name: 'Maya Johnson',
      role: 'PERSONAL FITNESS TRAINER',
      provider: 'Maya Johnson',
      rating: 4.9,
      totalReviews: 142,
      price: 30,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop',
      category: 'personal-care',
      description: 'Certified trainer focusing on strength building and mobility. In-home and...',
      fullDescription: 'Certified trainer focusing on strength building and mobility.',
      availability: ['Mon', 'Wed', 'Fri'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maya',
      providerBio: 'Certified fitness trainer.',
      tags: ['Fitness', 'Trainer'],
      reviews: [],
      distance: 1.5
    },
    {
      id: 'all-6',
      name: 'James Miller',
      role: 'PROFESSIONAL LANDSCAPER',
      provider: 'James Miller',
      rating: 4.6,
      totalReviews: 97,
      price: 40,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop',
      category: 'gardening',
      description: 'Garden maintenance, lawn mowing, and seasonal cleanup. Reliable and...',
      fullDescription: 'Garden maintenance, lawn mowing, and seasonal cleanup.',
      availability: ['Tue', 'Thu', 'Sat'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
      providerBio: 'Professional Landscaper.',
      tags: ['Landscaping', 'Garden'],
      reviews: [],
      distance: 3.2
    }
  ],
  plumbing: [
    {
      id: 'plumb-1',
      name: 'Emergency Pipe Repair & Installation',
      provider: 'John Michaels',
      rating: 4.9,
      totalReviews: 234,
      price: 85,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop',
      category: 'Plumbing',
      description: 'Professional plumbing services for all your needs',
      fullDescription: 'Expert plumbing services with 15 years of experience. Specializing in emergency repairs, pipe installations, and fixture replacements. Available 24/7 for emergency calls.',
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
      providerBio: 'Licensed plumber with over 15 years of experience. Certified and insured.',
      tags: ['Licensed', '24/7 Available', 'Emergency Service', 'Affordable'],
      reviews: [
        {
          id: 'r1',
          author: 'Sarah J.',
          rating: 5,
          comment: 'Excellent work! Fixed our leak quickly and professionally.',
          date: '2024-02-10',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
        },
        {
          id: 'r2',
          author: 'Mike T.',
          rating: 4,
          comment: 'Great service, very professional. Would recommend!',
          date: '2024-02-08',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike'
        }
      ],
      location: undefined,
      distance: undefined
    },
    {
      id: 'plumb-2',
      name: 'Drain Cleaning & Unclogging',
      provider: 'Bob Johnson',
      rating: 4.8,
      totalReviews: 189,
      price: 120,
      image: 'https://images.unsplash.com/photo-1607489767569-3b7380d63800?w=500&h=500&fit=crop',
      category: 'Plumbing',
      description: 'Fast and effective drain unclogging services',
      fullDescription: 'Professional drain cleaning using state-of-the-art equipment. We clear clogs quickly without damaging your pipes.',
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
      providerBio: 'Drainage specialist with 12 years of experience.',
      tags: ['Expert', 'Quick Service', 'Equipment Provided'],
      reviews: [
        {
          id: 'r3',
          author: 'Emma L.',
          rating: 5,
          comment: 'Fast service and professional. Highly recommend!',
          date: '2024-02-12',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
        }
      ],
      location: undefined,
      distance: undefined
    },
    {
      id: 'plumb-3',
      name: 'Water Heater Installation & Repair',
      provider: 'James Wilson',
      rating: 4.7,
      totalReviews: 156,
      price: 150,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop',
      category: 'Plumbing',
      description: 'Water heater services and maintenance',
      fullDescription: 'Expert installation and repair of water heaters. Serving all brands and types.',
      availability: ['Mon', 'Wed', 'Thu', 'Fri', 'Sat'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
      providerBio: 'Licensed water heater specialist.',
      tags: ['All Brands', 'Installation', 'Repair'],
      reviews: [],
      location: undefined,
      distance: undefined
    },
    {
      id: 'plumb-4',
      name: 'Bathroom Fixture Installation',
      provider: 'David Smith',
      rating: 4.6,
      totalReviews: 142,
      price: 95,
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop',
      category: 'Plumbing',
      description: 'Professional bathroom fixture installation',
      fullDescription: 'Sink, toilet, and shower installation services. We handle everything from simple replacements to complex renovations.',
      availability: ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
      providerBio: 'Experienced in all types of bathroom fixtures.',
      tags: ['Installation', 'Bathroom', 'Professional'],
      reviews: [],
      location: undefined,
      distance: undefined
    },
    {
      id: 'plumb-5',
      name: 'Sewer Line Inspection & Repair',
      provider: 'Mark Anderson',
      rating: 4.9,
      totalReviews: 201,
      price: 200,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop',
      category: 'Plumbing',
      description: 'Advanced sewer line services',
      fullDescription: 'Professional sewer line inspection and repair using modern technology.',
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mark',
      providerBio: 'Sewer specialist with advanced diagnostic tools.',
      tags: ['Advanced Technology', 'Inspection', 'Repair'],
      reviews: [],
      location: undefined,
      distance: undefined
    }
  ],
  cleaning: [
    {
      id: 'clean-1',
      name: 'Deep House Cleaning',
      provider: 'Maria Garcia',
      rating: 4.9,
      totalReviews: 412,
      price: 150,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop',
      category: 'Cleaning',
      description: 'Thorough deep cleaning of your entire home',
      fullDescription: 'Comprehensive deep cleaning service for homes. We clean every corner, including hard-to-reach areas.',
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
      providerBio: 'Professional cleaner with 10 years of experience. Eco-friendly products used.',
      tags: ['Eco-friendly', 'Thorough', 'Affordable'],
      reviews: [
        {
          id: 'r4',
          author: 'Lisa M.',
          rating: 5,
          comment: 'Amazing work! My house has never been cleaner.',
          date: '2024-02-11',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa'
        }
      ],
      location: undefined,
      distance: undefined
    },
    {
      id: 'clean-2',
      name: 'Office Cleaning & Maintenance',
      provider: 'Carlos Lopez',
      rating: 4.7,
      totalReviews: 289,
      price: 200,
      image: 'https://images.unsplash.com/photo-1581092162562-40038f37f94c?w=500&h=500&fit=crop',
      category: 'Cleaning',
      description: 'Professional office and commercial cleaning',
      fullDescription: 'Regular and one-time office cleaning services. Customizable plans for businesses.',
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
      providerBio: 'Commercial cleaning specialist.',
      tags: ['Commercial', 'Flexible', 'Professional'],
      reviews: [],
      location: undefined,
      distance: undefined
    },
    {
      id: 'clean-3',
      name: 'Carpet & Upholstery Cleaning',
      provider: 'Angela White',
      rating: 4.8,
      totalReviews: 325,
      price: 120,
      image: 'https://images.unsplash.com/photo-1586611049380-ef46e417c39b?w=500&h=500&fit=crop',
      category: 'Cleaning',
      description: 'Professional carpet and upholstery cleaning',
      fullDescription: 'Deep cleaning of carpets and furniture using professional-grade equipment.',
      availability: ['Mon', 'Wed', 'Thu', 'Fri', 'Sat'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Angela',
      providerBio: 'Carpet cleaning expert with specialized equipment.',
      tags: ['Equipment', 'Expert', 'Fast Dry'],
      reviews: [],
      location: undefined,
      distance: undefined
    },
    {
      id: 'clean-4',
      name: 'Move-In/Move-Out Cleaning',
      provider: 'Rosa Martinez',
      rating: 4.6,
      totalReviews: 198,
      price: 180,
      image: 'https://images.unsplash.com/photo-1581092335156-b684a6ba5f7e?w=500&h=500&fit=crop',
      category: 'Cleaning',
      description: 'Complete cleaning for moving situations',
      fullDescription: 'Thorough cleaning for homes before moving in or after moving out.',
      availability: ['Tue', 'Thu', 'Fri', 'Sat', 'Sun'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rosa',
      providerBio: 'Moving day cleaning specialist.',
      tags: ['Move-In', 'Move-Out', 'Detailed'],
      reviews: [],
      location: undefined,
      distance: undefined
    },
    {
      id: 'clean-5',
      name: 'Window Cleaning Services',
      provider: 'Tom Anderson',
      rating: 4.9,
      totalReviews: 267,
      price: 85,
      image: 'https://images.unsplash.com/photo-1581092163562-40038f37f94c?w=500&h=500&fit=crop',
      category: 'Cleaning',
      description: 'Professional window cleaning for homes and offices',
      fullDescription: 'Streak-free window cleaning for both residential and commercial properties.',
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tom',
      providerBio: 'Window cleaning specialist with 8 years of experience.',
      tags: ['Streak-Free', 'Fast', 'Professional'],
      reviews: [],
      location: undefined,
      distance: undefined
    }
  ],
  tutoring: [
    {
      id: 'tut-1',
      name: 'Math & Physics Tutoring',
      provider: 'Dr. Rachel Chen',
      rating: 4.9,
      totalReviews: 178,
      price: 60,
      image: 'https://images.unsplash.com/photo-1427504494785-cdedca239973?w=500&h=500&fit=crop',
      category: 'Tutoring',
      description: 'Expert math and physics tuition for all levels',
      fullDescription: 'Experienced tutor specializing in math and physics. SAT/ACT prep also available.',
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel',
      providerBio: 'PhD in Mathematics. 15 years of teaching experience.',
      tags: ['PhD', 'SAT Prep', 'Expert'],
      reviews: [
        {
          id: 'r5',
          author: 'Alex P.',
          rating: 5,
          comment: 'Excellent tutor! My grades improved significantly.',
          date: '2024-02-09',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
        }
      ],
      location: undefined,
      distance: undefined
    },
    {
      id: 'tut-2',
      name: 'English & Writing Tutoring',
      provider: 'Jennifer Brooks',
      rating: 4.7,
      totalReviews: 145,
      price: 50,
      image: 'https://images.unsplash.com/photo-1516979187457-635ffe35ff31?w=500&h=500&fit=crop',
      category: 'Tutoring',
      description: 'Professional English and writing instruction',
      fullDescription: 'Essay writing, grammar, and literature analysis. ESL classes available.',
      availability: ['Mon', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer',
      providerBio: 'English teacher with 12 years of classroom experience.',
      tags: ['ESL', 'Essay Writing', 'Literature'],
      reviews: [],
      location: undefined,
      distance: undefined
    },
    {
      id: 'tut-3',
      name: 'Science Tutoring (Biology, Chemistry)',
      provider: 'Professor Michael Lee',
      rating: 4.8,
      totalReviews: 201,
      price: 65,
      image: 'https://images.unsplash.com/photo-1530268729831-4ca59a4a7dd0?w=500&h=500&fit=crop',
      category: 'Tutoring',
      description: 'Advanced science tutoring for high school and college',
      fullDescription: 'Expert instruction in biology and chemistry. Lab preparation included.',
      availability: ['Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      providerBio: 'Science professor specializing in college-level courses.',
      tags: ['College Prep', 'Lab Ready', 'Expert'],
      reviews: [],
      location: undefined,
      distance: undefined
    },
    {
      id: 'tut-4',
      name: 'Test Prep (SAT, ACT, GRE)',
      provider: 'Lisa Wong',
      rating: 4.9,
      totalReviews: 289,
      price: 80,
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=500&h=500&fit=crop',
      category: 'Tutoring',
      description: 'Specialized test preparation and coaching',
      fullDescription: 'Comprehensive test prep with proven strategies. Personalized study plans.',
      availability: ['Mon', 'Tue', 'Thu', 'Fri', 'Sat', 'Sun'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
      providerBio: 'Test prep specialist with 100+ students reaching their target scores.',
      tags: ['Test Prep', 'Proven Methods', 'High Success Rate'],
      reviews: [],
      location: undefined,
      distance: undefined
    },
    {
      id: 'tut-5',
      name: 'Language Learning (Spanish, French)',
      provider: 'Miguel Rodriguez',
      rating: 4.6,
      totalReviews: 156,
      price: 55,
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=500&fit=crop',
      category: 'Tutoring',
      description: 'Interactive language learning sessions',
      fullDescription: 'Conversational Spanish and French lessons. Beginner to advanced.',
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Miguel',
      providerBio: 'Native speaker with language teaching certification.',
      tags: ['Native Speaker', 'Conversational', 'All Levels'],
      reviews: [],
      location: undefined,
      distance: undefined
    }
  ],
  'pet-care': [
    {
      id: 'pet-1',
      name: 'Dog Walking & Exercise',
      provider: 'Sarah Martinez',
      rating: 4.9,
      totalReviews: 356,
      price: 25,
      image: 'https://images.unsplash.com/photo-1633722715463-d30628519d45?w=500&h=500&fit=crop',
      category: 'Pet Care',
      description: 'Daily dog walking and exercise services',
      fullDescription: 'Professional dog walking with socialization and exercise. Perfect for busy owners.',
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      providerBio: 'Certified dog trainer and walker. Loves all breeds!',
      tags: ['Certified', 'Socialization', 'Daily Available'],
      reviews: [
        {
          id: 'r6',
          author: 'Tom B.',
          rating: 5,
          comment: 'My dog is so happy after walks with Sarah!',
          date: '2024-02-13',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tom'
        }
      ],
      location: undefined,
      distance: undefined
    },
    {
      id: 'pet-2',
      name: 'Pet Grooming & Bathing',
      provider: 'Emma Watson',
      rating: 4.8,
      totalReviews: 278,
      price: 60,
      image: 'https://images.unsplash.com/photo-1576201865519-2b3c3a04b8b5?w=500&h=500&fit=crop',
      category: 'Pet Care',
      description: 'Professional pet grooming and bathing',
      fullDescription: 'Full grooming services for dogs and cats. Breed-specific cuts available.',
      availability: ['Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
      providerBio: 'Professional groomer with 8 years of experience.',
      tags: ['Breed-Specific', 'Professional', 'Gentle'],
      reviews: [],
      location: undefined,
      distance: undefined
    },
    {
      id: 'pet-3',
      name: 'Pet Sitting & Daycare',
      provider: 'Jessica Brown',
      rating: 4.7,
      totalReviews: 245,
      price: 35,
      image: 'https://images.unsplash.com/photo-1587300411107-e1a48cfae93e?w=500&h=500&fit=crop',
      category: 'Pet Care',
      description: 'Pet sitting and daycare services',
      fullDescription: 'Safe, caring environment for your pets while you\'re away. Updates provided.',
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica',
      providerBio: 'Pet lover with a passion for animal care.',
      tags: ['Daily Updates', 'Safe Environment', 'Loving Care'],
      reviews: [],
      location: undefined,
      distance: undefined
    },
    {
      id: 'pet-4',
      name: 'Veterinary Services & Pet Medicine',
      provider: 'Dr. Kevin Hart',
      rating: 4.9,
      totalReviews: 412,
      price: 100,
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=500&fit=crop',
      category: 'Pet Care',
      description: 'Professional veterinary care',
      fullDescription: 'Comprehensive veterinary services including checkups, vaccinations, and treatments.',
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin',
      providerBio: 'Licensed veterinarian with 20 years of practice.',
      tags: ['Licensed Vet', 'Emergency Available', 'All Animals'],
      reviews: [],
      location: undefined,
      distance: undefined
    },
    {
      id: 'pet-5',
      name: 'Dog Training & Behavior',
      provider: 'Robert Wilson',
      rating: 4.8,
      totalReviews: 267,
      price: 75,
      image: 'https://images.unsplash.com/photo-1587300411107-e1a48cfae93e?w=500&h=500&fit=crop',
      category: 'Pet Care',
      description: 'Professional dog training and behavior modification',
      fullDescription: 'Positive reinforcement training. Addressing behavioral issues effectively.',
      availability: ['Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert',
      providerBio: 'Certified dog trainer specializing in behavior issues.',
      tags: ['Certified Trainer', 'Positive Methods', 'Results Driven'],
      reviews: [],
      location: undefined,
      distance: undefined
    }
  ],
  electrical: [
    {
      id: 'elec-1',
      name: 'Residential Electrical Repairs',
      provider: 'Frank Thompson',
      rating: 4.9,
      totalReviews: 289,
      price: 95,
      image: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=500&h=500&fit=crop',
      category: 'Electrical',
      description: 'Professional residential electrical repair services',
      fullDescription: 'Expert repair of electrical issues. Licensed and insured. Emergency service available.',
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Frank',
      providerBio: 'Licensed electrician with 18 years of experience.',
      tags: ['Licensed', '24/7 Emergency', 'Insured'],
      reviews: [
        {
          id: 'r7',
          author: 'Chris D.',
          rating: 5,
          comment: 'Professional and reliable. Fixed our electrical issue quickly!',
          date: '2024-02-12',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chris'
        }
      ],
      location: undefined,
      distance: undefined
    },
    {
      id: 'elec-2',
      name: 'Panel Upgrade & Installation',
      provider: 'George Martinez',
      rating: 4.7,
      totalReviews: 156,
      price: 250,
      image: 'https://images.unsplash.com/photo-1581092162562-40038f37f94c?w=500&h=500&fit=crop',
      category: 'Electrical',
      description: 'Electrical panel upgrades and new installations',
      fullDescription: 'Safe panel upgrades to handle modern electrical demands.',
      availability: ['Mon', 'Wed', 'Thu', 'Fri'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=George',
      providerBio: 'Master electrician with panel installation expertise.',
      tags: ['Panel Expert', 'Code Compliant', 'Safe'],
      reviews: [],
      location: undefined,
      distance: undefined
    },
    {
      id: 'elec-3',
      name: 'Lighting Installation & Design',
      provider: 'Patricia Lee',
      rating: 4.8,
      totalReviews: 223,
      price: 120,
      image: 'https://images.unsplash.com/photo-1565182999555-022adf3cf3f0?w=500&h=500&fit=crop',
      category: 'Electrical',
      description: 'Creative lighting solutions and installation',
      fullDescription: 'Modern lighting design and installation. Energy-efficient options.',
      availability: ['Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Patricia',
      providerBio: 'Lighting designer and electrician.',
      tags: ['Energy Efficient', 'Design', 'Modern'],
      reviews: [],
      location: undefined,
      distance: undefined
    },
    {
      id: 'elec-4',
      name: 'Outlet & Switch Installation',
      provider: 'Richard Johnson',
      rating: 4.6,
      totalReviews: 189,
      price: 75,
      image: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=500&h=500&fit=crop',
      category: 'Electrical',
      description: 'Installation of outlets and switches',
      fullDescription: 'Professional installation of electrical outlets and switches.',
      availability: ['Mon', 'Tue', 'Thu', 'Fri', 'Sat'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Richard',
      providerBio: 'Experienced electrician for residential work.',
      tags: ['Professional', 'Fast', 'Reliable'],
      reviews: [],
      location: undefined,
      distance: undefined
    },
    {
      id: 'elec-5',
      name: 'Ceiling Fan Installation',
      provider: 'Steven Clark',
      rating: 4.7,
      totalReviews: 201,
      price: 85,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
      category: 'Electrical',
      description: 'Expert ceiling fan installation',
      fullDescription: 'Professional installation of ceiling fans with proper wiring.',
      availability: ['Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Steven',
      providerBio: 'Electrician specializing in fan installations.',
      tags: ['Expert', 'Safe Installation', 'Quick'],
      reviews: [],
      location: undefined,
      distance: undefined
    }
  ],
  gardening: [
    {
      id: 'gard-1',
      name: 'Lawn Maintenance & Mowing',
      provider: 'Thomas Green',
      rating: 4.8,
      totalReviews: 267,
      price: 50,
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=500&fit=crop',
      category: 'Gardening',
      description: 'Professional lawn care and maintenance',
      fullDescription: 'Regular lawn mowing, trimming, and maintenance. Keeps your yard beautiful.',
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas',
      providerBio: 'Lawn care specialist with 12 years of experience.',
      tags: ['Regular Service', 'Professional', 'Affordable'],
      reviews: [
        {
          id: 'r8',
          author: 'Nancy K.',
          rating: 5,
          comment: 'Excellent lawn care! My yard looks amazing.',
          date: '2024-02-10',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nancy'
        }
      ],
      location: undefined,
      distance: undefined
    },
    {
      id: 'gard-2',
      name: 'Landscaping & Garden Design',
      provider: 'Isabella Rossi',
      rating: 4.9,
      totalReviews: 312,
      price: 200,
      image: 'https://images.unsplash.com/photo-1585179225659-7e5c4ccc1908?w=500&h=500&fit=crop',
      category: 'Gardening',
      description: 'Creative landscaping and garden design',
      fullDescription: 'Transform your outdoor space with professional landscaping design and installation.',
      availability: ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Isabella',
      providerBio: 'Landscape architect with 15 years of design experience.',
      tags: ['Designer', 'Creative', 'Professional'],
      reviews: [],
      location: undefined,
      distance: undefined
    },
    {
      id: 'gard-3',
      name: 'Tree Trimming & Removal',
      provider: 'Marcus Johnson',
      rating: 4.7,
      totalReviews: 198,
      price: 150,
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=500&h=500&fit=crop',
      category: 'Gardening',
      description: 'Professional tree care services',
      fullDescription: 'Safe tree trimming and removal. Certified arborist on staff.',
      availability: ['Mon', 'Wed', 'Fri', 'Sat'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
      providerBio: 'Certified arborist specializing in tree care.',
      tags: ['Certified Arborist', 'Safe', 'Professional'],
      reviews: [],
      location: undefined,
      distance: undefined
    },
    {
      id: 'gard-4',
      name: 'Weed Control & Pest Management',
      provider: 'Victor Santos',
      rating: 4.6,
      totalReviews: 156,
      price: 75,
      image: 'https://images.unsplash.com/photo-1595429676037-705b3b9b2a1b?w=500&h=500&fit=crop',
      category: 'Gardening',
      description: 'Weed control and outdoor pest management',
      fullDescription: 'Eco-friendly pest and weed management solutions.',
      availability: ['Mon', 'Tue', 'Thu', 'Fri', 'Sat'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Victor',
      providerBio: 'Pest management specialist with eco-friendly approach.',
      tags: ['Eco-Friendly', 'Effective', 'Safe'],
      reviews: [],
      location: undefined,
      distance: undefined
    },
    {
      id: 'gard-5',
      name: 'Planting & Seasonal Services',
      provider: 'Emma Green',
      rating: 4.8,
      totalReviews: 223,
      price: 80,
      image: 'https://images.unsplash.com/photo-1580821261246-b1fdae738b4e?w=500&h=500&fit=crop',
      category: 'Gardening',
      description: 'Professional planting and seasonal gardening',
      fullDescription: 'Planting services and seasonal garden maintenance throughout the year.',
      availability: ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
      providerBio: 'Gardening expert with passion for plants.',
      tags: ['Planting Expert', 'Seasonal', 'Beautiful Results'],
      reviews: [],
      location: undefined,
      distance: undefined
    }
  ],
  repairs: [
    {
      id: 'rep-1',
      name: 'Appliance Repair & Service',
      provider: 'Walter Brown',
      rating: 4.9,
      totalReviews: 334,
      price: 100,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop',
      category: 'Repairs',
      description: 'Professional appliance repair for all major brands',
      fullDescription: 'Expert repair of refrigerators, ovens, dishwashers, and more. Same-day service available.',
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Walter',
      providerBio: 'Certified appliance technician with 20 years experience.',
      tags: ['All Brands', 'Same-Day Service', 'Certified'],
      reviews: [
        {
          id: 'r9',
          author: 'Dorothy H.',
          rating: 5,
          comment: 'Fixed my refrigerator quickly and professionally!',
          date: '2024-02-11',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dorothy'
        }
      ],
      location: undefined,
      distance: undefined
    },
    {
      id: 'rep-2',
      name: 'Computer & Electronics Repair',
      provider: 'Derek Wong',
      rating: 4.7,
      totalReviews: 289,
      price: 80,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop',
      category: 'Repairs',
      description: 'Computer and electronics repair services',
      fullDescription: 'Laptop, desktop, phone, and tablet repairs. Data recovery services available.',
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Derek',
      providerBio: 'Tech specialist with expertise in all devices.',
      tags: ['Data Recovery', 'All Devices', 'Expert'],
      reviews: [],
      location: undefined,
      distance: undefined
    },
    {
      id: 'rep-3',
      name: 'HVAC Repair & Maintenance',
      provider: 'Henry Davis',
      rating: 4.8,
      totalReviews: 267,
      price: 120,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop',
      category: 'Repairs',
      description: 'Heating, cooling, and air system repair',
      fullDescription: 'HVAC repair, maintenance, and installation. Licensed and insured.',
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Henry',
      providerBio: 'HVAC specialist with EPA certification.',
      tags: ['EPA Certified', 'Licensed', 'Efficient'],
      reviews: [],
      location: undefined,
      distance: undefined
    },
    {
      id: 'rep-4',
      name: 'Furniture Repair & Assembly',
      provider: 'Oliver Martinez',
      rating: 4.6,
      totalReviews: 198,
      price: 60,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop',
      category: 'Repairs',
      description: 'Furniture repair and assembly services',
      fullDescription: 'Assembly of furniture, repairs, and refinishing services.',
      availability: ['Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver',
      providerBio: 'Furniture expert with diverse skills.',
      tags: ['Assembly', 'Repair', 'Refinishing'],
      reviews: [],
      location: undefined,
      distance: undefined
    },
    {
      id: 'rep-5',
      name: 'Door & Lock Repair',
      provider: 'Lawrence Green',
      rating: 4.7,
      totalReviews: 212,
      price: 85,
      image: 'https://images.unsplash.com/photo-1565812408522-1a8da199d985?w=500&h=500&fit=crop',
      category: 'Repairs',
      description: 'Door and lock repair and installation',
      fullDescription: 'Expert repair and installation of doors, locks, and hardware.',
      availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      providerImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lawrence',
      providerBio: 'Locksmith and door specialist.',
      tags: ['Locksmith', 'Security', 'Professional'],
      reviews: [],
      location: undefined,
      distance: undefined
    }
  ]
}

export interface DetailedProfile {
  id: string;
  name: string;
  isAvailableNow: boolean;
  role: string;
  location: string;
  rating: number;
  reviewsCount: number;
  experience: string;
  image: string;
  hourlyRate: number;
  typicalResponse: string;
  about: string;
  skills: string[];
  portfolio: string[];
  reviews: Review[];
}

export const mockProfileData: DetailedProfile = {
  id: "sarah-jenkins",
  name: "Sarah Jenkins",
  isAvailableNow: true,
  role: "Master Interior Designer",
  location: "New York, NY",
  rating: 4.9,
  reviewsCount: 124,
  experience: "8+ Years Exp.",
  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop",
  hourlyRate: 85,
  typicalResponse: "1 HOUR",
  about: "I specialize in creating modern, minimalist spaces that balance aesthetic beauty with functional everyday living. With a background in architectural history and a passion for sustainable materials, I help New Yorkers transform their apartments into serene sanctuaries.",
  skills: ["MoodBoarding", "SpacePlanning", "3DRendering", "TextileSourcing", "VintageRestoration"],
  portfolio: [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&h=600&fit=crop",
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&h=600&fit=crop",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&h=600&fit=crop"
  ],
  reviews: [
    {
      id: "r1",
      author: "Michael J.",
      authorInitials: "MJ",
      date: "October 12, 2023",
      rating: 5,
      text: '"Sarah was absolutely incredible. She transformed our tiny studio into a place that feels massive and cohesive. Truly a professional with an eye for detail!"'
    },
    {
      id: "r2",
      author: "Lauren R.",
      authorInitials: "LR",
      date: "September 28, 2023",
      rating: 5,
      text: '"Punctual and very creative! Loved her color palette suggestions. The project took slightly longer than expected but the result was worth it."'
    }
  ]
};
