import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  position: fixed;
  top: 96px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 90;
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border}30;
  background-color: ${({ theme }) => theme.colors.background}CC;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 20px ${({ theme }) => theme.colors.border}14;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled(NavLink)`
  font-size: 11px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.6px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.45;
  padding: 6px 18px;
  white-space: nowrap;
  transition: opacity 0.15s, background-color 0.15s, color 0.15s;

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.border}22;
    text-decoration: none;
  }

  &.active {
    opacity: 1;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.highlight};
    background-color: ${({ theme }) => theme.colors.highlight}1A;
  }
`;
