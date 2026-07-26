import { useTranslation } from 'react-i18next';
import { LayoutGrid, GitFork, Code2, Mail } from 'lucide-react';

import { projectList } from '~/data';

import { ProjectTile } from '~/components/project-tile';

const actionButtonClass =
  'inline-flex w-full justify-center items-center gap-2 px-5 py-3 text-[13px] font-medium no-underline text-[var(--color-text)] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl transition-colors duration-200 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white';

const About = () => {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col min-h-screen pt-[88px] pb-20 max-md:pb-[100px]">
      <section
        id="about"
        className="scroll-mt-[88px] flex justify-center py-16 max-md:py-12"
      >
        <div className="max-w-[800px] w-full px-5 flex flex-col items-center text-center">
          <div className="mb-7">
            <img
              src="/avatar.png"
              alt="Guilherme Moura"
              className="w-[128px] h-[128px] rounded-full object-cover border border-[var(--color-border)]"
            />
          </div>

          <p className="mb-3 text-[11px] uppercase tracking-[1.8px] text-[var(--color-primary)] font-semibold">
            Software Engineer
          </p>
          <h1 className="text-[40px] max-md:text-[32px] leading-tight font-bold tracking-[-0.5px] mb-4">
            Guilherme Moura
          </h1>
          <p className="leading-7 text-[15px] text-[var(--color-muted)] max-w-[480px]">
            {t('content')}
          </p>

          <div className="grid grid-cols-2 gap-3 mt-9 w-full max-w-[360px]">
            <a href="#projects" className={actionButtonClass}>
              <LayoutGrid size={15} strokeWidth={1.6} />
              {t('nav.projects')}
            </a>
            <a
              href="https://github.com/glhrmoura"
              target="_blank"
              rel="noreferrer"
              className={actionButtonClass}
            >
              <GitFork size={15} strokeWidth={1.6} />
              GitHub
            </a>
            <a
              href="https://codepen.io/glhrmoura/pens/public"
              target="_blank"
              rel="noreferrer"
              className={actionButtonClass}
            >
              <Code2 size={15} strokeWidth={1.6} />
              CodePen
            </a>
            <a href="mailto:mouraggui@gmail.com" className={actionButtonClass}>
              <Mail size={15} strokeWidth={1.6} />
              {t('mail')}
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-[88px] flex justify-center pb-16">
        <div className="max-w-[800px] w-full px-5">
          <div className="mb-8 text-center">
            <h2 className="text-[28px] max-md:text-[24px] font-bold tracking-[-0.4px] mb-3">
              {t('projectTitle')}
            </h2>
            <p className="text-[14px] leading-6 text-[var(--color-muted)] max-w-[480px] mx-auto">
              {t('projectSubtitle')}
            </p>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projectList.map((project, index) => (
              <ProjectTile key={index} item={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
