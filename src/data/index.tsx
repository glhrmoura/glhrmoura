import { MailIcon } from '~/icons/Mail';
import { GithubIcon } from '~/icons/Github';
import { CodePenIcon } from '~/icons/CodePen';

import { Project } from '~/types/project';
import { Languages } from '~/types/language';

export const linkList = [
  {
    icon: <GithubIcon color="currentColor" />,
    link: 'https://github.com/glhrmoura',
  },
  {
    icon: <CodePenIcon color="currentColor" />,
    link: 'https://codepen.io/glhrmoura/pens/public',
  },
  {
    icon: <MailIcon color="currentColor" />,
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
    imageUrl: 'https://play-lh.googleusercontent.com/i-ktw1g6PSQLPcJQMHdxl1AW278hlXqSX875phx2aLR0lOBp7dJYH1JCrak4rkRKng=w480-h960-rw',
    description: 'projects.blan.description',
    link: {
      page: 'https://play.google.com/store/apps/details?id=com.blan',
    }
  },
  {
    title: 'Vue Calendar',
    imageUrl: 'https://raw.githubusercontent.com/glhrmoura/vue-calendar/main/src/lib/static/images/logo.png',
    description: 'projects.vueCalendar.description',
    link: {
      page: 'https://www.npmjs.com/package/@glhrmoura/vue-calendar',
      github: 'https://github.com/glhrmoura/vue-calendar'
    }
  },
  {
    title: 'Imports Sorter',
    imageUrl: 'https://glhrmoura.gallerycdn.vsassets.io/extensions/glhrmoura/imports-sorter/0.1.6/1682338739388/Microsoft.VisualStudio.Services.Icons.Default',
    description: 'projects.importsSorter.description',
    link: {
      page: 'https://marketplace.visualstudio.com/items?itemName=glhrmoura.imports-sorter',
      github: 'https://github.com/glhrmoura/imports-sorter'
    }
  },
  {
    title: 'Coins',
    imageUrl: 'https://lh3.googleusercontent.com/IxFijYd3TIeDPViF8UX8MS4ACXZWNfVwFmt8krnSu8Fs5cbxL42P7oN4zGRCDQ5HRghehQ49a3n8Jr7Z75DvP9AVzA=s120',
    description: 'projects.coins.description',
    link: {
      page: 'https://chrome.google.com/webstore/detail/coins/meebfpmdedodccopjbkcihiecpmiljml',
      github: 'https://github.com/glhrmoura/coins'
    }
  },
  {
    title: 'React Conditional',
    imageUrl: 'https://raw.githubusercontent.com/glhrmoura/react-conditional/main/src/lib/static/images/logo.png',
    description: 'projects.reactConditional.description',
    link: {
      page: 'https://www.npmjs.com/package/@glhrmoura/react-conditional',
      github: 'https://github.com/glhrmoura/react-conditional'
    }
  },
  {
    title: 'Search Hub',
    imageUrl: 'https://camo.githubusercontent.com/e1e4c701bc4f596b45ecb63320501827ea3d453d06a0911209b6eaaae7876c9f/68747470733a2f2f63646e2d69636f6e732d706e672e666c617469636f6e2e636f6d2f3531322f333239312f333239313636372e706e67',
    description: 'projects.searchHub.description',
    link: {
      page: 'https://preeminent-kataifi-ed0e4c.netlify.app',
      github: 'https://github.com/glhrmoura/search-hub'
    }
  },
  {
    title: 'Nubank - Web',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:1200/1*1Kj6eAbjrHcWl1gKZD3Ojg.png',
    description: 'projects.nubankWeb.description',
    link: {
      page: 'https://wonderful-cat-055079.netlify.app',
      github: 'https://github.com/glhrmoura/nubank-web'
    }
  },
  {
    title: 'Environment',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/4337/4337703.png',
    description: 'projects.environment.description',
    link: {
      page: 'https://www.npmjs.com/package/@glhrmoura/environment',
      github: 'https://github.com/glhrmoura/environment'
    }
  },
  {
    title: 'Things: To-Do List',
    imageUrl: 'https://raw.githubusercontent.com/glhrmoura/things/main/src/assets/images/logo.png',
    description: 'projects.things.description',
    link: {
      page: 'https://astonishing-meringue-7e1211.netlify.app',
      github: 'https://github.com/glhrmoura/things'
    }
  },
  {
    title: 'Piano',
    imageUrl: 'https://raw.githubusercontent.com/glhrmoura/piano/master/src/images/logo.png',
    description: 'projects.piano.description',
    link: {
      page: 'https://exquisite-pie-01cc07.netlify.app',
      github: 'https://github.com/glhrmoura/piano'
    }
  },
];
