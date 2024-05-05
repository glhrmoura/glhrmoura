import { useTranslation } from 'react-i18next';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { useTheme } from '~/contexts/theme';

import { LogoIcon } from '~/icons/general/Logo';
import { SpainFlag } from '~/icons/flag/SpainFlag';
import { BrazilFlag } from '~/icons/flag/BrazilFlag';
import { UnitedStatesFlag } from '~/icons/flag/UnitedStatesFlag';

import {
  Group,
  Content,
  Container,
  ItemLabel,
} from './styles';

import { Theme } from '~/types/theme';
import { Languages } from '~/types/language';

import { Dropdown } from '~/components/Dropdown';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { isDark, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(isDark ? Theme.Light : Theme.Dark);
  };

  const changeLang = (value: string) => {
    i18n.changeLanguage(value);
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const items = [
    {
      value: Languages.EN_US,
      label: (
        <ItemLabel>
          <UnitedStatesFlag /> {t('languages.enUS')}
        </ItemLabel>
      )
    },
    {
      value: Languages.PT_BR,
      label: (
        <ItemLabel>
          <BrazilFlag /> {t('languages.ptBR')}
        </ItemLabel>
      )
    },
    {
      value: Languages.ES_ES,
      label: (
        <ItemLabel>
          <SpainFlag /> {t('languages.esES')}
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
