import styled from 'styled-components';

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
  &:hover svg path {
    color: ${({ theme }) => theme.colors.highlight};
  }
`;
