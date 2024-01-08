import styled, { css } from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #1C2541;
  min-height: 100vh;
`

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  gap: 6px;
  padding: 16px;
  width: 600px;
  max-width: calc(100% - 32px);
  margin: 0px auto;
`;

export const LangItem = styled.div<{ $selected: boolean }>`
  font-size: 14px;
  cursor: pointer;

  ${({ $selected }) => $selected && css`
    color: #A1ECF7;
  `}
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
  font-size: 20px;
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

export const ToolListGap = styled.span`
  position: relative;
  display: inline-block;
  margin: 0px 6px;
  font-weight: 700;
`;
