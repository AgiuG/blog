"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react"
import ptMessages from "../messages/pt.json";
import enMessages from "../messages/en.json";

type Language = 'pt' | 'en'
type Message = typeof ptMessages;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    messages: Message;
    toggleLanguage: () => void;
}

interface LanguageProviderProps {
    children: ReactNode;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLanguage(): Language {
    if (typeof window === "undefined") return "pt";

    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "pt" || savedLanguage === 'en')) {
        return savedLanguage;
    }

    const browserLanguage = navigator.language.toLowerCase();
    if (browserLanguage.startsWith("pt")) {
        return "pt";
    }

    return "en";
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguage] = useState<Language>('pt');
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const initialLanguage = getInitialLanguage();
        setLanguage(initialLanguage);
        setIsInitialized(true);
    }, []);

    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem("language", language);
        }
    }, [language, isInitialized]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
    };

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
    };

    const messages = language === 'pt' ? ptMessages : enMessages;

    const value: LanguageContextType = {
        language,
        setLanguage: handleSetLanguage,
        messages,
        toggleLanguage,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export { LanguageContext }