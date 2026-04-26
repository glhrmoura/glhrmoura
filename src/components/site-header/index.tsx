import { useTranslation } from 'react-i18next';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { NavLink } from 'react-router-dom';
import { User, Grid2X2 } from 'lucide-react';

import { useTheme } from '~/contexts/theme';

import { LogoIcon } from '~/icons/general/Logo';
import { SpainFlag } from '~/icons/flag/SpainFlag';
import { ItalyFlag } from '~/icons/flag/ItalyFlag';
import { BrazilFlag } from '~/icons/flag/BrazilFlag';
import { GermanyFlag } from '~/icons/flag/GermanyFlag';
import { UnitedStatesFlag } from '~/icons/flag/UnitedStatesFlag';

import { TranslationService } from '~/services/translations';

import { Theme } from '~/types/theme';
import { Languages } from '~/types/language';

import { LanguageDropdown } from '~/components/language-dropdown';

const navItemClass = ({ isActive }: { isActive: boolean }) =>
  'inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.6px] no-underline px-[10px] py-[5px] transition-[color,opacity] duration-150 ' +
  (isActive
    ? 'text-[#23c063] font-semibold opacity-100 [&_svg]:stroke-[#23c063]'
    : 'text-[var(--color-text)] opacity-40 hover:opacity-70 [&_svg]:stroke-[var(--color-text)]');

const SiteHeader = () => {
  const { i18n, t } = useTranslation();
  const { isDark, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(isDark ? Theme.Light : Theme.Dark);
  };

  const changeLang = (value: string) => {
    i18n.changeLanguage(value);
    TranslationService.setLanguage(value);
  };

  const items = [
    {
      value: Languages.PT_BR,
      label: (
        <div className="flex items-center gap-2" style={{ backgroundColor: 'transparent' }}>
          <BrazilFlag /> Português
        </div>
      ),
    },
    {
      value: Languages.EN_US,
      label: (
        <div className="flex items-center gap-2" style={{ backgroundColor: 'transparent' }}>
          <UnitedStatesFlag /> English
        </div>
      ),
    },
    {
      value: Languages.ES_ES,
      label: (
        <div className="flex items-center gap-2" style={{ backgroundColor: 'transparent' }}>
          <SpainFlag /> Español
        </div>
      ),
    },
    {
      value: Languages.DE_DE,
      label: (
        <div className="flex items-center gap-2" style={{ backgroundColor: 'transparent' }}>
          <GermanyFlag /> Deutsch
        </div>
      ),
    },
    {
      value: Languages.IT_IT,
      label: (
        <div className="flex items-center gap-2" style={{ backgroundColor: 'transparent' }}>
          <ItalyFlag /> Italiano
        </div>
      ),
    },
  ];

  return (
    <header className="fixed top-0 w-full z-[100] bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-border)]/20">
      <div className="flex justify-between items-center px-4 py-4 w-[600px] max-w-full mx-auto">
        <div className="flex items-center gap-5">
          <NavLink
            to="/"
            className="flex items-center justify-center no-underline"
          >
            <LogoIcon width={24} />
          </NavLink>
          <nav className="flex items-center gap-0.5 max-md:hidden">
            <NavLink to="/" end className={navItemClass}>
              <User size={12} strokeWidth={1.8} />
              {t('nav.about')}
            </NavLink>
            <NavLink to="/projects" className={navItemClass}>
              <Grid2X2 size={12} strokeWidth={1.8} />
              {t('nav.projects')}
            </NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <LanguageDropdown
            items={items}
            onChange={changeLang}
            value={i18n.language}
          />
          <DarkModeSwitch
            size={20}
            checked={isDark}
            onChange={toggleTheme}
          />
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
