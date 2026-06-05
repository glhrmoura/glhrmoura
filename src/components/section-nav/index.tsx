import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const SectionNav = () => {
  const { t } = useTranslation();
  const { hash } = useLocation();

  const navItemClass = (isActive: boolean) =>
    'text-[11px] font-normal uppercase tracking-[0.6px] no-underline whitespace-nowrap px-[18px] py-[6px] transition-[opacity,background-color,color] duration-150 ' +
    (isActive
      ? 'opacity-100 font-semibold text-[#23c063] bg-[#23c063]/10'
      : 'opacity-45 text-[var(--color-text)] hover:opacity-100 hover:bg-[var(--color-border)]/10');

  return (
    <nav className="fixed top-[96px] left-1/2 -translate-x-1/2 z-[90] flex items-center gap-0.5 p-1 border border-[var(--color-border)]/20 bg-[var(--color-bg)]/80 backdrop-blur-md max-md:hidden">
      <a href="#about" className={navItemClass(!hash || hash === '#about')}>{t('nav.about')}</a>
      <a href="#projects" className={navItemClass(hash === '#projects')}>{t('nav.projects')}</a>
    </nav>
  );
};

export default SectionNav;
