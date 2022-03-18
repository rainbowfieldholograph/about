import { ILinkData } from './linksData.interface';
import { ReactComponent as GithubIcon } from '../../img/github-icon.svg';
import { ReactComponent as TelegramIcon } from '../../img/telegram-icon.svg';

export const linksData: ILinkData[] = [
  {
    title: 'Github',
    icon: GithubIcon,
    linkTo: 'https://github.com/rainbowfieldholograph',
  },
  {
    title: 'Telegram',
    icon: TelegramIcon,
    linkTo: 'https://t.me/duvetduvet',
  },
];
