import { ChangeEventHandler } from 'react';

import { useTranslation } from 'react-i18next';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import LogoDark from '~/assets/images/logo-dark.png';
import LogoLight from '~/assets/images/logo-light.png';

import { useTheme } from '~/contexts/theme';

import { Container, SelectContainer, Content, Option, Select, Logo, Group } from './styles';

import { Theme } from '~/types/theme';

const Header = () => {
  const { i18n } = useTranslation();
  const { isDark, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(isDark ? Theme.Light : Theme.Dark);
  };

  const changeLang: ChangeEventHandler<HTMLSelectElement> = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Container>
      <Content>
        <Group>
          <Logo src={isDark ? LogoLight : LogoDark} />
        </Group>
        <Group>
          <SelectContainer>
            <Select value={i18n.language.toLocaleLowerCase()} onChange={changeLang}>
              <Option value="pt-br">PT</Option>
              <Option value="en-us">EN</Option>
            </Select>
          </SelectContainer>
          <DarkModeSwitch size={20} checked={isDark} onChange={toggleTheme} />
        </Group>
      </Content>
    </Container>
  );
};

export default Header;
