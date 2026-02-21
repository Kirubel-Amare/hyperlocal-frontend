export type Language = 'en' | 'am' | 'om';

export const SUPPORTED_LANGUAGES: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'am', name: 'Amharic (አማርኛ)', flag: '🇪🇹' },
    { code: 'om', name: 'Oromo (Afaan Oromoo)', flag: '🇪🇹' },
];

export const DEFAULT_LANGUAGE: Language = 'en';
