import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #D0D0D1;
  padding: 12px;
  cursor: pointer;

  &:hover {
    border-color: #A1ECF7;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
`;

export const Title = styled.h2`
  font-size: 14px;
  text-align: center;
  margin-bottom: 8px;
`

export const Description = styled.p`
  display: -webkit-box;
  max-width: 350px;
  font-size: 12px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const LinkContainer = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const IconHover = styled.div`
  &:hover path {
    color: #A1ECF7;
  }
`;