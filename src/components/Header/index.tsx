import { useTranslation } from 'react-i18next';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { useTheme } from '~/contexts/theme';

import { LogoIcon } from '~/icons/general/Logo';
import { SpainFlag } from '~/icons/flag/SpainFlag';
import { ItalyFlag } from '~/icons/flag/ItalyFlag';
import { BrazilFlag } from '~/icons/flag/BrazilFlag';
import { GermanyFlag } from '~/icons/flag/GermanyFlag';
import { UnitedStatesFlag } from '~/icons/flag/UnitedStatesFlag';

import {
  Group,
  Content,
  Container,
  ItemLabel,
} from './styles';

import { TranslationService } from '~/services/translations';

import { Theme } from '~/types/theme';
import { Languages } from '~/types/language';

import { Dropdown } from '~/components/Dropdown';

const Header = () => {
  const { i18n } = useTranslation();
  const { isDark, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(isDark ? Theme.Light : Theme.Dark);
  };

  const changeLang = (value: string) => {
    i18n.changeLanguage(value);
    TranslationService.setLanguage(value);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const items = [
    {
      value: Languages.PT_BR,
      label: (
        <ItemLabel>
          <BrazilFlag /> Português
        </ItemLabel>
      )
    },
    {
      value: Languages.EN_US,
      label: (
        <ItemLabel>
          <UnitedStatesFlag /> English
        </ItemLabel>
      )
    },
    {
      value: Languages.ES_ES,
      label: (
        <ItemLabel>
          <SpainFlag /> Español
        </ItemLabel>
      )
    },
    {
      value: Languages.DE_DE,
      label: (
        <ItemLabel>
          <GermanyFlag /> Deutsch
        </ItemLabel>
      )
    },
    {
      value: Languages.IT_IT,
      label: (
        <ItemLabel>
          <ItalyFlag /> Italiano
        </ItemLabel>
      )
    },
  ];

  return (
    <Container>
      <Content>
        <Group>
          <LogoIcon
            width={24}
            onClick={scrollTop}
          />
        </Group>
        <Group>
          <Dropdown
            items={items}
            onChange={changeLang}
            value={i18n.language}
          />
          <DarkModeSwitch
            size={20}
            checked={isDark}
            onChange={toggleTheme}
          />
        </Group>
      </Content>
    </Container>
  );
};

export default Header;
