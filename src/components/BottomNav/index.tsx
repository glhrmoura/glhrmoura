import { useTranslation } from 'react-i18next';
import { User, Grid2X2 } from 'lucide-react';

import {
  Container,
  NavItem,
  NavIcon,
  NavLabel,
} from './styles';

const BottomNav = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <NavItem to="/" end>
        <NavIcon><User size={22} strokeWidth={1.5} /></NavIcon>
        <NavLabel>{t('nav.about')}</NavLabel>
      </NavItem>
      <NavItem to="/projects">
        <NavIcon><Grid2X2 size={22} strokeWidth={1.5} /></NavIcon>
        <NavLabel>{t('nav.projects')}</NavLabel>
      </NavItem>
    </Container>
  );
};

export default BottomNav;
