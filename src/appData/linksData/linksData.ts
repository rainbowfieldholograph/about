import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { ILinkData } from './linksData.interface'

export const linksData: ILinkData[] = [
  {
    title: 'github',
    icon: faGithub,
    linkTo: 'https://github.com/rainbowfieldholograph',
  },
  {
    title: 'telegram',
    icon: faTelegram,
    linkTo: 'https://t.me/duvetduvet',
  },
]
