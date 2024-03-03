import React from 'react';
import cn from 'classnames';

type DividerProps = React.ComponentPropsWithoutRef<'hr'>;

export const Divider: React.FC<DividerProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <hr {...rest} className={cn('my-2 border-t-[0.25rem]', className)}>
      {children}
    </hr>
  );
};
