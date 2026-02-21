'use client'

import React, { useState } from 'react';
import {
  Plus,
  Search,
  MoreVertical,
  Edit2,
  Trash2,
  Image as ImageIcon,
  Grid,
  ChevronRight,
  Sparkles,
  Droplets,
  Hammer,
  Dog,
  Zap,
  GraduationCap,
  Flower2,
  X,
  Palette
} from 'lucide-react';
import { useToast } from '@/providers/ToastProvider';

const initialCategories = [
  { id: 1, name: 'Home Repair', slug: 'repairs', icon: Hammer, providers: 482, jobs: 1240, color: 'bg-amber-500', status: 'Active' },
  { id: 2, name: 'Plumbing', slug: 'plumbing', icon: Droplets, providers: 325, jobs: 890, color: 'bg-[#1E7B7C]', status: 'Active' },
  { id: 3, name: 'Cleaning', slug: 'cleaning', icon: Sparkles, providers: 512, jobs: 2100, color: 'bg-emerald-500', status: 'Active' },
  { id: 4, name: 'Tutoring', slug: 'tutoring', icon: GraduationCap, providers: 184, jobs: 450, color: 'bg-purple-500', status: 'Active' },
  { id: 5, name: 'Pet Care', slug: 'pet-care', icon: Dog, providers: 215, jobs: 620, color: 'bg-orange-500', status: 'Active' },
  { id: 6, name: 'Electrical', slug: 'electrical', icon: Zap, providers: 142, jobs: 380, color: 'bg-yellow-500', status: 'Active' },
  { id: 7, name: 'Gardening', slug: 'gardening', icon: Flower2, providers: 98, jobs: 210, color: 'bg-green-500', status: 'Planned' },
];

const iconMap = {
  Hammer, Droplets, Sparkles, GraduationCap, Dog, Zap, Flower2, Grid
};

export default function CategoriesManagementPage() {
  const [categoryList, setCategoryList] = useState(initialCategories);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdding, setIsAdding] = useState(false);
  const [newCatName, setNewCatName] = useState('');
  const { showToast } = useToast();

  const filteredCategories = categoryList.filter(cat =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName) return;

    const newCat = {
      id: Date.now(),
      name: newCatName,
      slug: newCatName.toLowerCase().replace(/\s+/g, '-'),
      icon: Grid,
      providers: 0,
      jobs: 0,
      color: 'bg-[#1E7B7C]',
      status: 'Active'
    };

    setCategoryList(prev => [...prev, newCat]);
    setNewCatName('');
    setIsAdding(false);
    showToast(`Category "${newCatName}" created successfully`, 'success');
  };

  const handleDelete = (id: number) => {
    const cat = categoryList.find(c => c.id === id);
    setCategoryList(prev => prev.filter(c => c.id !== id));
    showToast(`Category "${cat?.name}" deleted`, 'error');
  };

  const toggleStatus = (id: number) => {
    setCategoryList(prev => prev.map(cat => {
      if (cat.id === id) {
        const newStatus = cat.status === 'Active' ? 'Inactive' : 'Active';
        showToast(`"${cat.name}" is now ${newStatus}`, 'info');
        return { ...cat, status: newStatus };
      }
      return cat;
    }));
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-2 italic">Service Categories</h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium italic">Manage the structure of services offered on the platform.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative group max-w-md hidden sm:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-focus-within:text-[#1E7B7C] transition-colors" size={18} />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 pr-4 py-2.5 bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-2xl outline-none focus:border-[#1E7B7C]/20 focus:ring-4 focus:ring-[#1E7B7C]/5 transition-all text-sm font-medium w-64 shadow-sm italic"
            />
          </div>
          <button
            onClick={() => setIsAdding(true)}
            className="bg-[#1E7B7C] text-white px-6 py-2.5 rounded-2xl font-bold text-sm shadow-lg shadow-[#1E7B7C]/20 hover:scale-[1.02] transition-all flex items-center gap-2 whitespace-nowrap italic"
          >
            <Plus size={18} />
            Add Category
          </button>
        </div>
      </div>

      {/* Grid View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isAdding && (
          <div className="bg-white dark:bg-gray-950/90 backdrop-blur-xl border-2 border-[#1E7B7C]/20 p-6 rounded-[2.5rem] shadow-xl animate-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-black text-gray-900 dark:text-gray-100 italic">New Category</h3>
              <button onClick={() => setIsAdding(false)} className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                <X size={18} className="text-gray-400 dark:text-gray-500" />
              </button>
            </div>
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block mb-1.5 ml-1">Name</label>
                <input
                  autoFocus
                  type="text"
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                  placeholder="e.g. Interior Design"
                  className="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-900 border border-transparent rounded-xl outline-none focus:bg-white focus:border-[#1E7B7C]/20 transition-all text-sm font-medium italic"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1E7B7C] text-white py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-md hover:scale-[1.01] transition-all disabled:opacity-50"
                disabled={!newCatName}
              >
                Create Category
              </button>
            </form>
          </div>
        )}

        {filteredCategories.map((cat) => (
          <div key={cat.id} className="bg-white dark:bg-gray-950/70 backdrop-blur-xl border border-gray-100 dark:border-gray-800 p-6 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 group relative overflow-hidden">
            {/* Background Icon */}
            <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 group-hover:scale-110 group-hover:-rotate-12 transform">
              <cat.icon size={120} />
            </div>

            <div className="flex items-start justify-between mb-6">
              <div className={`${cat.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-gray-200 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <cat.icon size={24} />
              </div>
              <div className="flex gap-1.5">
                <button
                  onClick={() => toggleStatus(cat.id)}
                  title="Toggle Status"
                  className="p-2 text-gray-400 dark:text-gray-500 hover:text-[#1E7B7C] hover:bg-white dark:bg-gray-950 rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100 dark:border-gray-800"
                >
                  <Edit2 size={16} />
                </button>
                <button
                  onClick={() => handleDelete(cat.id)}
                  title="Delete Category"
                  className="p-2 text-gray-400 dark:text-gray-500 hover:text-red-500 hover:bg-white dark:bg-gray-950 rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100 dark:border-gray-800"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-black text-gray-900 dark:text-gray-100 group-hover:text-[#1E7B7C] transition-colors italic">{cat.name}</h3>
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider italic ${cat.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                  }`}>
                  {cat.status}
                </span>
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 font-bold tracking-tight uppercase mb-4 italic">slug: {cat.slug}</p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-50">
                <div>
                  <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1 italic">Providers</p>
                  <p className="text-sm font-black text-gray-900 dark:text-gray-100 italic">{cat.providers}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1 italic">Total Jobs</p>
                  <p className="text-sm font-black text-gray-900 dark:text-gray-100 italic">{cat.jobs}</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 flex items-center justify-center gap-2 text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest hover:text-[#1E7B7C] transition-colors group/btn italic">
              View Analytics
              <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}

        {/* Add New Category Card */}
        {!isAdding && (
          <button
            onClick={() => setIsAdding(true)}
            className="border-2 border-dashed border-gray-200 rounded-[2.5rem] p-6 flex flex-col items-center justify-center gap-4 hover:border-[#1E7B7C]/30 hover:bg-[#E8F4F4]/20 transition-all duration-300 group min-h-[280px]"
          >
            <div className="w-16 h-16 rounded-full bg-gray-50 dark:bg-gray-900 flex items-center justify-center text-gray-400 dark:text-gray-500 group-hover:bg-white group-hover:text-[#1E7B7C] group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-md">
              <Plus size={32} />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-black text-gray-900 dark:text-gray-100 italic">Create New</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium italic">Add a service category</p>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
