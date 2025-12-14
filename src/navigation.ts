import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Async Agents',
      href: getPermalink('async-agents', 'category'),
    },
    {
      text: 'AI Models',
      href: getPermalink('ai-models', 'category'),
    },
    //   {
    //     text: 'Home Labs',
    //     href: getPermalink('home-labs', 'category'),
    //   },
    {
      text: 'Software Development',
      href: getPermalink('software-development', 'category'),
    },
  ]
};

export const footerData = {
  secondaryLinks: [
    { text: 'Terms and Conditions', icon: 'tabler:brand-github', href: '/terms' },
    { text: 'Privacy Policy', icon: 'tabler:brand-github', href: '/privacy' },
    { text: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/ggzy12345/async-agents' },
  ]
};
