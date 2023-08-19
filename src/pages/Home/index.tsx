import Mail from '../../components/MailIcon';
import Github from '../../components/GithubIcon';
import CodePen from '../../components/CodePenIcon';

import {
  Container,
  Content,
  Title,
  TextContent,
  LinkContainer,
  ToolContainer,
  ToolTitle,
  ToolList,
  ToolListItem,
  ToolListSeparator,
} from './styles';

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

const Main = () => {
  return (
    <Container>
      <Content>
        <Title>Hi there</Title>
        <TextContent>
          My name is Guilherme Moura, from Brazil. I have more than 7 years of experience with software development,
          always looking to deepen my knowledge and develop new things.
        </TextContent>
        <ToolContainer>
          <ToolTitle>Portfolio</ToolTitle>
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
    </Container>
  );
}

export default Main;
