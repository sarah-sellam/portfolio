import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import { useLanguage, type Localized } from '../../contexts/LanguageContext'

interface EducationItem {
    period: string
    degree: Localized
    school: Localized
    location: Localized
    details?: Localized[]
}

const education: EducationItem[] = [
    {
        period: '2026 – 2027',
        degree: { fr: 'Deuxième année de BUT Informatique', en: "Second year of Bachelor's degree in Computer Science" },
        school: { fr: 'IUT2', en: 'IUT2' },
        location: { fr: 'Grenoble', en: 'Grenoble' },
        details: [{ fr: 'Réseaux et cybersécurité', 
            en: 'Networks and cybersecurity'},
        { fr: 'Parcours : Déploiement d\'Applications Communicantes et Sécurisées', 
            en: 'Course : Deployment of Secure, Connected Applications' }
        ],
    },
    {
        period: '2025 – 2026',
        degree: { fr: 'Première année de BUT Informatique', en: "First year of Bachelor's degree in Computer Science" },
        school: { fr: 'IUT2', en: 'IUT2' },
        location: { fr: 'Grenoble', en: 'Grenoble' },
    },
    {
        period: '2024 – 2025',
        degree: { fr: 'Première année de classe préparatoire', en: "First year of preparatory course" },
        school: { fr: 'La Prépa intégrée des INP', en: 'INP\'s integrated preparatory course' },
        location: { fr: 'Grenoble', en: 'Grenoble' },
    }, 
    {
        period: '2024',
        degree: { fr: 'Baccalauréat général', en: 'High School Diploma' },
        school: { fr: 'Lycée Aristide Bergès', en: 'Aristide Bergès High School' },
        location: { fr: 'Seyssinet-Pariset, France', en: 'Seyssinet-Pariset, France' },
        details: [
            { fr: 'Mention Bien', en: 'High honours' },
            { fr: 'Mathématiques, Physique-Chimie et Numérique et Sciences Informatiques', en: 'Mathematics, Physics and Chemistry, and Computer Science' }
        ],
    },   
]

export default function Education() {
    const { isDarkMode } = useDarkMode();
    const themeColors = useThemeColors();
    const { t } = useLanguage()

    return (
        <section
            id="education"
            className="py-20 px-6"
            style={{
                background: themeColors.background.gradient,
                transition: 'background 0.3s ease-in-out',
            }}
        >
            <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>
                {t({ fr: 'Formation', en: 'Education' })}
            </h2>
            <ol
                className="relative max-w-3xl mx-auto ml-6 md:mx-auto"
                style={{ borderLeft: `2px solid ${isDarkMode ? themeColors.colors.dark[600] : themeColors.colors.pink[200]}` }}
            >
                {education.map((item, i) => (
                    <li key={i} className="mb-10 ml-8 relative">
                        <span
                            className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full"
                            style={{
                                backgroundColor: themeColors.colors.pink[500],
                                boxShadow: `0 0 0 4px ${isDarkMode ? themeColors.colors.dark[900] : themeColors.colors.white}`,
                            }}
                        />
                        <time
                            className="text-sm"
                            style={{ color: isDarkMode ? themeColors.colors.pink[100] : themeColors.colors.dark[500], opacity: 0.7 }}
                        >
                            {item.period}
                        </time>
                        <h3
                            className="text-xl font-semibold"
                            style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.dark[700] }}
                        >
                            {t(item.degree)}
                        </h3>
                        <p style={{ color: isDarkMode ? themeColors.colors.pink[100] : themeColors.colors.dark[600], opacity: 0.8 }}>
                            {t(item.school)} — {t(item.location)}
                        </p>
                        {item.details && (
                            <ul
                                className="mt-2 list-disc list-inside text-sm"
                                style={{ color: isDarkMode ? themeColors.colors.pink[100] : themeColors.colors.dark[600], opacity: 0.8 }}
                            >
                                {item.details.map((d, j) => <li key={j}>{t(d)}</li>)}
                            </ul>
                        )}
                    </li>
                ))}
            </ol>
        </section>
    )
}