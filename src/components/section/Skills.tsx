import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import { useLanguage, type Localized } from '../../contexts/LanguageContext';

interface Skill {
  name: Localized
  subtitle?: Localized
  icon?: string // optionnel : image importée (voir src/assets/techstack)
}

interface SkillGroup {
  title: Localized
  skills: Skill[]
}

// Pour un nom identique en français et en anglais (Python, Git...)
const same = (name: string): Localized => ({ fr: name, en: name });

const skillGroups: SkillGroup[] = [
  {
    title: { fr: 'Programmation', en: 'Programming' },
    skills: [
      { name: same('Python') },
      { name: same('Java') },
      { name: same('C') },
    ],
  },
  {
    title: { fr: 'Développement web', en: 'Web development' },
    skills: [
      { name: same('HTML / CSS') },
      { name: same('JavaScript') },
      { name: same('React') },
    ],
  },
  {
    title: { fr: 'Systèmes', en: 'Systems' },
    skills: [
      { name: same('Linux') },
      { name: same('Windows') },
    ],
  },
  {
    title: { fr: 'Bases de données', en: 'Databases' },
    skills: [
      { name: same('SQL') },
      { name: same('PostgreSQL') },
    ],
  },
  {
    title: { fr: 'Outils', en: 'Tools' },
    skills: [
      { name: same('Git / GitHub') },
      { name: same('VS Code') },
    ],
  },
  {
    title: { fr: 'Bureautique', en: 'Office software' },
    skills: [
      { name: same('Word') },
      { name: same('Excel') },
      { name: same('PowerPoint') },
    ],
  },
  {
    title: { fr: 'Permis', en: 'Driving licence' },
    skills: [
      { name: { fr: 'Permis B', en: 'Category B licence' } },
    ],
  },
];

const Skills = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-8 relative" style={{
      background: themeColors.background.sections?.skills || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out'
    }}>
      {/* Gradient overlay for smooth transition from previous section */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '150px',
          background: isDarkMode
            ? `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)`
            : `linear-gradient(180deg, ${themeColors.colors.pink[25]} 0%, transparent 100%)`,
          zIndex: 1
        }}
      />
      <div className="container mx-auto px-6 relative" style={{ zIndex: 2 }}>
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.white : themeColors.colors.pink[500] }}>
          {t({ fr: 'Compétences', en: 'Skills' })}
        </h2>

        <div className="max-w-6xl mx-auto">
          {skillGroups.map((group, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-semibold text-center mb-6" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[400] }}>
                {t(group.title)}
              </h3>
              <div className="flex flex-wrap justify-center gap-8">
                {group.skills.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center group">
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt=""
                        className="w-16 h-16 object-contain mb-2 transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        width="64"
                        height="64"
                      />
                    )}
                    <h4 className="text-center text-sm font-medium" style={{ color: isDarkMode ? themeColors.colors.pink[300] : themeColors.colors.pink[500] }}>
                      {t(skill.name)}
                    </h4>
                    {skill.subtitle && (
                      <p className="text-center text-sm" style={{ color: isDarkMode ? themeColors.colors.dark[300] : themeColors.colors.dark[600] }}>
                        {t(skill.subtitle)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;