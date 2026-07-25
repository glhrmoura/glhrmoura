import { GitFork, Code2, Mail } from 'lucide-react';

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
    title: 'Github',
    icon: <GitFork size={24} strokeWidth={1.5} />,
    link: 'https://github.com/glhrmoura',
  },
  {
    title: 'CodePen',
    icon: <Code2 size={24} strokeWidth={1.5} />,
    link: 'https://codepen.io/glhrmoura/pens/public',
  },
  {
    title: 'Mail',
    icon: <Mail size={24} strokeWidth={1.5} />,
    link: 'mailto:mouraggui@gmail.com',
  },
];

export const projectList: Project[] = [
  {
    title: 'Cash',
    imageUrl: 'https://i.imgur.com/GK9y85b.png',
    description: 'projects.cash.description',
    link: {
      page: 'https://glhrmoura-cash.netlify.app/',
      github: 'https://github.com/glhrmoura/cash'
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
    title: 'Daily',
    imageUrl: 'https://raw.githubusercontent.com/glhrmoura/daily/main/public/logo.png',
    description: 'projects.daily.description',
    link: {
      page: 'https://glhrmoura-daily.netlify.app/home',
      github: 'https://github.com/glhrmoura/daily'
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
    title: 'Len',
    imageUrl: 'https://i.imgur.com/cfg4sZA.png',
    description: 'projects.len.description',
    link: {
      page: 'https://chromewebstore.google.com/detail/len-measure-textual-conte/ojodnhhmfnjddbeipjcjhjbdbkkedcgf',
      github: 'https://github.com/glhrmoura/len'
    }
  },
  {
    title: 'Pace',
    imageUrl: 'https://i.imgur.com/GRHVFPD.png',
    description: 'projects.pace.description',
    link: {
      page: 'https://chromewebstore.google.com/detail/pace-take-control-of-your/mnccaclnbfbldadhkfcemlmkceimlhge',
      github: 'https://github.com/glhrmoura/pace'
    }
  },
  {
    title: 'Piano',
    imageUrl: 'https://i.imgur.com/5KCCFYe.png',
    description: 'projects.piano.description',
    link: {
      page: 'https://glhrmoura-piano.netlify.app/',
      github: 'https://github.com/glhrmoura/piano'
    }
  },
  {
    title: 'PodPocket',
    imageUrl: 'https://i.imgur.com/EObn6VG.png',
    description: 'projects.podpocket.description',
    link: {
      page: 'https://podpocket.vercel.app',
      github: 'https://github.com/glhrmoura/podpocket'
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
    title: 'Linqo',
    imageUrl: 'https://raw.githubusercontent.com/glhrmoura/linqo/main/public/assets/logo.png',
    description: 'projects.linqo.description',
    link: {
      page: 'https://glhrmoura-linqo.netlify.app/',
      github: 'https://github.com/glhrmoura/wpp-dm'
    }
  },
];
