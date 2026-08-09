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
    title: 'mail',
    icon: <Mail size={24} strokeWidth={1.5} />,
    link: 'mailto:mouraggui@gmail.com',
  },
];

export const projectList: Project[] = [
  {
    title: 'Cash',
    imageUrl: '/assets/projects/cash.png',
    description: 'projects.cash.description',
    link: {
      page: 'https://glhrmoura-cash.netlify.app/',
      github: 'https://github.com/glhrmoura/cash'
    }
  },
  {
    title: 'Coin',
    imageUrl: '/assets/projects/coin.png',
    description: 'projects.coins.description',
    link: {
      page: 'https://chromewebstore.google.com/detail/coins/meebfpmdedodccopjbkcihiecpmiljml?authuser=0&hl=pt-BR',
      github: 'https://github.com/glhrmoura/coins'
    }
  },
  {
    title: 'Daily',
    imageUrl: '/assets/projects/daily.png',
    description: 'projects.daily.description',
    link: {
      page: 'https://glhrmoura-daily.netlify.app/home',
      github: 'https://github.com/glhrmoura/daily'
    }
  },
  {
    title: 'GenPass',
    imageUrl: '/assets/projects/genpass.png',
    description: 'projects.genpass.description',
    link: {
      page: 'https://github.com/glhrmoura/genpass',
    }
  },
  {
    title: 'Len',
    imageUrl: '/assets/projects/len.png',
    description: 'projects.len.description',
    link: {
      page: 'https://chromewebstore.google.com/detail/len-measure-textual-conte/ojodnhhmfnjddbeipjcjhjbdbkkedcgf',
      github: 'https://github.com/glhrmoura/len'
    }
  },
  {
    title: 'Linqo',
    imageUrl: '/assets/projects/linqo.png',
    description: 'projects.linqo.description',
    link: {
      page: 'https://glhrmoura-linqo.netlify.app/',
      github: 'https://github.com/glhrmoura/wpp-dm'
    }
  },
  {
    title: 'Pace',
    imageUrl: '/assets/projects/pace.png',
    description: 'projects.pace.description',
    link: {
      page: 'https://chromewebstore.google.com/detail/pace-take-control-of-your/mnccaclnbfbldadhkfcemlmkceimlhge',
    }
  },
  {
    title: 'Piano',
    imageUrl: '/assets/projects/piano.png',
    description: 'projects.piano.description',
    link: {
      page: 'https://glhrmoura-piano.netlify.app/',
      github: 'https://github.com/glhrmoura/piano'
    }
  },
  {
    title: 'PodPocket',
    imageUrl: '/assets/projects/podpocket.png',
    description: 'projects.podpocket.description',
    link: {
      page: 'https://podpocket.vercel.app',
    }
  },
  {
    title: 'React Conditional',
    imageUrl: '/assets/projects/react-conditional.png',
    description: 'projects.reactConditional.description',
    link: {
      page: 'https://glhrmoura-react-conditional.netlify.app/',
      github: 'https://github.com/glhrmoura/react-conditional'
    }
  },
];
