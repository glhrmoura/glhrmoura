import Mail from '../../components/MailIcon';
import Github from '../../components/GithubIcon';
import CodePen from '../../components/CodePenIcon';

import {
  Container,
  Content,
  Title,
  TextContent,
  LinkContainer,
} from './styles';

const Main = () => {
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

  return (
    <Container>
      <Content>
        <Title>Hi there</Title>
        <TextContent>
          My name is Guilherme Moura, from Brazil. I have more than 7 years of experience with software development,
          always looking to deepen my knowledge and develop new things.
        </TextContent>
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
