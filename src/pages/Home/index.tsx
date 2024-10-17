import { useTranslation } from 'react-i18next';

import { projectList, linkList } from '~/data';

import {
  Title,
  Content,
  Container,
  Description,
  ProjectList,
  ProjectTitle,
  CenterContent,
  LinkContainer,
  IconHover,
  ProjectContainer,
} from './styles';

import { ProjectCard } from '~/components/ProjectCard';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <CenterContent>
        <Content>
          <Title>{t('title')}</Title>
          <Description>{t('content')}</Description>
          <LinkContainer>
            {linkList.map((contact, index) => (
              <a key={index} title={contact.title} href={contact.link} target="_blank" rel="noreferrer">
                <IconHover>
                  {contact.icon}
                </IconHover>
              </a>
            ))}
          </LinkContainer>
          <ProjectContainer>
            <ProjectTitle>{t('projectTitle')}</ProjectTitle>
            <ProjectList>
              {projectList.map((project, index) => (
                <ProjectCard key={index} item={project} />
              ))}
            </ProjectList>
          </ProjectContainer>
        </Content>
      </CenterContent>
    </Container>
  );
};

export default Home;
