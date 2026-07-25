import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

import { ClickAway } from '~/components/click-away';

interface ItemProps {
  value: string;
  label: string | React.ReactNode;
}

interface LanguageDropdownProps {
  value: string;
  items: ItemProps[];
  onChange: (value: string) => void;
}

const LanguageDropdown = ({ items, value, onChange }: LanguageDropdownProps) => {
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
    <ClickAway onClick={close}>
      <div className="relative" data-dropdown-container="true">
        <button
          type="button"
          className="flex justify-between items-center gap-2 px-3 h-10 text-[12px] min-w-[148px] cursor-pointer border border-[var(--color-border)] bg-[var(--color-surface)] rounded-xl transition-colors duration-150 hover:border-[var(--color-primary)]"
          onClick={toggle}
        >
          {currentItem}
          {opened ? (
            <ChevronUp size={14} strokeWidth={1.6} />
          ) : (
            <ChevronDown size={14} strokeWidth={1.6} />
          )}
        </button>
        {opened && (
          <ul className="absolute left-0 top-[calc(100%+6px)] w-full z-10 border border-[var(--color-border)] p-1 m-0 list-none bg-[var(--color-surface)] rounded-xl overflow-hidden">
            {items.map((item) => (
              <li
                key={item.value}
                className="block w-full text-[12px] px-3 py-2.5 cursor-pointer rounded-lg transition-colors duration-150 hover:bg-[var(--color-primary-soft)] hover:text-[var(--color-primary)]"
                onClick={() => onItemClick(item.value)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </ClickAway>
  );
};

export { LanguageDropdown };
