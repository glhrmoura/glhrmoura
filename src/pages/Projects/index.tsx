import { useTranslation } from 'react-i18next';

import { projectList } from '~/data';

import {
  Container,
  CenterContent,
  Content,
  ProjectTitle,
  ProjectSubtitle,
  ProjectList,
} from './styles';

import { ProjectCard } from '~/components/ProjectCard';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <CenterContent>
        <Content>
          <ProjectTitle>{t('projectTitle')}</ProjectTitle>
          <ProjectSubtitle>{t('projectSubtitle')}</ProjectSubtitle>
          <ProjectList>
            {projectList.map((project, index) => (
              <ProjectCard key={index} item={project} />
            ))}
          </ProjectList>
        </Content>
      </CenterContent>
    </Container>
  );
};

export default Projects;
