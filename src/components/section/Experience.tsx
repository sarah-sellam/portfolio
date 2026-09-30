import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Calendar, MapPin } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import { useLanguage } from '../../contexts/LanguageContext';

const Experience = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  const { t } = useLanguage();
  const experiences = [
    {
      title: t({ fr: 'Stage de programmation', en: 'Programming course' }),
      company: t({ fr: 'Lycée Aristide Bergès', en: 'Aristide Bergès High School'}),
      location: t({ fr: 'Seyssinet-Pariset, France', en: 'Seyssinet-Pariset, France'}),
      period: t({ fr: 'Juin 2022 - 2 semaines', en: 'June 2022 - 2 weeks'}),
      description: [
        t({ fr: 'Programmation du Rover TI et de cartes de type Adafruit Playground et Pyboard', 
          en: 'Programming the TI Rover and boards such as the Adafruit Playground and Pyboard'}),
      ]
    },
    {
      title: t({ fr: 'Agent polyvalent en cuisine centrale', en: 'All-round kitchen assistant' }),
      company: t({ fr: 'Cuisine centrale', en: 'Central kitchen'}),
      location: t({ fr: 'Saint-Martin-d\'Hères, France', en: 'Saint-Martin-d\'Hères, France'}),
      period: t({ fr: 'Août 2024 - 1 semaine', en: 'August 2024 - 1 week'}),
      description: [
        t({ fr: 'Respect strict des règles d\'hygiène et de sécurité', 
          en: 'Strict adherence to security and hygiene regulations'}),
        t({ fr: 'Participation à la préparation, au conditionnement et à la distribution des plats', 
          en: 'Involvement in the preparation, packaging and distribution of meals'})
      ]
    },
    {
      title: t({ fr: 'Stage d\'observation en entreprise', en: 'Work experience placement' }),
      company: t({ fr: 'Tabac Loto Presse Totem', en: 'Loto Presse Totem tobacconist\'s'}),
      location: t({ fr: 'Fontaine, France', en: 'Fontaine, France'}),
      period: t({ fr: 'Mars 2021 - 1 semaine', en: 'March 2021 - 1 week'}),
      description: [
        t({ fr: 'Réception, vérification, rangement et remise des colis aux clients (point relais)', 
          en: 'Receiving, checking, storing and handing over parcels to customers (collection point)'}),
        t({ fr: 'Traitement des bordereaux de livraison', 
          en: 'Processing delivery notes'})
      ]
    }
  ];

  return (
    <section id="experience" className="py-8 relative" style={{
      background: themeColors.background.sections?.experience || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      {/* Subtle gradient overlay for top edge blending */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)`
            : `linear-gradient(180deg, ${themeColors.colors.pink[25]} 0%, transparent 100%)`,
          zIndex: 1
        }}
      />
      {/* Subtle gradient overlay for bottom edge blending to white divider */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '60px',
          background: isDarkMode
            ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
            : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.white} 100%)`,
          zIndex: 1
        }}
      />
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>{t({ fr: 'Expérience', en: 'Experience' })}</h2>

        <div className="max-w-4xl mx-auto space-y-4">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-2 border-pink-100 dark:border-gray-700 hover:border-pink-200 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg bg-white/95 dark:bg-gray-800/95">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[400] }}>{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-400 mt-1">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2" style={{ color: themeColors.primary }}>•</span>
                      <span className="text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[200] : themeColors.colors.dark[600] }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;