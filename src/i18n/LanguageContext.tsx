'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, DEFAULT_LANGUAGE } from './config';
import en from './locales/en.json';
import am from './locales/am.json';
import om from './locales/om.json';

const translations: Record<Language, any> = {
    en,
    am,
    om,
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string, variables?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'am' || savedLanguage === 'om')) {
            setLanguageState(savedLanguage);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const t = (key: string, variables?: Record<string, string | number>): string => {
        const keys = key.split('.');
        let value = translations[language];

        for (const k of keys) {
            if (value && value[k]) {
                value = value[k];
            } else {
                // Fallback to English if key missing in current language
                let fallbackValue = translations['en'];
                for (const fk of keys) {
                    if (fallbackValue && fallbackValue[fk]) {
                        fallbackValue = fallbackValue[fk];
                    } else {
                        return key; // Return the key itself if not found even in fallback
                    }
                }
                value = fallbackValue;
                break;
            }
        }

        if (typeof value !== 'string') return key;

        // Perform variable substitution
        if (variables) {
            let substitutedValue = value;
            Object.entries(variables).forEach(([k, v]) => {
                substitutedValue = substitutedValue.replace(new RegExp(`{${k}}`, 'g'), String(v));
            });
            return substitutedValue;
        }

        return value;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useTranslation must be used within a LanguageProvider');
    }
    return context;
}
