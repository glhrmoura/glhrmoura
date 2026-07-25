import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

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

const navItemClass = (isActive: boolean) =>
  'relative inline-flex items-center text-[12px] font-medium tracking-[0.4px] no-underline px-3 py-2 rounded-lg transition-all duration-200 ' +
  (isActive
    ? 'text-[var(--color-primary)] bg-[var(--color-primary-soft)]'
    : 'text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface)]');

const SiteHeader = () => {
  const { i18n, t } = useTranslation();
  const { isDark, setTheme } = useTheme();
  const { hash } = useLocation();

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
        <div className="flex items-center gap-2">
          <BrazilFlag /> Português
        </div>
      ),
    },
    {
      value: Languages.EN_US,
      label: (
        <div className="flex items-center gap-2">
          <UnitedStatesFlag /> English
        </div>
      ),
    },
    {
      value: Languages.ES_ES,
      label: (
        <div className="flex items-center gap-2">
          <SpainFlag /> Español
        </div>
      ),
    },
    {
      value: Languages.DE_DE,
      label: (
        <div className="flex items-center gap-2">
          <GermanyFlag /> Deutsch
        </div>
      ),
    },
    {
      value: Languages.IT_IT,
      label: (
        <div className="flex items-center gap-2">
          <ItalyFlag /> Italiano
        </div>
      ),
    },
  ];

  return (
    <header className="fixed top-0 w-full z-[100] bg-[var(--color-bg)] border-b border-[var(--color-border)]">
      <div className="flex justify-between items-center px-5 py-3.5 w-[800px] max-w-full mx-auto">
        <div className="flex items-center gap-4">
          <NavLink
            to="/"
            className="flex items-center justify-center no-underline rounded-xl p-1.5 transition-colors hover:bg-[var(--color-surface)]"
          >
            <LogoIcon width={22} />
          </NavLink>
          <nav className="flex items-center gap-1 max-md:hidden">
            <a href="#about" className={navItemClass(!hash || hash === '#about')}>
              {t('nav.about')}
            </a>
            <a href="#projects" className={navItemClass(hash === '#projects')}>
              {t('nav.projects')}
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-2.5">
          <LanguageDropdown
            items={items}
            onChange={changeLang}
            value={i18n.language}
          />
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] transition-all duration-200 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} strokeWidth={1.7} /> : <Moon size={16} strokeWidth={1.7} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
