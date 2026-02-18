'use client'

import { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
    Search,
    Filter,
    Star,
    MapPin,
    ShieldCheck,
    ChevronRight,
    Wrench,
    Sparkles,
    BookOpen,
    PawPrint,
    Zap,
    Leaf,
    Hammer,
    Home,
    Car,
    Scissors,
    Paintbrush,
    Code
} from 'lucide-react'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'

// Mock Data
const categories = [
    { id: 'all', name: 'All Services', icon: Search },
    { id: 'Plumbing', name: 'Plumbing', icon: Wrench },
    { id: 'Cleaning', name: 'Cleaning', icon: Sparkles },
    { id: 'Tutoring', name: 'Tutoring', icon: BookOpen },
    { id: 'Pet Care', name: 'Pet Care', icon: PawPrint },
    { id: 'Electrical', name: 'Electrical', icon: Zap },
    { id: 'Gardening', name: 'Gardening', icon: Leaf },
    { id: 'Repairs', name: 'Repairs', icon: Hammer },
    { id: 'Home Improvement', name: 'Home Improvement', icon: Home },
    { id: 'Auto Services', name: 'Auto Services', icon: Car },
    { id: 'Hair & Beauty', name: 'Hair & Beauty', icon: Scissors },
    { id: 'Painting', name: 'Painting', icon: Paintbrush },
    { id: 'Tech Support', name: 'Tech Support', icon: Code },
]

const professionals = [
    {
        id: 1,
        name: 'Alex Rivera',
        category: 'Plumbing',
        rating: 4.9,
        reviews: 128,
        price: '$60/hr',
        location: 'Austin, TX',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
        verified: true,
        description: 'Expert plumber with 10+ years of experience in residential repairs and installations.'
    },
    {
        id: 2,
        name: 'Maria Garcia',
        category: 'Cleaning',
        rating: 4.8,
        reviews: 245,
        price: '$35/hr',
        location: 'Round Rock, TX',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
        verified: true,
        description: 'Professional eco-friendly cleaning services for homes and offices.'
    },
    {
        id: 3,
        name: 'James Wilson',
        category: 'Electrical',
        rating: 5.0,
        reviews: 89,
        price: '$75/hr',
        location: 'Pflugerville, TX',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
        verified: true,
        description: 'Licensed electrician specializing in smart home integration and panel upgrades.'
    },
    {
        id: 4,
        name: 'Sarah Thompson',
        category: 'Tutoring',
        rating: 4.9,
        reviews: 156,
        price: '$45/hr',
        location: 'Austin, TX',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        verified: true,
        description: 'Math and Science tutor with a passion for helping students excel.'
    },
    {
        id: 5,
        name: 'David Miller',
        category: 'Gardening',
        rating: 4.7,
        reviews: 112,
        price: '$40/hr',
        location: 'Cedar Park, TX',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
        verified: false,
        description: 'Landscape designer and gardener focused on native Texas plants.'
    },
    {
        id: 6,
        name: 'Emma Davis',
        category: 'Pet Care',
        rating: 4.9,
        reviews: 320,
        price: '$25/hr',
        location: 'Austin, TX',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
        verified: true,
        description: 'Certified pet sitter and dog walker with a love for all animals.'
    },
    {
        id: 7,
        name: 'Michael Chen',
        category: 'Tech Support',
        rating: 4.8,
        reviews: 95,
        price: '$50/hr',
        location: 'Austin, TX',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
        verified: true,
        description: 'IT specialist offering hardware repairs and software troubleshooting.'
    },
    {
        id: 8,
        name: 'Lisa White',
        category: 'Cleaning',
        rating: 4.6,
        reviews: 178,
        price: '$30/hr',
        location: 'Austin, TX',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
        verified: true,
        description: 'Reliable and thorough deep cleaning services for any space.'
    }
]

function ServicesContent() {
    const searchParams = useSearchParams()
    const initialCategory = searchParams.get('category') || 'all'

    const [selectedCategory, setSelectedCategory] = useState(initialCategory)
    const [searchQuery, setSearchQuery] = useState('')

    const filteredProfessionals = useMemo(() => {
        return professionals.filter(pro => {
            const matchesCategory = selectedCategory === 'all' || pro.category === selectedCategory
            const matchesSearch = pro.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pro.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pro.description.toLowerCase().includes(searchQuery.toLowerCase())
            return matchesCategory && matchesSearch
        })
    }, [selectedCategory, searchQuery])

    return (
        <div className="min-h-screen bg-[#fafbfc] flex flex-col font-sans">
            <Header />

            <main className="flex-grow">
                {/* Hero Section with Mesh Gradient */}
                <section className="relative overflow-hidden bg-white border-b border-gray-100">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(8,145,178,0.05)_0%,rgba(255,255,255,0)_100%)]"></div>
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center relative">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-bold uppercase tracking-wider mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <Sparkles className="h-3 w-3" />
                            Premium Local Experts
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                            The Best Services, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Right at Your Doorstep</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                            Connect with verified professionals for all your home and personal needs. Verified, trusted, and ready to help.
                        </p>

                        <div className="max-w-3xl mx-auto relative group animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                            <div className="relative flex items-center bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                                <Search className="ml-6 text-gray-400 h-6 w-6" />
                                <input
                                    type="text"
                                    placeholder="Try 'Deep Cleaning' or 'Plumbing repair'..."
                                    className="w-full pl-4 pr-6 py-6 text-lg bg-transparent focus:outline-none placeholder-gray-400"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button className="mr-3 px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all active:scale-95">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar Filters */}
                        <aside className="lg:w-72 flex-shrink-0">
                            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm sticky top-28">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-2 text-gray-900 font-black text-lg">
                                        <Filter className="h-5 w-5 text-cyan-600" />
                                        Categories
                                    </div>
                                    {selectedCategory !== 'all' && (
                                        <button
                                            onClick={() => setSelectedCategory('all')}
                                            className="text-xs font-bold text-cyan-600 hover:underline"
                                        >
                                            Reset
                                        </button>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    {categories.map((cat) => {
                                        const Icon = cat.icon
                                        const isActive = selectedCategory === cat.id
                                        return (
                                            <button
                                                key={cat.id}
                                                onClick={() => setSelectedCategory(cat.id)}
                                                className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-sm font-bold transition-all duration-300 ${isActive
                                                    ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-200 translate-x-1'
                                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                                    }`}
                                            >
                                                <div className={`p-2 rounded-lg ${isActive ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-white'}`}>
                                                    <Icon className="h-4 w-4" />
                                                </div>
                                                {cat.name}
                                                {isActive && <ChevronRight className="ml-auto h-4 w-4" />}
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>
                        </aside>

                        {/* Results Grid */}
                        <div className="flex-grow">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
                                <div>
                                    <h2 className="text-3xl font-black text-gray-900 mb-1">
                                        {selectedCategory === 'all' ? 'All Services' : selectedCategory}
                                    </h2>
                                    <p className="text-gray-500 font-medium">
                                        Showing {filteredProfessionals.length} trusted professionals
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm text-sm font-bold">
                                    <span className="text-gray-400">Sort by:</span>
                                    <select className="bg-transparent focus:outline-none appearance-none cursor-pointer pr-4">
                                        <option>Recommended</option>
                                        <option>Price: Low to High</option>
                                        <option>Highest Rated</option>
                                    </select>
                                </div>
                            </div>

                            {filteredProfessionals.length > 0 ? (
                                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
                                    {filteredProfessionals.map((pro, index) => (
                                        <div
                                            key={pro.id}
                                            className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden group animate-in fade-in zoom-in-95 duration-700"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            <div className="relative h-60 bg-gray-100">
                                                <img
                                                    src={pro.image}
                                                    alt={pro.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl text-xs font-black text-cyan-700 flex items-center gap-2 shadow-xl border border-white/20">
                                                    <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse"></span>
                                                    {pro.category}
                                                </div>

                                                {pro.verified && (
                                                    <div className="absolute top-5 right-5 bg-cyan-600 text-white p-2.5 rounded-2xl shadow-xl transform group-hover:scale-110 transition-transform duration-300">
                                                        <ShieldCheck className="h-5 w-5" />
                                                    </div>
                                                )}

                                                <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                                    <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold text-sm shadow-xl hover:bg-cyan-600 hover:text-white transition-colors">
                                                        Book Now
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="p-8">
                                                <div className="flex justify-between items-start mb-4">
                                                    <h3 className="font-black text-gray-900 text-xl group-hover:text-cyan-600 transition-colors">{pro.name}</h3>
                                                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-600 rounded-xl font-black text-sm">
                                                        <Star className="h-4 w-4 fill-current" />
                                                        {pro.rating}
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm font-bold text-gray-400 mb-6">
                                                    <div className="flex items-center gap-1.5">
                                                        <MapPin className="h-4 w-4 text-cyan-600" />
                                                        {pro.location}
                                                    </div>
                                                    <div className="w-1 h-1 rounded-full bg-gray-200"></div>
                                                    <div>{pro.reviews} reviews</div>
                                                </div>

                                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-8 font-medium italic">
                                                    "{pro.description}"
                                                </p>

                                                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                                                    <div className="flex flex-col">
                                                        <span className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Rate</span>
                                                        <span className="text-gray-900 font-black text-lg">{pro.price}</span>
                                                    </div>
                                                    <Link
                                                        href={`/services/${pro.id}`}
                                                        className="w-12 h-12 rounded-2xl border-2 border-gray-100 flex items-center justify-center text-gray-400 group-hover:border-cyan-500 group-hover:text-cyan-600 group-hover:bg-cyan-50 transition-all duration-300"
                                                    >
                                                        <ChevronRight className="h-6 w-6" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-white rounded-[3rem] p-16 text-center border-2 border-dashed border-gray-100 shadow-sm animate-in fade-in zoom-in-95 duration-700">
                                    <div className="bg-cyan-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                                        <Search className="h-10 w-10 text-cyan-400" />
                                    </div>
                                    <h3 className="text-3xl font-black text-gray-900 mb-4">No results found</h3>
                                    <p className="text-gray-500 mb-10 text-lg max-w-sm mx-auto font-medium">Try adjusting your filters or search terms to find what you're looking for.</p>
                                    <button
                                        onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                                        className="bg-gray-900 text-white px-10 py-4 rounded-2xl font-black hover:bg-black transition-all shadow-xl hover:shadow-gray-200 active:scale-95"
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}



export default function ServicesPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ServicesContent />
        </Suspense>
    )
}
