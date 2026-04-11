import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

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
`;

export const Select = styled.select`
  appearance: none;
  padding: 9px 32px 9px 9px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 12px;
`;

export const ItemLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled(NavLink)`
  position: relative;
  font-size: 13px;
  font-weight: 400;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.5;
  padding: 6px 10px;
  border-radius: 6px;
  transition: opacity 0.2s, background-color 0.2s;

  &:hover {
    opacity: 0.9;
    background-color: ${({ theme }) => theme.colors.border}18;
    text-decoration: none;
  }

  &.active {
    opacity: 1;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.highlight};
    background-color: ${({ theme }) => theme.colors.highlight}14;
  }
`;
