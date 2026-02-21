'use client'

import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from '@/i18n/LanguageContext';
import { SUPPORTED_LANGUAGES } from '@/i18n/config';
import { ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LanguageSelector() {
    const { language, setLanguage } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLang = SUPPORTED_LANGUAGES.find(lang => lang.code === language) || SUPPORTED_LANGUAGES[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-700/50 bg-white dark:bg-gray-950/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-gray-50/80 dark:bg-gray-900/80 dark:hover:bg-gray-700/80 transition-all duration-300"
            >
                <Globe size={16} className="text-[#1E7B7C] dark:text-cyan-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 dark:text-gray-300">{currentLang.name}</span>
                <ChevronDown size={14} className={`text-gray-400 dark:text-gray-500 dark:text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-950/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-100 dark:border-gray-800 shadow-xl rounded-2xl py-2 z-[60] overflow-hidden"
                    >
                        {SUPPORTED_LANGUAGES.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                className={`flex items-center justify-between w-full px-4 py-2 text-sm font-medium transition-colors ${language === lang.code ? 'bg-[#E8F4F4] dark:bg-cyan-900/30 text-[#1E7B7C] dark:text-cyan-400' : 'text-gray-700 dark:text-gray-300 dark:text-gray-300 hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-lg">{lang.flag}</span>
                                    <span>{lang.name}</span>
                                </div>
                                {language === lang.code && (
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#1E7B7C] dark:bg-cyan-400" />
                                )}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
