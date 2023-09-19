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
  ToolListGap,
  LangItem,
} from './styles';

import Mail from '~/components/MailIcon';
import GitHub from '~/components/GitHubIcon';
import CodePen from '~/components/CodePenIcon';

const linkList = [
  {
    icon: <GitHub />,
    link: 'https://github.com/glhrmoura',
  },
  {
    icon: <CodePen />,
    link: 'https://codepen.io/glhrmoura/pens/public',
  },
  {
    icon: <Mail />,
    link: 'mailto:mouraggui@gmail.com',
  },
];

const toolList = [
    {
    title: 'Blan',
    toolLink: 'https://play.google.com/store/apps/details?id=com.blan',
  },
  {
    title: 'Vue Calendar',
    toolLink: 'https://www.npmjs.com/package/@glhrmoura/vue-calendar',
    gitHubLink: 'https://github.com/glhrmoura/vue-calendar',
  },
  {
    title: 'Imports Sorter',
    toolLink: 'https://marketplace.visualstudio.com/items?itemName=glhrmoura.imports-sorter',
    gitHubLink: 'https://github.com/glhrmoura/imports-sorter',
  },
  {
    title: 'Coins',
    toolLink: 'https://chrome.google.com/webstore/detail/coins/meebfpmdedodccopjbkcihiecpmiljml',
    gitHubLink: 'https://github.com/glhrmoura/coins',
  },
  {
    title: 'React Conditional',
    toolLink: 'https://www.npmjs.com/package/@glhrmoura/react-conditional',
    gitHubLink: 'https://github.com/glhrmoura/react-conditional',
  },
  {
    title: 'Things: To-Do List',
    toolLink: 'https://astonishing-meringue-7e1211.netlify.app/',
    gitHubLink: 'https://github.com/glhrmoura/things',
  },
  {
    title: 'Piano',
    toolLink: 'https://exquisite-pie-01cc07.netlify.app/',
    gitHubLink: 'https://github.com/glhrmoura/piano',
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
                  {Boolean(tool.gitHubLink) && (
                   <>
                      <ToolListGap>
                        ·
                      </ToolListGap>
                      <a href={tool.gitHubLink} target="_blank" rel="noreferrer">
                        Github
                      </a>
                   </>
                  )}
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
