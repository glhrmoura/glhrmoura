import { useTranslation } from 'react-i18next';

import { projectList, langList, linkList } from '~/data';

import {
  Title,
  Header,
  Content,
  LangItem,
  Container,
  Description,
  ProjectList,
  ProjectTitle,
  CenterContent,
  LinkContainer,
  ProjectContainer,
} from './styles';

import { ProjectCard } from '~/components/ProjectCard';

const Main = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const isEqualLang = (langA: string, langB: string) => {
    return langA?.toLocaleLowerCase() === langB?.toLocaleLowerCase()
  };

  return (
    <Container>
      <Header>
        {langList.map((lang) => (
          <LangItem
            key={lang.value}
            onClick={() => changeLang(lang.value)}
            $selected={isEqualLang(lang.value, i18n.language)}
          >
            {lang.title}
          </LangItem>
        ))}
      </Header>
      <CenterContent>
        <Content>
          <Title>{t('title')}</Title>
          <Description>{t('content')}</Description>
          <LinkContainer>
            {linkList.map((contact, index) => (
              <a key={index} href={contact.link} target="_blank" rel="noreferrer">
                {contact.icon}
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
}

export default Main;
