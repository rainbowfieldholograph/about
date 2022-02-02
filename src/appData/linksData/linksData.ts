import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { ILinkData } from './linksData.interface'

export const linksData: ILinkData[] = [
  {
    title: 'Github',
    icon: faGithub,
    linkTo: 'https://github.com/rainbowfieldholograph',
  },
  {
    title: 'Telegram',
    icon: faTelegram,
    linkTo: 'https://t.me/duvetduvet',
  },
]
