import { FooterLinkType } from '@iniswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.iniswap.finance/contact-us',
      },
      {
        label: t('Blog'),
        href: 'https://iniswap.medium.com/',
      },
      {
        label: t('Community'),
        href: 'https://docs.iniswap.finance/contact-us/telegram',
      },
      {
        label: t('INI token'),
        href: 'https://docs.iniswap.finance/tokenomics/ini',
      },
      // {
      //   label: '—',
      // },
      // {
      //   label: t('Online Store'),
      //   href: 'https://pancakeswap.creator-spring.com/',
      //   isHighlighted: true,
      // },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.iniswap.finance/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.iniswap.finance/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.iniswap.finance/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/iniswap',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.iniswap.finance',
      },
      // {
      //   label: t('Bug Bounty'),
      //   href: 'https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty',
      // },
      {
        label: t('Audits'),
        href: 'https://docs.iniswap.finance/help/faq#is-iniswap-safe-has-iniswap-been-audited',
      },
      // {
      //   label: t('Careers'),
      //   href: 'https://docs.iniswap.finance/hiring/become-a-chef',
      // },
    ],
  },
]
