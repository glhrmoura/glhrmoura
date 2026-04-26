import { useTranslation } from 'react-i18next';
import { Grid2X2, GitFork } from 'lucide-react';

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
  ButtonRow,
  ProjectsLink,
  GithubLink,
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
          <ButtonRow>
            <ProjectsLink to="/projects">
              <Grid2X2 size={14} strokeWidth={1.5} /> {t('nav.projects')}
            </ProjectsLink>
            <GithubLink href="https://github.com/glhrmoura" target="_blank" rel="noreferrer">
              <GitFork size={14} strokeWidth={1.5} /> GitHub
            </GithubLink>
          </ButtonRow>
        </Content>
      </CenterContent>
    </Container>
  );
};

export default About;
