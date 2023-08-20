import { useTranslation } from 'react-i18next';

import '~/i18n';

import {
  Container,
  Header,
  CenterContent,
  Content,
  Title,
  TextContent,
  LinkContainer,
  ToolContainer,
  ToolTitle,
  ToolList,
  ToolListItem,
  ToolListSeparator,
  LangItem,
} from './styles';

import Mail from '~/components/MailIcon';
import Github from '~/components/GithubIcon';
import CodePen from '~/components/CodePenIcon';

const linkList = [
  {
    icon: <Github />,
    link: 'https://github.com/glhrmoura',
  },
  {
    icon: <CodePen />,
    link: 'https://codepen.io/glhrmoura',
  },
  {
    icon: <Mail />,
    link: 'mailto:mouraggui@gmail.com',
  },
];

const toolList = [
  {
    title: 'Vue Calendar',
    toolLink: 'https://www.npmjs.com/package/@glhrmoura/vue-calendar',
    githubLink: 'https://github.com/glhrmoura/vue-calendar',
  },
  {
    title: 'Imports Sorter',
    toolLink: 'https://marketplace.visualstudio.com/items?itemName=glhrmoura.imports-sorter',
    githubLink: 'https://github.com/glhrmoura/imports-sorter',
  },
  {
    title: 'Coins',
    toolLink: 'https://chrome.google.com/webstore/detail/coins/meebfpmdedodccopjbkcihiecpmiljml',
    githubLink: 'https://github.com/glhrmoura/coins',
  },
  {
    title: 'React Conditional',
    toolLink: 'https://www.npmjs.com/package/@glhrmoura/react-conditional',
    githubLink: 'https://github.com/glhrmoura/react-conditional',
  },
];

const langList = [
  {
    title: 'EN',
    value: 'en-US',
  },
  {
    title: 'PT',
    value: 'pt-BR',
  },
];

const Main = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Container>
      <Header>
        {langList.map((lang) => (
          <LangItem 
            key={lang.value} 
            onClick={() => changeLang(lang.value)}
            $selected={lang.value === i18n.language} 
          >
            {lang.title}
          </LangItem>
        ))}
      </Header>
      <CenterContent>
        <Content>
          <Title>{t('title')}</Title>
          <TextContent>
            {t('content')}
          </TextContent>
          <ToolContainer>
            <ToolTitle>{t('portifolio')}</ToolTitle>
            <ToolList>
              {toolList.map((tool, index) => (
                <ToolListItem key={index}>
                  <a href={tool.toolLink} target="_blank" rel="noreferrer">
                    {tool.title}
                  </a>
                  <ToolListSeparator>
                    |
                  </ToolListSeparator>
                  <a href={tool.githubLink} target="_blank" rel="noreferrer">
                    Github
                  </a>
                </ToolListItem>
              ))}
            </ToolList>
          </ToolContainer>
          <LinkContainer>
            {linkList.map((contact, index) => (
              <a key={index} href={contact.link} target="_blank" rel="noreferrer">
                {contact.icon}
              </a>
            ))}
          </LinkContainer>
        </Content>
      </CenterContent>
    </Container>
  );
}

export default Main;
