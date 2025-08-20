import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }

    return context;
}

export function useMessages() {
    const { messages } = useLanguage();
    return messages;
}

export function useIsPortuguese() {
    const { language } = useLanguage();
    return language === 'pt';
}