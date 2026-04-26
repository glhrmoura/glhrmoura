import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

import { OutsideClickHandler } from '~/components/OutsideClickHandler';

interface ItemProps {
  value: string;
  label: string | React.ReactNode;
}

interface DropdownProps {
  value: string;
  items: ItemProps[];
  onChange: (value: string) => void;
}

const Dropdown = ({ items, value, onChange }: DropdownProps) => {
  const [opened, setOpened] = useState<boolean>(false);

  const close = () => setOpened(false);

  const toggle = () => setOpened((state) => !state);

  const onItemClick = (value: string) => {
    close();
    onChange(value);
  };

  const currentItem =
    items.find((item) => item.value === value)?.label ||
    items[0]?.label ||
    null;

  return (
    <OutsideClickHandler onClick={close}>
      <div className="relative" data-dropdown-container="true">
        <div
          className="flex justify-between items-center px-[10px] py-[10px] text-[12px] w-[150px] cursor-pointer border border-[var(--color-border)]"
          onClick={toggle}
        >
          {currentItem}
          {opened ? (
            <ChevronUp size={14} strokeWidth={1.5} />
          ) : (
            <ChevronDown size={14} strokeWidth={1.5} />
          )}
        </div>
        {opened && (
          <ul className="absolute left-0 top-full w-full z-10 border border-[var(--color-border)] border-t-transparent p-0 m-0 list-none">
            {items.map((item) => (
              <li
                key={item.value}
                className="text-[12px] px-[10px] py-[10px] cursor-pointer hover:bg-[var(--color-border)]/10"
                onClick={() => onItemClick(item.value)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export { Dropdown };
