import React from 'react';
import cn from 'classnames';

type BoxProps = React.ComponentPropsWithoutRef<'div'>;

export const Box: React.FC<BoxProps> = ({ children, className, ...rest }) => {
  return (
    <div {...rest} className={cn([className])}>
      {children}
    </div>
  );
};
