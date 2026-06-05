import { useTranslation } from 'react-i18next';
import { Grid2X2, GitFork, Code2, Mail } from 'lucide-react';

import { projectList } from '~/data';

import { ProjectTile } from '~/components/project-tile';

const actionButtonClass =
  'inline-flex w-full justify-center items-center gap-2 px-6 py-2.5 text-[13px] font-medium no-underline text-[var(--color-text)] bg-transparent border border-[var(--color-border)] transition-colors duration-150 hover:border-[#23c063] hover:bg-[#23c063] hover:text-[var(--color-bg)] [&_svg]:fill-none [&_svg]:stroke-current hover:[&_svg]:stroke-[var(--color-bg)]';

const About = () => {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col min-h-screen pt-[94px] pb-[62px] max-md:pb-[90px]">
      <section
        id="about"
        className="scroll-mt-[94px] flex justify-center py-12 max-md:py-10"
      >
        <div className="max-w-[600px] w-full px-4 flex flex-col items-center text-center">
          <img
            src="/avatar.png"
            alt="Guilherme Moura"
            className="w-[120px] h-[120px] rounded-full object-cover mb-6 border-[3px] border-[var(--color-border)]"
          />
          <h1 className="text-[28px] mb-4">Guilherme Moura</h1>
          <p className="leading-6 text-[14px] text-[var(--color-text)]/85 max-w-[480px]">
            {t('content')}
          </p>
          <div className="grid grid-cols-2 gap-3 mt-8 w-full max-w-[348px]">
            <a href="#projects" className={actionButtonClass}>
              <Grid2X2 size={14} strokeWidth={1.5} /> {t('nav.projects')}
            </a>
            <a
              href="https://github.com/glhrmoura"
              target="_blank"
              rel="noreferrer"
              className={actionButtonClass}
            >
              <GitFork size={14} strokeWidth={1.5} /> GitHub
            </a>
            <a
              href="https://codepen.io/glhrmoura/pens/public"
              target="_blank"
              rel="noreferrer"
              className={actionButtonClass}
            >
              <Code2 size={14} strokeWidth={1.5} /> CodePen
            </a>
            <a href="mailto:mouraggui@gmail.com" className={actionButtonClass}>
              <Mail size={14} strokeWidth={1.5} /> Mail
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-[94px] flex justify-center pt-4 pb-12">
        <div className="max-w-[600px] w-full px-4">
          <h2 className="text-[20px] mb-4">{t('projectTitle')}</h2>
          <p className="text-[14px] leading-6 mb-6 text-[var(--color-text)]/80">
            {t('projectSubtitle')}
          </p>
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(170px,1fr))]">
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
