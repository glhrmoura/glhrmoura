import { useTranslation } from 'react-i18next';

import {
  Container,
  NavItem,
  NavIcon,
  NavLabel,
} from './styles';

const PersonIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);

const GridIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const BottomNav = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <NavItem to="/" end>
        <NavIcon><PersonIcon /></NavIcon>
        <NavLabel>{t('nav.about')}</NavLabel>
      </NavItem>
      <NavItem to="/projects">
        <NavIcon><GridIcon /></NavIcon>
        <NavLabel>{t('nav.projects')}</NavLabel>
      </NavItem>
    </Container>
  );
};

export default BottomNav;
