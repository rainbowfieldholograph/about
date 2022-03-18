import { FC, SVGProps } from 'react';

export interface ILinkData {
  title: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  linkTo: string;
}
