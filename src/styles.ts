import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  padding: 16px;
  width: 600px;
  max-width: 100%;
  margin: 0px auto;
`;

export const LangItem = styled.div<{ $selected: boolean }>`
  font-size: 14px;
  cursor: pointer;

  ${({ $selected }) => $selected && css`
    color: ${({ theme }) => theme.colors.highlight};
  `}
`;

export const LangList = styled.div`
  display: flex;
  align-self: center;
  gap: 6px;
  height: 18px;
`;
