'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
    Briefcase,
    MapPin,
    DollarSign,
    Clock,
    Image as ImageIcon,
    AlertCircle,
    CheckCircle2,
    Calendar,
    ChevronDown,
    UploadCloud,
    X,
    FileText
} from 'lucide-react'

const CATEGORIES = [
    'Home Repair',
    'Plumbing',
    'Cleaning',
    'Tutoring',
    'Pet Care',
    'Electrical',
    'Gardening',
    'Event Planning'
]

export default function ServiceRequestPage() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const [formData, setFormData] = useState({
        title: '',
        category: '',
        description: '',
        location: '',
        urgency: 'Flexible',
        budgetType: 'Fixed',
        budgetAmount: '',
        budgetMin: '',
        budgetMax: '',
    })

    const [images, setImages] = useState<File[]>([])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleUrgencySelect = (level: string) => {
        setFormData(prev => ({ ...prev, urgency: level }))
    }

    const handleBudgetSelect = (type: string) => {
        setFormData(prev => ({ ...prev, budgetType: type, budgetAmount: '', budgetMin: '', budgetMax: '' }))
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImages(prev => [...prev, ...Array.from(e.target.files as FileList)])
        }
    }

    const removeImage = (index: number) => {
        setImages(prev => prev.filter((_, i) => i !== index))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API Call
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSuccess(true)

            // Redirect back to dashboard after success
            setTimeout(() => {
                router.push('/customer/dashboard')
            }, 2000)
        }, 1500)
    }

    if (isSuccess) {
        return (
            <div className="max-w-3xl mx-auto py-20 text-center">
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-500/20">
                    <CheckCircle2 size={48} className="text-emerald-500" />
                </div>
                <h2 className="text-4xl font-black text-gray-900 dark:text-gray-100 mb-4">Request Submitted!</h2>
                <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    Your service request "{formData.title}" has been successfully posted. Local providers will start quoting soon.
                </p>
                <div className="flex items-center justify-center gap-2 text-[#1E7B7C] font-bold">
                    <div className="w-4 h-4 rounded-full border-2 border-[#1E7B7C] border-t-transparent animate-spin" />
                    Redirecting to your dashboard...
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto relative pb-24">
            {/* Header Content */}
            <div className="mb-10 text-center md:text-left">
                <h1 className="text-4xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-3">
                    Post a Service Request
                </h1>
                <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
                    Provide the details of your project to get accurate quotes from verified local professionals.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Main Details Card */}
                <div className="bg-white dark:bg-gray-950/60 backdrop-blur-xl rounded-[40px] p-8 md:p-10 shadow-2xl shadow-gray-200/20 border border-white dark:border-gray-800">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-[#E8F4F4] rounded-2xl flex items-center justify-center text-[#1E7B7C]">
                            <FileText size={24} />
                        </div>
                        <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100">Project Essentials</h2>
                    </div>

                    <div className="space-y-6">
                        {/* Title */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Service Title</label>
                            <input
                                type="text"
                                name="title"
                                required
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="e.g. Need a plumber to fix a leaking under-sink pipe"
                                className="w-full bg-white/20 dark:bg-white/50 border border-gray-200 focus:border-[#1E7B7C] focus:ring-4 focus:ring-[#1E7B7C]/10 rounded-2xl px-5 py-4 text-gray-900 dark:text-gray-100 outline-none transition-all placeholder:text-gray-400 dark:text-gray-500 font-medium"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Category</label>
                            <div className="relative">
                                <select
                                    name="category"
                                    required
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full bg-white/20 dark:bg-white/50 border border-gray-200 focus:border-[#1E7B7C] focus:ring-4 focus:ring-[#1E7B7C]/10 rounded-2xl px-5 py-4 text-gray-900 dark:text-gray-100 outline-none transition-all appearance-none font-medium text-base"
                                >
                                    <option value="" disabled>Select the best category</option>
                                    {CATEGORIES.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none" size={20} />
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Detailed Description</label>
                            <textarea
                                name="description"
                                required
                                value={formData.description}
                                onChange={handleChange}
                                rows={5}
                                placeholder="Describe the job in detail. Include dimensions, specific materials needed, or any relevant history..."
                                className="w-full bg-white/20 dark:bg-white/50 border border-gray-200 focus:border-[#1E7B7C] focus:ring-4 focus:ring-[#1E7B7C]/10 rounded-2xl px-5 py-4 text-gray-900 dark:text-gray-100 outline-none transition-all placeholder:text-gray-400 dark:text-gray-500 font-medium resize-none shadow-inner"
                            />
                        </div>
                    </div>
                </div>

                {/* Logistics Card */}
                <div className="bg-white dark:bg-gray-950/60 backdrop-blur-xl rounded-[40px] p-8 md:p-10 shadow-xl shadow-gray-200/10 border border-white dark:border-gray-800">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500">
                            <MapPin size={24} />
                        </div>
                        <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100">Location & Timing</h2>
                    </div>

                    <div className="space-y-8">
                        {/* Location */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Service Address or Area</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="location"
                                    required
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="e.g. 123 Main St, Brooklyn, NY or Online"
                                    className="w-full bg-white/20 dark:bg-white/50 border border-gray-200 focus:border-[#1E7B7C] focus:ring-4 focus:ring-[#1E7B7C]/10 rounded-2xl pl-12 pr-5 py-4 text-gray-900 dark:text-gray-100 outline-none transition-all placeholder:text-gray-400 dark:text-gray-500 font-medium"
                                />
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
                            </div>
                        </div>

                        {/* Urgency */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-4">Urgency Level</label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { level: 'Flexible', desc: 'Sometime next week', icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
                                    { level: 'Standard', desc: 'Within 2-3 days', icon: Clock, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
                                    { level: 'Emergency', desc: 'As soon as possible', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200' }
                                ].map((item) => {
                                    const Icon = item.icon
                                    const isSelected = formData.urgency === item.level
                                    return (
                                        <button
                                            type="button"
                                            key={item.level}
                                            onClick={() => handleUrgencySelect(item.level)}
                                            className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-start gap-4 text-left ${isSelected
                                                    ? `${item.border} ${item.bg} shadow-md`
                                                    : 'border-transparent bg-gray-50 dark:bg-gray-900 hover:bg-white dark:bg-gray-950 hover:border-gray-200'
                                                }`}
                                        >
                                            <div className={`p-3 rounded-2xl ${isSelected ? 'bg-white dark:bg-gray-950 shadow-sm' : item.bg} ${item.color}`}>
                                                <Icon size={24} />
                                            </div>
                                            <div>
                                                <div className={`font-black tracking-wide ${isSelected ? 'text-gray-900 dark:text-gray-100' : 'text-gray-700 dark:text-gray-300'}`}>{item.level}</div>
                                                <div className={`text-xs font-bold mt-1 ${isSelected ? item.color : 'text-gray-500 dark:text-gray-400'}`}>{item.desc}</div>
                                            </div>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Budget Card */}
                <div className="bg-white dark:bg-gray-950/60 backdrop-blur-xl rounded-[40px] p-8 md:p-10 shadow-xl shadow-gray-200/10 border border-white dark:border-gray-800">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600">
                            <DollarSign size={24} />
                        </div>
                        <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100">Budget Estimate</h2>
                    </div>

                    <div className="space-y-8">
                        <div className="flex p-1.5 bg-gray-100 rounded-2xl w-fit">
                            <button
                                type="button"
                                onClick={() => handleBudgetSelect('Fixed')}
                                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${formData.budgetType === 'Fixed' ? 'bg-white dark:bg-gray-950 text-purple-600 shadow-md' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:text-gray-100'
                                    }`}
                            >
                                Fixed Price
                            </button>
                            <button
                                type="button"
                                onClick={() => handleBudgetSelect('Hourly')}
                                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all ${formData.budgetType === 'Hourly' ? 'bg-white dark:bg-gray-950 text-purple-600 shadow-md' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:text-gray-100'
                                    }`}
                            >
                                Budget Range
                            </button>
                        </div>

                        {formData.budgetType === 'Fixed' ? (
                            <div className="max-w-xs relative bg-white dark:bg-gray-950 rounded-2xl">
                                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
                                <input
                                    type="number"
                                    name="budgetAmount"
                                    required
                                    value={formData.budgetAmount}
                                    onChange={handleChange}
                                    placeholder="e.g. 150"
                                    className="w-full bg-transparent border border-gray-200 focus:border-purple-300 focus:ring-4 focus:ring-purple-100 rounded-2xl pl-12 pr-5 py-4 text-gray-900 dark:text-gray-100 outline-none transition-all text-xl font-black"
                                />
                            </div>
                        ) : (
                            <div className="flex items-center gap-4 max-w-lg">
                                <div className="relative flex-1 bg-white dark:bg-gray-950 rounded-2xl">
                                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
                                    <input
                                        type="number"
                                        name="budgetMin"
                                        required
                                        value={formData.budgetMin}
                                        onChange={handleChange}
                                        placeholder="Min"
                                        className="w-full bg-transparent border border-gray-200 focus:border-purple-300 focus:ring-4 focus:ring-purple-100 rounded-2xl pl-12 pr-5 py-4 text-gray-900 dark:text-gray-100 outline-none transition-all text-xl font-black"
                                    />
                                </div>
                                <span className="font-bold text-gray-400 dark:text-gray-500">to</span>
                                <div className="relative flex-1 bg-white dark:bg-gray-950 rounded-2xl">
                                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
                                    <input
                                        type="number"
                                        name="budgetMax"
                                        required
                                        value={formData.budgetMax}
                                        onChange={handleChange}
                                        placeholder="Max"
                                        className="w-full bg-transparent border border-gray-200 focus:border-purple-300 focus:ring-4 focus:ring-purple-100 rounded-2xl pl-12 pr-5 py-4 text-gray-900 dark:text-gray-100 outline-none transition-all text-xl font-black"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Media Upload */}
                <div className="bg-white dark:bg-gray-950/60 backdrop-blur-xl rounded-[40px] p-8 md:p-10 shadow-xl shadow-gray-200/10 border border-white dark:border-gray-800">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500">
                            <ImageIcon size={24} />
                        </div>
                        <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100">Reference Images <span className="text-sm text-gray-400 dark:text-gray-500 font-medium">(Optional)</span></h2>
                    </div>

                    <div className="border-2 border-dashed border-gray-200 rounded-[32px] p-10 text-center hover:border-[#1E7B7C] hover:bg-[#1E7B7C]/5 transition-all group relative">
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className="w-20 h-20 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform group-hover:bg-white shadow-sm">
                            <UploadCloud size={32} className="text-gray-400 dark:text-gray-500 group-hover:text-[#1E7B7C] transition-colors" />
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg mb-2">Click to upload or drag images here</h4>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (max. 5MB)</p>
                    </div>

                    {/* Image Previews */}
                    {images.length > 0 && (
                        <div className="flex flex-wrap gap-4 mt-6">
                            {images.map((file, i) => (
                                <div key={i} className="relative w-24 h-24 rounded-2xl overflow-hidden border border-gray-200 group">
                                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                                        <ImageIcon className="text-gray-300" size={32} />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => removeImage(i)}
                                        className="absolute top-1 right-1 p-1 bg-white /80 rounded-full text-red-500 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:bg-gray-950 hover:scale-110 shadow-sm"
                                    >
                                        <X size={14} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Submit Action */}
                <div className="flex items-center justify-end gap-6 pt-6">
                    <button type="button" onClick={() => router.back()} className="px-8 py-4 rounded-2xl font-bold text-gray-500 dark:text-gray-400 hover:bg-gray-100 transition-all">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-10 py-5 bg-gradient-to-r from-[#1E7B7C] to-[#166566] text-white rounded-[24px] font-black text-lg hover:shadow-2xl hover:shadow-[#1E7B7C]/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-3 disabled:opacity-70 disabled:hover:scale-100"
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-5 h-5 rounded-full border-2 border-white dark:border-gray-800 border-t-transparent animate-spin" />
                                Processing...
                            </>
                        ) : (
                            <>
                                <CheckCircle2 size={24} />
                                Post Service Request
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}
