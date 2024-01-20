import styled, { css } from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #1C2541;
  min-height: 100vh;
  padding-bottom: 36px;
`;

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
  gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
`;
