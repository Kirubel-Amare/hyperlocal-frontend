import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/Footer'
import { mockChatThreads, Message, ChatThread } from '@/lib/chat-data'
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
    ArrowLeft,
    Image as ImageIcon,
    X,
    FileText
} from 'lucide-react'

export default function MessagesPage() {
    const [threads, setThreads] = useState<ChatThread[]>(mockChatThreads)
    const [activeThreadId, setActiveThreadId] = useState(mockChatThreads[0].id)
    const [newMessage, setNewMessage] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [attachedFile, setAttachedFile] = useState<{ name: string; type: string; url: string } | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const scrollRef = useRef<HTMLDivElement>(null)

    const activeThread = threads.find(t => t.id === activeThreadId) || threads[0]

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [activeThread.messages, isTyping])

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault()
        if (!newMessage.trim() && !attachedFile) return

        const message: Message = {
            id: `m-${Date.now()}`,
            senderId: 'me',
            text: newMessage,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isRead: false
        }

        // Update threads with new message
        const updatedThreads = threads.map(t => {
            if (t.id === activeThreadId) {
                return {
                    ...t,
                    messages: [...t.messages, message],
                    lastMessage: newMessage || 'Sent an attachment',
                    lastTimestamp: 'Just now'
                }
            }
            return t
        })

        setThreads(updatedThreads)
        setNewMessage('')
        setAttachedFile(null)

        // Simulate "Typing..." and Response
        setTimeout(() => {
            setIsTyping(true)
            setTimeout(() => {
                setIsTyping(false)
                const reply: Message = {
                    id: `r-${Date.now()}`,
                    senderId: activeThread.participant.id,
                    text: "I'm looking into this right now. Will get back to you in a few minutes!",
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    isRead: false
                }
                setThreads(prev => prev.map(t => {
                    if (t.id === activeThreadId) {
                        return {
                            ...t,
                            messages: [...t.messages, reply],
                            lastMessage: reply.text,
                            lastTimestamp: 'Just now'
                        }
                    }
                    return t
                }))
            }, 3000)
        }, 1000)
    }

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setAttachedFile({
                name: file.name,
                type: file.type,
                url: URL.createObjectURL(file)
            })
        }
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
                            {threads.map(thread => (
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
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-bold text-gray-900 text-sm">{activeThread.participant.name}</h3>
                                        {activeThread.participant.id === 'client-1' && (
                                            <span className="bg-emerald-50 text-emerald-600 text-[8px] font-black uppercase px-2 py-0.5 rounded-full border border-emerald-100">Verified Client</span>
                                        )}
                                    </div>
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
                        <div
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-6 space-y-6 bg-white scroll-smooth"
                        >
                            <div className="flex justify-center">
                                <span className="px-3 py-1 bg-gray-50 text-[10px] font-bold text-gray-400 uppercase tracking-widest rounded-full">Conversation Started</span>
                            </div>

                            {activeThread.messages.map((msg, idx) => {
                                const isMe = msg.senderId === 'me'
                                return (
                                    <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}>
                                        <div className={`max-w-[70%] space-y-1 ${isMe ? 'items-end' : 'items-start'} flex flex-col`}>
                                            <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${isMe
                                                ? 'bg-[#1E7B7C] text-white rounded-tr-none'
                                                : 'bg-gray-100 text-gray-900 rounded-tl-none'
                                                }`}>
                                                {msg.text}
                                            </div>
                                            <div className="flex items-center gap-1.5 px-1 text-[9px] font-black uppercase tracking-tighter">
                                                <span className="text-gray-400">{msg.timestamp}</span>
                                                {isMe && (
                                                    msg.isRead || idx < activeThread.messages.length - 1 ? <CheckCheck size={12} className="text-[#1E7B7C]" /> : <Check size={12} className="text-gray-300" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                            {isTyping && (
                                <div className="flex justify-start animate-in fade-in duration-300">
                                    <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                                        <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" />
                                        <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                                        <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Attachment Preview */}
                        {attachedFile && (
                            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 animate-in slide-in-from-bottom-4">
                                <div className="relative w-32 group">
                                    {attachedFile.type.startsWith('image/') ? (
                                        <div className="relative h-20 w-32 rounded-xl overflow-hidden border-2 border-white shadow-md">
                                            <Image src={attachedFile.url} alt="preview" fill className="object-cover" />
                                        </div>
                                    ) : (
                                        <div className="h-20 w-32 rounded-xl bg-white border border-gray-200 flex flex-col items-center justify-center p-2 text-center">
                                            <FileText size={24} className="text-indigo-500 mb-1" />
                                            <span className="text-[8px] font-bold truncate w-full">{attachedFile.name}</span>
                                        </div>
                                    )}
                                    <button
                                        onClick={() => setAttachedFile(null)}
                                        className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full shadow-lg hover:scale-110 transition-transform"
                                    >
                                        <X size={12} />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Input Area */}
                        <div className="p-6 border-t border-gray-100 bg-white relative z-20">
                            <form onSubmit={handleSendMessage} className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileUpload}
                                        className="hidden"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        className="p-2 text-gray-400 hover:text-[#1E7B7C] hover:bg-emerald-50 rounded-xl transition-all"
                                    >
                                        <Paperclip size={18} />
                                    </button>
                                    <button type="button" className="p-2 text-gray-400 hover:text-amber-500 hover:bg-amber-50 rounded-xl transition-all">
                                        <Smile size={18} />
                                    </button>
                                </div>

                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    className="w-full pl-24 pr-16 py-4 bg-gray-50 border border-transparent focus:border-[#1E7B7C]/20 rounded-2xl outline-none transition-all text-sm font-medium"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                />

                                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                    <button
                                        type="submit"
                                        className={`p-2.5 bg-[#1E7B7C] text-white rounded-xl shadow-lg transition-all transform flex items-center justify-center ${newMessage.trim() || attachedFile ? 'scale-100 opacity-100 h-10 w-10' : 'scale-90 opacity-0 pointer-events-none w-0 h-10 overflow-hidden'}`}
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
