import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { User, Grid2X2 } from 'lucide-react';

const navItemClass = ({ isActive }: { isActive: boolean }) =>
  'flex-1 flex flex-col items-center gap-1 no-underline transition-colors duration-200 ' +
  (isActive ? 'text-[#23c063]' : 'text-[var(--color-text)]');

const BottomNav = () => {
  const { t } = useTranslation();

  return (
    <nav className="hidden max-md:flex fixed bottom-0 left-0 right-0 z-[100] bg-theme-bg border-t border-theme-border pb-[calc(8px+env(safe-area-inset-bottom))] py-2">
      <NavLink to="/" end className={navItemClass}>
        {({ isActive }) => (
          <>
            <div
              className={`flex items-center justify-center px-5 py-1.5 transition-colors duration-200 ${
                isActive ? 'bg-[#23c063]/10 rounded-[10px]' : ''
              }`}
            >
              <User size={22} strokeWidth={1.5} />
            </div>
            <span className="text-[11px] tracking-[0.3px]">{t('nav.about')}</span>
          </>
        )}
      </NavLink>
      <NavLink to="/projects" className={navItemClass}>
        {({ isActive }) => (
          <>
            <div
              className={`flex items-center justify-center px-5 py-1.5 transition-colors duration-200 ${
                isActive ? 'bg-[#23c063]/10 rounded-[10px]' : ''
              }`}
            >
              <Grid2X2 size={22} strokeWidth={1.5} />
            </div>
            <span className="text-[11px] tracking-[0.3px]">{t('nav.projects')}</span>
          </>
        )}
      </NavLink>
    </nav>
  );
};

export default BottomNav;
