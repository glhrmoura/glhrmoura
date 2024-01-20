import { MailIcon } from '~/icons/Mail';
import { GithubIcon } from '~/icons/Github';
import { CodePenIcon } from '~/icons/CodePen';

import { Project } from '~/types/project';
import { Languages } from '~/types/language';

export const linkList = [
  {
    icon: <GithubIcon />,
    link: 'https://github.com/glhrmoura',
  },
  {
    icon: <CodePenIcon />,
    link: 'https://codepen.io/glhrmoura/pens/public',
  },
  {
    icon: <MailIcon />,
    link: 'mailto:mouraggui@gmail.com',
  },
];

export const langList = [
  {
    title: 'EN',
    value: Languages.EN_US,
  },
  {
    title: 'PT',
    value: Languages.PT_BR,
  },
];

export const projectList: Project[] = [
  {
    title: 'Blan',
    description: 'projects.blan.description',
    link: {
      page: 'https://play.google.com/store/apps/details?id=com.blan',
    }
  },
  {
    title: 'Vue Calendar',
    description: 'projects.vueCalendar.description',
    link: {
      page: 'https://www.npmjs.com/package/@glhrmoura/vue-calendar',
      github: 'https://github.com/glhrmoura/vue-calendar'
    }
  },
  {
    title: 'Imports Sorter',
    description: 'projects.importsSorter.description',
    link: {
      page: 'https://marketplace.visualstudio.com/items?itemName=glhrmoura.imports-sorter',
      github: 'https://github.com/glhrmoura/imports-sorter'
    }
  },
  {
    title: 'Coins',
    description: 'projects.coins.description',
    link: {
      page: 'https://chrome.google.com/webstore/detail/coins/meebfpmdedodccopjbkcihiecpmiljml',
      github: 'https://github.com/glhrmoura/coins'
    }
  },
  {
    title: 'React Conditional',
    description: 'projects.reactConditional.description',
    link: {
      page: 'https://www.npmjs.com/package/@glhrmoura/react-conditional',
      github: 'https://github.com/glhrmoura/react-conditional'
    }
  },
  {
    title: 'Search Hub',
    description: 'projects.searchHub.description',
    link: {
      page: 'https://preeminent-kataifi-ed0e4c.netlify.app',
      github: 'https://github.com/glhrmoura/search-hub'
    }
  },
  {
    title: 'Environment',
    description: 'projects.environment.description',
    link: {
      page: 'https://www.npmjs.com/package/@glhrmoura/environment',
      github: 'https://github.com/glhrmoura/environment'
    }
  },
  {
    title: 'Things: To-Do List',
    description: 'projects.things.description',
    link: {
      page: 'https://astonishing-meringue-7e1211.netlify.app',
      github: 'https://github.com/glhrmoura/things'
    }
  },
  {
    title: 'Piano',
    description: 'projects.piano.description',
    link: {
      page: 'https://exquisite-pie-01cc07.netlify.app',
      github: 'https://github.com/glhrmoura/piano'
    }
  },
];
