import { useTranslation } from 'react-i18next';

import { projectList, linkList } from '~/data';

import { ProjectCard } from '~/components/ProjectCard';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col min-h-screen pt-[94px] pb-[62px] max-md:pb-[90px]">
      <div className="flex-1 flex justify-center items-center">
        <div className="max-w-[600px] w-full px-4">
          <h1 className="text-[28px] mb-4">{t('title')}</h1>
          <p className="leading-6 text-[14px] text-[var(--color-text)]/85 mb-6">{t('content')}</p>
          <div className="flex items-center gap-4 mb-8">
            {linkList.map((contact, index) => (
              <a
                key={index}
                title={contact.title}
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                className="[&_svg]:transition-[stroke] [&_svg]:duration-150 hover:[&_svg]:stroke-[#23c063]"
              >
                {contact.icon}
              </a>
            ))}
          </div>
          <div>
            <h2 className="text-[20px] mb-4">{t('projectTitle')}</h2>
            <p className="text-[14px] leading-6 mb-6 text-[var(--color-text)]/80">{t('projectSubtitle')}</p>
            <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(170px,1fr))]">
              {projectList.map((project, index) => (
                <ProjectCard key={index} item={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
