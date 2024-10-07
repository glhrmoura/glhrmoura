import { MailIcon } from '~/icons/social/Mail';
import { GithubIcon } from '~/icons/social/Github';
import { CodePenIcon } from '~/icons/social/CodePen';

import { Project } from '~/types/project';
import { Languages } from '~/types/language';

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

export const projectList: Project[] = [
  {
    title: 'List',
    imageUrl: 'https://i.imgur.com/0ID32Iu.png',
    description: 'projects.list.description',
    link: {
      page: 'https://list-web-ej96.onrender.com',
    }
  },
  {
    title: 'Blan',
    imageUrl: 'https://play-lh.googleusercontent.com/i-ktw1g6PSQLPcJQMHdxl1AW278hlXqSX875phx2aLR0lOBp7dJYH1JCrak4rkRKng=w480-h960-rw',
    description: 'projects.blan.description',
    link: {
      page: 'https://play.google.com/store/apps/details?id=com.blan',
      github: 'https://github.com/glhrmoura/blan',
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
    imageUrl: 'https://raw.githubusercontent.com/glhrmoura/coins/main/docs/logo.png',
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
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3291/3291667.png',
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
