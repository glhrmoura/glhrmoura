import styled from 'styled-components';

export const Container = styled.header`
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 12px;
  width: 150px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.border};
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
