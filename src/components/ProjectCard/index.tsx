import { MouseEventHandler } from 'react';

import { BoxIcon } from '~/icons/Box';
import { GlobeIcon } from '~/icons/Globe';
import { GithubIcon } from '~/icons/Github';

import { useTranslation } from 'react-i18next';

import {
  Container,
  Title,
  Description,
  IconContainer,
  LinkContainer,
  IconHover,
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

  const stopPropagation: MouseEventHandler<HTMLAnchorElement>  = (event) => {
    event.stopPropagation()
  }

  return (
    <Container onClick={navigate}>
      <IconContainer>
        <BoxIcon width={40} />
      </IconContainer>
      <Title>{item.title}</Title>
      <Description>
        {t(item.description)}
      </Description>
      <LinkContainer>
        <a target="_blank" href={item.link.page} onClick={stopPropagation}>
          <IconHover>
            <GlobeIcon width={18} color="currentColor" />
          </IconHover>
        </a>
        {Boolean(item.link.github) && (
          <a target="_blank" href={item.link.github} onClick={stopPropagation}>
            <IconHover>
              <GithubIcon width={18} color="currentColor" />
            </IconHover>
          </a>
        )}
      </LinkContainer>
    </Container>
  );
};
