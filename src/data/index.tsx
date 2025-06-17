import { MailIcon } from '~/icons/social/Mail';
import { GithubIcon } from '~/icons/social/Github';
import { CodePenIcon } from '~/icons/social/CodePen';

import { Project } from '~/types/project';
import { Languages } from '~/types/language';
//import { Medium } from '~/icons/social/Medium';

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
    title: 'Github',
    icon: <GithubIcon color="currentColor" />,
    link: 'https://github.com/glhrmoura',
  },
  /* {
    title: 'Medium',
    icon: <Medium width={34} color="currentColor" />,
    link: 'https://medium.com/@glhrmoura',
  }, */
  {
    title: 'CodePen',
    icon: <CodePenIcon color="currentColor" />,
    link: 'https://codepen.io/glhrmoura/pens/public',
  },
  {
    title: 'Mail',
    icon: <MailIcon color="currentColor" />,
    link: 'mailto:mouraggui@gmail.com',
  },
];

export const projectList: Project[] = [
  {
    title: 'Tech Blog',
    imageUrl: 'https://i.imgur.com/62A8yG3.png',
    description: 'projects.techBlog.description',
    link: {
      page: 'https://tech-blog-nine-opal.vercel.app/'
    }
  },
  {
    title: 'NoBeer',
    imageUrl: 'https://i.imgur.com/MjpHQbu.png',
    description: 'projects.noBeer.description',
    link: {
      page: 'https://glhrmoura-no-beer.netlify.app',
    }
  },
  {
    title: 'PodPocket',
    imageUrl: 'https://i.imgur.com/EObn6VG.png',
    description: 'projects.podpocket.description',
    link: {
      page: 'https://podpocket.vercel.app',
    }
  },
  {
    title: 'Pace',
    imageUrl: 'https://i.imgur.com/GRHVFPD.png',
    description: 'projects.pace.description',
    link: {
      page: 'https://chromewebstore.google.com/detail/pace-take-control-of-your/mnccaclnbfbldadhkfcemlmkceimlhge',
    }
  },
  {
    title: 'Blan',
    imageUrl: 'https://i.imgur.com/klIyU7Q.png',
    description: 'projects.blan.description',
    link: {
      page: 'https://play.google.com/store/apps/details?id=com.blan',
    }
  },
  {
    title: 'Vue Calendar',
    imageUrl: 'https://i.imgur.com/IG8rws1.png',
    description: 'projects.vueCalendar.description',
    link: {
      page: 'https://www.npmjs.com/package/@glhrmoura/vue-calendar',
      github: 'https://github.com/glhrmoura/vue-calendar'
    }
  },
  {
    title: 'Imports Sorter',
    imageUrl: 'https://i.imgur.com/R2l3UNC.png',
    description: 'projects.importsSorter.description',
    link: {
      page: 'https://marketplace.visualstudio.com/items?itemName=glhrmoura.imports-sorter',
      github: 'https://github.com/glhrmoura/imports-sorter'
    }
  },
  {
    title: 'Coin',
    imageUrl: 'https://i.imgur.com/GJB4zvu.png',
    description: 'projects.coins.description',
    link: {
      page: 'https://chromewebstore.google.com/detail/coins/meebfpmdedodccopjbkcihiecpmiljml?authuser=0&hl=pt-BR',
      github: 'https://github.com/glhrmoura/coins'
    }
  },
  {
    title: 'React Conditional',
    imageUrl: 'https://i.imgur.com/t2AeIFw.png',
    description: 'projects.reactConditional.description',
    link: {
      page: 'https://www.npmjs.com/package/@glhrmoura/react-conditional',
      github: 'https://github.com/glhrmoura/react-conditional'
    }
  },
  {
    title: 'Search Hub',
    imageUrl: 'https://i.imgur.com/3JlRk4o.png',
    description: 'projects.searchHub.description',
    link: {
      page: 'https://preeminent-kataifi-ed0e4c.netlify.app',
      github: 'https://github.com/glhrmoura/search-hub'
    }
  },
  {
    title: 'Nubank - Web',
    imageUrl: 'https://i.imgur.com/Xf6OrL2.png',
    description: 'projects.nubankWeb.description',
    link: {
      page: 'https://nubank-web-glhrmoura.netlify.app/',
      github: 'https://github.com/glhrmoura/nubank-web'
    }
  },
  {
    title: 'Environment',
    imageUrl: 'https://i.imgur.com/WgLrcLy.png',
    description: 'projects.environment.description',
    link: {
      page: 'https://www.npmjs.com/package/@glhrmoura/environment',
      github: 'https://github.com/glhrmoura/environment'
    }
  },
  {
    title: 'Piano',
    imageUrl: 'https://i.imgur.com/5KCCFYe.png',
    description: 'projects.piano.description',
    link: {
      page: 'https://exquisite-pie-01cc07.netlify.app',
      github: 'https://github.com/glhrmoura/piano'
    }
  },
];
