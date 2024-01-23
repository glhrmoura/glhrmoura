import styled, { css } from 'styled-components';

export const Container = styled.header`
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  width: 600px;
  max-width: 100%;
  margin: 0px auto;
`;

export const LangList = styled.div`
  display: flex;
  align-self: center;
  gap: 6px;
`;

export const LangItem = styled.p<{ $selected: boolean }>`
  font-size: 14px;
  cursor: pointer;

  ${({ $selected }) => $selected && css`
    color: ${({ theme }) => theme.colors.highlight};
  `}
`;

export const Divider = styled.div`
  height: 20px;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.border};
`;

export const SelectContainer = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 14px;
    right: 8px;
    border: 4px solid transparent;
    border-top-color: ${({ theme }) => theme.colors.border};
  }
`

export const Select = styled.select`
  appearance: none;
  padding: 9px 32px 9px 9px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Option = styled.option``;

export const Logo = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  cursor: pointer;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;