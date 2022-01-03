import { MenuItemsType, DropdownMenuItemType } from '@iniswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',

    icon: 'Earn',
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },

  {
    label: t('Whitepaper'),
    href: 'https://docs.iniswap.finance/whitepaper',
    showItemsOnMobile: false,
    items: [],
    // icon: 'Trophy',
    // items: [
    //   {
    //     label: t('Whitepaper'),
    //     href: 'https://docs.iniswap.finance/whitepaper',
    //     type: DropdownMenuItemType.EXTERNAL_LINK,
    //   },
    //   {
    //     label: t('Features'),
    //     href: 'https://docs.iniswap.finance/whitepaper#features',
    //     type: DropdownMenuItemType.EXTERNAL_LINK,
    //   },
    //   {
    //     label: t('Tokenomics'),
    //     href: 'https://docs.iniswap.finance/tokenomics/ini/ini-tokenomics',
    //     type: DropdownMenuItemType.EXTERNAL_LINK,
    //   },

    // ],
  },
  /* {
    label: t('Win'),
    href: '/prediction',
    icon: 'Trophy',
    items: [
      {
        label: t('Prediction (BETA)'),
        href: '/prediction',
      },
      {
        label: t('Lottery'),
        href: '/lottery',
      },
    ],
  } */ {
    label: t('NFT'),
    href: '/collectibles',
    icon: 'Nft',

    showOnMobile: false,
    showItemsOnMobile: false,

    items: [
      {
        label: t('Collectibles'),
        href: '#/collectibles',
        status: {
          text: t('Coming Soon'),
          color: 'warning',
        },
      },
    ],
  },

  {
    label: '',
    href: '/info',
    icon: 'More',
    hideSubNav: true,
    items: [
      {
        label: t('Info'),
        href: '/info',
      },
      {
        label: t('Roadmap'),
        href: 'https://docs.iniswap.finance/roadmap',
        type: DropdownMenuItemType.EXTERNAL_LINK,

        // icon: 'Trophy',
      },
      /* {
        label: t('IFO'),
        href: '/ifo',
      },
      {
        label: t('Voting'),
        href: '/voting',
      }, */
      {
        label: t('Team'),
        href: 'https://docs.iniswap.finance/team',
        type: DropdownMenuItemType.EXTERNAL_LINK,
        // icon: 'Trophy',
      },

      {
        type: DropdownMenuItemType.DIVIDER,
      },
      /*  {
        label: t('Leaderboard'),
        href: '/teams',
      }, */
      // {
      //   type: DropdownMenuItemType.DIVIDER,
      // },
      {
        label: t('Blog'),
        href: 'https://medium.com/@iniswapfinance',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Docs'),
        href: 'https://docs.iniswap.finance',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
