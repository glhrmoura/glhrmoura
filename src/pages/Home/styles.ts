import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 94px;
  padding-bottom: 62px;
`;

export const CenterContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 600px;
  padding: 16px;
`;

export const Title = styled.h1`
  font-size: 32px;
`;

export const Description = styled.p`
  margin-top: 16px;
  line-height: 24px;
  font-size: 14px;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 16px;
`;

export const ProjectContainer = styled.div`
  margin-top: 32px;
`;

export const ProjectTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
`;

export const ProjectList = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
`;

export const IconHover = styled.div`
  &:hover svg path {
    color: ${({ theme }) => theme.colors.highlight};
  }
`;
