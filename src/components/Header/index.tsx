import { useTranslation } from 'react-i18next';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { useTheme } from '~/contexts/theme';

import { LogoIcon } from '~/icons/Logo';
import { BrFlag } from '~/icons/BrFlag';
import { USFlag } from '~/icons/USFlag';

import {
  Group,
  Content,
  Container,
  ItemLabel,
} from './styles';

import { Theme } from '~/types/theme';

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
      value: 'en-us',
      label: (
        <ItemLabel>
          <USFlag /> {t('languages.enUS')}
        </ItemLabel>
      )
    },
    {
      value: 'pt-br',
      label: (
        <ItemLabel>
          <BrFlag /> {t('languages.ptBR')}
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
            value={i18n.language.toLocaleLowerCase()}
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
