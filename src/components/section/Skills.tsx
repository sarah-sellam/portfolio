import { useDarkMode } from '../../contexts/DarkModeContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import { useLanguage, type Localized } from '../../contexts/LanguageContext';

import python from '../../assets/techstack/Python.svg';
import java from '../../assets/techstack/Java-Light.svg';
import javaFX from '../../assets/techstack/JavaFX.png';
import c from '../../assets/techstack/C.svg';
import cplusplus from '../../assets/techstack/C-plus-plus.svg';
//import php from '../../assets/techstack/.svg';
//import r from '../../assets/techstack/R.svg';

import html from '../../assets/techstack/HTML.svg';
import css from '../../assets/techstack/CSS.svg';

import linux from '../../assets/techstack/Linux.svg';
import windows from '../../assets/techstack/Windows.svg';

import postgresql from '../../assets/techstack/Postgresql.svg';

import github from '../../assets/techstack/Github-Light.svg';
import intellijidea from '../../assets/techstack/IntelliJIdea.svg';
import vscode from '../../assets/techstack/VSCode.svg';
import notion from '../../assets/techstack/Notion-Light.svg';

import microsoftOffice from '../../assets/techstack/Microsoft-office.svg';
import googleWorkspace from '../../assets/techstack/Google.svg';
import libreOffice from '../../assets/techstack/LibreOffice.svg';

import car from '../../assets/techstack/Car.svg';

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
      { name: same('Python'), icon: python },
      { name: same('Java'), icon: java },
      { name: same('JavaFX'), icon: javaFX },
      { name: same('C'), icon: c },
      { name: same('C++'), icon: cplusplus },
    ],
  },
  {
    title: { fr: 'Développement web', en: 'Web development' },
    skills: [
      { name: same('HTML5'), icon: html },
      { name: same('CSS3'), icon: css },
    ],
  },
  {
    title: { fr: 'Systèmes', en: 'Systems' },
    skills: [
      { name: same('Linux'), icon: linux },
      { name: same('Windows'), icon: windows },
    ],
  },
  {
    title: { fr: 'Bases de données', en: 'Databases' },
    skills: [
      { name: same('PostgreSQL'), icon: postgresql },
    ],
  },
  {
    title: { fr: 'Outils', en: 'Tools' },
    skills: [
      { name: same('Git / GitHub'), icon: github },
      { name: same('IntelliJ IDEA'), icon: intellijidea },
      { name: same('VS Code'), icon: vscode },
      { name: same('Notion'), icon: notion },
    ],
  },
  {
    title: { fr: 'Bureautique', en: 'Office software' },
    skills: [
      { name: same('Microsoft Office'), icon: microsoftOffice },
      { name: same('Google Workspace'), icon: googleWorkspace },
      { name: same('LibreOffice'), icon: libreOffice },
    ],
  },
  {
    title: { fr: 'Permis', en: 'Driving licence' },
    skills: [
      { name: { fr: 'Permis B', en: 'Category B licence' }, icon: car },
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