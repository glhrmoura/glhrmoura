import { useTranslation } from 'react-i18next';

import { projectList } from '~/data';

import { ProjectCard } from '~/components/ProjectCard';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col min-h-screen pt-[94px] pb-[62px] max-md:pb-[90px]">
      <div className="flex-1 flex justify-center">
        <div className="max-w-[600px] w-full px-4">
          <h2 className="text-[20px] mb-4">{t('projectTitle')}</h2>
          <p className="text-[14px] leading-6 mb-6 text-[var(--color-text)]/80">
            {t('projectSubtitle')}
          </p>
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(170px,1fr))]">
            {projectList.map((project, index) => (
              <ProjectCard key={index} item={project} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
