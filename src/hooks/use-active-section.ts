import { useEffect, useState } from 'react';

const SECTION_IDS = ['about', 'projects'] as const;
const OFFSET = 96;

export type ActiveSection = (typeof SECTION_IDS)[number];

type Listener = (section: ActiveSection) => void;

let activeSection: ActiveSection = 'about';
let listeners = new Set<Listener>();
let attached = false;

const getActiveSection = (): ActiveSection => {
  let current: ActiveSection = 'about';

  for (const id of SECTION_IDS) {
    const element = document.getElementById(id);
    if (!element) continue;
    if (element.getBoundingClientRect().top - OFFSET <= 0) {
      current = id;
    }
  }

  return current;
};

const publish = () => {
  const next = getActiveSection();
  if (next === activeSection) return;
  activeSection = next;
  listeners.forEach((listener) => listener(next));
};

const attach = () => {
  if (attached) return;
  attached = true;
  window.addEventListener('scroll', publish, { passive: true });
  window.addEventListener('resize', publish);
};

const detach = () => {
  if (!attached || listeners.size > 0) return;
  attached = false;
  window.removeEventListener('scroll', publish);
  window.removeEventListener('resize', publish);
};

export const useActiveSection = (): ActiveSection => {
  const [section, setSection] = useState<ActiveSection>(activeSection);

  useEffect(() => {
    const listener: Listener = (next) => setSection(next);
    listeners.add(listener);
    attach();
    publish();

    return () => {
      listeners.delete(listener);
      detach();
    };
  }, []);

  return section;
};
