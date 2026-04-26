import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 94px;
  padding-bottom: 62px;

  @media (max-width: 768px) {
    padding-bottom: 90px;
  }
`;

export const CenterContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 24px;
  border: 3px solid ${({ theme }) => theme.colors.border};
`;

export const Name = styled.h1`
  font-size: 28px;
  margin-bottom: 16px;
`;

export const Bio = styled.p`
  line-height: 24px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.85;
  max-width: 480px;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
`;

export const IconHover = styled.div`
  svg {
    transition: stroke 0.15s;
  }

  &:hover svg {
    stroke: ${({ theme }) => theme.colors.highlight};
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;
`;

const BaseButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.15s, color 0.15s;

  svg {
    fill: none;
    stroke: currentColor;
  }
`;

const outlineButton = `
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
`;

export const ProjectsLink = styled(Link)`
  ${outlineButton}
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: background-color 0.15s, border-color 0.15s, color 0.15s;

  svg {
    fill: none;
    stroke: ${({ theme }) => theme.colors.text};
    transition: stroke 0.15s;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.highlight};
    background-color: ${({ theme }) => theme.colors.highlight};
    color: ${({ theme }) => theme.colors.background};

    svg {
      stroke: ${({ theme }) => theme.colors.background};
    }
  }
`;

export const GithubLink = styled.a`
  ${outlineButton}
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: background-color 0.15s, border-color 0.15s, color 0.15s;

  svg {
    fill: none;
    stroke: ${({ theme }) => theme.colors.text};
    transition: stroke 0.15s;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.highlight};
    background-color: ${({ theme }) => theme.colors.highlight};
    color: ${({ theme }) => theme.colors.background};

    svg {
      stroke: ${({ theme }) => theme.colors.background};
    }
  }
`;
