import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1C2541;
  min-height: 100vh;
`

export const Content = styled.div`
  max-width: 600px;
  padding: 16px;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin: 0px 0px 24px 0px;
`;

export const TextContent = styled.p`
  line-height: 24px;
  margin: 0px 0px 24px 0px;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 16px;
`;
