'use client'

import React, { useState } from 'react';
import {
  Users,
  Search,
  Filter,
  MoreVertical,
  ShieldCheck,
  UserX,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle2,
  XCircle,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ShieldAlert,
  Ban,
  RotateCcw,
  Trash2
} from 'lucide-react';
import { useToast } from '@/providers/ToastProvider';

const initialUsers = [
  {
    id: 1,
    name: 'Sarah Miller',
    email: 'sarah.m@example.com',
    role: 'Provider',
    status: 'Active',
    joined: 'Jan 12, 2024',
    rating: 4.9,
    jobs: 124,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    id: 2,
    name: 'Alex Johnson',
    email: 'alex.j@example.com',
    role: 'Customer',
    status: 'Active',
    joined: 'Feb 05, 2024',
    rating: 4.5,
    jobs: 12,
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop'
  },
  {
    id: 3,
    name: 'Mark Wilson',
    email: 'mark.w@example.com',
    role: 'Provider',
    status: 'Unverified',
    joined: 'Feb 15, 2024',
    rating: 0,
    jobs: 0,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop'
  },
  {
    id: 4,
    name: 'Emma Davis',
    email: 'emma.d@example.com',
    role: 'Customer',
    status: 'Suspended',
    joined: 'Nov 20, 2023',
    rating: 3.8,
    jobs: 8,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  },
  {
    id: 5,
    name: 'Michael Chen',
    email: 'm.chen@example.com',
    role: 'Provider',
    status: 'Active',
    joined: 'Dec 10, 2023',
    rating: 4.7,
    jobs: 56,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
  },
];

export default function UserManagementPage() {
  const [userList, setUserList] = useState(initialUsers);
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { showToast } = useToast();

  const filteredUsers = userList.filter(user => {
    const matchesTab = activeTab === 'All' || user.role === activeTab;
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleStatusChange = (id: number, newStatus: 'Active' | 'Suspended' | 'Unverified') => {
    setUserList(prev => prev.map(user => {
      if (user.id === id) {
        showToast(`User ${user.name} status updated to ${newStatus}`, newStatus === 'Suspended' ? 'warning' : 'success');
        return { ...user, status: newStatus };
      }
      return user;
    }));
  };

  const deleteUser = (id: number) => {
    const userToDelete = userList.find(u => u.id === id);
    setUserList(prev => prev.filter(u => u.id !== id));
    showToast(`User ${userToDelete?.name} permanently deleted`, 'error');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight mb-2 italic">User Management</h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium italic">Manage and monitor all platform users, their activities and status.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 px-5 py-2.5 rounded-2xl font-bold text-sm text-gray-700 dark:text-gray-300 shadow-sm hover:bg-gray-50 transition-all flex items-center gap-2 italic">
            <Filter size={18} />
            Filters
          </button>
          <button className="bg-[#1E7B7C] text-white px-6 py-2.5 rounded-2xl font-bold text-sm shadow-lg shadow-[#1E7B7C]/20 hover:scale-[1.02] transition-all flex items-center gap-2 italic">
            <Users size={18} />
            Invite Admin
          </button>
        </div>
      </div>

      {/* Stats Cards for Users */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 rounded-[2rem] shadow-sm flex items-center gap-5 group cursor-pointer hover:shadow-xl transition-all duration-300">
          <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Users size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mb-0.5 italic">Total Users</p>
            <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100">{userList.length}</h3>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 rounded-[2rem] shadow-sm flex items-center gap-5 group cursor-pointer hover:shadow-xl transition-all duration-300">
          <div className="w-14 h-14 rounded-2xl bg-[#E8F4F4] text-[#1E7B7C] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <ShieldCheck size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mb-0.5 italic">Providers</p>
            <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100">{userList.filter(u => u.role === 'Provider').length}</h3>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 p-6 rounded-[2rem] shadow-sm flex items-center gap-5 group cursor-pointer hover:shadow-xl transition-all duration-300">
          <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <UserX size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mb-0.5 italic">Reported/Suspended</p>
            <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100">{userList.filter(u => u.status === 'Suspended').length}</h3>
          </div>
        </div>
      </div>

      {/* Search and Tabs */}
      <div className="bg-white dark:bg-gray-950/70 backdrop-blur-xl border border-gray-100 dark:border-gray-800 rounded-[2.5rem] shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex p-1 bg-gray-50 dark:bg-gray-900 rounded-2xl w-fit">
            {['All', 'Provider', 'Customer'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all italic ${activeTab === tab
                  ? 'bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:text-gray-300'
                  }`}
              >
                {tab}s
              </button>
            ))}
          </div>
          <div className="relative group flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 group-focus-within:text-[#1E7B7C] transition-colors" size={20} />
            <input
              type="text"
              placeholder="Search by name, email or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-[#1E7B7C]/20 focus:ring-4 focus:ring-[#1E7B7C]/5 transition-all text-sm font-medium italic"
            />
          </div>
        </div>

        {/* User Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50/50 dark:bg-gray-900/50">
                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">User Profile</th>
                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Role</th>
                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Jobs/Activity</th>
                <th className="px-6 py-4 text-left text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Joined Date</th>
                <th className="px-6 py-4 text-right text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredUsers.length > 0 ? filteredUsers.map((user) => (
                <tr key={user.id} className="group hover:bg-gray-50/50 dark:bg-gray-900/50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-sm"
                        />
                        <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 border-2 border-white dark:border-gray-800 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' :
                          user.status === 'Suspended' ? 'bg-red-500' : 'bg-gray-400'
                          }`} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-gray-100 text-sm group-hover:text-[#1E7B7C] transition-colors italic">{user.name}</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium italic">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold italic ${user.role === 'Provider' ? 'bg-indigo-50 text-indigo-600' : 'bg-purple-50 text-purple-600'
                      }`}>
                      {user.role === 'Provider' ? <ShieldCheck size={14} /> : <Users size={14} />}
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold italic ${user.status === 'Active' ? 'bg-emerald-50 text-emerald-600' :
                      user.status === 'Unverified' ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'
                      }`}>
                      {user.status === 'Active' ? <CheckCircle2 size={14} /> :
                        user.status === 'Unverified' ? <Calendar size={14} /> : <Ban size={14} />}
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div>
                      <span className="text-sm font-black text-gray-900 dark:text-gray-100">{user.jobs}</span>
                      <span className="text-xs text-gray-400 dark:text-gray-500 font-bold ml-1 italic">Jobs</span>
                      <div className="flex items-center gap-1 mt-1 text-[10px] font-bold text-amber-500">
                        <span className="bg-amber-50 px-1.5 py-0.5 rounded italic">⭐ {user.rating}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm font-bold text-gray-500 dark:text-gray-400 italic">
                    {user.joined}
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {user.status === 'Suspended' ? (
                        <button
                          onClick={() => handleStatusChange(user.id, 'Active')}
                          title="Unsuspend User"
                          className="p-2 text-emerald-500 hover:bg-emerald-50 rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100 dark:border-gray-800"
                        >
                          <RotateCcw size={18} />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleStatusChange(user.id, 'Suspended')}
                          title="Suspend User"
                          className="p-2 text-red-500 hover:bg-red-50 rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100 dark:border-gray-800"
                        >
                          <Ban size={18} />
                        </button>
                      )}
                      <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-[#1E7B7C] hover:bg-white dark:bg-gray-950 rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100 dark:border-gray-800">
                        <ExternalLink size={18} />
                      </button>
                      <button
                        onClick={() => deleteUser(user.id)}
                        title="Delete User"
                        className="p-2 text-gray-400 dark:text-gray-500 hover:text-red-600 hover:bg-white dark:bg-gray-950 rounded-xl shadow-sm transition-all border border-transparent hover:border-gray-100 dark:border-gray-800"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={6} className="px-6 py-20 text-center">
                    <div className="flex flex-col items-center gap-3 text-gray-400 dark:text-gray-500">
                      <Users size={48} strokeWidth={1} />
                      <p className="text-lg font-black italic">No users found</p>
                      <p className="text-sm font-medium italic">Try a different search or filter</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Placeholder */}
        <div className="p-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
          <p className="text-sm font-bold text-gray-400 dark:text-gray-500 italic">
            Showing <span className="text-gray-900 dark:text-gray-100 font-black italic">1 - {filteredUsers.length}</span> of <span className="text-gray-900 dark:text-gray-100 font-black italic">{userList.length}</span> users
          </p>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-xl border border-gray-100 dark:border-gray-800 text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:bg-gray-900 disabled:opacity-50" disabled>
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-1">
              <button className="w-10 h-10 rounded-xl bg-[#1E7B7C] text-white font-black text-sm italic">1</button>
            </div>
            <button className="p-2 rounded-xl border border-gray-100 dark:border-gray-800 text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:bg-gray-900 disabled:opacity-50" disabled>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
