'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { mockChatThreads, Message } from '@/lib/chat-data'
import {
    Send,
    Search,
    MoreVertical,
    Phone,
    Video,
    Info,
    Paperclip,
    Smile,
    Check,
    CheckCheck,
    ArrowLeft
} from 'lucide-react'

export default function MessagesPage() {
    const [activeThreadId, setActiveThreadId] = useState(mockChatThreads[0].id)
    const [newMessage, setNewMessage] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const activeThread = mockChatThreads.find(t => t.id === activeThreadId) || mockChatThreads[0]

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault()
        if (!newMessage.trim()) return

        // In a real app, we'd append to messages via state/API
        setNewMessage('')
    }

    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <Header showSidebar={false} />

            <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 pt-28 pb-10 flex flex-col">

                {/* Chat Container */}
                <div className="flex-1 bg-white/60 backdrop-blur-md rounded-[40px] border border-gray-100 shadow-2xl overflow-hidden flex flex-col md:flex-row">

                    {/* Threads Sidebar */}
                    <div className="w-full md:w-80 lg:w-96 border-r border-gray-100 flex flex-col bg-gray-50/30">
                        <div className="p-6">
                            <h2 className="text-2xl font-black text-gray-900 mb-6 font-sans">Messages</h2>
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search chats..."
                                    className="w-full pl-11 pr-4 py-3 bg-white border border-transparent focus:border-[#1E7B7C]/20 rounded-2xl shadow-sm outline-none transition-all text-sm"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-2">
                            {mockChatThreads.map(thread => (
                                <button
                                    key={thread.id}
                                    onClick={() => setActiveThreadId(thread.id)}
                                    className={`w-full p-4 rounded-3xl flex items-start gap-4 transition-all ${activeThreadId === thread.id
                                            ? 'bg-white shadow-lg shadow-[#1E7B7C]/5 border border-[#1E7B7C]/10'
                                            : 'hover:bg-white/50 border border-transparent'
                                        }`}
                                >
                                    <div className="relative flex-shrink-0">
                                        <div className="w-12 h-12 rounded-2xl overflow-hidden bg-gray-100">
                                            {thread.participant.avatar ? (
                                                <Image src={thread.participant.avatar} alt={thread.participant.name} width={48} height={48} className="object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center font-black text-[#1E7B7C]">
                                                    {thread.participant.name.charAt(0)}
                                                </div>
                                            )}
                                        </div>
                                        {thread.participant.isOnline && (
                                            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
                                        )}
                                    </div>

                                    <div className="flex-1 text-left overflow-hidden">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="font-bold text-gray-900 truncate text-sm">{thread.participant.name}</h4>
                                            <span className="text-[10px] text-gray-400 font-bold uppercase">{thread.lastTimestamp}</span>
                                        </div>
                                        <p className={`text-xs truncate ${thread.unreadCount > 0 ? 'text-gray-900 font-bold' : 'text-gray-500'}`}>
                                            {thread.lastMessage}
                                        </p>
                                    </div>

                                    {thread.unreadCount > 0 && (
                                        <div className="w-5 h-5 bg-[#1E7B7C] text-white text-[10px] font-black rounded-full flex items-center justify-center shrink-0">
                                            {thread.unreadCount}
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Chat Main Area */}
                    <div className="flex-1 flex flex-col bg-white">

                        {/* Header */}
                        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <button className="md:hidden p-2 -ml-2 text-gray-400">
                                    <ArrowLeft size={20} />
                                </button>
                                <div className="w-10 h-10 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                                    {activeThread.participant.avatar ? (
                                        <Image src={activeThread.participant.avatar} alt={activeThread.participant.name} width={40} height={40} className="object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center font-black text-[#1E7B7C]">
                                            {activeThread.participant.name.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-sm">{activeThread.participant.name}</h3>
                                    <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">
                                        {activeThread.participant.isOnline ? 'Online' : activeThread.participant.lastActive}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button className="p-2 text-gray-400 hover:text-[#1E7B7C] hover:bg-gray-50 rounded-xl transition-all">
                                    <Phone size={18} />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-[#1E7B7C] hover:bg-gray-50 rounded-xl transition-all">
                                    <Video size={18} />
                                </button>
                                <div className="w-px h-6 bg-gray-100 mx-2" />
                                <button className="p-2 text-gray-400 hover:text-[#1E7B7C] hover:bg-gray-50 rounded-xl transition-all">
                                    <MoreVertical size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Messages List */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white">
                            <div className="flex justify-center">
                                <span className="px-3 py-1 bg-gray-50 text-[10px] font-bold text-gray-400 uppercase tracking-widest rounded-full">Today</span>
                            </div>

                            {activeThread.messages.map((msg, idx) => {
                                const isMe = msg.senderId === 'me'
                                return (
                                    <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[70%] space-y-1 ${isMe ? 'items-end' : 'items-start'} flex flex-col`}>
                                            <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${isMe
                                                    ? 'bg-[#1E7B7C] text-white rounded-tr-none'
                                                    : 'bg-gray-100 text-gray-900 rounded-tl-none'
                                                }`}>
                                                {msg.text}
                                            </div>
                                            <div className="flex items-center gap-1.5 px-1">
                                                <span className="text-[9px] text-gray-400 font-bold uppercase">{msg.timestamp}</span>
                                                {isMe && (
                                                    msg.isRead ? <CheckCheck size={12} className="text-[#1E7B7C]" /> : <Check size={12} className="text-gray-300" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Input Area */}
                        <div className="p-6 border-t border-gray-100">
                            <form onSubmit={handleSendMessage} className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                    <button type="button" className="p-1.5 text-gray-400 hover:text-[#1E7B7C] transition-all"><Paperclip size={18} /></button>
                                </div>

                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    className="w-full pl-14 pr-24 py-4 bg-gray-50 border border-transparent focus:border-[#1E7B7C]/20 rounded-2xl outline-none transition-all text-sm"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                />

                                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                    <button type="button" className="p-1.5 text-gray-400 hover:text-[#1E7B7C] transition-all"><Smile size={18} /></button>
                                    <button
                                        type="submit"
                                        className={`p-2 bg-[#1E7B7C] text-white rounded-xl shadow-lg transition-all transform ${newMessage.trim() ? 'scale-100 opacity-100' : 'scale-90 opacity-50 cursor-not-allowed'}`}
                                    >
                                        <Send size={18} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    )
}
