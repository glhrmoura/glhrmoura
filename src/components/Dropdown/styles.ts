import styled from 'styled-components';

export const Container = styled.header`
  position: relative;
`;

export const HeaderContainer = styled.div`
  appearance: none;
  padding: 10px 32px 10px 10px;
  font-size: 12px;
  width: 150px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
`;

export const ItemContainer = styled.ul`
  position: absolute;
  left: 0px;
  top: 100%;
  padding: 0px;
  margin: 0px;
  list-style: none;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-top-color: transparent;
`;

export const Item = styled.li`
  font-size: 12px;
  padding: 10px;
  cursor: pointer;
`;
