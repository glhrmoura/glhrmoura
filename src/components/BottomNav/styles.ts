import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: ${({ theme }) => theme.colors.background};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    padding: 8px 0 calc(8px + env(safe-area-inset-bottom));
  }
`;

export const NavItem = styled(NavLink)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.45;
  transition: opacity 0.2s;

  &.active {
    opacity: 1;
    color: ${({ theme }) => theme.colors.highlight};

    svg {
      stroke: ${({ theme }) => theme.colors.highlight};
    }
  }
`;

export const NavIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  svg {
    background-color: transparent;
    transition: stroke 0.2s;
  }
`;

export const NavLabel = styled.span`
  font-size: 11px;
  letter-spacing: 0.3px;
  background-color: transparent;
`;
