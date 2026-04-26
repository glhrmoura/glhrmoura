import { useTranslation } from 'react-i18next';

import { Container, NavItem } from './styles';

const PageNav = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <NavItem to="/" end>{t('nav.about')}</NavItem>
      <NavItem to="/projects">{t('nav.projects')}</NavItem>
    </Container>
  );
};

export default PageNav;
