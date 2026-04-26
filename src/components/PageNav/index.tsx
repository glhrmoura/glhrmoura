import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const navItemClass = ({ isActive }: { isActive: boolean }) =>
  `text-[11px] font-normal uppercase tracking-[0.6px] no-underline whitespace-nowrap px-[18px] py-[6px] transition-[opacity,background-color,color] duration-150 ` +
  (isActive
    ? 'opacity-100 font-semibold text-[#23c063] bg-[#23c063]/10'
    : 'opacity-45 text-[var(--color-text)] hover:opacity-100 hover:bg-[var(--color-border)]/10');

const PageNav = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-[96px] left-1/2 -translate-x-1/2 z-[90] flex items-center gap-0.5 p-1 border border-[var(--color-border)]/20 bg-[var(--color-bg)]/80 backdrop-blur-md max-md:hidden">
      <NavLink to="/" end className={navItemClass}>{t('nav.about')}</NavLink>
      <NavLink to="/projects" className={navItemClass}>{t('nav.projects')}</NavLink>
    </nav>
  );
};

export default PageNav;
