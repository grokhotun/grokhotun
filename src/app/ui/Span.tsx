import React from 'react';
import cn from 'classnames';

type SpanProps = React.ComponentPropsWithoutRef<'span'>;

export const Span: React.FC<SpanProps> = ({ children, className, ...rest }) => {
  return (
    <span {...rest} className={cn([className])}>
      {children}
    </span>
  );
};
