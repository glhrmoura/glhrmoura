

import { useState } from 'react';
import {
  Container,
  HeaderContainer,
  ItemContainer,
  Item
} from './styles';

interface ItemProps {
  value: string
  label: string | React.ReactNode;
}

interface DropdownProps {
  value: string;
  items: ItemProps[]
  onChange: (value: string) => void
}

const Dropdown = ({ items, value, onChange }: DropdownProps) => {
  const [opened, setOpened] = useState<boolean>(false);

  const current = items.find((item) => item.value === value)?.label || null;

  const onClickItem = (value: string) => {
    setOpened(false);
    onChange(value);
  };

  return (
    <Container>
      <HeaderContainer onClick={() => setOpened((state) => !state)}>
        {current}
      </HeaderContainer>
      {opened && (
        <ItemContainer>
          {items.map((item) => (
            <Item key={item.value} onClick={() => onClickItem(item.value)}>
              {item.label}
            </Item>
          ))}
        </ItemContainer>
      )}
    </Container>
  );
};

export { Dropdown };
