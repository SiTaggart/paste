import * as PropTypes from 'prop-types';

export type AnchorTabIndexes = 0 | -1;
export type AnchorTargets = '_self' | '_blank' | '_parent' | '_top';
export type AnchorVariants = 'default' | 'inverse';

export interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: NonNullable<React.ReactNode>;
  href: string;
  ref?: any;
  rel?: string;
  tabIndex?: AnchorTabIndexes;
  target?: AnchorTargets;
  variant?: AnchorVariants;
}

export const AnchorPropTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  rel: PropTypes.string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tabIndex: PropTypes.oneOf([0, -1]) as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']) as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variant: PropTypes.oneOf(['default', 'inverse']) as any,
};
