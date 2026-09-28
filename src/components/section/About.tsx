import { Link } from 'react-router-dom';
import AsciiMorphText from '../AsciiMorphText';
import TypewriterCarousel from '../TypewriterCarousel';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useThemeColors } from '../../hooks/useThemeColors';
import { profile } from '../../assets';


const About = () => {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();
  const { t } = useLanguage()

  const roles = [
    'Étudiante en deuxième année de BUT Informatique à Grenoble',
  ];


  return (
    <section id="about" style={{
      background: themeColors.background.sections?.about || themeColors.background.gradient,
      transition: 'background 0.3s ease-in-out',
      width: '100%',
      maxWidth: '100vw',
      contain: 'layout style'
    }}>
      {/* Hero Section */}
      <div className="py-10 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start max-w-6xl mx-auto gap-6 md:gap-8 flex-nowrap">

            {/* Photo : en premier sur mobile (au-dessus du nom), à droite sur desktop grâce à order-3 */}
            <img
              src={profile}
              alt={t({ fr: 'Portrait', en: 'Profile' })}
              className="order-1 md:order-3 w-32 sm:w-40 md:w-[180px] flex-shrink-0 rounded-2xl shadow-xl object-cover"
              style={{ aspectRatio: '4 / 5' }}
            />

            {/* Bloc texte : toujours en second visuellement */}
            <div className="order-2 text-center md:text-left w-full flex-1 min-w-0">
              <div className="ascii-container justify-center md:justify-start text-3xl md:text-4xl lg:text-5xl">
                <AsciiMorphText text="Sarah Sellam" />
              </div>
              <div className="hero-subtitle justify-center md:justify-start text-base md:text-lg lg:text-xl mt-2">
                <div className="flex flex-wrap items-center justify-center md:justify-start">
                  <span className={isDarkMode ? 'hero-subtitle-dark' : 'hero-subtitle-light'}></span>
                  <TypewriterCarousel roles={roles} className={isDarkMode ? 'hero-subtitle-dark' : 'hero-subtitle-light'} />
                </div>
              </div>
              <div className="hero-buttons flex justify-center md:justify-start gap-3 mt-4">
                <button
                  className="hero-action-btn text-sm md:text-base px-4 py-2 md:px-5 md:py-2.5"
                  onClick={() => {
                    window.open(`${import.meta.env.BASE_URL}resume.pdf`, '_blank');
                  }}
                >
                  Resume →
                </button>
                <Link
                  to="/contact"
                  className="hero-action-btn text-sm md:text-base px-4 py-2 md:px-5 md:py-2.5"
                >
                  Contact →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;