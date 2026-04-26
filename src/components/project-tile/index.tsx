import { MouseEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, GitFork } from 'lucide-react';

import { Project } from '~/types/project';

interface ProjectTileProps {
  item: Project;
}

export const ProjectTile = ({ item }: ProjectTileProps) => {
  const { t } = useTranslation();

  const navigate = () => {
    window.open(item.link.page, '_blank');
  };

  const stopPropagation: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className="relative flex flex-col border-2 border-[var(--color-border)] p-3 cursor-pointer hover:border-[#23c063] transition-colors"
      onClick={navigate}
    >
      <div className="flex justify-center mb-3">
        <img
          width={50}
          height={50}
          src={item.imageUrl}
          className="object-contain"
        />
      </div>
      <h2 className="text-[14px] text-center mb-2">{item.title}</h2>
      <p className="text-[10px] leading-4 line-clamp-3 max-w-[350px]">
        {t(item.description)}
      </p>
      <div className="mt-[18px] flex justify-end gap-3">
        <a
          target="_blank"
          href={item.link.page}
          onClick={stopPropagation}
          className="[&_svg]:transition-[stroke] [&_svg]:duration-150 hover:[&_svg]:stroke-[#23c063]"
        >
          <Globe size={18} strokeWidth={1.5} />
        </a>
        {Boolean(item.link.github) && (
          <a
            target="_blank"
            href={item.link.github}
            onClick={stopPropagation}
            className="[&_svg]:transition-[stroke] [&_svg]:duration-150 hover:[&_svg]:stroke-[#23c063]"
          >
            <GitFork size={18} strokeWidth={1.5} />
          </a>
        )}
      </div>
    </div>
  );
};
