import { useTranslation } from 'react-i18next';

import '~/i18n';
import { Languages } from '~/i18n/types/languages';

import {
  Container,
  Header,
  CenterContent,
  Content,
  Title,
  Description,
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
    link: {
      page: 'https://play.google.com/store/apps/details?id=com.blan',
    }
  },
  {
    title: 'Vue Calendar',
    link: {
      page: 'https://www.npmjs.com/package/@glhrmoura/vue-calendar',
      github: 'https://github.com/glhrmoura/vue-calendar'
    }
  },
  {
    title: 'Imports Sorter',
    link: {
      page: 'https://marketplace.visualstudio.com/items?itemName=glhrmoura.imports-sorter',
      github: 'https://github.com/glhrmoura/imports-sorter'
    }
  },
  {
    title: 'Coins',
    link: {
      page: 'https://chrome.google.com/webstore/detail/coins/meebfpmdedodccopjbkcihiecpmiljml',
      github: 'https://github.com/glhrmoura/coins'
    }
  },
  {
    title: 'React Conditional',
    link: {
      page: 'https://www.npmjs.com/package/@glhrmoura/react-conditional',
      github: 'https://github.com/glhrmoura/react-conditional'
    }
  },
  {
    title: 'Search Hub',
    link: {
      page: 'https://preeminent-kataifi-ed0e4c.netlify.app',
      github: 'https://github.com/glhrmoura/search-hub'
    }
  },
  {
    title: 'Environment',
    link: {
      page: 'https://www.npmjs.com/package/@glhrmoura/environment',
      github: 'https://github.com/glhrmoura/environment'
    }
  },
  {
    title: 'Things: To-Do List',
    link: {
      page: 'https://astonishing-meringue-7e1211.netlify.app',
      github: 'https://github.com/glhrmoura/things'
    }
  },
  {
    title: 'Piano',
    link: {
      page: 'https://exquisite-pie-01cc07.netlify.app',
      github: 'https://github.com/glhrmoura/piano'
    }
  },
];

const langList = [
  {
    title: 'EN',
    value: Languages.EN_US,
  },
  {
    title: 'PT',
    value: Languages.PT_BR,
  },
];

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
          <ToolContainer>
            <ToolTitle>{t('portifolio')}</ToolTitle>
            <ToolList>
              {toolList.map((tool, index) => (
                <ToolListItem key={index}>
                  <a href={tool.link.page} target="_blank" rel="noreferrer">
                    {tool.title}
                  </a>
                  {Boolean(tool.link.github) && (
                    <>
                      <ToolListGap>
                        ·
                      </ToolListGap>
                      <a href={tool.link.github} target="_blank" rel="noreferrer">
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
