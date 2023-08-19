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
`;

export const TextContent = styled.p`
  margin-top: 32px;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
`;

export const ToolContainer = styled.div`
  margin-top: 32px;
`;

export const ToolTitle = styled.h2`
  font-size: 22px;
`;

export const ToolList = styled.ul`
  padding-left: 16px;
  margin: 0px;
  margin-top: 8px;
`;

export const ToolListItem = styled.li`
  font-weight: 300;
  padding: 2px 0px 2px 8px;
`;

export const ToolListSeparator = styled.span`
  position: relative;
  display: inline-block;
  margin: 0px 8px;
  font-weight: 200;
`;
