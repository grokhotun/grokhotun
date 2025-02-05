import React from 'react';
import cn from 'classnames';

type ParagraphProps = React.ComponentPropsWithoutRef<'p'>;

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <p {...rest} className={cn(['text-base/5', 'text-justify', className])}>
      {children}
    </p>
  );
};
