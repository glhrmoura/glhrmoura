import { useState } from 'react';

import { OutsideClickHandler } from '../OutsideClickHandler';
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

  const close = () => setOpened(false);

  const toggle = () => setOpened((state) => !state);

  const onItemClick = (value: string) => {
    close();
    onChange(value);
  };

  const currentItem = items.find((item) => item.value === value)?.label
    || items[0]?.label
    || null;

  return (
    <OutsideClickHandler onClick={close}>
      <Container data-dropdown-container="true">
        <HeaderContainer onClick={toggle}>
          {currentItem}
        </HeaderContainer>
        {opened && (
          <ItemContainer>
            {items.map((item) => (
              <Item key={item.value} onClick={() => onItemClick(item.value)}>
                {item.label}
              </Item>
            ))}
          </ItemContainer>
        )}
      </Container>
    </OutsideClickHandler>
  );
};

export { Dropdown };
