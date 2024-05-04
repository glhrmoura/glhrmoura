import { useEffect, useRef } from 'react';

interface OutsideClickHandlerProps {
  children: React.ReactNode;
  onClick: () => void;
}

const OutsideClickHandler = ({ children, onClick }: OutsideClickHandlerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [containerRef, onClick]);

  return <div ref={containerRef}>{children}</div>;
};

export { OutsideClickHandler };
