import React from 'react';
import cn from 'classnames';

type LinkProps = React.ComponentPropsWithoutRef<'a'>;

export const Link: React.FC<LinkProps> = ({ children, className, ...rest }) => {
  return (
    <a {...rest} className={cn(['text-sky-600 underline', className])}>
      {children}
    </a>
  );
};
