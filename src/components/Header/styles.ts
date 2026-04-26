import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
  position: fixed;
  width: 100%;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.background}CC;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border}22;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const LogoWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border}50;
  text-decoration: none;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text}70;
  padding: 5px 10px;
  transition: color 0.15s;

  svg {
    fill: none;
    stroke: ${({ theme }) => theme.colors.text}70;
    transition: stroke 0.15s;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text}BB;
    text-decoration: none;

    svg {
      stroke: ${({ theme }) => theme.colors.text}BB;
    }
  }

  &.active {
    color: ${({ theme }) => theme.colors.highlight};
    font-weight: 600;

    svg {
      stroke: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

