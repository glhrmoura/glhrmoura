import { MouseEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, GitFork } from 'lucide-react';

import {
  Container,
  Title,
  Description,
  IconContainer,
  LinkContainer,
  IconHover,
  ProjectImage,
} from './styles';

import { Project } from '~/types/project';

interface ProjectCardProps {
  item: Project;
}

export const ProjectCard = ({ item }: ProjectCardProps) => {
  const { t } = useTranslation();

  const navigate = () => {
    window.open(item.link.page, '_blank');
  };

  const stopPropagation: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.stopPropagation();
  };

  return (
    <Container onClick={navigate}>
      <IconContainer>
        <ProjectImage
          width={50}
          height={50}
          src={item.imageUrl}
        />
      </IconContainer>
      <Title>{item.title}</Title>
      <Description>
        {t(item.description)}
      </Description>
      <LinkContainer>
        <a target="_blank" href={item.link.page} onClick={stopPropagation}>
          <IconHover>
            <Globe size={18} strokeWidth={1.5} />
          </IconHover>
        </a>
        {Boolean(item.link.github) && (
          <a target="_blank" href={item.link.github} onClick={stopPropagation}>
            <IconHover>
              <GitFork size={18} strokeWidth={1.5} />
            </IconHover>
          </a>
        )}
      </LinkContainer>
    </Container>
  );
};
