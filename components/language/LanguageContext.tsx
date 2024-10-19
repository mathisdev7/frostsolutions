"use client"

import React, { createContext, ReactNode, useContext, useState } from "react"

import translations from "@/lib/translation"

export type Language = "en" | "fr" | "es"

type Translations = typeof translations
type TranslationKeys =
  | keyof Translations[Language]
  | `${keyof Translations[Language]}.${string}`

interface LanguageContextType {
  language: Language
  setLanguage: React.Dispatch<React.SetStateAction<Language>>
  t: (key: TranslationKeys) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: TranslationKeys): string => {
    const keys = key.split(".")
    let translation: any = translations[language]

    for (const k of keys) {
      if (translation[k] === undefined) {
        throw new Error(`Translation for key "${key}" does not exist.`)
      }
      translation = translation[k]
    }

    if (typeof translation === "string") {
      return translation
    }
    throw new Error(`Translation for key "${key}" is not a string.`)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
