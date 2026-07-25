import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { User, LayoutGrid } from 'lucide-react';

const MobileNav = () => {
  const { t } = useTranslation();
  const { hash } = useLocation();

  const isAbout = !hash || hash === '#about';
  const isProjects = hash === '#projects';

  const navItemClass = (isActive: boolean) =>
    'flex-1 flex flex-col items-center gap-1 no-underline transition-colors duration-200 ' +
    (isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-muted)]');

  return (
    <nav className="hidden max-md:flex fixed bottom-0 left-0 right-0 z-[100] bg-[var(--color-bg)] border-t border-[var(--color-border)] pb-[calc(10px+env(safe-area-inset-bottom))] pt-2 px-3">
      <a href="#about" className={navItemClass(isAbout)}>
        <div
          className={`flex items-center justify-center px-5 py-1.5 transition-all duration-200 ${
            isAbout ? 'bg-[var(--color-primary-soft)] rounded-xl' : ''
          }`}
        >
          <User size={20} strokeWidth={1.6} />
        </div>
        <span className="text-[11px] tracking-[0.2px] font-medium">{t('nav.about')}</span>
      </a>
      <a href="#projects" className={navItemClass(isProjects)}>
        <div
          className={`flex items-center justify-center px-5 py-1.5 transition-all duration-200 ${
            isProjects ? 'bg-[var(--color-primary-soft)] rounded-xl' : ''
          }`}
        >
          <LayoutGrid size={20} strokeWidth={1.6} />
        </div>
        <span className="text-[11px] tracking-[0.2px] font-medium">{t('nav.projects')}</span>
      </a>
    </nav>
  );
};

export default MobileNav;
