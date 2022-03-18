import { AnchorHTMLAttributes, DetailedHTMLProps, FunctionComponent, SVGProps } from 'react';

export interface IconLinkProps
  extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}
