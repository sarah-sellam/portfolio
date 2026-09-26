import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'fr' | 'en'
export type Localized = { fr: string; en: string }

interface LanguageContextType {
  lang: Lang
  toggleLanguage: () => void
  t: (text: Localized) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'fr' || saved === 'en') return saved
    return navigator.language.startsWith('fr') ? 'fr' : 'en'
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggleLanguage = () => setLang(l => (l === 'fr' ? 'en' : 'fr'))
  const t = (text: Localized) => text[lang]

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage doit être utilisé dans un LanguageProvider')
  return ctx
}