import { MouseEventHandler } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, GitFork, ExternalLink } from 'lucide-react';

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
    <article
      className="group relative flex flex-col h-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-4 cursor-pointer transition-colors duration-200 hover:border-[var(--color-primary)]"
      onClick={navigate}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] overflow-hidden">
          <img
            width={32}
            height={32}
            src={item.imageUrl}
            alt={item.title}
            className="object-contain"
          />
        </div>
        <ExternalLink
          size={15}
          strokeWidth={1.6}
          className="opacity-0 translate-y-1 text-[var(--color-muted)] transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-[var(--color-primary)]"
        />
      </div>

      <h2 className="text-[15px] font-semibold tracking-[-0.2px] mb-2">
        {item.title}
      </h2>
      <p className="text-[12px] leading-5 text-[var(--color-muted)] line-clamp-3 flex-1">
        {t(item.description)}
      </p>

      <div className="mt-5 pt-4 border-t border-[var(--color-border)] flex items-center gap-2">
        <a
          target="_blank"
          href={item.link.page}
          onClick={stopPropagation}
          className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-lg border border-[var(--color-border)] text-[11px] font-medium whitespace-nowrap text-[var(--color-muted)] transition-colors duration-150 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          aria-label={`${item.title} live`}
        >
          <Globe size={14} strokeWidth={1.7} />
          {t('projectActions.live')}
        </a>
        {Boolean(item.link.github) && (
          <a
            target="_blank"
            href={item.link.github}
            onClick={stopPropagation}
            className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-lg border border-[var(--color-border)] text-[11px] font-medium whitespace-nowrap text-[var(--color-muted)] transition-colors duration-150 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            aria-label={`${item.title} github`}
          >
            <GitFork size={14} strokeWidth={1.7} />
            {t('projectActions.code')}
          </a>
        )}
      </div>
    </article>
  );
};
