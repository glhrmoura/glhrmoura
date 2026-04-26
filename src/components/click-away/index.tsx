import { useEffect, useRef } from 'react';

interface ClickAwayProps {
  children: React.ReactNode;
  onClick: () => void;
}

const ClickAway = ({ children, onClick }: ClickAwayProps) => {
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

export { ClickAway };
