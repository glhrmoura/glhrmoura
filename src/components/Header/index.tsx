import { ChangeEventHandler } from 'react';

import { useTranslation } from 'react-i18next';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { useTheme } from '~/contexts/theme';

import '~/i18n';

import { Container, SelectContainer, Content, Option, Select, Logo, Group } from './styles';

import { Theme } from '~/types/theme';

import LogoDark from '~/assets/images/logo-dark.png';
import LogoLight from '~/assets/images/logo-light.png';

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
            <Select value={i18n.language} onChange={changeLang}>
              <Option value="pt-BR">PT</Option>
              <Option value="en-US">EN</Option>
            </Select>
          </SelectContainer>
          <DarkModeSwitch size={20} checked={isDark} onChange={toggleTheme} />
        </Group>
      </Content>
    </Container>
  );
};

export default Header;
