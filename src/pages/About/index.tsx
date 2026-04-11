import { useTranslation } from 'react-i18next';

import { linkList } from '~/data';

import {
  Avatar,
  Container,
  CenterContent,
  Content,
  Name,
  Bio,
  LinkContainer,
  IconHover,
} from './styles';

const About = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <CenterContent>
        <Content>
          <Avatar src="/avatar.png" alt="Guilherme Moura" />
          <Name>Guilherme Moura</Name>
          <Bio>{t('content')}</Bio>
          <LinkContainer>
            {linkList.map((contact, index) => (
              <a key={index} title={contact.title} href={contact.link} target="_blank" rel="noreferrer">
                <IconHover>
                  {contact.icon}
                </IconHover>
              </a>
            ))}
          </LinkContainer>
        </Content>
      </CenterContent>
    </Container>
  );
};

export default About;
