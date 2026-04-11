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
`;

export const Content = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 16px;
`;

export const ProjectTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 16px;
`;

export const ProjectSubtitle = styled.p`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
`;

export const ProjectList = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
`;
