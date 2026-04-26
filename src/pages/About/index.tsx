import { useTranslation } from 'react-i18next';
import { Grid2X2, GitFork } from 'lucide-react';
import { Link } from 'react-router-dom';

import { linkList } from '~/data';

const About = () => {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col min-h-screen pt-[94px] pb-[62px] max-md:pb-[90px]">
      <div className="flex-1 flex justify-center items-center">
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
          <div className="flex items-center justify-center gap-4 mt-6">
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
          <div className="flex items-center justify-center gap-3 mt-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-[13px] font-medium no-underline text-[var(--color-text)] bg-transparent border border-[var(--color-border)] transition-colors duration-150 hover:border-[#23c063] hover:bg-[#23c063] hover:text-[var(--color-bg)] [&_svg]:fill-none [&_svg]:stroke-current hover:[&_svg]:stroke-[var(--color-bg)]"
            >
              <Grid2X2 size={14} strokeWidth={1.5} /> {t('nav.projects')}
            </Link>
            <a
              href="https://github.com/glhrmoura"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-[13px] font-medium no-underline text-[var(--color-text)] bg-transparent border border-[var(--color-border)] transition-colors duration-150 hover:border-[#23c063] hover:bg-[#23c063] hover:text-[var(--color-bg)] [&_svg]:fill-none [&_svg]:stroke-current hover:[&_svg]:stroke-[var(--color-bg)]"
            >
              <GitFork size={14} strokeWidth={1.5} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
