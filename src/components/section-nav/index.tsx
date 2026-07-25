import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const SectionNav = () => {
  const { t } = useTranslation();
  const { hash } = useLocation();

  const navItemClass = (isActive: boolean) =>
    'text-[12px] font-medium tracking-[0.3px] no-underline whitespace-nowrap px-4 py-2 rounded-lg transition-all duration-150 ' +
    (isActive
      ? 'text-[var(--color-primary)] bg-[var(--color-primary-soft)]'
      : 'text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)]');

  return (
    <nav className="fixed top-[96px] left-1/2 -translate-x-1/2 z-[90] flex items-center gap-1 p-1 border border-[var(--color-border)] bg-[var(--color-surface)] rounded-xl max-md:hidden">
      <a href="#about" className={navItemClass(!hash || hash === '#about')}>{t('nav.about')}</a>
      <a href="#projects" className={navItemClass(hash === '#projects')}>{t('nav.projects')}</a>
    </nav>
  );
};

export default SectionNav;
